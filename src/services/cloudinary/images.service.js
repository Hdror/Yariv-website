import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


export async function getAllImages() {

    const firebaseConfig = {
        apiKey: "AIzaSyDb_pcs7-fG5w_hUZ0aVyoYsc-ZBw2AoIE",
        authDomain: "yariv-s-website.firebaseapp.com",
        databaseURL: "https://yariv-s-website-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "yariv-s-website",
        storageBucket: "yariv-s-website.appspot.com",
        messagingSenderId: "783012467343",
        appId: "1:783012467343:web:f76ab5148254b53dfe96fa",
        measurementId: "G-DJ6DZE1056"
    }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    let images = _getMarker(db)
    return images

}

async function _getMarker(db) {
        let images = []
        const querySnapshot = await getDocs(collection(db, "photos"));
        querySnapshot.forEach((doc) => {
            images.push(doc.data())
        })
    return  images
}