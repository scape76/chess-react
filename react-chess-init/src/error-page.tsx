import React from 'react';
import {useRouteError} from "react-router-dom";


const ErrorPage = () => {
    const error: any = useRouteError();

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpecred error has occured</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;