import { UserEntity } from "../../Database/Entities/UserEntity";
import { DatabaseService } from "../Types/DatabaseService";

export class GetUserService extends DatabaseService {
    protected _entity: UserEntity;
    private _id: number;

    constructor(id: number) {
        super();
        this._entity = new UserEntity("users");
        this._id = id;
    }

    async Run() {
        const user = await this._entity.SelectById(this._id);
        return user.GetDTO();
    }
}
