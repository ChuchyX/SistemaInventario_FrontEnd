import { UserDTO } from "./UserDTO-interface";

export interface UserServiceResponse{
    success: boolean,
    email: string,
    message: number,
    user: UserDTO,
    token: string
}