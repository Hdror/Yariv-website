import { Routes, Route } from 'react-router'
import { Header } from './cmps/header'
import routes from './routes'
import { React, useEffect } from "react"
import { useLocation } from "react-router-dom"


export const RootCmp = () => {

    const routeLocation = useLocation()
    useEffect(() => {
        document.title = `YK-Photo-${routeLocation.pathname.substring(1,routeLocation.pathname.length)}`
    }, [routeLocation.pathname])

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