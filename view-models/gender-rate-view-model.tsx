export default class GenderRateViewModel {
    maleRate: string
    femaleRate: string

    constructor(maleRate: string,
        femaleRate: string) {
        this.maleRate = maleRate;
        this.femaleRate = femaleRate;
    }
}