import React from 'react';
import ClientForm from "../../../components/Client/ClientForm/ClientForm";
import clientService from "../../../services/client.service";
import {Client} from "../../../modeles/client";


const ClientFormContainer: React.FC = () => {
    const handleSubmit = (client: Client) => {
        clientService.postClient(client).then(() => {
            alert('Thank you !');
        })
    };

    return <ClientForm handleSubmit={handleSubmit}/>
};

export default ClientFormContainer;
