import { IFocusEvent, IFocusStatus } from "./Types";

export class FocusStatus implements IFocusStatus {
    Title: string;
    RegisterDate: Date;
    Events: IFocusEvent[];

    constructor(title: string, date: Date, events: IFocusEvent[]) {
        this.Title = title;
        this.RegisterDate = date;
        this.Events = events;
    }

    GetTotalDuration(): number {
        return 0;
    }
}
