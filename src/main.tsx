import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { A11yUserPreferences } from "@react-three/a11y";
import { store } from "./Redux/store";
import Loading from "./components/organisms/Loading/Loading";
import AccountPage from "./pages/AccountPage/AccountPage";
import PageTitle from "./pages/PageTitle";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));
const SelectCar = lazy(() => import("./pages/SelectCar/SelectCar"));
const ConfigureCar = lazy(() => import("./pages/ConfigureCar/ConfigureCar"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<Loading />}>
                <PageTitle title="Home" />
                <HomePage />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/select-car",
        element: (
            <Suspense fallback={<Loading />}>
                <PageTitle title="Select" />
                <SelectCar />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/configure-car/:carId",
        element: (
            <Suspense fallback={<Loading />}>
                <PageTitle title="Configure" />
                <ConfigureCar />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: (
            <Suspense fallback={<Loading />}>
                <PageTitle title="Login" />
                <Login />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/register",
        element: (
            <Suspense fallback={<Loading />}>
                <PageTitle title="Register" />
                <Register />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/account",
        element: (
            <Suspense fallback={<Loading />}>
                <PageTitle title="Account" />
                <AccountPage />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <A11yUserPreferences>
                <RouterProvider router={router} />
            </A11yUserPreferences>
        </Provider>
    </React.StrictMode>,
);
