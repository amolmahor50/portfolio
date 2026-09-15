import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const COLLECTION_NAME = "contacts";

export const contactService = {
    async sendMessage({ name, email, subject, message, phone }) {
        const colRef = collection(db, COLLECTION_NAME);
        const docRef = await addDoc(colRef, {
            name: name || "",
            email: email || "",
            subject: subject || "Portfolio Contact Inquiry",
            message: message || "",
            phone: phone || "",
            createdAt: new Date().toISOString(),
            timestamp: serverTimestamp(),
            status: "unread",
        });
        return { id: docRef.id };
    },
};

export default contactService;
