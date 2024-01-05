import { FocusEventType } from "./Types/FocusEventType";
import { IFocusEvent } from "./Types/IFocusEvent";

export class FocusEvent implements IFocusEvent {
    Type: FocusEventType;
    RegisterDate: Date;

    constructor(type: FocusEventType, registerDate: Date) {
        this.Type = type;
        this.RegisterDate = registerDate;
    }
}
