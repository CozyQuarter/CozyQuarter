import React from 'react';
import dorm from '../images/dorm.jpg';  // Make sure to import the image

const Rules = () => {
    return (
        <div>
            <div className="header">

            </div>
            <div className="panels">
                <div className="left-panel">
                    <div className="custom-heading">
                        <b>Rules</b>
                    </div>
                    <p>
                    At CozyQuarter, we are committed to providing a platform for
                    honest and informative dorm reviews. To ensure a respectful and constructive community,
                    we've established the following guidelines for all users. Please follow these guidelines
                    when you post reviews or photos, and report any reviews or photos that violate them.
                    </p>
                </div>
                <div className="right-panel">
                    <img src={dorm} alt="Descriptive text" className="responsive-image" />
                </div>
            </div>
            <div className="left-panel">
            <ol>
                <li><b>No Hate Speech or Discrimination:</b> Do not post
                    reviews that contain hate speech, discrimination, or offensive content related
                    to race, religion, gender, sexual orientation, or any other protected category.</li>
                <li><b>No Personal Attacks:</b> Do not post reviews that contain personal attacks or defamatory
                    statements about individuals, including other users, residents, or staff members.</li>
                <li><b>No Inappropriate Content:</b> Do not post reviews that include
                    explicit or adult content, including text, images, or links.</li>
                <li><b>No False Information:</b> Reviews should be factually accurate and not contain false
                    information, including exaggerated claims, rumors, or misleading statements about a dorm.</li>
                <li><b>No Promotional or Spam Content:</b> Reviews should not be used for promotional purposes.
                    Do not post spam, advertisements, or self-promotion.</li>
                <li><b>No Plagiarism:</b> Reviews should be your own original content. Do not copy and paste
                    reviews from other sources.</li>
                <li><b>Respect Privacy:</b> Do not post private or personally identifiable information of
                    individuals, including full names, contact information, or other private data.</li>
                <li><b>Report Reviews:</b> Help us maintain a high standard by reporting reviews that
                    violate these rules.</li>
            </ol>
            </div>

            <div className="left-panel">
            <p>
            By following these guidelines, you contribute to a welcoming and informative community.
            Thank you for your cooperation!
            </p>
            <br></br>
            </div>
        </div>
    );
};

export default Rules;