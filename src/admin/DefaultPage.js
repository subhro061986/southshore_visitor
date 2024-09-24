import React, { useEffect, useState, } from "react";
import './assets/css/style.css';
import NavigationPage from "./NavigationPage";
import { AuthProvider } from "./Context/Authcontext";
import { AdminProvider } from "./Context/Admincontext";


const DefaultPage = () => {

    return(
        <AuthProvider>
            <AdminProvider>
                <NavigationPage />
            </AdminProvider>
        </AuthProvider>
    )
}

export default DefaultPage;