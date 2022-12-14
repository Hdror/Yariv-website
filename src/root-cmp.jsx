import React from 'react';
import { Routes, Route } from 'react-router'
import { Header } from './cmps/header';
import routes from './routes'



export const RootCmp = () => {
    return (
        <>
            <Header />
            <div className="app-container">
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                </Routes>
            </div>
        </>
    )
}