import {Client} from "../../modeles/client";

class ClientService {
    async getClient(id: string): Promise<Client | null> {
        try {
            return await null;
        } catch (e) {
            return null;
        }
    }

    async getClients(): Promise<Client[]> {
        try {
            return await [];
        } catch (e) {
            return []
        }
    }

    async postClient(client: Client): Promise<Client | null> {
        try {
            return await null;
        } catch (e) {
            return null;
        }
    }
}

const clientService = new ClientService();
export default clientService;
