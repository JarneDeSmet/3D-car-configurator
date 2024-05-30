import { User } from "firebase/auth";
import { arrayUnion, updateDoc } from "@firebase/firestore";
import { doc } from "firebase/firestore";
import { firestore } from "../firebase";
import { savedConfiguration } from "../Redux/userSlice";

export const saveToAccount = async (user: User, newConfiguration: savedConfiguration): Promise<void> => {
    if (!user.email) return;
    const userDocRef = doc(firestore, "Users", user.email);

    await updateDoc(userDocRef, {
        savedConfigurations: arrayUnion(newConfiguration),
    });
};
