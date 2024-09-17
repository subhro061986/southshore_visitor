// import './Css.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import React, {
useState,
useEffect
} from "react";
import LoginPage from './pages/LoginPage';
import ManageBanner from './pages/ManageBanner';
import ManageOpenAccess from './pages/ManageOpenAccess';

const NavigationPage=()=> {

  return (

        <Routes>
            <Route exact path="/" Component={LoginPage}/>
            <Route exact path="/managebanner" Component={ManageBanner}/>
            <Route exact path="/manageopenaccess" Component={ManageOpenAccess}/>
        </Routes>
    
  );
}


export default NavigationPage;
