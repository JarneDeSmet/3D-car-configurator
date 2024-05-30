import { ChangeEvent, FC, useState } from "react";
import AppHeader from "../../components/organisms/AppHeader/AppHeader";
import styles from "../HomePage/HomePage.module.css";
import FormInput from "../../components/atoms/FormInput/FormInput";
import { userLogin } from "../../Redux/userSlice";
import { useStoreDispatch } from "../../Redux/store";

const Login: FC = () => {
    const dispatch = useStoreDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(userLogin({ email, password }));
    };

    return (
        <>
            <AppHeader />
            <main className={styles.main}>
                <h1 className={styles.pageTitle}>Login</h1>

                <form onSubmit={handleSubmit}>
                    <p>{email}</p>
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
                    <button type="submit">Login</button>
                </form>
            </main>
        </>
    );
};

export default Login;
