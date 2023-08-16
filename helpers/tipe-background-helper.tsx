export default class TypeColorPattern {
    background: string
    typePill: string

    constructor(background: string,
        typePill: string) {
        this.background = background;
        this.typePill = typePill;
    }
}

export const getBgClassForType = (pokemonType: string): TypeColorPattern => {
    switch (pokemonType) {
        case "fire":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(255,0,0,1) 10%, rgba(255,117,117,1) 50%, rgba(255,137,45,1) 95%)',
                '#830303');
        case "water":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgb(0, 93, 205) 10%, rgba(117,129,255,1) 50%, rgba(45,113,255,1) 70%)',
                '#023b80'
            );
        case "grass":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(4,116,0,1) 0%, rgba(131,232,129,1) 45%, rgba(25,139,63,1) 100%)',
                '#8ea87c'
            );
        case "electric":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgb(221, 211, 2) 16%, rgba(235,235,67,1) 50%, #b2be06 81%)',
                '#a39b06'
            );
        case "ghost":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(101,2,221,1) 16%, rgba(176,116,242,1) 46%, rgba(152,34,255,1) 81%)',
                '#5005ac'
            );
        case "dragon":
            return new TypeColorPattern(
                'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
                '#85093f'
            );
        case "fighting":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
                '#4d067c'
            );
        case "dark":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(16,1,25,1) 21%, rgba(148,145,145,1) 50%, rgba(15,15,15,1) 97%)',
                '#706f70'
            );
        case "steel":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(106,104,107,1) 21%, rgba(148,145,145,1) 50%, rgba(94,92,92,1) 97%)',
                '#b5b3b6'
            );
        case "normal": 
            return new TypeColorPattern(
                'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
                '#4f8083'
            )
        case "rock": {
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(70,70,70,1) 0%, rgba(217,217,226,1) 45%, rgba(148,148,148,1) 100%)',
                '#202020'
            )
        }
        default:
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(83,205,0,1) 16%, rgba(204,255,216,1) 43%, rgba(134,255,85,1) 81%)',
                '#3f9605'
            );
    }
}