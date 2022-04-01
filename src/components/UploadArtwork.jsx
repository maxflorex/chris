import React, { useEffect, useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';
import { FiDownloadCloud } from 'react-icons/fi';

const UploadArtwork = ({setMyUrl}) => {
    // UPLOAD FILES
    const uploadFiles = () => {
        document.getElementById('files').click();
    };

    // PREVIEW IMAGE UPLOADED
    const [selectedImage, setSelectedImage] = useState(undefined);
    const [imageUrl, setImageUrl] = useState(undefined);

    // GET IMAGE PREVIEW & TEMPORARY URL BASE ON FILE UPLOADED
    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    // FIREBASE STORAGE
    const upload = (e) => {
        let file = e.target.files[0];
        // CREATE REF
        let fileRef = ref(storage, file.name);
        // UPLOAD TASK
        const uploadTask = uploadBytesResumable(fileRef, file);
        // TRACK PROGRESS
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // GET TASKS PROGRESS
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                console.log(error);
            },
            () => {
                // UPLOAD COMPLETE - WE CAN GET URL NOW
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setMyUrl(downloadURL);
                });
            }
        );
        // PREV FN
        setSelectedImage(file);
    };

    // MESSAGE BESIDE THE UPLOAD BTN
    let txt =
        selectedImage === undefined ? 'Upload Artwork' : 'Artwork Uploaded!';


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    return (
        <div>
            <div className="flex gap-4 justify-center content-center items-center">
                <h1 className="">{txt}</h1>
                <div className="bg-slate-300 hover:bg-slate-100  p-4 rounded-2xl cursor-pointer">
                    <FiDownloadCloud
                        onClick={uploadFiles}
                        className="text-4xl"
                    />
                    <input
                        type="file"
                        id="files"
                        name="files"
                        accept="image/png, image/jpeg"
                        className="hidden"
                        onChange={upload}
                    />
                </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
                <img
                    src={imageUrl}
                    alt={selectedImage}
                    className="w-80 rounded-lg"
                />
                <h1 className="text-xs mt-8">
                    {selectedImage === undefined ? '' : selectedImage.name}
                </h1>
            </div>
        </div>
    );
};

export default UploadArtwork;
