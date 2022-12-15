import { Link } from "react-router-dom"

export function Header() {

    return (
        <header>
            <section className="header-container">
                <Link to='/' className="clean-link">
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

            </section>
        </header >
    )
}