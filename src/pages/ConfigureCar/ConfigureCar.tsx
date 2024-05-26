import { FC } from "react";
import { Link } from "react-router-dom";
import AppHeader from "../../components/organisms/AppHeader/AppHeader";
import SelectionMenu from "../../components/organisms/SelectionMenu/SelectionMenu";
import CarScene from "../../components/organisms/CarScene/CarScene";
import styles from "./ConfigureCar.module.css";
import SideButton from "../../components/atoms/SideButton/SideButton";
import SaveAndShare from "../../components/organisms/SaveAndShare/SaveAndShare";

const ConfigureCar: FC = () => {
    return (
        <main className={styles.main}>
            <AppHeader configurator />

            <div className={styles.section}>
                <Link className={styles.link} to="/select-car">
                    <SideButton text="Select car" icon="select-car" />
                </Link>

                <SideButton text="Save & share" icon="save-share" />
            </div>
            <div className={styles.namePrice}>
                <h1>Toyota Supra</h1>
                <h2>€ 53.215</h2>
            </div>

            <CarScene />
            {/*<SaveAndShare />*/}
            <SelectionMenu />
        </main>
    );
};

export default ConfigureCar;
