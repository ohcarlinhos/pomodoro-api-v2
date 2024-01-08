import { IMigrationQueries } from "./Types/IMigrationQueries";

export class UserMigrationQueries implements IMigrationQueries {
    readonly UpQuery = `
create table if not exists users (
    id serial primary key,
    name varchar(255) not null,
    email varchar(255) unique not null,
    password varchar(50) not null
)
    `;
    readonly DownQuery = `
drop table if exists users
    `;
}
