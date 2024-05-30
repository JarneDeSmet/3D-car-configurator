import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./Redux/store";
import Loading from "./components/organisms/Loading/Loading";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));
const Layout = lazy(() => import("./pages/Layout/Layout"));
const SelectCar = lazy(() => import("./pages/SelectCar/SelectCar"));
const ConfigureCar = lazy(() => import("./pages/ConfigureCar/ConfigureCar"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<Loading />}>
                        <HomePage />
                    </Suspense>
                ),
            },
            {
                path: "/select-car",
                element: (
                    <Suspense fallback={<Loading />}>
                        <SelectCar />
                    </Suspense>
                ),
            },
            {
                path: "/configure-car/:carId",
                element: (
                    <Suspense fallback={<Loading />}>
                        <ConfigureCar />
                    </Suspense>
                ),
            },
            {
                path: "/login",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Login />
                    </Suspense>
                ),
            },
            {
                path: "/register",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Register />
                    </Suspense>
                ),
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
