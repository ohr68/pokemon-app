"use client";

import { Wrapper } from "@/styles/list/list-style";
import { BiArrowBack, BiMenu } from "react-icons/bi";
import pokeball from '@/icons/pokeball-icon.png';
import { useEffect, useState } from "react";
import { fetchPokemonById } from "@/requests/pokemon-request-service";
import Pokemon from "@/models/pokemon/pokemon";
import { ListItem } from "@/components/list/list-item";

export default function List() {
    const [loading, setLoading] = useState<'loading' | 'done' | null>();
    const [pokemons, setPokemons] = useState<Array<Pokemon>>();

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                setLoading('loading');

                const pokemonRequests: Array<Promise<Pokemon>> = [];

                for (let pokemonId = 1; pokemonId <= 1000; pokemonId++)
                    pokemonRequests.push(fetchPokemonById(pokemonId));

                const pokemons = await Promise.all(pokemonRequests);

                setPokemons(pokemons);
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading('done');
            }
        }

        fetchPokemonData();
    }, []);

    if (!pokemons && loading === 'loading')
        return (
            <div className="flex h-screen w-full items-center justify-center bg-stone-900 text-white">
                Loading...
            </div>
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
                <div className="flex flex-col justify-center w-full my-24">
                    <h1 className="font-bold text-6xl">Pokedex</h1>
                </div>
                <div className="flex flex-wrap w-full overflow-y-auto" style={{ height: '800px', maxHeight: '800px' }}>
                    { 
                        pokemons?.map((pokemon) => { 
                            return <ListItem key={pokemon.id} pokemon={pokemon} />
                        })                
                    }   
                </div>
            </div>
        </Wrapper>
    )
}