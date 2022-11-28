import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Catalogo } from "./pages/Catalogo";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Catalogo/>,
        errorElement: <div>404</div>,
    }
  ]);

export function AppRoutes(){
    return <RouterProvider router={router} />;
}