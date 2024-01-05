import { IFocusEvent } from "./Types/IFocusEvent";
import { IFocusStatus } from "./Types/IFocusStatus";

export class FocusStatus implements IFocusStatus {
    Id: string | null;
    Title: string;
    RegisterDate: Date;
    Events: IFocusEvent[];

    constructor(title: string, date: Date, events: IFocusEvent[], id: string | null = null) {
        this.Id = id
        this.Title = title;
        this.RegisterDate = date;
        this.Events = events;
    }

    GetTotalDuration(): number {
        return 0;
    }
}
