import React, {useContext} from 'react';
import {Redirect, Route, RouteProps} from "react-router";
import {AuthContext} from "../../../contextes/user.context";

const LoginRoute: React.FC<RouteProps> = (props) => {
    const authContext = useContext(AuthContext);
    return (
        <Route {...props}>
            {!authContext.user ? props.children : <Redirect to={'/'}/>}
        </Route>
    )
};

export default LoginRoute;
