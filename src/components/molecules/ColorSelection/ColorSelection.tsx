import { FC } from "react";
import { useStoreDispatch, useStoreSelector } from "../../../Redux/store";
import { setColor } from "../../../Redux/carSlice";
import styles from "./ColorSelection.module.css";

const ColorSelection: FC = () => {
    const dispatch = useStoreDispatch();
    const activeColor = useStoreSelector((state) => state.car.color);
    const colors = [
        ["#A40611", "#720008"],
        ["#04791D", "#1F4A09"],
        ["#053873", "#032042"],
    ];
    const setURL = (color: string): void => {
        window.location.hash = `color=${color}`;
        dispatch(setColor(color));
    };
    return (
        <div className={styles.colorSelect}>
            <div>
                <div className={styles.titleGroup}>
                    <h2>Glossy</h2>
                    <p>included</p>
                </div>
                <ul className={styles.colorGroup}>
                    {colors.map((color) => (
                        <li key={color[0]}>
                            <button
                                className={color[0] === activeColor ? styles.activeButton : ""}
                                aria-label={color[0]}
                                type="button"
                                style={{ background: `linear-gradient(to bottom right, ${color[0]}, ${color[1]})` }}
                                onClick={() => setURL(color[0])}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ColorSelection;
