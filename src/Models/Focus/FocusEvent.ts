import { FocusEventTypes, IFocusEvent } from "./Types";

export class FocusEvent implements IFocusEvent {
    Type: FocusEventTypes;
    RegisterDate: Date;

    constructor(type: FocusEventTypes, registerDate: Date) {
        this.Type = type;
        this.RegisterDate = registerDate;
    }
}
