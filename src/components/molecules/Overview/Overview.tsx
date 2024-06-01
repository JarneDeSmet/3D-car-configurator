import { FC } from "react";
import { useStoreSelector } from "../../../Redux/store";
import { carData } from "../../../utils/carData";
import styles from "./Overview.module.css";

type props = {
    carId: string;
};

const Overview: FC<props> = ({ carId }) => {
    const car = useStoreSelector((state) => state.car);
    const data = carData.find((car) => car.id === carId);

    const colorType = data?.possibleColors.find((colorType) => colorType.type === car.color.split("-")[1]);
    const colorDetails = colorType?.colors.find((color) => color.name === car.color.split("-")[0]);

    const rims = data?.possibleRims.find((rim) => rim.id === car.rims);

    const engine = data?.possibleEngines.find((engine) => engine.id === car.engine);

    const sportPackage = data?.possiblePackages.find((pack) => pack.id === "sport");
    return (
        <div className={styles.container}>
            <ul className={styles.overviewList}>
                <li>
                    <div className={styles.heading}>
                        <h3>Color</h3>
                        <p>{colorType && colorType.cost <= 0 ? "included" : `+ € ${colorType?.cost}`}</p>
                    </div>

                    <div className={styles.details}>
                        <p style={{ background: colorDetails?.hex }} className={styles.color} />
                        <p>{car.color}</p>
                    </div>
                </li>
                <li>
                    <div className={styles.heading}>
                        <h3>Wheels</h3>
                        <p>{rims && rims.cost <= 0 ? "included" : `+ € ${rims?.cost}`}</p>
                    </div>

                    <div className={styles.details}>
                        <img src={rims?.image} alt={rims?.displayTitle} />
                        <p>{rims?.displayTitle}</p>
                    </div>
                </li>
                <li>
                    <div className={styles.heading}>
                        <h3>Engine</h3>
                        <p>{engine && engine.cost <= 0 ? "included" : `+ € ${engine?.cost}`}</p>
                    </div>

                    <div className={styles.engineDetails}>
                        <div className={styles.title}>
                            <div>
                                <p>{engine?.engineTitle}</p>
                                <p>{engine?.gearbox}</p>
                            </div>
                            <p className={styles.fuel}>{engine?.fuelType}</p>
                        </div>
                        <div>
                            <ul className={styles.shortDetails}>
                                {engine?.shortDetails.map((detail) => <li key={detail}>{detail}</li>)}
                            </ul>
                        </div>
                    </div>
                </li>
                {car.sportPackage && (
                    <li>
                        <div className={styles.heading}>
                            <h3>Sport package</h3>
                            <p>{sportPackage && sportPackage.cost <= 0 ? "included" : `+ € ${sportPackage?.cost}`}</p>
                        </div>

                        <div className={styles.details}>
                            <img className={styles.img} src={sportPackage?.image} alt={sportPackage?.displayTitle} />
                            <p>{sportPackage?.shortDetails}</p>
                        </div>
                    </li>
                )}
            </ul>
            <div className={styles.complete}>
                <div>
                    <h2>Total price</h2>
                    {data?.basePrice && (
                        <p>
                            €{" "}
                            {data?.basePrice +
                                (colorType?.cost ? colorType.cost : 0) +
                                (rims?.cost ? rims.cost : 0) +
                                (engine?.cost ? engine.cost : 0) +
                                (car.sportPackage && sportPackage ? sportPackage.cost : 0)}
                        </p>
                    )}
                </div>
                <button type="button" className={styles.quote}>
                    Request quote
                </button>
            </div>
        </div>
    );
};

export default Overview;
