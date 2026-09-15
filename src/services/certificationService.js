import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

const COLLECTION_NAME = "certifications";

export const certificationService = {
    async getCertifications() {
        const colRef = collection(db, COLLECTION_NAME);
        const snapshot = await getDocs(colRef);
        return snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
        }));
    },

    subscribeToCertifications(callback) {
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
                console.warn("[certificationService subscribe error]:", err);
            }
        );
    },
};

export default certificationService;
