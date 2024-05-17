import { FC } from "react";
import { Link } from "react-router-dom";
import AppHeader from "../../components/organisms/AppHeader/AppHeader";
import styles from "./HomePage.module.css";
import MainButton from "../../components/atoms/MainButton/MainButton";

const HomePage: FC = () => {
    return (
        <>
            <AppHeader />
            <main className={styles.main}>
                <h1 className={styles.pageTitle}>Car configurator</h1>
                <section className={styles.section}>
                    <h2 className={styles.toyotaTitle}>TOYOTA</h2>
                    <img className={styles.img} src="/toyotaSupra.png" alt="Red Toyota supra" />
                </section>
                <Link to="/select-car">
                    <MainButton text="Configurate" />
                </Link>
            </main>
        </>
    );
};

export default HomePage;
