import { IUser } from "../Domain/User/Types/IUser";
import { User } from "../Domain/User/User";
import { AddUserService } from "../Services/User/AddUserService";
import { IController } from "./Types/IController";

type CreateUserPayload = {
    name: string;
    email: string;
    password: string;
};

export class UsersController implements Partial<IController> {
    async Get(id: number): Promise<Partial<IUser>> {
        const user = await new User("Carlos", "teste@test.com");
        user.Id = id;
        return user.GetDTO();
    }

    async GetAll(): Promise<Partial<IUser>[]> {
        return [
            new User("Carlos", "teste@test.com").GetDTO(),
            new User("Juninho", "juninho@test.com").GetDTO(),
            new User("Aninha", "aninha@test.com").GetDTO(),
        ];
    }

    async Create(user: CreateUserPayload): Promise<Partial<IUser>> {
        const { name, email, password } = user;
        const newUser = new User(name, email);
        newUser.Password = password;
        return await new AddUserService(newUser).Run();
    }
}
