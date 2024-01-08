import { IUser } from "../Domain/User/Types/IUser";
import { User } from "../Domain/User/User";
import { IController } from "./Types/IController";

export class UsersController implements Partial<IController> {
    Get(id: string): Partial<IUser> {
        const user = new User("Carlos", "teste@test.com", "1234");
        user.Id = id;
        return user.GetDTO();
    }

    GetAll(): Partial<IUser>[] {
        return [
            new User("Carlos", "teste@test.com", "1234").GetDTO(),
            new User("Juninho", "juninho@test.com", "1234").GetDTO(),
            new User("Aninha", "aninha@test.com", "1234").GetDTO(),
        ];
    }
}
