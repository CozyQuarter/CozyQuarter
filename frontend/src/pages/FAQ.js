import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        /*
        <div className = "FAQ">
            <h1>Resources and FAQ</h1>
            <h3>Official RPI Dorm Website</h3>
            <p>
                You can find the official RPI dorm listing
                at <Link to = "https://sll.rpi.edu/housing-comparison">
                Student Living and Learning
                </Link>
            </p>
        </div>*/
        <div className="panels">
            <div className="left-panel2">
            <div className="custom-heading">
                <b>Resources and FAQ</b>
            </div>
            <p></p>
            <div className="custom-heading2">
                <b>External Resources</b>
            </div>

            <p> <Link to = "https://sll.rpi.edu/housing-comparison"> Housing Comparison</Link>:
            Student Living and Learning (SLL) at RPI provides a detailed housing
            comparison tool to view information about dorms such as room types and amenities</p>

            <p> <Link to = "https://rpi.sodexomyway.com/my-meal-plan"> Meal Plans</Link>:
            Sodexo provides a list of all meal plans available to RPI students.</p>

            <p> <Link to = "https://sll.rpi.edu/residential-commons/residential-commons-housing-rates">
            Housing Rates</Link>: SLL provides a list of dorm housing prices by room type. </p>

            <div className="custom-heading2">
                <b>Frequently Asked Questions (FAQ)</b>
            </div>

            <p>Are on-campus housing requirements mandatory?</p>
                
            </div>
        </div>
    )
}

export default FAQ