import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

const COLLECTION_NAME = "experiences";

export const experienceService = {
    async getExperiences() {
        const colRef = collection(db, COLLECTION_NAME);
        const snapshot = await getDocs(colRef);
        return snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
        }));
    },

    subscribeToExperiences(callback) {
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
                console.warn("[experienceService subscribe error]:", err);
            }
        );
    },
};

export default experienceService;
