import { Link, NavLink } from "react-router-dom"

export function Header() {

    return (
        <header>
            <section className="header-container">
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