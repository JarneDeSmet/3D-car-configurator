import { FC } from "react";
import styles from "./MainButton.module.css";

type Props = {
    text: string;
};
const MainButton: FC<Props> = ({ text }) => {
    return (
        <button type="button" aria-label="select car" className={styles.button}>
            {text}
        </button>
    );
};

export default MainButton;
