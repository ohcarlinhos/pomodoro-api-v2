import { IFocusEvent } from "./Types/IFocusEvent";
import { IFocus } from "./Types/IFocus";

export class Focus implements IFocus {
    Id?: string;
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

    GetDTO(): Partial<IFocus> {
        const focus: Partial<IFocus> = {
            Title: this.Title,
            RegisterDate: new Date(),
            Events: [],
        };

        if (this.Id) focus.Id = this.Id;

        return focus;
    }
}
