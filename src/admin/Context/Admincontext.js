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

  const { authData } = useAuth();

  const [isActive, setActive] = useState(false)
  const [allBanner, setAllBanner] = useState([])
  const [allLeader, setAllLeader] = useState([])
  const [allPublishedTitle, setAllPublishedTitle] = useState([])
  const [allPublisher, setAllPublisher] = useState([])
  const [allResources, setAllResources] = useState([])
  const [allPublisherResources, setAllPublisherResources] = useState([])
  const [allOpenAccess, setAllOpenAccess] = useState([])

  const [activeTab, setActiveTab] = useState("managebanner");

  useEffect(() => {
    Get_All_Banner();
    Get_All_Leader();
    Get_All_Published_Title();
    Get_All_Publisher();
    Get_All_Resources();
    Get_All_Publishers_Resources();
    Get_All_Open_Access();
  }, []);

  // Banner

  const createBanner = async (formData) => {
    try {
      setActive(true)
      const response = await axios.post(Config.API_URL + Config.CREATE_BANNER, formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + authData
          },
        })

      // console.log("Banner create response", response);
      Get_All_Banner();
      setActive(false)
      return response;
    }
    catch (error) {
      setActive(false)
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

      // console.log("Get All Banner response", response);
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
      // console.log("GET Banner BY ID: ", response);
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
      setActive(true)
      const response = await axios.post(Config.API_URL + Config.EDIT_BANNER + "/" + id, args,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + authData
          },
        })
      Get_All_Banner();
      setActive(false)
      // console.log("EDIT Banner RESPONSE : ", response);
      return response;
    }
    catch (error) {
      setActive(false)
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
      setActive(true)
      const response = await axios.post(Config.API_URL + Config.CREATE_LEADER, formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + authData
          },
        })

      // console.log("Leader create response", response);
      Get_All_Leader();
      setActive(false)
      return response;
    }
    catch (error) {
      setActive(false)
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
      // console.log("GET Leader BY ID: ", response);
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
      setActive(true)
      const response = await axios.post(Config.API_URL + Config.EDIT_LEADER + "/" + id, args,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + authData
          },
        })
      Get_All_Leader();
      // console.log("EDIT Leader RESPONSE : ", response);
      setActive(false)
      return response;
    }
    catch (error) {
      setActive(false)
      console.log("EDIT_Leader_Error : ", error)
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

      console.log("Get All Published Title response", response);
      setAllPublishedTitle(response.data);
      return response;
    }
    catch (error) {
      console.log("Get All Published Title CONTEXT ERROR: ", error);
    }
  }

  const Get_All_Publisher = async () => {
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_PUBLISHER,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })

      // console.log("Get All Publisher response", response);
      setAllPublisher(response.data);
      return response;
    }
    catch (error) {
      console.log("Get All Publisher CONTEXT ERROR: ", error);
    }
  }

  const createPublishedTitle = async (formData) => {
    try {
      setActive(true)
      const response = await axios.post(Config.API_URL + Config.CREATE_PUBLISHED_TITLE, formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + authData
          },
        })

      // console.log("Published Title create response", response);
      Get_All_Published_Title();
      setActive(false)
      return response;
    }
    catch (error) {
      setActive(false)
      console.log("Published Title CONTEXT ERROR: ", error);
    }
  }

  const editPublishedTitle = async (id, args) => {
    // console.log("Args :", args);
    // console.log("Id :", id);
    try {
      setActive(true)
      const response = await axios.post(Config.API_URL + Config.EDIT_PUBLISHED_TITLE + "/" + id, args,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + authData
          },
        })
      Get_All_Published_Title();
      // console.log("EDIT Published Title RESPONSE : ", response);
      setActive(false)
      return response;
    }
    catch (error) {
      setActive(false)
      console.log("EDIT_Published_Title_Error : ", error)
    }
  }

  const getPublishedTitleById = async (id) => {
    try {
      const response = await axios.get(Config.API_URL + "published-titles/" + id,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authData
          },
        })
      // console.log("GET Published title  BY ID: ", response);
      return response;
    }
    catch (error) {
      console.log("Get_published_title_by_id_error : ", error);
    }
  }

  // Resources

  const Get_All_Resources = async (onlyActive) => {
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_RESOURCES + "?onlyActive=" + 0,
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

  const createResource = async (formData) => {
    try {
      setActive(true)
      const response = await axios.post(Config.API_URL + Config.CREATE_RESOURCE, formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + authData
          },
        })

      // console.log("Resource create response", response);
      Get_All_Resources();
      setActive(false)
      return response;
    }
    catch (error) {
      setActive(false)
      console.log("Resource CONTEXT ERROR: ", error);
    }
  }

  const editResource = async (id, args) => {
    // console.log("Args :", args);
    // console.log("Id :", id);
    try {
      setActive(true)
      const response = await axios.post(Config.API_URL + Config.EDIT_RESOURCE + "/" + id, args,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + authData
          },
        })
      Get_All_Resources();
      // console.log("EDIT Resource RESPONSE : ", response);
      setActive(false)
      return response;
    }
    catch (error) {
      setActive(false)
      console.log("EDIT_Resource_Error : ", error)
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

  //Open Access

  const Get_All_Open_Access = async (onlyActive) => {
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_OPEN_ACCESS + "?onlyActive=" + 0,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })

      // console.log("Get All Open_Access response", response);
      setAllOpenAccess(response.data.output);
      return response;
    }
    catch (error) {
      console.log("Get All Open_Access CONTEXT ERROR: ", error);
    }
  }

  const createOpen_Access = async (formData) => {
    try {
      setActive(true)
      const response = await axios.post(Config.API_URL + Config.CREATE_OPEN_ACCESS, formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + authData
          },
        })

      // console.log("Resource create response", response);
      Get_All_Open_Access();
      setActive(false)
      return response;
    }
    catch (error) {
      setActive(false)
      console.log("Resource CONTEXT ERROR: ", error);
    }
  }

  const editOpenAccess = async (id, args) => {
    // console.log("Args :", args);
    // console.log("Id :", id);
    try {
      setActive(true)
      const response = await axios.post(Config.API_URL + Config.EDIT_OPEN_ACCESS + "/" + id, args,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + authData
          },
        })
        Get_All_Open_Access();
      // console.log("EDIT Open Access RESPONSE : ", response);
      setActive(false)
      return response;
    }
    catch (error) {
      setActive(false)
      console.log("EDIT_Open_Access_Error : ", error)
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
      // console.log("GET Open Access  BY ID: ", response);
      return response;
    }
    catch (error) {
      console.log("Get_Open_Access_by_id_error : ", error);
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
        getLeaderById,
        Get_All_Published_Title,
        allPublishedTitle,
        Get_All_Publisher,
        allPublisher,
        createPublishedTitle,
        editPublishedTitle,
        getPublishedTitleById,
        Get_All_Resources,
        allResources,
        Get_All_Publishers_Resources,
        createResource,
        allPublisherResources,
        editResource,
        getResourceById,
        Get_All_Open_Access,
        allOpenAccess,
        createOpen_Access,
        editOpenAccess,
        getOpenAccessById,
        activeTab, setActiveTab
      }}
    >
      <LoadingOverlay
        active={isActive}
        spinner
        text='Loading your content...'
        styles={{
          overlay: (base) => ({
            ...base,
            zIndex: 9999, // Ensure it appears above other elements like modals
          }),
        }}
      >
        {children}
      </LoadingOverlay>
      {/* {children} */}
    </AdminContext.Provider>
  )
}


function AdminProfile() {
  const context = useContext(AdminContext)

  return context
}


export { AdminContext, AdminProvider, AdminProfile }


