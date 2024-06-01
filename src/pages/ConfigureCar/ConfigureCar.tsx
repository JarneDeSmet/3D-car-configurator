import { FC } from "react";
import { Link } from "react-router-dom";
import { A11yUserPreferences } from "@react-three/a11y";
import AppHeader from "../../components/organisms/AppHeader/AppHeader";
import SelectionMenu from "../../components/organisms/SelectionMenu/SelectionMenu";
import CarScene from "../../components/organisms/CarScene/CarScene";
import SideButton from "../../components/atoms/SideButton/SideButton";
import SaveAndShare from "../../components/organisms/SaveAndShare/SaveAndShare";
import { useStoreDispatch, useStoreSelector } from "../../Redux/store";
import { setSavePopup } from "../../Redux/settingsSlice";
import { carData } from "../../utils/carData";
import styles from "./ConfigureCar.module.css";

const ConfigureCar: FC = () => {
    const dispatch = useStoreDispatch();
    const car = useStoreSelector((state) => state.car);
    const data = carData.find((dataCar) => dataCar.id === car.id);

    return (
        <main className={styles.main}>
            <AppHeader configurator />

            <div id="test" className={styles.section}>
                <Link role="button" className={styles.link} to="/select-car">
                    <SideButton text="Select car" icon="select-car" />
                </Link>

                <button type="button" className={styles.button} onClick={() => dispatch(setSavePopup(true))}>
                    <SideButton text="Save & share" icon="save-share" />
                </button>
            </div>
            <div className={styles.namePrice}>
                <h1>{data?.displayTitle}</h1>
                <h2>€ {data?.basePrice}</h2>
            </div>

            <A11yUserPreferences>
                <CarScene />
            </A11yUserPreferences>
            <SaveAndShare />
            <SelectionMenu />
        </main>
    );
};

export default ConfigureCar;
