import { createStitches } from '@stitches/react';

export const { config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText 
} = createStitches({
        utils: {
            marginX: (value: string) => ({
                marginLeft: value,
                marginRight: value,
            }),
            marginY: (value: string) => ({
                marginTop: value,
                marginBottom: value,
            }),
        }
    });