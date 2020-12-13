import {Redirect, Route, RouteProps} from "react-router";
import React, {useContext} from "react";
import {AuthContext} from "../../../contextes/user.context";

export const GuardedRoute: React.FC<RouteProps> = (props) => {
    const authContext = useContext(AuthContext);
    return (
        <Route {...props}>
            {authContext.user ? props.children : <Redirect to={'/login'}/>}
        </Route>
    )
};
