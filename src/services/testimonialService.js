import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

const COLLECTION_NAME = "testimonials";

export const testimonialService = {
    async getTestimonials() {
        const colRef = collection(db, COLLECTION_NAME);
        const snapshot = await getDocs(colRef);
        return snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
        }));
    },

    subscribeToTestimonials(callback) {
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
                console.warn("[testimonialService subscribe error]:", err);
            }
        );
    },
};

export default testimonialService;
