import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'

import { toggleMiniHeader } from "../store/header/header.actions"


export const _Header = (props) => {

    const [isMiniHeader, setIsMiniHeader] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", checkScrollY)
        return () => {
            window.removeEventListener("scroll", checkScrollY);
        }
    })

    const checkScrollY = ({ target }) => {
        const { scrollTop } = target.scrollingElement
        if (scrollTop > 50 && isMiniHeader || scrollTop < 50 && !isMiniHeader) return
        if (scrollTop > 50) {
            setIsMiniHeader(true)
            props.toggleMiniHeader(true)
        } else {
            setIsMiniHeader(false)
            props.toggleMiniHeader(false)
        }
    }

    return (
        <header>
            <section className={isMiniHeader ? "header-container mini-header" : "header-container"}>
                <div className="logo-container">
                    <h1>LOGO</h1>
                </div>
                <div className="link-container">
                    <NavLink to='home-page' className={({ isActive }) =>
                        isActive ? "active clean-link" : "clean-link"}>
                        בית
                        <div className="point"></div>
                    </NavLink>
                    <NavLink to='wedding' className={({ isActive }) =>
                        isActive ? "active clean-link" : "clean-link"}>
                        חתונות
                        <div className="point"></div>
                    </NavLink>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? "active clean-link" : "clean-link"}>
                        כנסים ואירועים
                        <div className="point"></div>
                    </NavLink>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? "active clean-link" : "clean-link"}>
                        צור קשר
                        <div className="point"></div>
                    </NavLink>
                </div>
            </section>
        </header >
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

export const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Header)