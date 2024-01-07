import { IController } from "./Types/IController";

export class FocusController implements Partial<IController> {
    GetAll<IFocus>(){
        const focus: IFocus[] = [];
        return focus;
    }
}
