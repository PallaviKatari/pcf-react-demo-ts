import { createContext } from "react";

//export const UserContext = createContext("Jane Doe");

interface User{
    username:string;
    email:string;
    role:string;
}

export const UserContext = createContext<User>({
    username:"admin",
    email:"admin@mailinator.com",
    role:"Administrator"
});