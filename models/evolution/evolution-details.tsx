import LinkDetails from "../link-details";

export default class EvolutionDetails {
    gender: string | null
	heldItem: any | null
	item: any | null
	knownMove: any | null
	knownMoveType: any | null
	location: string | null
	minAffection: string | null
	minBeauty: string | null
	minHappiness: string | null
    minLevel: number
    needsOverworldRain: boolean
	partySpecies: any | null
	partyType: any | null
	relativePhysicalStats: any | null
    timeOfDay: string
	tradeSpecies: any | null
    trigger: LinkDetails
	turnUpsideDown: boolean

    constructor(gender: string | null,
        heldItem: any | null,
        item: any | null,
        knownMove: any | null,
        knownMoveType: any | null,
        location: string | null,
        minAffection: string | null,
        minBeauty: string | null,
        minHappiness: string | null,
        minLevel: number,
        needsOverworldRain: boolean,
        partySpecies: any | null,
        partyType: any | null,
        relativePhysicalStats: any | null,
        timeOfDay: string,
        tradeSpecies: any | null,
        trigger: LinkDetails,
        turnUpsideDown: boolean) {
            this.gender = gender;
            this.heldItem = heldItem;
            this.item = item;
            this.knownMove = knownMove;
            this.knownMoveType = knownMoveType;
            this.location = location;
            this.minAffection = minAffection;
            this.minBeauty = minBeauty;
            this.minHappiness = minHappiness;
            this.minLevel = minLevel;
            this.needsOverworldRain = needsOverworldRain;
            this.partySpecies = partySpecies;
            this.partyType = partyType;
            this.relativePhysicalStats = relativePhysicalStats;
            this.timeOfDay = timeOfDay;
            this.tradeSpecies = tradeSpecies;
            this.trigger = trigger;
            this.turnUpsideDown = turnUpsideDown;
        }
}