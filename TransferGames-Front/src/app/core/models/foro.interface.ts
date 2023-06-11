import { User, UserResponse } from "./user.interface";

export interface Mensaje{
    idMensaje: number;
    asunto: string;
    texto: string;
    date: Date;
    user: UserResponse;
    respuestas: Respuesta[];
}
export interface Respuesta{
    id: number;
    titulo: string;
    respuesta: string;
    date: Date;
    mensaje?: Mensaje;
    user?: User;
}