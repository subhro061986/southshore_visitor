// import './Css.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import React, {
useState,
useEffect
} from "react";
import HomeScreen from './pages/HomeScreen';
import DefaultPage from './admin/DefaultPage';

const AppRouter=()=> {

  return (
    <Router>
        <Routes>
            <Route exact path="/" Component={HomeScreen}/>
            <Route exact path="/admin/*" Component={DefaultPage}/>
        </Routes>
    </Router>
  );
}


export default AppRouter;
