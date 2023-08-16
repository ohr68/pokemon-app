import { styled } from '@/styles/stiches.config';

export const EvolutionDiv = styled('div', {
    height: '500px', 
    maxHeight: '1024px', 
    overflowY: 'auto'
});

export const EvolutionChainHeader = styled('div', {
    position: 'fixed', 
    backgroundColor: 'white', 
    width: '10%'
});

export const ImageDiv = styled('div', {
    backgroundImage: 'var(--bg-image)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
});