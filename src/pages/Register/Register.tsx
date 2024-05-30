import { ChangeEvent, FC, FormEvent, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AppHeader from "../../components/organisms/AppHeader/AppHeader";
import styles from "../HomePage/HomePage.module.css";
import FormInput from "../../components/atoms/FormInput/FormInput";
import { auth } from "../../firebase";

const Register: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleRegistration = async (event: FormEvent) => {
        try {
            event.preventDefault();
            // Register the user using Firebase auth
            // await createUserWithEmailAndPassword(auth, email, password);
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            if (user) {
                // Create a document for the user in the "Users" collection with their email and empty save configurations
                // await setDoc(doc(firestore, "Users", user.email), {
                //     email: user.email,
                //     saveConfigurations: [],
                // });
                // Redirect the user to the login page or another page
            }

            // Redirect the user to the login page or another page
        } catch (error) {
            // Handle registration error
            // setError(error.message);
        }
    };

    return (
        <>
            <AppHeader />
            <main className={styles.main}>
                <h1 className={styles.pageTitle}>Register</h1>
                {/*<p>{error}</p>*/}
                <form onSubmit={handleRegistration}>
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
                    <button type="submit">Register</button>
                </form>
            </main>
        </>
    );
};

export default Register;
