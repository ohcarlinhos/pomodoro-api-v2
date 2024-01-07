import { IFocusEvent } from "./Types/IFocusEvent";
import { IFocus } from "./Types/IFocus";

export class Focus implements IFocus {
    Id?: string;
    Title: string;
    RegisterDate: Date;
    Events: IFocusEvent[];

    constructor(title: string, date: Date, events: IFocusEvent[], id?: string) {
        if (id) this.Id = id;
        this.Title = title;
        this.RegisterDate = date;
        this.Events = events;
    }

    GetTotalDuration(): number {
        return 0;
    }
}
