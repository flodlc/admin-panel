import {createContext} from "react";
import {User} from "../modeles/user";

type AuthContextType = { user: User | null, setUser: (user: User | null) => void };
export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
