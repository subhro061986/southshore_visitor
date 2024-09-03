import React, { useEffect, useState, } from "react";
import Banner from "../../components/Banner";
import FooterSouthsore from "../../components/FooterSouthsore";
import { Header } from "../../components/Header";
import logoLink from '../../assets/images/logo.svg';
import NavBarSouthsore from "../../components/NavBarSouthshore";
import management_person_1 from "../../assets/images/management_person_1.png";
import management_person_2 from "../../assets/images/management_person_2.png";
import management_person_3 from "../../assets/images/management_person_3.png";
import { PersonCard } from "../../components/PersonCard/PersonCard";


const AdvisoryScreen = () => {

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
                <Header
                    logoLink={logoLink}
                    logoWidth={55}
                    logoHeight={54}
                />
                <NavBarSouthsore />

                <div className="d-flex justify-content-center mt-3">
                    <h1>Management</h1>
                </div>
                <div className="row">
                        {
                            managementPeopleDetails.map((person, index) => {
                                return (
                                    <div key={index} className="col-12 col-md-6 col-xl-3">
                                        <PersonCard
                                            name={person?.name}
                                            about={person?.about}
                                            imageLink={person?.imageLink}
                                        />
                                    </div>
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