import { onSnapshot, where, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { colRefArtwork } from '../../firebase/config';

const UseFirestore = (collection) => {
    const [docs8, setDocs8] = useState([]);

    // GET REAL TIME DATA - READ ELEMENTS
    useEffect(() => {
        const q = query(colRefArtwork, where('collection', '==', collection))
        const unsub = onSnapshot(q, (snapshot) => {
            let artwork = [];
            snapshot.docs.forEach((doc) => {
                artwork.push({ ...doc.data(), id: doc.id });
            });
            setDocs8(artwork);
        });

            return() => unsub();

    }, [collection]);

    return { docs8 };
};

export default UseFirestore;