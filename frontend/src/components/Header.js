import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header>
            <div className = "container">
                <Link to = "/">
                    <h1>CozyQuarter</h1>
                    <p><h3>Elevating RPI Dorm Choices</h3></p>
                </Link>
            </div>
        </header>
    )
}

export default Header