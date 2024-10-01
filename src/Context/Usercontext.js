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
  
  useEffect(() => {
    Get_All_Banner();
    Get_All_Leader();
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
      
      console.log("Get All Banner response", response);
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
      
      console.log("Get All Leader response", response);
      setAllLeader(response.data.output);
      return response;
    }
    catch (error) {
      console.log("Get All Leader CONTEXT ERROR: ", error);
    }
  }

  

  return (
    <UserContext.Provider
      value={{
        Get_All_Banner,
        allBanner,
        Get_All_Leader,
        allLeader
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


