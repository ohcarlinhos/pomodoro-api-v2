export interface IUser {
    Id?: string;
    Name: string;
    Email: string;
    Password?: string;
    GetDTO(): Partial<IUser>;
}
