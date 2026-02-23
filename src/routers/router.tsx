import { createBrowserRouter, Navigate } from "react-router-dom";
import { GlobalLayout } from "../layouts/DefaultLayout";
import { PythonPage } from "@/pages/python";
import { SettingPage } from "@/pages/setting";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <GlobalLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to="/go"/>
            },
            {
                path: "python",
                element: <PythonPage/>
            },
            {
                path: "settings",
                element: <SettingPage/>
            }
        ]
    }
])