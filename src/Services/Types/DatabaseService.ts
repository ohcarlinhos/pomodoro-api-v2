import { DatabaseClient } from "../../Database";
import { Entity } from "../../Database/Entities/Types/Entity";
import { IDatabaseClient } from "../../Database/Types/IDatabaseClient";
import { IService } from "./IService";

export abstract class DatabaseService implements IService {
    protected _databaseClient: IDatabaseClient;
    protected _entity: Entity;

    constructor(entity: Entity) {
        this._databaseClient = DatabaseClient;
        this._entity = entity;
    }

    abstract Run(): Promise<unknown>;
}
