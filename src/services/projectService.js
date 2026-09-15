import { collection, getDocs, onSnapshot, doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const COLLECTION_NAME = "projects";

export const projectService = {
    async getProjects() {
        const colRef = collection(db, COLLECTION_NAME);
        const snapshot = await getDocs(colRef);
        return snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
        }));
    },

    async getProjectById(id) {
        const docRef = doc(db, COLLECTION_NAME, id);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
            return { id: snap.id, ...snap.data() };
        }
        return null;
    },

    subscribeToProjects(callback) {
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
                console.warn("[projectService subscribe error]:", err);
            }
        );
    },
};

export default projectService;
