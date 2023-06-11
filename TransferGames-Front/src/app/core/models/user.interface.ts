import { Juego } from "./juego.interface";

export interface User{
    id: number;
    name: string;
    email: string;
    password: string;
    roleId?: string;
    image:any;
    juegos?: Juego[];
}
export interface UserResponse{
    id: number;
    name: string;
    email: string;
    password: string;
    roleId: string;
    image:any;
}
export interface UserRegister{
    id?: number;
    name: string;
    email: string;
    password: string;
    roleId: string;
}