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

const AdminContext = createContext();

const AdminProvider = ({ children }) => {

  const [allBanner, setAllBanner] = useState([])
  const [allLeader, setAllLeader] = useState([])
  
  useEffect(() => {
    Get_All_Banner();
    Get_All_Leader();
  }, []);

  // Banner

  const createBanner = async (formData) => {
    try {
      const response = await axios.post(Config.API_URL + Config.CREATE_BANNER, formData ,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      
      console.log("Banner create response", response);
      Get_All_Banner();
      return response;
    }
    catch (error) {
      console.log("PUBLISHER CONTEXT ERROR: ", error);
    }
  }

  const Get_All_Banner = async (onlyActive) => {
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_BANNER + "?onlyActive=" + 0,
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

  const getBannerById = async (id) => {
    try {
      const response = await axios.get(Config.API_URL + Config.GET_BANNER_BY_ID + "/" + id,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      console.log("GET Banner BY ID: ", response);
      return response;
    }
    catch (error) {
      console.log("Get_banner_by_id_error : ", error);
    }
  }

  const editBanner = async (id, args) => {
    // console.log("Args :", args);
    // console.log("Id :", id);
    try {
      const response = await axios.post(Config.API_URL + Config.EDIT_BANNER + "/" + id, args,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      Get_All_Banner();
      console.log("EDIT Banner RESPONSE : ", response);
      return response;
    }
    catch (error) {
      console.log("EDIT_Banner_Error : ", error)
    }
  }

  // Leadership

  const Get_All_Leader = async (onlyActive) => {
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_LEADER + "?onlyActive=" + 0,
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

  const createLeader = async (formData) => {
    try {
      const response = await axios.post(Config.API_URL + Config.CREATE_LEADER, formData ,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      
      console.log("Leader create response", response);
      Get_All_Leader();
      return response;
    }
    catch (error) {
      console.log("Leader CONTEXT ERROR: ", error);
    }
  }

  const getLeaderById = async (id) => {
    try {
      const response = await axios.get(Config.API_URL + Config.GET_LEADER_BY_ID + "/" + id,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      console.log("GET Leader BY ID: ", response);
      return response;
    }
    catch (error) {
      console.log("Get_leader_by_id_error : ", error);
    }
  }

  const editLeader = async (id, args) => {
    // console.log("Args :", args);
    // console.log("Id :", id);
    try {
      const response = await axios.post(Config.API_URL + Config.EDIT_LEADER + "/" + id, args,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      Get_All_Leader();
      console.log("EDIT Leader RESPONSE : ", response);
      return response;
    }
    catch (error) {
      console.log("EDIT_Leader_Error : ", error)
    }
  }

  return (
    <AdminContext.Provider
      value={{
        createBanner,
        Get_All_Banner,
        allBanner,
        getBannerById,
        editBanner,
        Get_All_Leader,
        allLeader,
        createLeader,
        editLeader,
        getLeaderById
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
    </AdminContext.Provider>
  )
}


function AdminProfile() {
  const context = useContext(AdminContext)

  return context
}


export { AdminContext, AdminProvider, AdminProfile }


