import LinkDetails from "../link-details"

export default class Gender {
    genus: string
    language: LinkDetails

    constructor(genus: string,
        language: LinkDetails) {
        this.genus = genus;
        this.language = language;
    }
}