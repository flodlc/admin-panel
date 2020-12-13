import React, {useEffect, useState} from 'react';
import {Client} from "../../../modeles/client";
import clientService from "../../../services/client.service";
import {useParams} from "react-router";
import {NoDataText, Spinner} from "../../../components/UI/Styled";
import ClientDetails from "../../../components/Client/ClientDetails/ClientDetails";

function useLoadClient(id: string) {
    const [clients, setClient] = useState<Client | null>();
    useEffect(() => {
        clientService
            .getClient(id)
            .then(client => {
                setClient(client);
            });
    }, [id]);
    return clients;
}

const ClientDetailsContainer: React.FC = () => {
    const params = useParams<{ id?: any }>();
    const client = useLoadClient(params.id);
    if (client === undefined) {
        return <Spinner/>
    } else if (client === null) {
        return <NoDataText>Client non trouvé</NoDataText>
    } else {
        return <ClientDetails client={client}/>
    }
};

export default ClientDetailsContainer;
