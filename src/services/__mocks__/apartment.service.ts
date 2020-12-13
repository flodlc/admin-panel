import {Apartment} from "../../modeles/apartment";
import {Room} from "../../modeles/room";

class ApartmentService {
    async getAppartment(id: string): Promise<Room[]> {
        try {
            return await [];
        } catch (e) {
            return []
        }
    }

    async getAppartments(): Promise<Apartment[]> {
        try {
            return await [];
        } catch (e) {
            return [];
        }
    }

    async postApartment(apartment: Apartment): Promise<Apartment | null> {
        try {
            return await null;
        } catch (e) {
            return null;
        }
    }
}

const apartmentService = new ApartmentService();
export default apartmentService;
