import React, { useEffect, useState, } from "react";
import FooterSouthsore from "../../components/FooterSouthsore";
import { Header } from "../../components/Header";
import NavBarSouthsore from "../../components/NavBarSouthshore";
import management_person_1 from "../../assets/images/management_person_1.png";
import management_person_2 from "../../assets/images/management_person_2.png";
import management_person_3 from "../../assets/images/management_person_3.png";
import { PersonCard } from "../../components/PersonCard/PersonCard";
import {UserProfile} from "../../Context/Usercontext";
import Config from "../../Config/Config.json";

const ManagementScreen = () => {

    const {allLeader, Get_All_Leader} = UserProfile()

    // useEffect(() => {
    //     Get_All_Leader();
    // }, []);

    

    return (
        <>
            <div class="container">
                <Header />
                <NavBarSouthsore />

                <div className="d-flex justify-content-center mt-4">
                    <h1 className="management-title">Management</h1>
                </div>
                <div className="row">
                    {
                        allLeader.map((person, index) => {
                            return (
                                person.leadershipCategoryId === 1  && (
                                <div key={index} className="col-12 col-md-6 col-xl-4 mt-2 mb-2">
                                    <PersonCard
                                        name={person?.personName}
                                        about={person?.description}
                                        imageLink={Config.API_URL + Config.LEADER_IMAGE_URL + "/" + person.imgLink + '?d=' + new Date()}
                                        // {person?.imageLink}
                                        linkedinLink={person?.linkedin}
                                        email={person?.email}
                                    />
                                </div>
                                )
                            )

                        })
                    }
                </div>
            </div>

            <FooterSouthsore />
        </>
    )
}

export default ManagementScreen;