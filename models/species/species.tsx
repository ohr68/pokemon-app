import FlavorText from "../about/flavor-text"
import LinkDetails from "../link-details"
import Gender from "./gender"

export default class Species {
    id: number
    name: string
    baseHapiness: number
    color: LinkDetails
    eggGroups: Array<LinkDetails>
    evolutionChain: LinkDetails
    evolvesFromSpecies: any | null
    flavorTextEntries: Array<FlavorText>
    formDescriptions: Array<any>
    formsSwitchable: boolean
    genderRate: number
    genera: Array<Gender>
    habitat: LinkDetails
    hasGenderDifferences: boolean
    hatchCounter: number
    isBaby: boolean
    isLegendary: boolean
    isMythical: boolean
    names: Array<any>
    order: number
    palParkEncounters: Array<any>
    pokedexNumbers: Array<any>
    shape: LinkDetails
    varieties: Array<any>

    constructor(id: number,
        name: string,
        baseHapiness: number,
        color: LinkDetails,
        eggGroups: Array<LinkDetails>,
        evolutionChain: LinkDetails,
        evolvesFromSpecies: any | null,
        flavorTextEntries: Array<any>,
        formDescriptions: Array<any>,
        formsSwitchable: boolean,
        genderRate: number,
        genera: Array<Gender>,
        habitat: LinkDetails,
        hasGenderDifferences: boolean,
        hatchCounter: number,
        isBaby: boolean,
        isLegendary: boolean,
        isMythical: boolean,
        names: Array<any>,
        order: number,
        palParkEncounters: Array<any>,
        pokedexNumbers: Array<any>,
        shape: LinkDetails,
        varieties: Array<any>) {
            this.id = id;
            this.name = name;
            this.baseHapiness = baseHapiness;
            this.color = color;
            this.eggGroups = eggGroups;
            this.evolutionChain = evolutionChain;
            this.evolvesFromSpecies = evolvesFromSpecies;
            this.flavorTextEntries = flavorTextEntries;
            this.formDescriptions = formDescriptions;
            this.formsSwitchable = formsSwitchable;
            this.genderRate = genderRate;
            this.genera = genera;
            this.habitat = habitat;
            this.hasGenderDifferences = hasGenderDifferences;
            this.hatchCounter = hatchCounter;
            this.isBaby = isBaby;
            this.isLegendary = isLegendary;
            this.isMythical = isMythical;
            this.names = names;
            this.order = order;
            this.palParkEncounters = palParkEncounters;
            this.pokedexNumbers = pokedexNumbers;
            this.shape = shape;
            this.varieties = varieties;
    }
}