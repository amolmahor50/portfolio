import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

const COLLECTION_NAME = "services";

export const serviceService = {
    async getServices() {
        const colRef = collection(db, COLLECTION_NAME);
        const snapshot = await getDocs(colRef);
        return snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
        }));
    },

    subscribeToServices(callback) {
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
                console.warn("[serviceService subscribe error]:", err);
            }
        );
    },
};

export default serviceService;
