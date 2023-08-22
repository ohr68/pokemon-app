"use client";

import { Wrapper } from "@/styles/list/list-style";
import { BiArrowBack, BiMenu } from "react-icons/bi";
import pokeball from '@/icons/pokeball-icon.png';
import { useEffect, useState } from "react";
import { fetchPokemonById } from "@/requests/pokemon-request-service";
import Pokemon from "@/models/pokemon/pokemon";
import { ListItem } from "@/components/list/list-item";
import Loading from "@/components/loading";
import { maxIdsPerLoad } from "@/constants/constants";

export default function List() {
    const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
    const [loading, setLoading] = useState<'loading' | 'done' | null>();
    const [firstId, setFirstId] = useState<number>(1);
    const [lastId, setLastId] = useState<number>(100);

    const fetchPokemonData = async (currentId: number) => {
        try {
            setLoading('loading');

            const pokemonRequests: Array<Promise<Pokemon>> = [];

            for (let pokemonId = firstId; pokemonId <= currentId; pokemonId++)
                pokemonRequests.push(fetchPokemonById(pokemonId));

            const pokemons = await Promise.all(pokemonRequests);

            setPokemons((prev) => [...prev, ...pokemons]);
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading('done');
        }
    }

    useEffect(() => {
        fetchPokemonData(lastId);
    }, [lastId]);

    if (!pokemons && loading === 'loading')
        return (
            <Loading />
        );

    return (
        <Wrapper className="flex p-8 flex-wrap w-full h-screen" style={{
            backgroundImage: `url(${pokeball.src})`,
            backgroundPosition: 'top -20% right -9.5%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '20%'
        }}>
            <div className="flex flex-col w-full h-full py-10">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex">
                        <BiArrowBack className="cursor-pointer" size={40} />
                    </div>
                    <div className="flex">
                        <BiMenu className="cursor-pointer" size={40} />
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full my-16">
                    <h1 className="font-bold text-6xl">Pokedex</h1>
                </div>
                <div className="flex flex-wrap w-full overflow-y-auto" style={{ height: '800px', maxHeight: '800px' }}>
                    {
                        pokemons?.map((pokemon, index) => {                            
                            const isLast = index === pokemons.length - 1;

                            return <ListItem key={pokemon.id}
                                pokemon={pokemon}
                                isLast={isLast}                                
                                currentFirstItem={() => isLast ?  setFirstId(pokemons.length + 1) : 1}
                                newLimit={() => setLastId((lastId + 1) + maxIdsPerLoad)} />
                        })
                    }
                </div>
            </div>
        </Wrapper>
    )
}