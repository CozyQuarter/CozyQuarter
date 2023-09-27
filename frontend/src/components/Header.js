import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header>
            <div className = "container">
                <Link to = "/">
                    <h1>CozyQuarter</h1>
                    <p><h3>Elevating RPI Dorm Choices! </h3></p>
                </Link>
                <h3> Freshman </h3>
                <h3> Sophomore </h3>
                <h3> Junior/Senior/Co-Term </h3>
                <Link to = "/FAQ/">
                    <h3> FAQ </h3>
                </Link>
                <Link to = "/AboutUs/">
                    <h3> About Us </h3>
                </Link>
            </div>
        </header>
    )
}

export default Header