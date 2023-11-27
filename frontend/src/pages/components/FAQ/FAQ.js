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
                <b>Frequently Asked Questions (FAQ)</b>
            </div>
            <p>
            Welcome to the comprehensive FAQ page, designed to inform your on-campus housing experience.
            This page answers some common dorm questions and provides links to external resources.
            </p>
            <p>CozyQuarter is not affiliated with RPI and is not guaranteed to be up to date. To see
                RPI's official information about dorms, visit the <Link to = "https://sll.rpi.edu/">
                Office of Student Living and Learning</Link> (SLL) website.
            </p>
        </div>
        <div className="right-panel">
            <img src={dorm2} alt="Students in a dorm room" className="responsive-image"/>
        </div>
        </div>

        <div className="panels">
        <div className="left-panel">

            <div className="custom-heading2">
                <b>About CozyQuarter</b>
            </div>
            <Collapsible label='What is CozyQuarter?'>
                CozyQuarter is a dorm review website developed by RPI students, for RPI students.
                It provides a space for RPI students and alumni to review dorms to inform future
                generations of students.
            </Collapsible>
            <Collapsible label='How do I review a dorm?'>
                To review a dorm, you must first create an account. Go to the Sign In page and enter your
                name, email, and password. Once you are logged in, you can go to the page for any dorm
                and write a review. Make sure you follow our <Link to=
                "/Rules/"onClick={() => { window.scroll(0, 0);}}>guidelines</Link> for posting reviews.
            </Collapsible>
            <Collapsible label='Can I delete my review after submitting it?'>
                Yes, you can delete your reviews. First, make sure you're logged in. Then go to your profile page
                where you will see a list of all the reviews you've posted. Then delete the review you want
                to remove. It will no longer appear on the dorm page.
            </Collapsible>

            <div className="custom-heading2">
                <b>Housing Application and Pricing</b>
            </div>

            <Collapsible label='How much does on-campus housing cost?'>
                To view prices for each dorm, visit the page for that dorm on the CozyQuarter website, or visit
                the <Link to="/AllDorms/"onClick={() => { window.scroll(0, 0);}}> All Dorms</Link> page
                to see a comprehensive list.
                <p>
                    For official pricing information from RPI, SLL provides a list of <Link to =
                    "https://sll.rpi.edu/residential-commons/residential-commons-housing-rates"> 
                    dorm prices</Link> by room type.
                </p>
            </Collapsible>

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
                <p>
                    RPI will send you an email with more details when the housing application
                    opens each semester.
                </p>
            </Collapsible>

            <div className="custom-heading2">
                <b>Comparing Dorms</b>
            </div>

            <Collapsible label='How do I decide what dorm to live in?'>
                To make an informed decision about what dorm to live in, CozyQuarter is a great
                resource! You can view the page of any dorm and see reviews from your fellow RPI students
                and alumni, as well as general information about that dorm such as pricing, room types,
                and more.
                <p>
                    RPI also provides a housing comparison tool to compare different dorms: <Link to =
                    "https://sll.rpi.edu/housing-comparison">Housing Comparison</Link>.
                </p>
            </Collapsible>

            <Collapsible label='What is the difference between Single, Double, and Triple?'>
                This is the occupancy of the room. Single rooms only house one person, double rooms house two people
                (you will share the room with one roommate), and triple rooms house three people (you will share
                the room with two roommates). Usually single rooms are the most expensive, and triple rooms are the
                least expensive.
            </Collapsible>

            <Collapsible label='What is the difference between Traditional, Suite, and Apartment?'>
                There are three different dorm types: Traditional, Suite, and Apartment. Some dorms have both suite and
                traditional options.
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

            <div className="custom-heading2">
                <b>Dorm Life</b>
            </div>

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
            <Collapsible label='How are roommates assigned? Do I get to choose my roommate?'>
                You can select a preferred roommate on the housing application, although
                you are not guaranteed to be assigned a room with them. If you don't have a preferred
                roommate, you can fill out a roommate matching survey during the housing application. Then
                you will be assigned a roommate based on your responses to the survey.
            </Collapsible>
            <Collapsible label='What should I do if I have issues with my roommate?'>
                You can start by having a conversation with your roommate about your concerns, and make
                sure to set boundaries. If the issues persist, you can contact your residential assistant.
                They can intervene and mediate the situation, and possibly escalate to a room change
                if necessary.
            </Collapsible>

            <div className="custom-heading2">
                <b>Related Topics</b>
            </div>

            <Collapsible label='Am I required to have a meal plan at RPI?'>
                Yes, if you live in on-campus housing, you are required purchase a meal plan, ranging from 12
                to unlimited meals per week.
                <p>
                    You can find more info about meal plans at <Link to =
                    "https://rpi.sodexomyway.com/my-meal-plan">Sodexo</Link>.
                </p>
            </Collapsible>
            
            <p>
                Do you want to add to the FAQ? Is there a question we didn't answer?
            </p>
            <p>
                Feel free to email the
                CozyQuarter team at <a href = "mailto: cozyquarterco@gmail.com">cozyquarterco@gmail.com</a>! 
                We welcome your suggestions and feedback.
            </p>

            <br></br>
            <br></br>
        </div>
        </div>
        </div>
    )
}

export default FAQ