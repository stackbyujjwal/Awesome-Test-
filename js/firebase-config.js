// firebase-config.js

// 🛑 FIREBASE SDK IMPORTS
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🛑 AAPKI FIREBASE CONFIGURATION
const firebaseConfig = {
    apiKey: "AIzaSyAdSJleHGBOOCGv14n1gKgm-JfyAR5rKDM",
    authDomain: "ujjwal-test-69e8d.firebaseapp.com",
    projectId: "ujjwal-test-69e8d",
    storageBucket: "ujjwal-test-69e8d.firebasestorage.app",
    messagingSenderId: "1079902323676",
    appId: "1:1079902323676:web:c967fed7a9ade8f2b78519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Window object me store kar rahe hain taaki HTML file ki scripts isko access kar sakein
window.auth = getAuth(app);
window.db = getFirestore(app);
window.addDoc = addDoc;
window.collection = collection;

// Login check on test start
onAuthStateChanged(window.auth, (user) => {
    if (!user) {
        alert("Kripya test shuru karne se pahle login karein.");
        // Redirect fix: Ab ye root (main folder) se login.html uthayega
        window.location.href = window.location.origin + '/login.html'; 
    }
});