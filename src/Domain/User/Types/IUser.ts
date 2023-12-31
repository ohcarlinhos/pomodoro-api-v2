export interface IUser {
    Id?: number;
    Name: string;
    Email: string;
    Password?: string;
    GetDTO(): Partial<IUser>;
}
