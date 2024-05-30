import { FC, useState } from "react";
import { RiCloseLine } from "@remixicon/react";
import QRCode from "qrcode.react";
import { useStoreDispatch, useStoreSelector } from "../../../Redux/store";
import { setSavePopup } from "../../../Redux/settingsSlice";
import styles from "./SaveAndShare.module.css";

const SaveAndShare: FC = () => {
    const dispatch = useStoreDispatch();
    const open = useStoreSelector((state) => state.settings.savePopup);
    const [message, setMessage] = useState("");
    const copyLink = (): void => {
        navigator.clipboard.writeText(window.location.href);
        setMessage("Link copied to clipboard!");
        setTimeout(() => {
            setMessage("");
        }, 2000);
    };

    return (
        <div className={`${styles.container} ${!open ? styles.closed : ""}`}>
            <div className={styles.card}>
                <button type="button" onClick={() => dispatch(setSavePopup(false))} className={styles.closeButton}>
                    <RiCloseLine className={styles.closeIcon} />
                </button>
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
                    <div className={styles.otherText}>
                        <p>OR</p>
                        <p>Scan the qr code</p>
                    </div>
                    <div className={styles.qrCode}>
                        <QRCode value={window.location.href} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaveAndShare;
