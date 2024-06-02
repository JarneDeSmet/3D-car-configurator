import { ChangeEvent, FC, FormEvent, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "@firebase/firestore";
import AppHeader from "../../components/organisms/AppHeader/AppHeader";
import styles from "../Login/Login.module.css";
import FormInput from "../../components/atoms/FormInput/FormInput";
import { auth, firestore } from "../../firebase";

const Register: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeat] = useState("");
    const [error, setError] = useState("");
    const navigator = useNavigate();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "repeat") {
            setRepeat(value);
        }
    };

    const handleRegistration = async (event: FormEvent) => {
        try {
            event.preventDefault();

            if (email === "" || password === "" || repeatPassword === "") {
                setError("Please fill in all fields");
                return;
            }
            if (password !== repeatPassword) {
                setError("Passwords do not match");
                return;
            }
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            if (user && user.email) {
                await setDoc(doc(firestore, "Users", user.email), {
                    email: user.email,
                    savedConfigurations: [],
                });
            }

            setEmail("");
            setError("");
            setPassword("");
            setRepeat("");
            navigator("/login");
        } catch (error) {
            if (error instanceof Error) setError(error.message);
        }
    };

    return (
        <>
            <AppHeader />
            <main>
                <h1 className={styles.pageTitle}>Register</h1>
                {error && <p className={styles.error}>{error}</p>}

                <form onSubmit={handleRegistration} className={styles.form}>
                    <FormInput
                        label="Email"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                    />
                    <FormInput
                        label="Password"
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={handleChange}
                    />
                    <FormInput
                        label="Repeat Password"
                        type="password"
                        name="repeat"
                        id="repeat"
                        value={repeatPassword}
                        onChange={handleChange}
                    />
                    <button className={styles.button} type="submit">
                        Register
                    </button>

                    <p className={styles.navigateText}>
                        Or Log in{" "}
                        <Link className={styles.link} to="/login">
                            HERE
                        </Link>
                    </p>
                </form>
            </main>
        </>
    );
};

export default Register;
