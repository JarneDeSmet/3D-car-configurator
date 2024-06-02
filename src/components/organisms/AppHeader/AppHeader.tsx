import { FC, useEffect, useState } from "react";
import { RiAccountCircleLine, RiSettings4Fill } from "@remixicon/react";
import { Link } from "react-router-dom";
import { useStoreSelector } from "../../../Redux/store";
import styles from "./AppHeader.module.css";

type props = {
    configurator?: boolean;
};

const AppHeader: FC<props> = ({ configurator }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = useStoreSelector((state) => state.user.user);
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
            <Link aria-label="Navigate to home" className={`${styles.link} ${styles.logo}`} to="/">
                <img src="/toyotaLogo.png" alt="Toyota Logo" />
                <h1>Configurator</h1>
            </Link>

            <button
                onClick={() => toggleMenu()}
                className={styles.menu}
                aria-label="menu"
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
                        <button type="button" className={styles.listBtn} aria-label="Settings">
                            <p>Settings</p>
                            <RiSettings4Fill className={styles.listIcon} />
                        </button>
                    </li>

                    {user !== null ? (
                        <li className={styles.listItem}>
                            <Link role="button" to="/account" className={styles.link}>
                                <p>Account</p>
                                <RiAccountCircleLine className={styles.listIcon} />
                            </Link>
                        </li>
                    ) : (
                        <li className={styles.listItem}>
                            <Link role="button" to="/login" className={styles.link}>
                                <p>Login</p>
                            </Link>
                        </li>
                    )}

                    {/*<li className={styles.listItem}>*/}
                    {/*    <p>Account</p>*/}
                    {/*    <RiAccountCircleLine className={styles.listIcon} />*/}
                    {/*</li>*/}
                </ul>
            </nav>
        </header>
    );
};

export default AppHeader;
