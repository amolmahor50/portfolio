import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCnARWHUiiW92IQlb4kKZBb6-jfD36MNSk",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "portfolio-5bcdd.firebaseapp.com",
    databaseURL:
        import.meta.env.VITE_FIREBASE_DATABASE_URL ||
        "https://portfolio-5bcdd-default-rtdb.firebaseio.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "portfolio-5bcdd",
    storageBucket:
        import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "portfolio-5bcdd.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "306753384948",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:306753384948:web:9a26bbadb591f2cc6dc9a1",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-RWFS371G4X",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
export default db;
