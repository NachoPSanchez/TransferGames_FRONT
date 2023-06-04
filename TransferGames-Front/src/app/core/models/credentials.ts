import { Roles } from "./roles";

export interface Credentials{
    name:string;
    email: string;
    password: string;
    roles: Roles[];
}