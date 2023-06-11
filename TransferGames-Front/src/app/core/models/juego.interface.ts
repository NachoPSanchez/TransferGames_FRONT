import { User } from "./user.interface";

export interface Juego{
    id: number;
    nombre?: string;
    descripcion?: string;
    direccion: string;
    image: any;
    usuarios?: User[];
}