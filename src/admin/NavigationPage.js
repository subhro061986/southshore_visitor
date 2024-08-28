// import './Css.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import React, {
useState,
useEffect
} from "react";
import LoginPage from './pages/LoginPage';

const NavigationPage=()=> {

  return (

        <Routes>
            <Route exact path="/" Component={LoginPage}/>
        </Routes>
    
  );
}


export default NavigationPage;
