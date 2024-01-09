import { DatabaseClient } from "../../Database";
import { Entity } from "../../Database/Entities/Types/Entity";
import { IDatabaseClient } from "../../Database/Types/IDatabaseClient";
import { IService } from "./IService";

export abstract class DatabaseService implements IService {
    protected _databaseClient: IDatabaseClient;
    protected abstract _entity: Entity;

    constructor() {
        this._databaseClient = DatabaseClient;
    }

    abstract Run(): Promise<unknown>;
}
