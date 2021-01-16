import React, { useState } from 'react';

const UploadedImage = () => {

    // hold the uploadedImage
    const [uploadImage, setUploadImage] = useState(null);


    // whole function is part of UploadedImage
    const showUploadedImage = () => {
        // add useEffect hook (componentDidMount equivalent) to check DB if there is an image already
        console.log(uploadImage)
        if (uploadImage === null) {
            return (
                <img src="/assets/images/placeholder.png" alt="placeholder profile pic" />
            )
        } else {
            console.log(uploadImage)
            return <img src={uploadImage} alt="selected profile pic" />;
        }
    }

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    const getImage = () => {
        // change image id to the user id of the profile in question, current id of object is a placeholder
        fetch('/api/image/ObjectId("5ffd0872959de44ce0ec52a4")')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                var base64Flag = 'data:image/jpeg;base64,'
                var imageStr = arrayBufferToBase64(data.img.data.data);
                setUploadImage(base64Flag + imageStr)
            })
    }


    return (
        <div>
            <h2>UploadedImage</h2>
            <button onClick={getImage}>Upload the image</button>
            {showUploadedImage}
        </div>
    )
};

export default UploadedImage;