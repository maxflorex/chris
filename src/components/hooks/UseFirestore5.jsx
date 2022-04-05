import { onSnapshot, where, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { colRefArtwork } from '../../firebase/config';

const UseFirestore = (collection) => {
    const [docs5, setDocs5] = useState([]);

    // GET REAL TIME DATA - READ ELEMENTS
    useEffect(() => {
        const q = query(colRefArtwork, where('collection', '==', collection))
        const unsub = onSnapshot(q, (snapshot) => {
            let artwork = [];
            snapshot.docs.forEach((doc) => {
                artwork.push({ ...doc.data(), id: doc.id });
            });
            setDocs5(artwork);
        });

            return() => unsub();

    }, [collection]);

    return { docs5 };
};

export default UseFirestore;