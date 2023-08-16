import LinkDetails from "../link-details"

export default class FlavorText {
    flavorText: string
    language: LinkDetails

    constructor(flavorText: string,
        language: LinkDetails) {
            this.flavorText = flavorText;
            this.language = language;
        }
}