import React from 'react';
import ApartmentForm from "../../../components/Apartment/ApartmentForm/ApartmentForm";
import {Apartment} from "../../../modeles/apartment";


const ApartmentFormContainer: React.FC = () => {
    const handleSubmit = (apartmment: Apartment) => {
        alert('the form works but does not submit data to the server');
    };
    return (
        <ApartmentForm handleSubmit={handleSubmit}/>
    );
};

export default ApartmentFormContainer;
