import Evolution from "@/models/evolution/evolution";
import Pokemon from "@/models/pokemon/pokemon";
import Species from "@/models/species/species";
import { apiGet } from "@/services/api-service";

export const fetchPokemon = async (): Promise<Pokemon> => {
  return await apiGet('pokemon/bulbasaur', null, null);
}

export const fetchSpecies = async (name: string): Promise<Species> => {
  return await apiGet(`pokemon-species/${name}/`, null, null);
}

export const fetchEvolutionChain = async (endpoint: string): Promise<Evolution> => {
  return await apiGet(endpoint, null, null);
}