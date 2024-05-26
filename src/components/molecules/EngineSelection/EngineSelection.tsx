import { FC } from "react";
import { RiCheckLine } from "@remixicon/react";
import { carData } from "../../../utils/carData";
import { useStoreDispatch, useStoreSelector } from "../../../Redux/store";
import { setEngine } from "../../../Redux/carSlice";
import styles from "./EngineSelection.module.css";

type props = {
    carId: string;
};

const EngineSelection: FC<props> = ({ carId }) => {
    const dispatch = useStoreDispatch();
    const possibleEngines = carData.find((car) => car.id === carId)?.possibleEngines;
    const car = useStoreSelector((state) => state.car);

    const setURL = (id: string): void => {
        dispatch(setEngine(id));
        window.location.hash = `color=${car.color}?rims=${car.rims}?engine=${id}`;
    };

    return (
        <div className={styles.engineSelection}>
            <ul className={styles.cardList}>
                {possibleEngines?.map((engine) => (
                    <li key={engine.id} id={engine.id}>
                        <button
                            type="button"
                            onClick={() => setURL(engine.id)}
                            className={`${styles.card} ${car.engine === engine.id ? styles.active : ""}`}
                        >
                            <div className={styles.cardHead}>
                                <div>
                                    <h2>
                                        {engine.engineTitle} <span>{engine.fuelType}</span>
                                    </h2>
                                    <p>{engine.gearbox}</p>
                                </div>
                                <button type="button" className={styles.moreInfo}>
                                    More information
                                </button>
                            </div>
                            <ul className={styles.detailsList}>
                                {engine.shortDetails.map((detail) => (
                                    <li key={detail}>{detail}</li>
                                ))}
                            </ul>
                            <div className={car.engine === engine.id ? styles.check : styles.hide}>
                                <RiCheckLine className={styles.icon} />
                            </div>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EngineSelection;
