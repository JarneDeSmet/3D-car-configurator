import { FC } from "react";
import { RiArrowDownLine, RiArrowLeftLine, RiArrowRightLine, RiArrowUpLine, RiCloseLine } from "@remixicon/react";
import { useStoreDispatch, useStoreSelector } from "../../../Redux/store";
import { setInfoPopUp } from "../../../Redux/settingsSlice";

import styles from "./InfoPopUp.module.css";

const InfoPopUp: FC = () => {
    const dispatch = useStoreDispatch();
    const open = useStoreSelector((state) => state.settings.infoPopUp);

    return (
        <div className={`${styles.container} ${!open ? styles.closed : ""}`}>
            <div className={styles.card}>
                <button type="button" onClick={() => dispatch(setInfoPopUp(false))} className={styles.closeButton}>
                    <RiCloseLine className={styles.closeIcon} />
                </button>
                <h2>Information</h2>
                <h3 className={styles.h3}>How to move around the car</h3>

                <ul className={styles.optionList}>
                    <li>
                        <h4>1. Using the mouse</h4>
                        <p>Click and drag on the car to rotate it</p>
                    </li>
                    <li>
                        <h4>2. Using the keyboard</h4>
                        <ul className={styles.keysList}>
                            <li>
                                <p>Rotate left:</p>
                                <div className={styles.options}>
                                    <p className={styles.key}>
                                        <RiArrowLeftLine />
                                    </p>
                                    <p>or</p>
                                    <p className={styles.key}>q</p>
                                </div>
                            </li>
                            <li>
                                <p>Rotate right:</p>
                                <div className={styles.options}>
                                    <p className={styles.key}>
                                        {" "}
                                        <RiArrowRightLine />
                                    </p>
                                    <p>or</p>
                                    <p className={styles.key}>d</p>
                                </div>
                            </li>
                            <li>
                                <p>Rotate up:</p>
                                <div className={styles.options}>
                                    <p className={styles.key}>
                                        <RiArrowUpLine />
                                    </p>
                                    <p>or</p>
                                    <p className={styles.key}>z</p>
                                </div>
                            </li>
                            <li>
                                <p>Rotate down:</p>
                                <div className={styles.options}>
                                    <p className={styles.key}>
                                        <RiArrowDownLine />
                                    </p>
                                    <p>or</p>
                                    <p className={styles.key}>s</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default InfoPopUp;
