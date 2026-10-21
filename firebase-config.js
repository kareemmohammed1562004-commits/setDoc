// الصق هنا بيانات مشروعك من Firebase (Project settings ← Your apps ← Web app)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwrpnozfq4lybU3AkgEuTDRyo_gLPIqL4",
  authDomain: "stpwan-eeb51.firebaseapp.com",
  projectId: "stpwan-eeb51",
  storageBucket: "stpwan-eeb51.firebasestorage.app",
  messagingSenderId: "99767083569",
  appId: "1:99767083569:web:8932d2cb4682790f012b10",
  measurementId: "G-XVW1BCQ6FS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

