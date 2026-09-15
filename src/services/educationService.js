import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

const COLLECTION_NAME = "education";

export const educationService = {
    async getEducation() {
        const colRef = collection(db, COLLECTION_NAME);
        const snapshot = await getDocs(colRef);
        return snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
        }));
    },

    subscribeToEducation(callback) {
        const colRef = collection(db, COLLECTION_NAME);
        return onSnapshot(
            colRef,
            (snapshot) => {
                const items = snapshot.docs.map((docSnap) => ({
                    id: docSnap.id,
                    ...docSnap.data(),
                }));
                callback(items);
            },
            (err) => {
                console.warn("[educationService subscribe error]:", err);
            }
        );
    },
};

export default educationService;
