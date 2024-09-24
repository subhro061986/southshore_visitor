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
  
  useEffect(() => {
    Get_All_Banner();
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

  return (
    <AdminContext.Provider
      value={{
        createBanner,
        Get_All_Banner,
        allBanner,
        getBannerById,
        editBanner
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


