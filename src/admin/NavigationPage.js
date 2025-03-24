// import './Css.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import React, {
useState,
useEffect
} from "react";
import LoginPage from './pages/LoginPage';
import ManageBanner from './pages/ManageBanner';
import ManageOpenAccess from './pages/ManageOpenAccess';
import ManagePublishedTitles from './pages/ManagePublishedTitles';
import ManageLeadership from './pages/ManageLeadership';
import ManageResources from './pages/ManageResources';
import ManageSnippets from './pages/ManageSnippets';

const NavigationPage=()=> {

  return (

        <Routes>
            <Route exact path="/" Component={LoginPage}/>
            <Route exact path="/managebanner" Component={ManageBanner}/>
            <Route exact path="/manageopenaccess" Component={ManageOpenAccess}/>
            <Route exact path="/managpublishedtitles" Component={ManagePublishedTitles}/>
            <Route exact path="/manageleadership" Component={ManageLeadership}/>
            <Route exact path="/manageresources" Component={ManageResources}/>
            <Route exact path="/managesnippets" Component={ManageSnippets}/>
        </Routes>
    
  );
}


export default NavigationPage;
