import { FC } from "react";
import { RiCheckLine } from "@remixicon/react";
import { carData } from "../../../utils/carData";
import { useStoreDispatch, useStoreSelector } from "../../../Redux/store";
import { setSportPackage } from "../../../Redux/carSlice";
import styles from "./PackagesSelection.module.css";

type props = {
    carId: string;
};

const PackagesSelection: FC<props> = ({ carId }) => {
    const dispatch = useStoreDispatch();
    const possiblePackages = carData.find((car) => car.id === carId)?.possiblePackages;
    const car = useStoreSelector((state) => state.car);

    const setURL = (id: boolean): void => {
        dispatch(setSportPackage(id));
        window.location.hash = `color=${car.color}?rims=${car.rims}?engine=${car.engine}?sportPackage=${id}`;
    };

    return (
        <div className={styles.packageSelection}>
            <ul className={styles.cardList}>
                {possiblePackages?.map((pack) => (
                    <li key={pack.id} id={pack.id}>
                        <button
                            type="button"
                            onClick={() => setURL(!car.sportPackage)}
                            className={`${styles.card} ${car.sportPackage ? styles.active : ""}`}
                        >
                            <img src={pack.image} alt={pack.displayTitle} />
                            <div>
                                <div className={styles.cardHead}>
                                    <div className={styles.cardTitle}>
                                        <h2>{pack.displayTitle}</h2>
                                        <p>+ €{pack.cost}</p>
                                    </div>
                                    <button type="button" className={styles.moreInfo}>
                                        More information
                                    </button>
                                </div>
                                <ul className={styles.detailsList}>
                                    {pack.shortDetails.map((detail) => (
                                        <li key={detail}>{detail}</li>
                                    ))}
                                </ul>
                                <div className={car.sportPackage ? styles.check : styles.hide}>
                                    <RiCheckLine className={styles.icon} />
                                </div>
                            </div>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default PackagesSelection;
