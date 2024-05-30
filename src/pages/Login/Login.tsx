import { ChangeEvent, FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "firebase/auth";
import AppHeader from "../../components/organisms/AppHeader/AppHeader";
import FormInput from "../../components/atoms/FormInput/FormInput";
import { setPendingSave, userLogin } from "../../Redux/userSlice";
import { useStoreDispatch, useStoreSelector } from "../../Redux/store";
import { saveToAccount } from "../../utils/utils";
import styles from "./Login.module.css";

const Login: FC = () => {
    const dispatch = useStoreDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const pending = useStoreSelector((state) => state.user.pendingSave);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (email === "" || password === "") {
                setError("Please fill in all fields");
                return;
            }

            await dispatch(userLogin({ email, password }));

            if (pending) {
                await saveToAccount({ email } as User, { url: pending.url, car: pending.car });
                dispatch(setPendingSave(null));
                navigate("/account");
            } else {
                navigate("/");
            }
        } catch (error) {
            if (error instanceof Error) setError(error.message);
        }
    };

    return (
        <>
            <AppHeader />
            <main>
                <h1 className={styles.pageTitle}>Login</h1>
                {error && <p className={styles.error}>{error}</p>}

                <form onSubmit={handleSubmit} className={styles.form}>
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
                    <button className={styles.button} type="submit">
                        Login
                    </button>
                    <p className={styles.navigateText}>
                        Or Register{" "}
                        <Link className={styles.link} to="/register">
                            HERE
                        </Link>
                    </p>
                </form>
            </main>
        </>
    );
};

export default Login;
