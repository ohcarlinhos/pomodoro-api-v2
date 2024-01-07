import { IFocusEvent } from "./IFocusEvent";

export interface IFocus {
    Id?: string;
    Title: string;
    RegisterDate: Date;
    Events: IFocusEvent[];
    GetTotalDuration(): number;
}
