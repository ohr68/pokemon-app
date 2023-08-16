import LinkDetails from "../link-details";

export default class Name {
    name: string
    language: LinkDetails

    constructor(name: string,
        language: LinkDetails) {
        this.name = name;
        this.language = language;
    }
}