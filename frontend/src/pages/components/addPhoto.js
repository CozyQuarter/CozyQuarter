import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useParams, useNavigate } from 'react-router-dom';
import './addPhoto.css';

function ImageUpload() {
    const [allImage, setAllImage] = useState([]);

    const [image, setImage] = useState("");
    const { currentUser } = useAuth();
    const { dorm_id } = useParams();
    console.log('Received dormId:', dorm_id); // Add this line to log dormId
    const navigate = useNavigate();


    function covertToBase64(e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result); //base64encoded string  
            setImage(reader.result);
        };
        reader.onerror = error => {
            console.log("Error: ", error);
        };
    }
      // Function to handle dropping files
      function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        const files = [...e.dataTransfer.files];
        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                const base64String = reader.result;
                // Add the base64String to the state or perform other actions
                console.log('Base64 encoded image:', base64String);
            };

            reader.readAsDataURL(file);
        });
    }



    const apiUrl = process.env.NODE_ENV === 'production'
        ? 'https://cozyquarter-9251ad96e93b.herokuapp.com/api/uploadPhoto' // Replace with your hosted domain URL
        : 'http://localhost:8000/api/uploadPhoto'; // Localhost URL
    function uploadImage() {
        fetch(apiUrl, {
            method: "POST",
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                base64: image,
                userEmail: currentUser.email,
                dormName: dorm_id,
            })
        })
            .then((response) => {
                if (response.ok) {
                    navigate(-1);
                    return response.json();
                 
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            })
            .then((data) => {
                // Handle success
                console.log('Photo uploaded successfully', data);
                // navigate('/ReviewPage/${dorm_id}');


            })
            .catch((error) => {
                // Handle error
                console.error('Error submitting review:', error.message);
                console.error('current dorm id', dorm_id);
                // console.error('Error response:', error.response); // Log the error response if available

            });
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner" style={{ width: "auto" }}>
                <div
                    className="drag-drop-section"
                    onDrop={handleDrop}
                    onDragOver={e => e.preventDefault()}
                >
                    Drag & Drop Images Here<br />
                    or<br />
                    <input
                        accept="image/*"
                        type="file"
                        onChange={covertToBase64}
                    />
                    {image === "" || image === null ? "" : <img width={200} height={200} src={image} alt="Uploaded" />}
                </div>
                <button className="upload-button" onClick={uploadImage}>Upload</button>
                <br />
                {allImage.map(data => {
                    return (
                        <img width={100} height={100} src={data.image} alt="Uploaded" />
                    );
                })}
            </div>
        </div>
    );
}

export default ImageUpload;



