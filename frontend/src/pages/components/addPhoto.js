import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useParams, useNavigate } from 'react-router-dom';

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
    // useEffect(() => {
    //     getImage()
    // }, [])

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
                    return response.json();
                    navigate(-1);
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
    // function getImage() {
    //     fetch("http://localhost:5000/get-image", {
    //         method: "GET",
    //     }).then((res) => res.json()).then((data) => {
    //         console.log(data)
    //         setAllImage(data.data)
    //     })
    // }
    return (
        <div className="auth-wrapper" >
            <div className="auth-inner" style={{ width: "auto" }}>
                Let's Upload Image<br />
                <input
                    accept="image/*"
                    type="file"
                    onChange={covertToBase64}
                />
                {image == "" || image == null ? "" : <img width={200} height={200} src={image} />}
                <button onClick={uploadImage}>Upload</button>
                <br />
                {allImage.map(data => {
                    return (
                        <img width={100} height={100} src={data.image} />

                    )
                })}

            </div>

        </div>
    )
}

export default ImageUpload;










// import React from 'react';
// import './addPhoto.css';
// import axios from 'axios';

// const AddPhotoPage = () => {
//   const handlePhotoUpload = async (event) => {
//     const files = event.target.files;
//     const formData = new FormData();
//     formData.append('photo', files[0]); // Assuming only one file is selected
//     formData.append('dormId', 'yourDormId'); // Add the dorm ID here
//     formData.append('userId', 'yourUserId'); // Add the user ID here

//     try {
//       const apiUrl = process.env.NODE_ENV === 'production'
//         ? 'https://your-hosted-domain.com/api/uploadPhoto' // Replace with your hosted domain URL
//         : 'http://localhost:8000/api/uploadPhoto'; // Localhost URL

//       const response = await axios.post(apiUrl, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.status === 200) {
//         console.log('Photo uploaded successfully');
//         // Handle success: display a message, update UI, etc.
//       }
//     } catch (error) {
//       console.error('Error uploading photo:', error);
//       // Handle error: display an error message, etc.
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     // Handle dragged files being over the drop area
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const files = event.dataTransfer.files;
//     // Handle dropped files
//     handlePhotoUpload({ target: { files } }); // Call handlePhotoUpload with dropped files
//   };

//   return (
//     <div className="add-photo-page">
//       <h2>Add Photo</h2>
//       <input type="file" onChange={handlePhotoUpload} multiple />

//       <div className="drag-drop-area" onDragOver={handleDragOver} onDrop={handleDrop}>
//         <p>Drag and drop photos here</p>
//         {/* Additional logic for drag-and-drop functionality */}
//       </div>
//     </div>
//   );
// };

// export default AddPhotoPage;
