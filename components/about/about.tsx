import { convertToCmValue, convertToInchValue, convertToKgValue, convertToLbsValue, eightsValue, femaleId, maleId, maxEggGroups } from "@/constants/constants";
import FlavorText from "@/models/about/flavor-text";
import Pokemon from "@/models/pokemon/pokemon";
import Species from "@/models/species/species";
import Gender from "@/models/gender/gender";
import { fetchBreeding, fetchEggGroups, fetchSpecies } from "@/requests/pokemon-request-service";
import { AboutDiv } from "@/styles/details/about";
import FlavorTextViewModel from "@/view-models/about-view-model";
import HeightWeightViewModel from "@/view-models/height-weight-view-model";
import { useEffect, useState } from "react"
import GenderRateViewModel from "@/view-models/gender-rate-view-model";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";
import EggGroup from "@/models/egg-group/egg-group";
import Loading from "../loading";

export default function About({ speciesId: id, currentPokemon: pokemon }) {
    const [species, setSpecies] = useState<Species | null>(null);
    const [flavorText, setFlavorText] = useState<FlavorTextViewModel | null>(null);
    const [heightWeight, setHeightWeight] = useState<HeightWeightViewModel>();
    const [genderRate, setGenderRate] = useState<GenderRateViewModel>();
    const [eggGroup, setEggGroup] = useState<string>('');
    const [loading, setLoading] = useState<'loading' | 'done' | null>(null);

    useEffect(() => {
        const fetchSpeciesData = async () => {
            try {
                setLoading('loading');
                const species = await fetchSpecies(id);
                const description = getFlavorTextData(species.flavorTextEntries);
                const femaleBreeding = await fetchBreeding(femaleId);
                const maleBreeding = await fetchBreeding(maleId);

                const eggGroupRequests: Array<Promise<EggGroup>> = [];

                for (let groupId = 1; groupId <= maxEggGroups; groupId++)
                    eggGroupRequests.push(fetchEggGroups(`egg-group/${groupId}/`));

                const eggGroups = await Promise.all(eggGroupRequests);

                setSpecies(species);
                setFlavorText(description);
                setHeightWeight(getStats(pokemon));
                setGenderRate(getGenderRate(maleBreeding, femaleBreeding));
                setEggGroup(getEggGroup(eggGroups));
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading('done');
            }
        }

        fetchSpeciesData();
    }, []);

    const getFlavorTextData = (flavorTextEntries: Array<FlavorText>): FlavorTextViewModel => {
        let choosenLanguage = 'en'; // TODO: modify when translator is implemented
        let fullDescription = '';

        for (const textEntry of flavorTextEntries) {
            if (textEntry.language.name === choosenLanguage)
                fullDescription += `${textEntry.flavorText.split('\n')[0]}  ${textEntry.flavorText.split('\n')[1]} `;
        }

        return new FlavorTextViewModel(choosenLanguage, fullDescription);
    }

    const getStats = (currentPokemon: Pokemon): HeightWeightViewModel => {
        const heightInInches: string = (currentPokemon.height * convertToInchValue).toFixed(2).toString();
        const heightInCm: string = (currentPokemon.height * convertToCmValue).toFixed(2).toString();
        const weightInKg: string = (currentPokemon.weight / convertToKgValue).toFixed(2).toString();
        const weightInLbs: string = (currentPokemon.weight / convertToLbsValue).toFixed(2).toString();

        return new HeightWeightViewModel(weightInLbs, weightInKg, heightInInches, heightInCm);
    }

    const getGenderRate = (male: Gender, female: Gender): GenderRateViewModel => {

        let currentMalePokemonGenderRate: number = -1;
        let currentFemalePokemonGenderRate: number = -1;

        for (const maleDetails of male.pokemonSpeciesDetails) {
            if (maleDetails.pokemonSpecies.name === pokemon.name) {
                currentMalePokemonGenderRate = maleDetails.rate;
                break;
            }
        }

        for (const femaleDetails of female.pokemonSpeciesDetails) {
            if (femaleDetails.pokemonSpecies.name === pokemon.name) {
                currentFemalePokemonGenderRate = femaleDetails.rate;
                break;
            }
        }

        const currentMalePercentage: string = currentMalePokemonGenderRate !== -1 ? ((currentMalePokemonGenderRate / eightsValue) * 100).toFixed(1) : '-1';
        const currentFemalePercentage: string = currentFemalePokemonGenderRate !== -1 ? ((currentFemalePokemonGenderRate / eightsValue) * 100).toFixed(1) : '-1';

        return new GenderRateViewModel(currentMalePercentage, currentFemalePercentage);
    }

    const getEggGroup = (eggGroups: Array<EggGroup>): string => {
        let choosenLanguage = 'en'; // TODO: modify when translator is implemented
        let names: Array<string> = [];

        for (const group of eggGroups) {
            for (const currentSpecie of group.pokemonSpecies) {
                if (currentSpecie.name === pokemon.name) {
                    if (group.names.some((name) => name.language.name === choosenLanguage))
                        names.push(group.names.filter((name) => name.language.name === choosenLanguage)[0].name);
                }
            }
        }

        return names.join(' and ');
    }

    if (loading === 'loading')
        return (
            <Loading />
        );

    return (
        <AboutDiv className="flex flex-col w-full py-10">
            <div className="flex flex-col w-full text-start">
                <p className="text-md font-medium tracking-wide">{flavorText?.fullDescription}</p>
            </div>
            <div className="flex items-center justify-center w-full">
                <div className="flex flex-col w-1/2 h-1/3">
                    <div className="flex flex-row justify-between rounded-md shadow-2xl w-full py-4 border border-gray-200">
                        <div className="flex flex-col w-1/2">
                            <span className="font-bold text-xl text-gray-400 px-8">Height</span>
                            <span className="px-8 py-2 text-lg font-semibold">{`${heightWeight?.heightInInches}in (${heightWeight?.heightInCentimeters}cm)`}</span>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <span className="font-bold text-xl text-gray-400 px-8">Weight</span>
                            <span className="px-8 py-2 text-lg font-semibold">{`${heightWeight?.weightInLbs}lbs (${heightWeight?.weightInKg}kg)`}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full mt-10">
                <div className="flex w-full">
                    <h2 className="font-bold text-2xl">Breeding</h2>
                </div>
                <div className="flex flex-row py-4 w-full">
                    <div className="flex mr-16">
                        <span className="font-bold text-lg text-gray-400">Gender</span>
                    </div>
                    {genderRate?.maleRate !== '-1' &&
                        <div className="flex px-4">
                            <BiMaleSign className="text-blue-400" size={25} />
                            <span className="text-lg font-semibold px-4">{genderRate?.maleRate}%</span>
                        </div>
                    }
                    {genderRate?.femaleRate !== '-1' &&
                        <div className="flex px-4">
                            <BiFemaleSign className="text-pink-400" size={25} />
                            <span className="text-lg font-semibold px-4">{genderRate?.femaleRate}%</span>
                        </div>
                    }
                </div>
                <div className="flex flex-row py-4 w-full">
                    <div className="flex mr-10">
                        <span className="font-bold text-lg text-gray-400 capitalize">Egg groups</span>
                    </div>
                    <div className="flex">
                        <span className="text-lg font-semibold">{eggGroup}</span>
                    </div>
                </div>
                <div className="flex flex-row py-4 w-full">
                    <div className="flex mr-14">
                        <span className="font-bold text-lg text-gray-400 capitalize">Egg cycle</span>
                    </div>
                    <div className="flex">
                        <span className="text-lg font-semibold">{species?.hatchCounter}</span>
                        <div className="flex px-4">
                            <span className="text-lg">*One must walk <strong>{255 * (species?.hatchCounter! + 1)}</strong> steps before this Pokémon&apos;s egg hatches, unless utilizing bonuses.</span>
                        </div>
                    </div>
                </div>
            </div>
        </AboutDiv>
    )
}