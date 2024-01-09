import { UserEntity } from "../../Database/Entities/UserEntity";
import { IUser } from "../../Domain/User/Types/IUser";
import { DatabaseService } from "../Types/DatabaseService";

export class AddUserService extends DatabaseService {
    protected _entity: UserEntity;
    private _user: IUser;

    constructor(user: IUser) {
        super();
        this._entity = new UserEntity("users");
        this._user = user;
    }

    async Run() {
        const user = await this._entity.Create(this._user);
        return user.GetDTO();
    }
}
