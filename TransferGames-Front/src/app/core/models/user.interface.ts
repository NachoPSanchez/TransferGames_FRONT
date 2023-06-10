import { Juego } from "./juego.interface";

export interface User{
    id?: number;
    name: string;
    email: string;
    password: string;
    roleId?: string;
    image?:Uint8Array;
    juegos?: Juego[];
}
export interface UserResponse{
    id: number;
    name: string;
    email: string;
    image?:Uint8Array;
    juegos?: Juego[];
}
export interface UserRegister{
    id?: number;
    name: string;
    email: string;
    password: string;
    rol: string;
}