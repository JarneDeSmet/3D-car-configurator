import { FC } from "react";
import styles from "./Loading.module.css";

const Loading: FC = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.group}>
                <div className={styles.ldsRing}>
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
                <h2>Loading...</h2>
            </div>
        </div>
    );
};

export default Loading;
