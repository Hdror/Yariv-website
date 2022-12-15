import { Link } from "react-router-dom"

export function Header() {

    return (
        <header>
            <section className="header-container">
                <div className="logo-container">
                    <h1>LOGO</h1>
                </div>
                <div className="link-container">
                    <Link to='home-page' className="clean-link">
                        בית
                    </Link>
                    <Link to='wedding' className="clean-link">
                        חתונות
                    </Link>
                    <Link to='/' className="clean-link">
                        כנסים ואירועים
                    </Link>
                    <Link to='/' className="clean-link">
                        צור קשר
                    </Link>
                </div>
            </section>
        </header >
    )
}