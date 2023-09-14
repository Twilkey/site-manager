import React, { lazy, Suspense, useEffect, useContext } from "react";
import { MsalProvider, MsalConsumer } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './AuthContext';

import "rsuite/dist/rsuite.min.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-tabs/style/react-tabs.css";
import "./App.min.css";

import handleLocalSettings from "./functions/handleLocalSettings";

const Layout = lazy(() => import("./pages/Layout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const PostList = lazy(() => import("./pages/PostList"));
const Post = lazy(() => import("./pages/Post"));
const PostAdd = lazy(() => import("./pages/PostAdd"));
const RegistrarList = lazy(() => import("./pages/RegistrarList"));
const RegistrarAdd = lazy(() => import("./pages/RegistrarAdd"));
const DomainList = lazy(() => import("./pages/DomainList"));
const DomainAdd = lazy(() => import("./pages/DomainAdd"));
const SiteList = lazy(() => import("./pages/SiteList"));
const Site = lazy(() => import("./pages/Site"));
const SiteAdd = lazy(() => import("./pages/SiteAdd"));
const ThemeList = lazy(() => import("./pages/ThemeList"));
const Theme = lazy(() => import("./pages/Theme"));
const PluginList = lazy(() => import("./pages/PluginList"));
const Plugin = lazy(() => import("./pages/Plugin"));
const SiteUserList = lazy(() => import("./pages/SiteUserList"));
const SiteUsers = lazy(() => import("./pages/SiteUsers"));
const UserList = lazy(() => import("./pages/UserList"));
const UsersAdd = lazy(() => import("./pages/UsersAdd"));
const Misc = lazy(() => import("./pages/Misc"));
const MiscNonCompanyUsers = lazy(() => import("./pages/MiscNonCompanyUsers"));
const Scripts = lazy(() => import("./pages/Scripts"));
const NoMatch = lazy(() => import("./pages/NoMatch"));
const SearchUsers = lazy(() => import("./pages/SearchUsers"));
const GithubTeams = lazy(() => import("./pages/GithubTeams"));
const RequestList = lazy(() => import("./pages/RequestList"));
const RequestAddUser = lazy(() => import("./requests/RequestAddUser/RequestAddUser"));

const AppContent = (props) => {
    const { setAccounts } = useContext(AuthContext);

	useEffect(() => {
		if (props.accounts.length === 0) {
			return null;
		}
        setAccounts(props.accounts);
    });
	
	if (props.accounts.length === 0) {
		return null;
	}

	return (
		<div className="App">
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route element={<Layout toggleDarkmode={props.toggleDarkmode} />}>
						<Route path="/dashboard" element={<Dashboard />} />

						<Route path="/post/list" element={<PostList />} />
						<Route path="/post/add" element={<PostAdd />} />
						<Route path="/post/edit/:id" element={<PostAdd />} />
						<Route path="/post/:id" element={<Post />} />

						<Route path="/domain/registrar/list/" element={<RegistrarList />} />
						<Route path="/domain/registrar/add/" element={<RegistrarAdd />} />
						<Route path="/domain/registrar/edit/:id" element={<RegistrarAdd />} />
						<Route path="/domain/list/:registrar?" element={<DomainList />} />
						<Route path="/domain/add/" element={<DomainAdd />} />
						<Route path="/domain/add/:registrar" element={<DomainAdd />} />
						<Route path="/domain/edit/:id" element={<DomainAdd />} />

						<Route path="/site/list/:domain?" element={<SiteList />} />
						<Route path="/site/list" element={<SiteList />} />
						<Route path="/site/add" element={<SiteAdd />} />
						<Route path="/site/edit/:id" element={<SiteAdd />} />
						<Route path="/site/:id" element={<Site />} />

						<Route path="/site/theme/:name" element={<Theme />} />
						<Route path="/site/theme/list" element={<ThemeList />} />

						<Route path="/site/plugin/:name" element={<Plugin />} />
						<Route path="/site/plugin/list" element={<PluginList />} />

						<Route path="/site/user/list" element={<SiteUserList />} />
						<Route path="/site/user/:email" element={<SiteUsers />} />

						<Route path="/user/list" element={<UserList />} />
						<Route path="/user/add" element={<UsersAdd />} />
						<Route path="/user/edit/:id" element={<UsersAdd />} />

						<Route path="/request/list" element={<RequestList />} />
						<Route path="/request/add/user" element={<RequestAddUser />} />
						<Route path="/request/edit/user/:id" element={<RequestAddUser />} />

						<Route path="/github/teams/:name" element={<GithubTeams />} />

						<Route path="/misc" element={<Misc />} />
						<Route path="/misc/non-company-users" element={<MiscNonCompanyUsers />} />
						<Route path="/misc/scripts" element={<Scripts />} />

						<Route path="/search/users" element={<SearchUsers />} />

						<Route path="*" element={<NoMatch />} />
					</Route>
					<Route path="/" element={<Navigate replace to="/dashboard" />} ></Route>
				</Routes>
			</Suspense>
		</div>
	);
};

class App extends React.Component {
	constructor(props) {
		super(props);

		const getlocalSettings = localStorage.getItem("localSettings");
		const localSettings = JSON.parse(getlocalSettings) || {};

		this.state = {
			darkCSS: localSettings && localSettings.darkmode ? true : false,
		};

		if (localSettings && localSettings.darkmode) {
			document.body.classList.add("darkmode");
		}
	}

	toggleDarkmode = (event) => {
		let darkmode = false;
		if (event.target.checked) {
			this.setState((state) => ({ darkCSS: true }));
			document.body.classList.add("darkmode");
			darkmode = true;
		} else {
			this.setState((state) => ({ darkCSS: false }));
			document.body.classList.remove("darkmode");
			darkmode = false;
		}
		handleLocalSettings("darkmode", darkmode);
	};

	render() {
		return (
			<>
				<MsalProvider instance={this.props.msalInstance}>
					<MsalConsumer>
						{(context) => {
							const { instance, accounts } = context;

							if (accounts.length === 0) {
								instance.loginRedirect(loginRequest).catch((e) => {
									console.log(e);
								});
								return null;
							}

							return <AppContent accounts={accounts} toggleDarkmode={this.toggleDarkmode} />;
						}}
					</MsalConsumer>
				</MsalProvider>
				<AppContent toggleDarkmode={this.toggleDarkmode} />
			</>
		);
	}
}

export default App;
