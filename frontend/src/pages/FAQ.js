import { Link } from 'react-router-dom';
import dorm3 from './dorm3.jpg';  // Make sure to import the image
import rpi_logo from './rpi_logo.png'
import Collapsible from './components/Collapsible';

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
        <div>
        <div className="panels">
        <div className="left-panel">
            <div className="custom-heading">
                <b>Resources and FAQ</b>
            </div>
            <p>
            Welcome to the comprehensive Resources and FAQ section, designed to enhance your dormitory experience.
            This page provides links to resources from RPI and answers some common dorm questions.
            </p>
        </div>
        <div className="right-panel">
            <img src={dorm3} alt="Students in a dorm room" className="responsive-image"/>
        </div>
        </div>

        <div className="panels">
        <div className="left-panel">
            <div className="custom-heading2">
                <b>External Resources</b>
            </div>

            <p> For RPI's official information about dorms, visit the <Link to = "https://sll.rpi.edu/">
                Office of Student Living and Learning</Link> (SLL).</p>

            <p> <Link to = "https://sll.rpi.edu/housing-comparison"> Housing Comparison</Link>:
            SLL provides a detailed housing
            comparison tool to view information about dorms such as room types and amenities</p>

            <p> <Link to = "https://rpi.sodexomyway.com/my-meal-plan"> Meal Plans</Link>:
            Sodexo provides a list of all meal plans available to RPI students.</p>

            <p> <Link to = "https://sll.rpi.edu/residential-commons/residential-commons-housing-rates">
            Housing Rates</Link>: SLL provides a list of dorm housing prices by room type. </p>
        </div>

        <div className="right-panel">
            <img src={rpi_logo} alt="RPI Logo" className="responsive-image"/>
        </div>
        </div>

        <div className="panels">
        <div className="left-panel">
            <div className="custom-heading2">
                <b>Frequently Asked Questions (FAQ)</b>
            </div>

            <Collapsible label='Are on-campus housing requirements mandatory?'>
                Yes, RPI students are required to live on campus as freshmen,
                sophomores, and during Arch summer term. Students with financial or medical
                circumstances can request a housing waiver. More info at <Link to =
                "https://sll.rpi.edu/residential-commons/housing-requirement">Student Living
                and Learning</Link>.
            </Collapsible>

            <br></br>

            <Collapsible label='What is the process for applying for on-campus housing?'>
                You can apply for on-campus housing through SLL at this
                link: <Link to = "https://sll.rpi.edu/apply">Housing Application</Link>.
            </Collapsible>

            <br></br>

            <Collapsible label='What is included in the room and what will I need to bring?'>
                SLL provides a short recommended packing list specific to RPI: <Link to =
                "https://sll.rpi.edu/packinglist">Packing List</Link>.
                <p>For longer packing lists
                with more detailed tips on living in a dorm for the first time, there are many
                helpful online resources, such as this article: <Link to = 
                "https://blog.prepscholar.com/college-packing-list">The Ultimate College
                Packing List</Link>.</p>
                <p> SLL also provides a list of prohibited items. Be careful not to bring these
                    to your dorm, because they can be confiscated or removed: <Link to =
                    "https://sll.rpi.edu/prohibited-items">Prohibited Items</Link>.
                </p>
            </Collapsible>

            <br></br>
            <br></br>
        </div>
        </div>
        </div>
    )
}

export default FAQ