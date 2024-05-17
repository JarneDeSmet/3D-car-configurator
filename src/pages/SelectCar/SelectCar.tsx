import { FC } from "react";
import AppHeader from "../../components/organisms/AppHeader/AppHeader";
import styles from "./SelectCar.module.css";
import CarCard from "../../components/molecules/CarCard/CarCard";

const SelectCar: FC = () => {
    return (
        <>
            <AppHeader />
            <div className={styles.title}>
                <h1>Select a car to configure</h1>
                <h2>Click a car to start</h2>
            </div>

            <ul className={styles.carList}>
                <li>
                    <CarCard
                        id="1"
                        title="New Toyota C-HR"
                        engine="hybride"
                        carImage="/yaris-mxjl.png"
                        price="32.830"
                    />
                </li>
                <li>
                    <CarCard
                        id="2"
                        title="New Toyota C-HR"
                        engine="hybride"
                        carImage="/yaris-mxjl.png"
                        price="32.830"
                    />
                </li>
                <li>
                    <CarCard
                        id="3"
                        title="New Toyota C-HR"
                        engine="hybride"
                        carImage="/yaris-mxjl.png"
                        price="32.830"
                    />
                </li>
                <li>
                    <CarCard
                        id="4"
                        title="New Toyota C-HR"
                        engine="hybride"
                        carImage="/yaris-mxjl.png"
                        price="32.830"
                    />
                </li>
                <li>
                    <CarCard
                        id="5"
                        title="New Toyota C-HR"
                        engine="hybride"
                        carImage="/yaris-mxjl.png"
                        price="32.830"
                    />
                </li>
                <li>
                    <CarCard
                        id="6"
                        title="New Toyota C-HR"
                        engine="hybride"
                        carImage="/yaris-mxjl.png"
                        price="32.830"
                    />
                </li>
            </ul>
        </>
    );
};
export default SelectCar;
