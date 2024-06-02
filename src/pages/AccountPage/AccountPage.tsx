import { FC, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";
import AppHeader from "../../components/organisms/AppHeader/AppHeader";
import { useStoreDispatch, useStoreSelector } from "../../Redux/store";
import { firestore } from "../../firebase";
import { savedConfiguration } from "../../Redux/userSlice";
import { carData } from "../../utils/carData";
import { CarState, setCar } from "../../Redux/carSlice";
import styles from "./AccountPage.module.css";
import DocumentData = firebase.firestore.DocumentData;

const AccountPage: FC = () => {
    const user = useStoreSelector((state) => state.user);
    const [docData, setDocData] = useState<DocumentData | null>(null);
    const navigator = useNavigate();
    const dispatch = useStoreDispatch();

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

    const OpenConfiguration = (car: CarState) => {
        dispatch(setCar(car));
        navigator(
            `/configure-car/${car.id}#color=${car.color}?rims=${car.rims}?engine=${car.engine}?sportPackage=${car.sportPackage}`,
        );
    };

    if (docData)
        return (
            <>
                <AppHeader />
                <main className={styles.main}>
                    <h1>Account Page</h1>
                    {docData && <h2>{docData.email}</h2>}
                    <ul className={styles.cardList}>
                        {docData.savedConfigurations &&
                            docData.savedConfigurations.map((config: savedConfiguration) => {
                                const data = carData.find((car) => car.id === config.car.id);
                                const fuelType = data?.possibleEngines.find(
                                    (engine) => engine.id === config.car.engine,
                                )?.fuelType;
                                const rims = data?.possibleRims.find((rim) => rim.id === config.car.rims)?.displayTitle;
                                return (
                                    <li className={styles.cardContainer} key={config.url}>
                                        <button
                                            type="button"
                                            className={styles.card}
                                            onClick={() => OpenConfiguration(config.car)}
                                        >
                                            <div>
                                                <h3>{data?.displayTitle}</h3>
                                                <p>{fuelType}</p>
                                                <ul className={styles.optionsList}>
                                                    <li>{rims}</li>
                                                    <li>{config.car.color}</li>
                                                    {config.car.sportPackage && <li>Sport package</li>}
                                                </ul>
                                            </div>

                                            <div className={styles.openConfig}>
                                                <p>Open configuration</p>
                                            </div>
                                        </button>
                                    </li>
                                );
                            })}
                    </ul>
                </main>
            </>
        );
};

export default AccountPage;
