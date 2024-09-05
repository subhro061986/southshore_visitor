// import './Css.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import React, {
useState,
useEffect
} from "react";
import HomeScreen from './pages/HomeScreen';
import DefaultPage from './admin/DefaultPage';
import ManagementScreen from './pages/Management/ManagementScreen';
import AdvisoryScreen from './pages/Advisory/AdvisoryScreen';
import PublishedTitlesScreen from './pages/PublishedTitlesScreen';
const AppRouter=()=> {

  return (
    <Router>
        <Routes>
            <Route exact path="/" Component={HomeScreen} />
            <Route exact path="/leadership/management" Component={ManagementScreen} />
            <Route exact path="/leadership/advisory" Component={AdvisoryScreen} />
            <Route exact path="/leadership/publishedtitle" Component={PublishedTitlesScreen} />
            <Route exact path="/admin/*" Component={DefaultPage}/>
        </Routes>
    </Router>
  );
}


export default AppRouter;
