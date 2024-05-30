import { FC } from "react";
import styles from "./SideButton.module.css";

type props = {
    text: string;
    icon: string;
};

const SideButton: FC<props> = ({ text, icon }) => {
    return (
        <button type="button" className={styles.button}>
            <p>{text}</p>
            <img src={`/assets/${icon}.svg`} alt={icon} />
        </button>
    );
};

export default SideButton;
