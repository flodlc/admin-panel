import React, {useEffect, useState} from 'react';
import './App.css';
import {DefaultTheme, ThemeProvider} from "styled-components";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {theme} from "./components/UI/Styled";
import {AuthContext} from './contextes/user.context';
import LoginRoute from "./containers/Core/LoginRoute/LoginRoute";
import {GuardedRoute} from "./containers/Core/GuardedRoute/guardedRoute";
import Login from "./containers/Login/Login";
import Secured from "./containers/Secured/Secured";

require('dotenv').config();

function App() {
    const [user, setUser] = useState<any | null | undefined>(undefined);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const user = storedUser && JSON.parse(storedUser);
        setUser(user || null);
    }, []);
    return (
        user !== undefined ?
            <ThemeProvider theme={theme as DefaultTheme}>
                <AuthContext.Provider value={{user, setUser}}>
                    <Router>
                        <Switch>
                            <LoginRoute path="/login">
                                <Login/>
                            </LoginRoute>
                            <GuardedRoute path={"/"}>
                                <Secured/>
                            </GuardedRoute>
                        </Switch>
                    </Router>
                </AuthContext.Provider>
            </ThemeProvider>
            :
            <React.Fragment/>
    );
}

export default App;
