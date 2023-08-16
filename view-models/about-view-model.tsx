export default class FlavorTextViewModel {
    choosenLanguage: string
    fullDescription: string

    constructor(choosenLanguage: string,
        fullDescription: string) {
        this.choosenLanguage = choosenLanguage;
        this.fullDescription = fullDescription;
    }
}