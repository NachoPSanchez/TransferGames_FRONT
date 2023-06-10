import { User } from "./user.interface";

export interface Juego{
    id?: number;
    nombre?: string;
    description?: string;
    direccion?: string;
    image?: Uint8Array;
    usuarios?: User[];
}