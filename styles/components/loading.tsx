import { styled, keyframes } from '@/styles/stiches.config';

const frames = keyframes({
    '50%': { 
        opacity: '0',
        transform: 'scale(0.7) translateY(10px)'
    },
});

export const LoadingFrame = styled('div', {
    animation: `${frames} 2s linear infinite`,
    animationTimingFunction: 'ease-in-out',
    
    '&:nth-child(2)': {
        animationDelay: '0.4s'
    },

    '&:nth-child(3)': {
        animationDelay: '0.8s'
    }
});