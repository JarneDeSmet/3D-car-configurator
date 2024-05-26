import { FC, useState } from "react";
import styles from "./SaveAndShare.module.css";

const SaveAndShare: FC = () => {
    const [message, setMessage] = useState("");
    const copyLink = (): void => {
        // window.alert(window.location.href);
        navigator.clipboard.writeText(window.location.href);
        setMessage("Link copied to clipboard!");
        setTimeout(() => {
            setMessage("");
        }, 2000);
    };
    const shareOnFacebook = (): void => {
        const url = encodeURIComponent(window.location.href);
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        window.open(facebookShareUrl, "_blank");
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Save & share</h2>
                <p className={message ? styles.showMessage : styles.hidemessage}>{message}</p>

                <div className={styles.buttons}>
                    <button type="button" onClick={() => copyLink()} className={styles.button}>
                        <p>Copy link</p>
                    </button>
                    <button type="button" className={styles.button}>
                        <p> Save to my account</p>
                    </button>
                </div>

                <div className={styles.other}>
                    <p>OR</p>
                    <div>
                        <button onClick={() => shareOnFacebook()} type="button" className={styles.shareTest} />
                        <button type="button" className={styles.shareTest} />
                        <button type="button" className={styles.shareTest} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaveAndShare;
