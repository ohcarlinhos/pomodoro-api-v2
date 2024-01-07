import { IUser } from "./Types/IUser";

export class User implements IUser {
    Id?: string;
    Name: string;
    Email: string;
    Password: string;

    constructor(
        id: string | null,
        name: string,
        email: string,
        password: string
    ) {
        if (id) this.Id = id;
        this.Name = name;
        this.Email = email;
        this.Password = password;
    }
}
