import { FocusEventTypes, IFocusEvent } from "./FocusTypes";

export class FocusEvent implements IFocusEvent {
    Type: FocusEventTypes;
    RegisterDate: Date;

    constructor(type: FocusEventTypes, registerDate: Date) {
        this.Type = type;
        this.RegisterDate = registerDate;
    }
}
