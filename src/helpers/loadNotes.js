
import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";



export const loadNotes = async( uid = '' ) => {
    if( !uid ) throw new Error('El UID del usurio no existe');

    // const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` );
    const collectionRef = collection( FirebaseDB, `${ uid }id-user-1/journal/notes` );
    const querySnapshot = await getDocs( collectionRef );
    
    // console.log(querySnapshot.size);
    // console.log(querySnapshot);

    const notes = [];

    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        notes.push({ id: doc.id, ...doc.data() })
    });
    
    // console.log(notes);
    return notes;
};
