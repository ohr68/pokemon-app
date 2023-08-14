import BaseSprites from "./base-sprites";

export default class OtherSprites {
    dreamWorld: BaseSprites | null
    home: BaseSprites
    officialArtwork: BaseSprites | null

    constructor(dreamWorld: BaseSprites | null,
        home: BaseSprites,
        officialArtwork: BaseSprites | null) {
        this.dreamWorld = dreamWorld;
        this.home = home;
        this.officialArtwork = officialArtwork;
    }
}