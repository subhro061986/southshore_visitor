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
  
  useEffect(() => {

  }, []);

  const createBanner = async (formData) => {
    try {
      const response = await axios.post(Config.API_URL + Config.CREATE_BANNER, formData ,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      
      console.log("Banner create response", response);
      return response;
    }
    catch (error) {
      console.log("PUBLISHER CONTEXT ERROR: ", error);
    }
  }

  return (
    <AdminContext.Provider
      value={{
        createBanner
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


