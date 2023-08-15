"use client"; // This is a client component

import { useEffect, useState } from 'react';
import { fecthImage, fetchEvolutionChain, fetchSpecies } from '@/requests/pokemon-request-service';
import Image from 'next/image';
import EvolutionDetailsViewModel from '@/view-models/evolution-details-view-model';
import EvolutionChain from '@/models/evolution/evolution-chain';
import { speciesUrl } from '@/constants/constants';
import { BiRightArrowAlt } from 'react-icons/bi';
import pokeball from '@/icons/pokeball-icon.png';
import { ImageDiv } from '@/styles/details/evolution-chain';

export default function EvolutionDetails({ id: id }) {
  const [evolutionDetails, setEvolutionDetails] = useState<Array<EvolutionDetailsViewModel> | null>();
  const [loading, setLoading] = useState<'loading' | 'done' | null>(null);

  useEffect(() => {
    const fetchData = async () => {

      try {
        setLoading('loading');

        const speciestResult = await fetchSpecies(id);
        const evolutionResult = await fetchEvolutionChain(speciestResult?.evolutionChain?.url.substring(process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL?.length!));
        const details = await getEvolutionDetails(evolutionResult.chain);

        setEvolutionDetails(details);
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setLoading('done');
      }
    }

    fetchData();
  }, []);

  const getSpeciesId = (url: string): number => {
    return Number(url.substring(speciesUrl.length, speciesUrl.length + 1));
  }

  const getEvolutionDetails = async (chain: EvolutionChain): Promise<Array<EvolutionDetailsViewModel>> => {
    let result: Array<EvolutionDetailsViewModel> = [];

    for (const details of chain!.evolvesTo) {
      result.push(new EvolutionDetailsViewModel
        (
          getSpeciesId(chain!.species.url),
          chain!.species.name,
          details.evolutionDetails[0].minLevel,
          await fecthImage(chain.species.name) ?? '',
          getSpeciesId(details.species.url),
          details.species.name,
          await fecthImage(details.species.name) ?? ''
        ));

      for (const thirdForm of details.evolvesTo) {
        result.push(new EvolutionDetailsViewModel
          (
            getSpeciesId(details.species.url),
            details.species.name,
            thirdForm.evolutionDetails[0].minLevel,
            await fecthImage(details.species.name) ?? '',
            getSpeciesId(thirdForm.species.url),
            thirdForm.species.name,
            await fecthImage(thirdForm.species.name) ?? ''
          ));
      }
    }

    return result;
  }

  if (!evolutionDetails || loading === 'loading')
    return (
      <div className="flex h-screen w-full items-center justify-center bg-stone-900 text-white">
        Loading Evolution Details...
      </div>
    );

  return (
    <div className="flex flex-wrap w-full h-full max-h-full">
      <div className="flex-col w-full">
        <h2 className="font-bold text-2xl">Evolution Chain</h2>
      </div>
      <div className="flex flex-col flex-wrap divide-y divide-solid w-full">
        {
          evolutionDetails.map((pokemon, index) => {
            return <div key={index} className="flex flex-row justify-center items-center w-full">
              <div data-id={pokemon.id} className="flex flex-wrap items-center justify-center w-1/3">
                <ImageDiv className="flex flex-col justify-center my-2" css={{'--bg-image': `url(${pokeball.src})`}}>
                  <Image src={pokemon.imageUrl} width={180} height={180} alt="teste" />
                </ImageDiv>
                <div className="flex flex-col justify-center mt w-full">
                  <span className="font-bold text-center text-lg capitalize">{pokemon.name}</span>
                </div>
              </div>
              <div className="flex flex-wrap text-center items-center justify-center w-1/5">
                <div className="flex flex-col w-1/3 h-full">
                  <BiRightArrowAlt className="text-gray-200 w-32 h-10" />
                </div>
                <div className="flex flex-col w-full">
                  <span className="font-bold text-xl"> Lvl {pokemon.minLevelToEvolve ?? '??'}</span>
                </div>
              </div>
              <div data-id={pokemon.evolutionId} className="flex flex-wrap items-center justify-center w-1/3">
                <ImageDiv className="flex flex-col justify-center my-2">
                  <Image src={pokemon.evolutionImageUrl} width={180} height={180} alt="teste" />  
                </ImageDiv>
                <div className="flex flex-col justify-center mt w-full">
                  <span className="font-bold text-center text-lg capitalize">{pokemon.evolutionName}</span>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}