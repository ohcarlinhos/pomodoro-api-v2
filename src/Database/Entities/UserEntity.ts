import { IUser } from "../../Domain/User/Types/IUser";
import { Entity } from "./Types/Entity";
import { User } from "../../Domain/User/User";
import { CustomDatabaseErrorByTag } from "../../Shared/Errors/CustomDatabaseErrorByTag";

interface UserDB {
    id: number;
    name: string;
    email: string;
    password: string;
}

export class UserEntity extends Entity {
    async Create(user: IUser): Promise<IUser> {
        const result = await this._databaseClient.Query(`
            insert into ${this._tableName} (name, email, password)
            values (
                '${user.Name}',
                '${user.Email}',
                '${user.Password}'
            )
            returning *;
        `);

        return this._mountUser(result.rows[0]);
    }

    async SelectById(id: number): Promise<IUser> {
        const [result] = await this._selectById(id);
        return this._mountUser(result);
    }

    private _mountUser(item: unknown): IUser {
        if (!item) throw new CustomDatabaseErrorByTag("user_not_found");

        const userDB = item as UserDB;
        const newUser = new User(userDB.name, userDB.email);
        newUser.Id = userDB.id;
        return newUser;
    }
}
