import { FC } from "react";
import { RiCheckLine } from "@remixicon/react";
import { carData } from "../../../utils/carData";
import { setRims } from "../../../Redux/carSlice";
import { useStoreDispatch, useStoreSelector } from "../../../Redux/store";
import styles from "./WheelSelection.module.css";

type props = {
    carId: string;
};
const WheelSelection: FC<props> = ({ carId }) => {
    const dispatch = useStoreDispatch();
    const possibleRims = carData.find((car) => car.id === carId)?.possibleRims;
    const car = useStoreSelector((state) => state.car);
    const setURL = (rim: string): void => {
        dispatch(setRims(rim));
        window.location.hash = `color=${car.color}?rims=${rim}?engine=${car.engine}?sportPackage=${car.sportPackage}`;
    };

    return (
        <div className={styles.rimsSelection}>
            <ul>
                {possibleRims?.map((rim) => (
                    <li key={rim.id}>
                        <button
                            type="button"
                            onClick={() => setURL(rim.id)}
                            className={`${styles.card} ${car.rims === rim.id ? styles.active : ""}`}
                        >
                            <img src={rim.image} alt={rim.id} />
                            <div>
                                <h3>{rim.displayTitle}</h3>
                                <p>Wielinformatie</p>
                            </div>
                            <div className={car.rims === rim.id ? styles.check : styles.hide}>
                                <RiCheckLine className={styles.icon} />
                            </div>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WheelSelection;
