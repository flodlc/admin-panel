import axios from "axios";
import {Client} from "../modeles/client";

class ClientService {
    async getClient(id: string): Promise<Client | null> {
        try {
            return await axios.get(process.env.REACT_APP_API_URL + '/api/client/' + id).then(response => response.data.client);
        } catch (e) {
            return null;
        }
    }

    async getClients(): Promise<Client[]> {
        try {
            return await axios.get(process.env.REACT_APP_API_URL + '/api/client').then(reponse => reponse.data.clients);
        } catch (e) {
            return []
        }
    }

    async postClient(client: Client): Promise<Client | null> {
        try {
            return await axios.post(process.env.REACT_APP_API_URL + '/api/client', client).then(reponse => reponse.data.client);
        } catch (e) {
            return null;
        }
    }
}

const clientService = new ClientService();
export default clientService;
