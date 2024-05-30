import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./Redux/store";
import Loading from "./components/organisms/Loading/Loading";
import AccountPage from "./pages/AccountPage/AccountPage";

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
                <HomePage />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/select-car",
        element: (
            <Suspense fallback={<Loading />}>
                <SelectCar />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/configure-car/:carId",
        element: (
            <Suspense fallback={<Loading />}>
                <ConfigureCar />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: (
            <Suspense fallback={<Loading />}>
                <Login />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/register",
        element: (
            <Suspense fallback={<Loading />}>
                <Register />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/account",
        element: (
            <Suspense fallback={<Loading />}>
                <AccountPage />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
