import { FC } from "react";
import { useStoreDispatch, useStoreSelector } from "../../../Redux/store";
import { setColor } from "../../../Redux/carSlice";
import styles from "./ColorSelection.module.css";
import { carData } from "../../../utils/carData";

type props = {
    carId: string;
};

const ColorSelection: FC<props> = ({ carId }) => {
    const possibleColors = carData.find((car) => car.id === carId)?.possibleColors;
    const dispatch = useStoreDispatch();
    const car = useStoreSelector((state) => state.car);

    const setURL = (color: string): void => {
        dispatch(setColor(color));
        window.location.hash = `color=${color}?rims=${car.rims}?engine=${car.engine}`;
    };
    return (
        <div className={styles.colorSelect}>
            {possibleColors?.map((colorType) => (
                <div>
                    <div className={styles.titleGroup}>
                        <h2>{colorType.type}</h2>
                        <p>{colorType.cost === 0 ? "included" : `+ €${colorType.cost}`}</p>
                    </div>
                    <ul className={styles.colorGroup}>
                        {colorType.colors.map((color) => (
                            <li key={color.name}>
                                <button
                                    className={
                                        `${color.name}-${colorType.type}` === car.color ? styles.activeButton : ""
                                    }
                                    aria-label={color.name}
                                    type="button"
                                    style={{ background: `${color.hex}` }}
                                    onClick={() => setURL(`${color.name}-${colorType.type}`)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ColorSelection;
