
import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";



export const loadNotes = async( uid = '' ) => {
    if( !uid ) throw new Error('El UID del usurio no existe');

    const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` );
    const querySnapshot = await getDocs( collectionRef );

    const notes = [];

    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log('Holaaaaaaaaaa');
        console.log(doc.id, " => ", doc.data());


        notes.push({ id: doc.id, ...doc.data() })
    });
    
    console.log(notes);
    return notes;
}