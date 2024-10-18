import React, {
  createContext,
  useState,
  useContext,
  useEffect
} from "react";
import Config from "../Config/Config.json"
import axios from "axios";
import { useAuth } from "./Authcontext";
import LoadingOverlay from 'react-loading-overlay-ts';

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [allBanner, setAllBanner] = useState([])
  const [allLeader, setAllLeader] = useState([])
  const [allPublisherResources, setAllPublisherResources] = useState([])
  const [allResources, setAllResources] = useState([])
  const [allPublishedTitle, setAllPublishedTitle] = useState([])
  const [allOpenAccess, setAllOpenAccess] = useState([])
  
  useEffect(() => {
    Get_All_Banner();
    Get_All_Leader();
    Get_All_Publishers_Resources();
    Get_All_Resources();
    Get_All_Published_Title();
    Get_All_Open_Access();
  }, []);

  // Banner

  
  const Get_All_Banner = async (onlyActive) => {
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_BANNER + "?onlyActive=" + 1,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      
      // console.log("Get All Banner response", response);
      setAllBanner(response.data.output);
      return response;
    }
    catch (error) {
      console.log("Get All Banner CONTEXT ERROR: ", error);
    }
  }

  // Leadership

  const Get_All_Leader = async (onlyActive) => {
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_LEADER + "?onlyActive=" + 1,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      
      // console.log("Get All Leader response", response);
      setAllLeader(response.data.output);
      return response;
    }
    catch (error) {
      console.log("Get All Leader CONTEXT ERROR: ", error);
    }
  }

  // Publishers

  const Get_All_Publishers_Resources = async (onlyActive) => {
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL__PUBLISHER_RESOURCES + "?onlyActive=" + 0,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })

      // console.log("Get All Publishers Resources response", response);
      setAllPublisherResources(response.data.output);
      return response;
    }
    catch (error) {
      console.log("Get All Publishers Resources CONTEXT ERROR: ", error);
    }
  }

  // Resources

  const Get_All_Resources = async (onlyActive) => {
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_RESOURCES + "?onlyActive=" + 1,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })

      // console.log("Get All Resources response", response);
      setAllResources(response.data.output);
      return response;
    }
    catch (error) {
      console.log("Get All Resources CONTEXT ERROR: ", error);
    }
  }

  const getResourceById = async (id) => {
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_RESOURCES + "/" + id,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      // console.log("GET Resource  BY ID: ", response);
      return response;
    }
    catch (error) {
      console.log("Get_Resource_by_id_error : ", error);
    }
  }

  // Published Title

  const Get_All_Published_Title = async () => {
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_PUBLISHED_TITLE,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })

      // console.log("Get All Published Title response", response);
      setAllPublishedTitle(response.data);
      return response;
    }
    catch (error) {
      console.log("Get All Published Title CONTEXT ERROR: ", error);
    }
  }

   //Open Access

   const Get_All_Open_Access = async (onlyActive) => {
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_OPEN_ACCESS + "?onlyActive=" + 1,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })

      console.log("Get All Open_Access response", response);
      setAllOpenAccess(response.data.output);
      return response;
    }
    catch (error) {
      console.log("Get All Open_Access CONTEXT ERROR: ", error);
    }
  }

  const getOpenAccessById = async (id) => {
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_OPEN_ACCESS + "/" + id,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      console.log("GET Open Access  BY ID: ", response);
      return response;
    }
    catch (error) {
      console.log("Get_Open_Access_by_id_error : ", error);
    }
  }

  // **------------publishwithus---------

  const PublishWithUs = async (arg) => {
    // console.log(arg)
    try {
      const response = await axios.post(Config.API_URL + Config.PUBLISH_WITH_US, arg,
        {
          headers: {
            'Content-Type': 'application/json'
          },

        })

        console.log("Publish With Us Response :", response)

      // if (response?.status === 200) {
        return response
      // }



    } catch (error) {

      console.log("registration context error : ", error);
    }

  }

  const Enquiry = async (arg) => {
    // console.log(arg)
    try {
      const response = await axios.post(Config.API_URL + Config.ENQUIRY, arg,
        {
          headers: {
            'Content-Type': 'application/json'
          },

        })

        console.log("Enquiry Response :", response)

      // if (response?.status === 200) {
        return response
      // }



    } catch (error) {

      console.log("Enquiry context error : ", error);
    }

  }

  return (
    <UserContext.Provider
      value={{
        Get_All_Banner,
        allBanner,
        Get_All_Leader,
        allLeader,
        Get_All_Publishers_Resources,
        allPublisherResources,
        Get_All_Resources,
        allResources,
        Get_All_Published_Title,
        allPublishedTitle,
        getResourceById,
        Get_All_Open_Access,
        allOpenAccess,
        getOpenAccessById,
        PublishWithUs,
        Enquiry
      }}
    >
      {/* <LoadingOverlay
        active={isActive}
        spinner
        text='Loading your content...'
      >
        {children}
      </LoadingOverlay> */}
      {children}
    </UserContext.Provider>
  )
}


function UserProfile() {
  const context = useContext(UserContext)

  return context
}


export { UserContext, UserProvider, UserProfile }


