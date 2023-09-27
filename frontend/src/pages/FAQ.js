import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div className = "FAQ">
            <h1>Resources and FAQ</h1>
            <h3>Official RPI Dorm Website</h3>
            <p>
                You can find the official RPI dorm listing
                at <Link to = "https://sll.rpi.edu/housing-comparison">
                Student Living and Learning
                </Link>
            </p>
        </div>
    )
}

export default FAQ