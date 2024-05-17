import { FC, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import styles from "./SelectionMenu.module.css";
import ColorSelection from "../../molecules/ColorSelection/ColorSelection";
import WheelSelection from "../../molecules/WheelSelection/WheelSelection";

const SelectionMenu: FC = () => {
    const buttons = ["Color", "Wheels", "Engine", "Exterieur", "Interieur", "Samenvatting"];
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className={styles.menu}>
            <div className={styles.buttons}>
                <button
                    className={styles.nextPrevious}
                    type="button"
                    aria-label="previous"
                    onClick={() => setActiveIndex(activeIndex - 1)}
                    disabled={activeIndex === 0}
                >
                    <RiArrowLeftSLine size="2rem" />
                </button>
                <div className={styles.buttonWrapper}>
                    {buttons.map((button, index) => (
                        <button
                            onClick={() => setActiveIndex(index)}
                            type="button"
                            key={button}
                            className={index === activeIndex ? styles.active : ""}
                        >
                            {button}
                        </button>
                    ))}
                </div>
                <button
                    className={styles.nextPrevious}
                    type="button"
                    aria-label="next"
                    onClick={() => setActiveIndex(activeIndex + 1)}
                    disabled={activeIndex === buttons.length - 1}
                >
                    <RiArrowRightSLine size="2rem" />
                </button>
            </div>
            <div className={styles.selection}>
                {activeIndex === 0 && <ColorSelection />}
                {activeIndex === 1 && <WheelSelection />}
            </div>
        </div>
    );
};

export default SelectionMenu;
