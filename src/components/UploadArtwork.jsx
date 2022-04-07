import React, { useEffect, useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';
import { FiDownloadCloud } from 'react-icons/fi';
import ProgressBar from './ProgressBar';

const UploadArtwork = ({ setMyUrl, setImageUrl, imageUrl }) => {
    const [file, setFile] = useState(null);
    const [myProgress, setMyProgress] = useState(0);

    // UPLOAD FILES
    const uploadFiles = () => {
        document.getElementById('files').click();
    };

    // PREVIEW IMAGE UPLOADED
    const [selectedImage, setSelectedImage] = useState(undefined);

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
                setFile(file);
                setMyProgress(progress);
            },
            (error) => {
                console.log(error);
                setFile(null);
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
    let txt = myProgress !== 100 ? 'Upload Artwork' : 'Artwork Uploaded!';

    const fileMessage = `text-xl ${
        myProgress === 100 ? 'font-semibold text-slate-900' : 'text-slate-400'
    }`;

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    return (
        <div className="w-full px-16 pb-8">
            <div className="flex gap-4 justify-center content-center items-center">
                <h1 className={fileMessage}>{txt}</h1>
                <div className="bg-slate-300 hover:bg-slate-100 p-4 rounded-2xl cursor-pointer">
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
            {imageUrl !== undefined && (
                <div className="mt-16 flex flex-col items-center">
                    <img
                        src={imageUrl}
                        alt={selectedImage}
                        className="w-80 rounded-lg"
                    />
                    <h1 className="mt-8 text-xs">
                        {selectedImage === undefined ? '' : selectedImage.name}
                    </h1>
                </div>
            )}
            {imageUrl && (
                <ProgressBar
                    file={file}
                    setFile={setFile}
                    myProgress={myProgress}
                    setMyProgress={setMyProgress}
                />
            )}
        </div>
    );
};

export default UploadArtwork;
