import React from 'react';
import Header from "../Core/Header/Header";
import {Redirect, Route, Switch} from "react-router";
import styled from "styled-components";
import ApartmentsContainer from "../Apartment/ApartmentsContainer/ApartmentsContainer";
import ApartmentContainer from "../Apartment/ApartmentContainer/ApartmentContainer";
import ApartmentFormContainer from "../Apartment/ApartmentFormContainer/ApartmentFormContainer";
import BookingFormContainer from "../Booking/BookingFormContainer/BookingFormContainer";
import BookingsContainer from "../Booking/BookingsContainer/BookingsContainer";
import ClientFormContainer from "../Client/ClientFormContainer/ClientFormContainer";
import ClientDetailsContainer from "../Client/ClientDetailsContainer/ClientDetailsContainer";
import ClientsContainer from "../Client/ClientsContainer/ClientsContainer";
import BookingDetailsContainer from "../Booking/BookingDetailsContainer/BookingDetailsContainer";

const BodyWrapper = styled.div`
  flex: 1;
`;

const Secured: React.FC = () => (
    <React.Fragment>
        <Header/>
        <BodyWrapper>
            <Switch>
                <Route path="/bookings/add">
                    <BookingFormContainer/>
                </Route>
                <Route path="/bookings/:id">
                    <BookingDetailsContainer/>
                </Route>
                <Route path="/bookings">
                    <BookingsContainer/>
                </Route>
                <Route path="/clients/add">
                    <ClientFormContainer/>
                </Route>
                <Route path="/clients/:id">
                    <ClientDetailsContainer/>
                </Route>
                <Route path="/clients">
                    <ClientsContainer/>
                </Route>
                <Route path="/apartments/add">
                    <ApartmentFormContainer/>
                </Route>
                <Route path="/apartments/:id">
                    <ApartmentContainer/>
                </Route>
                <Route path="/apartments">
                    <ApartmentsContainer/>
                </Route>
                <Route path={'/'}>
                    <Redirect to={'/apartments'}/>
                </Route>
            </Switch>
        </BodyWrapper>
    </React.Fragment>
);

export default Secured;
