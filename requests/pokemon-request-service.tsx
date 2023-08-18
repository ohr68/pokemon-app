import Evolution from "@/models/evolution/evolution";
import Pokemon from "@/models/pokemon/pokemon";
import Gender from "@/models/gender/gender";
import Species from "@/models/species/species";
import { apiGet } from "@/services/api-service";
import EggGroup from "@/models/egg-group/egg-group";

export const fetchPokemon = async (): Promise<Pokemon> => {
  return await apiGet('pokemon/charizard', null, null);
}

export const fetchPokemonById = async (id: number): Promise<Pokemon> => {
  return await apiGet(`pokemon/${id}`, null, null);
}

export const fetchOnePokemon = async (name: string): Promise<Pokemon> => {
  return await apiGet(`pokemon/${name}`, null, null);
}

export const fetchSpecies = async (name: string): Promise<Species> => {
  return await apiGet(`pokemon-species/${name}/`, null, null);
}

export const fetchEvolutionChain = async (endpoint: string): Promise<Evolution> => {
  return await apiGet(endpoint, null, null);
}

export const fetchBreeding = async (genderId: number): Promise<Gender> => {
  return await apiGet(`gender/${genderId}`, null, null);
}

export const fetchEggGroups = async (endpoint: string): Promise<EggGroup> => {
  return await apiGet(endpoint, null, null);
}

export const fecthImage = async (name: string): Promise<string | void> => {
  return await fetchOnePokemon(name)
    .then((response: Pokemon) => { return response.sprites.other.home.frontDefault; })
    .catch((error) => {
      console.log(error);
    });
}