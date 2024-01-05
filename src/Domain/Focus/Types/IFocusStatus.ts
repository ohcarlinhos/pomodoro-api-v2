import { IFocusEvent } from "./IFocusEvent";

export interface IFocusStatus {
    Id: string | null;
    Title: string;
    RegisterDate: Date;
    Events: IFocusEvent[];
    GetTotalDuration(): number;
}
