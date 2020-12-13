import React, {useEffect, useState} from 'react';
import {Room} from "../../../modeles/room";
import apartmentService from "../../../services/apartment.service";
import {useParams} from "react-router";
import {Spinner} from "../../../components/UI/Styled";
import ApartmentDetails from "../../../components/Apartment/ApartmentDetails/ApartmentDetails";


const ApartmentContainer: React.FC = () => {
    const params = useParams<{ id?: any }>();
    const apartment = useLoadApartment(params.id);

    if (apartment === undefined) {
        return <Spinner/>
    } else {
        return (
            <ApartmentDetails rooms={apartment} data-testid="ApartmentContainer">
                ApartmentContainer Component
            </ApartmentDetails>
        )
    }
};

function useLoadApartment(id: string) {
    const [apartment, setApartment] = useState<Room[]>();
    useEffect(() => {
        apartmentService
            .getAppartment(id)
            .then(apartment => {
                setApartment(apartment);
            })
    }, [id]);
    return apartment;
}

export default ApartmentContainer;
