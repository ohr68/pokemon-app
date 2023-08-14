"use client"; // This is a client component

import { useEffect, useState } from 'react';
import Evolution from '@/models/evolution/evolution';
import { fetchEvolutionChain, fetchSpecies } from '@/requests/pokemon-details';
import Species from '@/models/species/species';

export default function EvolutionDetails({ id: id }) {
  const [species, setSpecies] = useState<Species | null>();
  const [evolution, setEvolution] = useState<Evolution | null>();

  useEffect(() => {
    const fetchData = async () => {

      try {
        const speciestResult = await fetchSpecies(id);
        const evolutionResult = await fetchEvolutionChain(speciestResult?.evolutionChain?.url.substring(process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL?.length!));

        setSpecies(speciestResult);
        setEvolution(evolutionResult);
        console.log(evolutionResult?.chain);

      }
      catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <p>{species?.name}</p>
      <p>{species?.shape.name}</p>
    </div>
  )
}