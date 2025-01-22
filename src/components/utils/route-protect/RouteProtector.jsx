import { Outlet, Navigate } from "react-router-dom";

const RouteProtected = () => {
    // check if there is token in local storage, if there is no token it means the end user is not logged in and send to login page
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default RouteProtected;
