import React, { useEffect, createContext, useState } from 'react';
import { loginRequest } from "./authConfig";
import { callMsGraph } from "./graph";
import { Message, toaster } from 'rsuite';

import isApprover from "./functions/isApprover";

export const AuthContext = createContext();

export const AuthProvider = ({ children, msalInstance }) => {
    const [userData, setUserData] = useState({});
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        if (accounts.length > 0) {
            const fetchUserData = async () => {
                try {
                    const response = await msalInstance.acquireTokenSilent({
                        ...loginRequest,
                        account: accounts[0],
                    });
                    const graphResponse = await callMsGraph(response.accessToken);
                    const isApproverResult = await isApprover(
                        Message,
                        toaster,
                        graphResponse.userPrincipalName
                    );
                    const isapprover = isApproverResult > 0;

                    setUserData({
                        displayName: graphResponse.displayName,
                        givenName: graphResponse.givenName,
                        surname: graphResponse.surname,
                        email: graphResponse.userPrincipalName,
                        jobTitle: graphResponse.jobTitle,
                        isapprover: isapprover
                    });
                } catch (error) {
                    console.log(error);
                    // Handle token expiration and force the user to log in again
                    if (error.name === "InteractionRequiredAuthError") {
                        msalInstance.loginRedirect(loginRequest);
                    }
                }
            };

            fetchUserData();
        }
    }, [msalInstance, accounts]);

    return (
        <AuthContext.Provider value={{ userData, setAccounts }}>
            {children}
        </AuthContext.Provider>
    );
};
