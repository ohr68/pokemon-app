import Evolution from "@/models/evolution/evolution";
import Pokemon from "@/models/pokemon/pokemon";
import Species from "@/models/species/species";
import { apiGet } from "@/services/api-service";

export const fetchPokemon = async (): Promise<Pokemon> => {
  return await apiGet('pokemon/gengar', null, null);
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

export const fecthImage = async (name: string): Promise<string | void> => {
  return await fetchOnePokemon(name)
    .then((response: Pokemon) => { return response.sprites.other.home.frontDefault; })
    .catch((error) => {
      console.log(error);
    });
}