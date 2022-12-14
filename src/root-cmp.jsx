import React from 'react';
import { Routes, Route } from 'react-router'
import routes from './routes'



export const RootCmp = () => {
    return (
        <>
            <div className="app-container">
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                </Routes>
            </div>
        </>
    )
}