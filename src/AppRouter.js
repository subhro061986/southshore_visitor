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
import JurisAbout from './pages/JurisAbout/JurisAbout';
import PublishedTitlesScreen from './pages/PublishedTitlesScreen';
import PublishWithJuris from './pages/PublishWithJuris';
<<<<<<< HEAD
import AcquisitionScreen from './pages/Acquisition/Acquisition';
=======
import PublishWithUs from './pages/PublishWithUs';
import Enquiry from './pages/Enquiry';
import OpenAccess from './pages/OpenAccess';
>>>>>>> master
const AppRouter=()=> {

  return (
    <Router>
        <Routes>
            <Route exact path="/" Component={HomeScreen} />
            <Route exact path="/leadership/management" Component={ManagementScreen} />
            <Route exact path="/leadership/advisory" Component={AdvisoryScreen} />
<<<<<<< HEAD
            <Route exact path="/leadership/acquisition" Component={AcquisitionScreen} />

            <Route exact path="/juris/about" Component={JurisAbout} />
=======
>>>>>>> master

            <Route exact path="/juris/about" Component={JurisAbout} />
            <Route exact path="/juris/publishedtitle" Component={PublishedTitlesScreen} />
            <Route exact path="/juris/publishwithjuris" Component={PublishWithJuris} />

            <Route exact path="/thomson/publishwithus" Component={PublishWithUs} />

            <Route exact path="/representation/enquiry" Component={Enquiry} />

            <Route exact path="/openaccess" Component={OpenAccess} />

            <Route exact path="/admin/*" Component={DefaultPage}/>
        </Routes>
    </Router>
  );
}


export default AppRouter;
