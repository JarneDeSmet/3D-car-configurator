import { FC, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";
import AppHeader from "../../components/organisms/AppHeader/AppHeader";
import { useStoreSelector } from "../../Redux/store";
import { firestore } from "../../firebase";
import { savedConfiguration } from "../../Redux/userSlice";
import styles from "./AccountPage.module.css";
import DocumentData = firebase.firestore.DocumentData;

const AccountPage: FC = () => {
    const user = useStoreSelector((state) => state.user);
    const [docData, setDocData] = useState<DocumentData | null>(null);
    const navigator = useNavigate();
    useEffect(() => {
        if (!user.user) {
            navigator("/login");
        } else if (user.user.email) {
            const docRef = doc(firestore, "Users", user.user.email);

            const unsubscribe = onSnapshot(docRef, (docSnap) => {
                if (docSnap.exists()) {
                    setDocData(docSnap.data());
                }
            });

            return () => unsubscribe();
        }
    }, [user.user]);

    if (docData)
        return (
            <>
                <AppHeader />
                <main className={styles.main}>
                    <h1>Account Page</h1>
                    {docData && <h2>{docData.email}</h2>}
                    <ul>
                        {docData.savedConfigurations &&
                            docData.savedConfigurations.map((config: savedConfiguration) => (
                                <li key={config.url}>
                                    <h4>{config.url}</h4>
                                    <h4>{config.car.id}</h4>
                                </li>
                            ))}
                    </ul>
                    {docData && <pre>{JSON.stringify(docData, null, 2)}</pre>}
                </main>
            </>
        );
};

export default AccountPage;
