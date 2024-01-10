import { CustomDatabaseError } from "./CustomDatabaseError";

type CustomDatabaseErrorTags = "user_not_found";

const ErrorTags: { tag: CustomDatabaseErrorTags; message: string }[] = [
    {
        tag: "user_not_found",
        message: "User not found",
    },
];
export class CustomDatabaseErrorByTag extends CustomDatabaseError {
    constructor(tag: CustomDatabaseErrorTags) {
        super();
        this._updateMessageByTag(tag);
    }

    private _updateMessageByTag(tag: CustomDatabaseErrorTags) {
        for (let i = 0; i < ErrorTags.length; i++) {
            if (tag === ErrorTags[i].tag) {
                this.message = ErrorTags[i].message;
                break;
            }
        }
    }
}
