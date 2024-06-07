import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./pages/Home"
import Relatorio from "./pages/Relatorio"


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Route Component = { Home }  path="/" />
            <Route Component = { Relatorio }  path="/relatorios" />
        </BrowserRouter>
    )
 }

export default AppRoutes;