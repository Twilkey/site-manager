import { Link } from "react-router-dom";

const NoMatch = (props) => {
    return (
        <>
            <div className='page-title'>
                <h1>Nothing to see here!</h1>
            </div>
            <div className='page-box'>
                <Link to="/">Go to the home page</Link>
            </div>
        </>
    );
}

export default NoMatch;