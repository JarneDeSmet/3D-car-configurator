import { FC } from "react";
import { Link } from "react-router-dom";
import { A11yUserPreferences } from "@react-three/a11y";
import AppHeader from "../../components/organisms/AppHeader/AppHeader";
import SelectionMenu from "../../components/organisms/SelectionMenu/SelectionMenu";
import CarScene from "../../components/organisms/CarScene/CarScene";
import SideButton from "../../components/atoms/SideButton/SideButton";
import SaveAndShare from "../../components/organisms/SaveAndShare/SaveAndShare";
import { useStoreDispatch } from "../../Redux/store";
import { setSavePopup } from "../../Redux/settingsSlice";
import styles from "./ConfigureCar.module.css";

const ConfigureCar: FC = () => {
    const dispatch = useStoreDispatch();

    return (
        <main className={styles.main}>
            <AppHeader configurator />

            <div className={styles.section}>
                <Link className={styles.link} to="/select-car">
                    <SideButton text="Select car" icon="select-car" />
                </Link>

                <button type="button" className={styles.button} onClick={() => dispatch(setSavePopup(true))}>
                    <SideButton text="Save & share" icon="save-share" />
                </button>
            </div>
            <div className={styles.namePrice}>
                <h1>Toyota Supra</h1>
                <h2>€ 53.215</h2>
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
