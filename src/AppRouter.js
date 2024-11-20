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
import Sales from './pages/Sales/Sales';
import JurisAbout from './pages/JurisAbout/JurisAbout';
import PublishedTitlesScreen from './pages/PublishedTitlesScreen';
import PublishWithJuris from './pages/PublishWithJuris';
import PublishWithUs from './pages/PublishWithUs';
import Enquiry from './pages/Enquiry';
import OpenAccess from './pages/OpenAccess';
import Resources from './pages/Resources';
import Brills from './pages/Brills';
import Jove from './pages/Jove';
import AcquisitionCommissioning from './pages/AcquisitionCommissioning/AcquisitionCommissioning';
import EditorialProduction from './pages/EditorialProduction/EditorialProduction';
import Marketing from './pages/Marketing/Marketing';
import SalesSupport from './pages/SalesSupport/SalesSupport';
import Writefulls from './pages/Writefull';
import ThomsonAbout from './pages/ThomsonAbout/ThomsonAbout';
import ContactUs from './pages/ContactUs';
import ReferenceResource from './pages/ahpi/lifestyleasmedicine/ReferenceResource';
import Services from './pages/Services';
import PublishedTitlesThompson from './pages/PublishedTitlesThompson';

const AppRouter=()=> {

  return (
    <Router>
        <Routes>
            <Route exact path="/" Component={HomeScreen} />
            <Route exact path="/leadership/management" Component={ManagementScreen} />
            <Route exact path="/leadership/advisory" Component={AdvisoryScreen} />
            <Route exact path="/leadership/acquisition" Component={AcquisitionCommissioning} />
            <Route exact path="/leadership/editorial" Component={EditorialProduction} />
            <Route exact path="/leadership/sales" Component={Sales} />
            <Route exact path="/leadership/finance" Component={Marketing} />
            <Route exact path="/leadership/salessupport" Component={SalesSupport} />
            <Route exact path="/juris/about" Component={JurisAbout} />
            <Route exact path="/juris/publishedtitle" Component={PublishedTitlesScreen} />
            <Route exact path="/juris/publishwithjuris" Component={PublishWithJuris} />
            <Route exact path="/thomson/about" Component={ThomsonAbout} />
            <Route exact path="/thomson/publishedtitle" Component={PublishedTitlesThompson} />
            <Route exact path="/thomson/publishwithus" Component={PublishWithUs} />
            <Route exact path="/representation/brill" Component={Brills} />
            <Route exact path="/representation/writefull" Component={Writefulls} />
            <Route exact path="/representation/jove" Component={Jove} />
            <Route exact path="/representation/enquiry" Component={Enquiry} />
            <Route exact path="/openaccess" Component={OpenAccess} />
            <Route exact path="/resources" Component={Resources} />
            <Route exact path="/contactus" Component={ContactUs} />
            <Route exact path="/sevices" Component={Services} />
            <Route exact path="/ahpi/lifestyleasmedicine/references" Component={ReferenceResource} />

            <Route exact path="/admin/*" Component={DefaultPage}/>
        </Routes>
    </Router>
  );
}


export default AppRouter;
