import React, { useEffect, useState, } from "react";
import Banner from "../../components/Banner";
import FooterSouthsore from "../../components/FooterSouthsore";
import { Header } from "../../components/Header";
import NavBarSouthsore from "../../components/NavBarSouthshore";
import management_person_1 from "../../assets/images/management_person_1.png";
import management_person_2 from "../../assets/images/management_person_2.png";
import management_person_3 from "../../assets/images/management_person_3.png";
import { PersonCard } from "../../components/PersonCard/PersonCard";
import {UserProfile} from "../../Context/Usercontext";
import Config from "../../Config/Config.json";


const AdvisoryScreen = () => {

    const { allLeader } = UserProfile()

    const managementPeopleDetails = [
        {
            name: "Jakob Spence",
            about: "Maecenas euismod arcu leo ante consequat. Orci fermentum euismod nascetur, fermentum hendrerit lobortis. Maximus ullamcorper elit pellentesque faucibus purus, ornare orci himenaeos. Quisque ex cubilia; feugiat mauris ex magnis est dapibus. Hendrerit facilisi metus lacus sit nisi. Sagittis mauris cursus suscipit rutrum id vestibulum pretium dis class. Amet ut feugiat pellentesque sociosqu commodo",
            linkedinLink: "#",
            imageLink: management_person_1
        },
        {
            name: "Nehemiah Berry",
            about: "Viverra cursus ante penatibus euismod gravida suscipit. Eu mus vel posuere; nullam nam ultricies accumsan. Euismod adipiscing tristique aenean nunc maximus litora. Porttitor mauris bibendum, efficitur parturient sodales mus donec suspendisse. Felis nibh donec lacus nisi lobortis mollis potenti. Elit leo lectus inceptos tristique",
            linkedinLink: "#",
            imageLink: management_person_2
        },
        {
            name: "Madisyn Andersen",
            about: "Integer venenatis facilisi bibendum ante enim nascetur. Vitae ipsum rutrum varius sollicitudin gravida ridiculus. Quis id duis metus vel dignissim mollis aliquam. Auctor porta vivamus enim rhoncus lacus eget. Eros facilisis convallis etiam nisi semper tristique. Pretium velit platea venenatis molestie mauris mollis. Placerat libero ad Inceptos nunc suscipit penatibus hac tincidunt lorem arcu",
            linkedinLink: "#",
            imageLink: management_person_3
        },
        {
            name: "Nehemiah Berry",
            about: "Viverra cursus ante penatibus euismod gravida suscipit. Eu mus vel posuere; nullam nam ultricies accumsan. Euismod adipiscing tristique aenean nunc maximus litora. Porttitor mauris bibendum, efficitur parturient sodales mus donec suspendisse. Felis nibh donec lacus nisi lobortis mollis potenti. Elit leo lectus inceptos tristique",
            linkedinLink: "#",
            imageLink: management_person_2
        },
        {
            name: "Madisyn Andersen",
            about: "Integer venenatis facilisi bibendum ante enim nascetur. Vitae ipsum rutrum varius sollicitudin gravida ridiculus. Quis id duis metus vel dignissim mollis aliquam. Auctor porta vivamus enim rhoncus lacus eget. Eros facilisis convallis etiam nisi semper tristique. Pretium velit platea venenatis molestie mauris mollis. Placerat libero ad Inceptos nunc suscipit penatibus hac tincidunt lorem arcu",
            linkedinLink: "#",
            imageLink: management_person_3
        }
    ]

    return (
        <>
            <div class="container">
                <Header />
                <NavBarSouthsore />

                <div className="d-flex justify-content-center mt-4">
                    <h1 className="title">Advisory Board</h1>
                </div>
                <div className="row">
                    {
                        allLeader.map((person, index) => {
                            return (
                                person.leadershipCategoryId === 2 && (
                                    <div key={index} className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
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

export default AdvisoryScreen;