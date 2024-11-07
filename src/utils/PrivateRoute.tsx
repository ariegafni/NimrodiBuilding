import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

interface IPrivateRoute{
    children: ReactNode,
}
//לא באמת מקבל מידע זה רק בשביל לראות שעובד הגישה תמיד טרו
const PrivateRoute = ({ children}:IPrivateRoute ) => {
    //FILL HERE 3.6
    const navigate = useNavigate();
    const Access  = true;
    useEffect(() => {
        if(Access){
            navigate("/forbidden")
        }
    },[Access, navigate]);
    
    return Access? children : null;
    
};

export default PrivateRoute