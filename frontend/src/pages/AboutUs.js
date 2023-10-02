import React from 'react';
import dorm2 from './dorm2.jpg';  // Make sure to import the image

const AboutUs = () => {
    return (
        <div>
        <div className="panels">
            <div className="left-panel">
                <div className="custom-heading">
                    <b>About Us</b>
                </div>
                <p>
                    CozyQuarter is a hub for RPI students and past residents to share 
                    and explore feedback on on-campus dorms. By fostering transparent communication, 
                    it provides a platform for current and prospective students to navigate through 
                    dormitory options. Through candid reviews, visuals, and shared experiences, 
                    individuals can make informed housing choices for a better college living experience.
                </p>
                <p>
                    CozyQuarter is being developed as a project for Software Design & Documentation in Fall 2023, but we hope it will
                    continue to be used by RPI students in future semesters.
                </p>
            </div>
            <div className="right-panel">
                <img src={dorm2} alt="Students in a dorm room" className="responsive-image"/>
                
            </div>
        </div>

        <div className="panels">
            <div className="left-panel2">
            <div className="custom-heading2">
                    <b>Meet the Team</b>
                </div>
                
                <p><b>Annie Xu</b></p>
                <p><i>Product Owner</i></p>
                <p>Annie is a senior majoring in Computer Systems Engineering and Computer Science
                    at RPI. Annie has completed all the required core computer science courses and
                    is currently enrolled in Database Systems this semester. Beyond academics, Annie
                    has served as a residential assistant for two semesters, granting her valuable
                    insights into student's dorm experience. Her role also offers a direct connection
                    to potential users who might be interested in reviewing CozyQuarter.</p>


                <p><b> Brandon Balchand</b></p>
                <p><i>Developer</i></p>
                <p> Brandon is a senior majoring in Computer Science at RPI. He has prior experience
                    with programming throughout various classes he has taken in the past semesters.
                    He has some project management experience with previous research and is excited
                    to be working on CozyQuarter to develop a website that will be beneficial to
                    students at RPI. Brandon is also hoping to gain new skills in full stack
                    development and deliver a good product that he would use moving forward. </p>

                <p><b>Jason Chen</b></p>
                <p><i>Developer</i></p>
                <p> Jason is a junior pursuing a Bachelor of Science in Computer Science at RPI.
                    Jason, with open source project experience, brings valuable backend skills
                    from RPI classes and internships which he intends to use to contribute to the
                    success of CozyQuarter. Jason looks forward to acquiring more full stack
                    development skills to enhance his post-RPI career. Jason also has firsthand
                    experience of the challenges and difficulties associated with choosing housing
                    as a freshman and sophomore at RPI.</p>

                <p><b>Emma Clements</b></p>
                <p><i>Developer</i></p>
                <p>Emma is a senior majoring in Computer Science and minoring in Philosophy at
                    RPI and graduating in December. She is currently taking Database Systems
                    and is a course assistant for Computer Science 1, a class composed of mostly
                    freshmen who might benefit from using CozyQuarter. During her freshman and
                    sophomore years at RPI, Emma experienced the difficulties of choosing housing
                    at RPI given limited information. Emma looks forward to building new skills
                    as a software engineer and gaining experience building a quality product in
                    a team environment.</p>

                <p><b>Ethan Zhang</b></p>
                <p><i>Developer</i></p>
                <p>Ethan is currently a junior studying computer science at RPI. He brings
                    prior experience in web development and software testing from working on
                    open source projects, computer science courses, and internships. As a developer,
                    Ethan is particularly interested in web application development and user
                    experience optimization. He aspires to use his technical skills to contribute
                    positively to his student community and explore opportunities for creative
                    problem-solving in the field of software design. Ethan wishes he had more
                    detailed information as an incoming freshman and is passionate about creating
                    an easier pre-dorm experience.</p>
            </div>
        </div>
    </div>
    )
}

export default AboutUs