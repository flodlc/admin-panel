import React, {useContext} from 'react';
import styled, {} from "styled-components";
import {AuthContext} from "../../contextes/user.context";
import {Card} from "../../components/UI/Styled";
import LoginForm from "../../components/Core/LoginForm/LoginForm";

const Wrapper = styled(Card)`
  margin: auto;
  width: 400px;
`;

const Login: React.FC = () => {
    const authContext = useContext(AuthContext)
    const handler = (values: any) => {
        const user = {email: values.email};
        localStorage.setItem('user', JSON.stringify(user));
        authContext.setUser(user);
    };

    return (
        <Wrapper data-testid="Login">
            <LoginForm submitHandler={handler}/>
        </Wrapper>
    );
};

export default Login;
