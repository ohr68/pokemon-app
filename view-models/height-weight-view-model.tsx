export default class HeightWeightViewModel {
    weightInLbs: string
    weightInKg: string
    heightInInches: string
    heightInCentimeters: string

    constructor(weightInLbs: string,
        weightInKg: string,
        heightInInches: string,
        heightInCentimeters: string) {
        this.weightInLbs = weightInLbs;
        this.weightInKg = weightInKg;
        this.heightInInches = heightInInches;
        this.heightInCentimeters = heightInCentimeters;
    }
}