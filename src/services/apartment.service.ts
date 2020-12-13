import {Apartment} from "../modeles/apartment";
import axios from "axios";
import {Room} from "../modeles/room";

class ApartmentService {
    async getAppartment(id: string): Promise<Room[]> {
        try {
            return await axios.get(process.env.REACT_APP_API_URL + '/api/apartment/' + id).then(reponse => reponse.data.test);
        } catch (e) {
            return []
        }
    }

    async getAppartments(): Promise<Apartment[]> {
        try {
            return await axios.get(process.env.REACT_APP_API_URL + '/api/apartment').then(reponse => reponse.data.apartments);
        } catch (e) {
            return [];
        }
    }

    async postApartment(apartment: Apartment): Promise<Apartment | null> {
        try {
            return await axios.post(process.env.REACT_APP_API_URL + '/api/apartment', apartment).then(reponse => reponse.data.apartment);
        } catch (e) {
            return null;
        }
    }
}

const apartmentService = new ApartmentService();
export default apartmentService;
