import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCd_UQIwa9UC9MJPInjwn9SHsggzozyWdo",
    authDomain: "graduation-notebook.firebaseapp.com",
    projectId: "graduation-notebook",
    storageBucket: "graduation-notebook.appspot.com",
    messagingSenderId: "1046478082834",
    appId: "1:1046478082834:web:b21cc0c6e969a99a90d9cb",
    measurementId: "G-K6HKTKYRSL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;