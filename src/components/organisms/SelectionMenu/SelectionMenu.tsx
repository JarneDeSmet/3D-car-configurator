import { FC, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import ColorSelection from "../../molecules/ColorSelection/ColorSelection";
import WheelSelection from "../../molecules/WheelSelection/WheelSelection";
import { useStoreSelector } from "../../../Redux/store";
import EngineSelection from "../../molecules/EngineSelection/EngineSelection";
import PackagesSelection from "../../molecules/PackagesSelection/PackagesSelection";
import styles from "./SelectionMenu.module.css";

const SelectionMenu: FC = () => {
    const selectedCarId = useStoreSelector((state) => state.car.id);
    const buttons = ["Color", "Wheels", "Engine", "Packs", "Overview"];
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
                {activeIndex === 0 && <ColorSelection carId={selectedCarId} />}
                {activeIndex === 1 && <WheelSelection carId={selectedCarId} />}
                {activeIndex === 2 && <EngineSelection carId={selectedCarId} />}
                {activeIndex === 3 && <PackagesSelection carId={selectedCarId} />}
            </div>
        </div>
    );
};

export default SelectionMenu;
