export type FocusEventTypes = "start" | "stop" | "restart" | "end";

export interface IFocusEvent {
    Type: FocusEventTypes;
    RegisterDate: Date;
};

export interface IFocusStatus {
    Title: string;
    RegisterDate: Date;
    Events: IFocusEvent[];
    GetTotalDuration(): number;
}
