import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Catalogo } from "./pages/Catalogo";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Catalogo/>,
        errorElement: <div>Página não Encontrada - 404</div>,
    }
  ], { basename: '/Netflix_Clone/' });

export function AppRoutes(){
    return <RouterProvider router={router} />;
}