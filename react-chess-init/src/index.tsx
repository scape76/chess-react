import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Chess, {loader as chessLoader} from './chess/Game';
import ErrorPage from "./error-page";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'chess',
                element: <Chess/>,
                loader: chessLoader
            },


        ]
    },
]);

ReactDOM.render(
    <RouterProvider router={router}></RouterProvider>,
  document.getElementById('root')
);

