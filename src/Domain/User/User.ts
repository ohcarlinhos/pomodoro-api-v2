import { IUser } from "./Types/IUser";

export class User implements IUser {
    Id?: string;
    Name: string;
    Email: string;
    Password: string;

    constructor(name: string, email: string, password: string) {
        this.Name = name;
        this.Email = email;
        this.Password = password;
    }

    GetDTO(): Partial<IUser> {
        const user: Partial<IUser> = {
            Name: this.Name,
            Email: this.Email,
        };

        if (this.Id) user.Id = this.Id;

        return user;
    }
}
