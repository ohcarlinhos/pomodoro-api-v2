import { IFocus } from "../Domain/Focus/Types/IFocus";
import { IController } from "./Types/IController";

export class FocusController implements Partial<IController> {
    // TODO: implementar método
    async GetAll() {
        const focus: IFocus[] = [];
        return focus;
    }
}
