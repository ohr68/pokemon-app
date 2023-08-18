export default class TypeColorPattern {
    background: string
    solidBackGroundColor: string
    typePill: string

    constructor(background: string,
        solidBackGroundColor: string,
        typePill: string) {
        this.background = background;
        this.solidBackGroundColor = solidBackGroundColor;
        this.typePill = typePill;
    }
}

export const getBgClassForType = (pokemonType: string): TypeColorPattern => {
    switch (pokemonType) {
        case "fire":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(255,0,0,1) 10%, rgba(255,117,117,1) 50%, rgba(255,137,45,1) 95%)',
                'linear-gradient(90deg, rgba(255, 0, 0, 1) 50%, rgba(255, 0, 0, 1) 50%)',
                '#830303');
        case "water":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgb(0, 93, 205) 10%, rgba(117,129,255,1) 50%, rgba(45,113,255,1) 70%)',
                'linear-gradient(90deg, rgba(4, 97, 211, 1) 50%, rgba(4, 97, 211, 1) 50%)',
                '#023b80'
            );
        case "grass":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(4,116,0,1) 0%, rgba(131,232,129,1) 45%, rgba(25,139,63,1) 100%)',
                'linear-gradient(90deg, #54c486 50%, #54c486 50%)',
                '#8ea87c'
            );
        case "electric":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgb(221, 211, 2) 16%, rgba(235,235,67,1) 50%, #b2be06 81%)',
                'linear-gradient(90deg, #c9c12b 50%, #c9c12b 50%)',
                '#a39b06'
            );
        case "ghost":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(101,2,221,1) 16%, rgba(176,116,242,1) 46%, rgba(152,34,255,1) 81%)',
                'linear-gradient(90deg, rgba(132, 89, 185, 1) 50%, rgba(132, 89, 185, 1) 50%)',
                '#5005ac'
            );
        case "dragon":
            return new TypeColorPattern(
                'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
                'linear-gradient(90deg, rgba(204, 23, 101, 1) 50%, rgba(204, 23, 101, 1) 50%)',
                '#85093f'
            );
        case "fighting":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
                'linear-gradient(90deg, rgba(122, 8, 197, 1) 50%, rgba(122, 8, 197, 1) 50%)',
                '#4d067c'
            );
        case "dark":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(16,1,25,1) 21%, rgba(148,145,145,1) 50%, rgba(15,15,15,1) 97%)',
                'linear-gradient(90deg, rgba(36, 35, 35, 1) 50%, rgba(36, 35, 35, 1) 50%)',
                '#706f70'
            );
        case "steel":
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(106,104,107,1) 21%, rgba(148,145,145,1) 50%, rgba(94,92,92,1) 97%)',
                'linear-gradient(90deg, rgba(112, 111, 112, 1) 50%, rgba(112, 111, 112, 1) 50%)',
                '#b5b3b6'
            );
        case "normal": 
            return new TypeColorPattern(
                'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
                'linear-gradient(0deg, rgba(106, 178, 182, 1) 50%, rgba(106, 178, 182, 1) 50%)',
                '#4f8083'
            )
        case "rock": {
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(70,70,70,1) 0%, rgba(217,217,226,1) 45%, rgba(148,148,148,1) 100%)',
                'linear-gradient(90deg, rgba(151, 151, 151, 1) 50%, rgba(151, 151, 151, 1) 50%)',
                '#202020'
            )
        }
        default:
            return new TypeColorPattern(
                'linear-gradient(90deg, rgba(83,205,0,1) 16%, rgba(204,255,216,1) 43%, rgba(134,255,85,1) 81%)',
                'linear-gradient(90deg, #54c486 50%, #54c486 50%)',
                '#3f9605'
            );
    }
}