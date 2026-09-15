import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

const COLLECTION_NAME = "settings";
const DOC_ID = "theme";

export const themeService = {
    async getThemeSettings() {
        const docRef = doc(db, COLLECTION_NAME, DOC_ID);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
            return snap.data();
        }
        return null;
    },

    subscribeToThemeSettings(callback) {
        const docRef = doc(db, COLLECTION_NAME, DOC_ID);
        return onSnapshot(
            docRef,
            (snap) => {
                if (snap.exists()) {
                    callback(snap.data());
                } else {
                    callback(null);
                }
            },
            (err) => {
                console.warn("[themeService subscribe error]:", err);
            }
        );
    },
};

export default themeService;
