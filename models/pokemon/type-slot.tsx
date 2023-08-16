import LinkDetails from "../link-details";

export default class TypeSlot {
    slot: number
    type: LinkDetails

    constructor(slot: number,
                type: LinkDetails) {
        this.slot = slot;
        this.type = type;
    }
}