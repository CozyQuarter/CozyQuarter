/**
 * FAQ Component
 * 
 * This component provides a comprehensive FAQ and resources section for users to access valuable
 * information about RPI dormitories. It includes external resources, frequently asked questions
 * (FAQs), and collapsible sections for detailed answers. The component also features images and links
 * to external RPI resources, enhancing the user's understanding of dormitory-related topics.
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import dorm2 from '../../../images/dorm2.jpg';  // Make sure to import the image
import rpi_logo from '../../../images/rpi_logo.png'
import Collapsible from './Collapsible';
import './FAQ.css'



const FAQ = () => {

    return (
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
            <img src={dorm2} alt="Students in a dorm room" className="responsive-image"/>
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

            <Collapsible label='What is the difference between single, double and triple?'>
                This is the occupancy of the room. Single rooms only house one person, double rooms house two people
                (you will share the room with one roommate), and triple rooms house three people (you will share
                the room with two roommates).
            </Collapsible>

            <Collapsible label='What are the different room types?'>
                There are three different room types: Traditional, Suite, and Apartment.
                <p>
                    Traditional rooms have a floor bathroom shared between many dorm rooms, most likely the entire floor.
                </p>
                <p>
                    Suite rooms have bathrooms shared between rooms that are connected in a suite. This is more
                    of a private bathroom that will be shared between you and 1-5 other suitemates depending on the dorm.
                </p>
                <p>
                    Apartments have an open area with a living room and kitchen shared between multiple rooms.  They also
                    share a bathroom between those rooms similar to the suite option.
                </p>
                <p>
                    All rooms in apartments are singles. Rooms in suite and traditional dorms may be singles, doubles
                    or triples.
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