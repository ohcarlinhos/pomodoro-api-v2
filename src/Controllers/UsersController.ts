import { IUser } from "../Domain/User/Types/IUser";
import { User } from "../Domain/User/User";
import { IController } from "./Types/IController";

export class UsersController implements Partial<IController> {
    Get(id: string): IUser {
        return new User(id, "Carlos", "teste@test.com", "1234");
    }
}
