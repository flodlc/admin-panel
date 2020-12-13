import React, {useEffect, useState} from 'react';
import {Client} from "../../../modeles/client";
import clientService from "../../../services/client.service";
import {Spinner} from "../../../components/UI/Styled";
import Clients from "../../../components/Client/Clients/Clients";

function useLoadClients() {
    const [clients, setClients] = useState<Client[]>();
    useEffect(() => {
        clientService
            .getClients()
            .then(clients => {
                setClients(clients);
            });
    }, []);
    return clients;
}

const ClientsContainer: React.FC = () => {
    const clients = useLoadClients();
    if (clients === undefined) {
        return <Spinner/>
    } else {
        return <Clients clients={clients}/>
    }
};

export default ClientsContainer;
