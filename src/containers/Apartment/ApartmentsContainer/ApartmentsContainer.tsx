import {useEffect, useState} from "react";
import {Apartment} from "../../../modeles/apartment";
import apartmentService from "../../../services/apartment.service";
import React from "react";
import {Spinner} from "../../../components/UI/Styled";
import Appartments from "../../../components/Apartment/Appartments/Appartments";

function useLoadApartments() {
    const [apartments, setApartments] = useState<Apartment[]>();
    useEffect(() => {
        apartmentService
            .getAppartments()
            .then(apartments => {
                setApartments(apartments);
            });
    }, []);
    return apartments;
}


const ApartmentsContainer: React.ComponentType = () => {
    const apartments = useLoadApartments();
    if (apartments === undefined) {
        return <Spinner/>
    } else {
        return <React.Fragment>
            <Appartments apartments={apartments}/>
        </React.Fragment>
    }
};

export default ApartmentsContainer;
