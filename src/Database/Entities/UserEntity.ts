import { IUser } from "../../Domain/User/Types/IUser";
import { Entity } from "./Types/Entity";
import { User } from "../../Domain/User/User";

interface UserDB {
    id: number;
    name: string;
    email: string;
    password: string;
}

export class UserEntity extends Entity {
    async Create(user: IUser): Promise<IUser> {
        try {
            await this._databaseClient.Connect();

            const result = await this._databaseClient.Query(`
                insert into ${this._tableName} (name, email, password)
                values (
                    '${user.Name}',
                    '${user.Email}',
                    '${user.Password}'
                )
                returning *;
            `);

            const userDB = result.rows[0] as UserDB;
            const newUser = new User(userDB.name, userDB.email);
            newUser.Id = userDB.id;

            return newUser;
        } finally {
            await this._databaseClient.End();
        }
    }
}
