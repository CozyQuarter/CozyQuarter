import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewPhotos() {
    const [images, setImages] = useState([]);
    const { dorm_id } = useParams();
    console.log("inside viewPhotos dormID is ", dorm_id);

    useEffect(() => {
        const API_BASE_URL = process.env.NODE_ENV === 'production' ?
            'https://cozyquarter-9251ad96e93b.herokuapp.com' :
            'http://localhost:8000';

        // Function to fetch images based on dorm ID
        const fetchImages = async () => {


            const apiUrl = `${API_BASE_URL}/api/getPhotos/${dorm_id}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

          
                setImages(data.data)
            
        };

        // Fetch images when the component mounts
        fetchImages();
    }, [dorm_id]);

    return (
        <div className="photo-container">
            <h2>Photos for Dorm ID: {dorm_id}</h2>
            <div className="image-grid">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index}`} className="photo" />
                ))}
            </div>
        </div>
    );
}

export default ViewPhotos;
