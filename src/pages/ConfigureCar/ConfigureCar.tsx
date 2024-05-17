import { FC } from "react";
import AppHeader from "../../components/organisms/AppHeader/AppHeader";
import SelectionMenu from "../../components/organisms/SelectionMenu/SelectionMenu";
import CarScene from "../../components/organisms/CarScene/CarScene";
import styles from "./ConfigureCar.module.css";
import SideButton from "../../components/atoms/SideButton/SideButton";

const ConfigureCar: FC = () => {
    return (
        <main className={styles.main}>
            <AppHeader configurator />

            <div className={styles.section}>
                <SideButton text="Select car" icon="select-car" />
                <SideButton text="Freedrive" icon="freedrive" />
                <SideButton text="Save & share" icon="save-share" />
            </div>
            <div className={styles.namePrice}>
                <h1>Toyota Supra</h1>
                <h2>€ 53.215</h2>
            </div>

            <CarScene />
            <SelectionMenu />
        </main>
    );
};

export default ConfigureCar;
