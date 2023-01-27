import { Routes, Route } from 'react-router'
import routes from './routes'
import { connect } from 'react-redux'

import { React, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { toggleMiniHeader } from './store/header/header.actions'
import { Header } from './cmps/header'


export const _RootCmp = (props) => {

    const routeLocation = useLocation()
    useEffect(() => {
        document.title = `YK-Photo-${routeLocation.pathname.substring(1, routeLocation.pathname.length)}`
    }, [routeLocation.pathname])

    return (
        <>
            <Header />
            <div className={props.isMiniHeader ? "app-container mini-header-mode" : "app-container"}>
                <Routes>
                    {routes.map(route => <Route key={route.path}  element={route.component} path={route.path} />)}
                </Routes>
            </div>
        </>
    )
}


function mapStateToProps(state) {
    return {
        isMiniHeader: state.headerModule.isMiniHeader
    }
}

const mapDispatchToProps = {
    toggleMiniHeader
}

export const RootCmp = connect(
    mapStateToProps,
    mapDispatchToProps
)(_RootCmp)