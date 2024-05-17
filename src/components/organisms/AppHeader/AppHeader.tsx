import { FC, useEffect, useState } from "react";
import { RiAccountCircleLine, RiSettings4Fill } from "@remixicon/react";
import { Link } from "react-router-dom";
import styles from "./AppHeader.module.css";

type props = {
    configurator?: boolean;
};

const AppHeader: FC<props> = ({ configurator }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const checkWindowSize = (): void => {
            if (window.matchMedia("(min-width: 600px)").matches) {
                setIsMenuOpen(true);
            } else {
                setIsMenuOpen(false);
            }
        };

        checkWindowSize();

        window.addEventListener("resize", checkWindowSize);

        return () => {
            window.removeEventListener("resize", checkWindowSize);
        };
    }, []);

    return (
        <header className={`${styles.header} ${configurator ? styles.configurator : ""}`}>
            <Link className={styles.link} to="/">
                <button type="button" aria-label="Navigate to home" className={styles.logo}>
                    <img src="/toyotaLogo.png" alt="Toyota Logo" />
                    <h1>Configurator</h1>
                </button>
            </Link>

            <button
                onClick={() => toggleMenu()}
                className={styles.menu}
                aria-label="navigation"
                type="button"
                aria-expanded={isMenuOpen}
            >
                <span aria-hidden className={`${styles.icon} ${isMenuOpen ? styles.menuOpen : ""}`}>
                    <span />
                    <span />
                    <span />
                </span>
            </button>
            <nav className={`${isMenuOpen ? styles.navOpen : styles.navClosed} ${styles.nav}`}>
                <ul className={styles.navList}>
                    <li className={styles.listItem}>
                        <p>Settings</p>
                        <RiSettings4Fill className={styles.listIcon} />
                    </li>
                    <li className={styles.listItem}>
                        <p>Account</p>
                        <RiAccountCircleLine className={styles.listIcon} />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default AppHeader;
