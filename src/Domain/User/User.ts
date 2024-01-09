import { IUser } from "./Types/IUser";

export class User implements IUser {
    Id?: number;
    Name: string;
    Email: string;
    Password?: string;

    constructor(name: string, email: string) {
        this.Name = name;
        this.Email = email;
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
