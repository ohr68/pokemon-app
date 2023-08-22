"use client"; // This is a client component

import { useEffect, useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { BiArrowBack, BiHeart, BiSolidHeart } from 'react-icons/bi';
import Typography from '@mui/material/Typography';
import { getFormattedNumber } from '@/utils/string-functions';
import Image from "next/image";
import EvolutionDetails from '@/components/evolution/evolution-details';
import { fetchPokemonById, fetchSpecies } from '@/requests/pokemon-request-service';
import Pokemon from '@/models/pokemon/pokemon';
import TypeColorPattern, { getBgClassForType } from '@/helpers/tipe-background-helper';
import pokeball from '@/icons/pokeball-icon.png';
import { MainDiv } from '@/styles/details/style';
import About from '@/components/about/about';
import Gender from '@/models/species/gender';
import { useSearchParams } from 'next/navigation';
import ActiveLink from '@/components/active-link';
import Loading from '@/components/loading';

export default function Details() {
  const [pokemon, setPokemon] = useState<Pokemon | null>();
  const [description, setDescription] = useState<string>('');
  const [state, setState] = useState<'loading' | 'done' | null>(null);
  const [isHovering, setIsHovered] = useState<boolean>(false);
  const [value, setValue] = useState(0);
  const [bgColor, setBgColor] = useState<TypeColorPattern>();
  const searchParams = useSearchParams();

  const mouseEnter = () => setIsHovered(true);
  const mouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        setState('loading');

        const id = searchParams.get('id');
        const pokemonData = await fetchPokemonById(Number(id));
        const species = await fetchSpecies(pokemonData.name);

        setPokemon(pokemonData);
        setBgColor(getBgClassForType(pokemonData.types[0].type.name));
        setDescription(getGenera(species.genera));

      } catch (error) {
        console.log(error);
      }
      finally {
        setState('done');
      }
    }

    fetchPokemonData();

  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function CustomTabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const getGenera = (genera: Array<Gender>): string => {
    let choosenLanguage = 'en'; // TODO: modify when translator is implemented
    let description = '';

    for (const gender of genera) {
      if (gender.language.name === choosenLanguage) {
        description = gender.genus;
        break;
      }
    }

    return description;
  }

  if (!pokemon || state === 'loading')
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white text-white">
        <Loading />
      </div>
    );

  return (
    <MainDiv data-id={pokemon.id} className="flex flex-wrap justify-center w-full h-screen"
      css={{
        '--bg-color': bgColor?.background,
        '--bg-image': `url(${pokeball.src})`
      }}>
      <div className="flex flex-col flex-wrap w-full h-full">
        <div className="flex flex-col rounded-t-3xl bg-none h-2/5 mx-10">
          <div className="flex mt-10">
            <div className="flex w-full justify-between py-6">
              <ActiveLink href={'/list/'} className={''} componentRef={null}>
                <BiArrowBack className="cursor-pointer text-white w-14 h-10" />
              </ActiveLink>
              <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                {
                  isHovering ?
                    <BiSolidHeart className="cursor-pointer text-white w-14 h-10" /> :
                    <BiHeart className="cursor-pointer text-white w-14 h-10" />
                }
              </div>
            </div>
          </div>
          <div className="flex mx-2">
            <div className="flex w-full justify-between py-6">
              <h1 className="font-bold capitalize text-6xl text-white">{pokemon.name}</h1>
              <h3 className="font-bold text-3xl text-white mr-2">{getFormattedNumber(pokemon.id)}</h3>
            </div>
          </div>
          <div className="flex w-full justify-between mx-2">
            <div className="flex items-center">
              {
                pokemon.types.map((type) => {
                  return <div key={type.slot} className="flex rounded-full mr-4" style={{ background: bgColor?.typePill }}>
                    <span className="font-bold capitalize text-white text-lg px-10 py-2">{type.type.name}</span>
                  </div>
                })
              }
            </div>
            <div className="">
              <span className="text-white text-2xl px-6">{description}</span>
            </div>
          </div>
        </div>
        <div className="flex relative flex-col justify-center items-center w-full z-10">
          <div className="flex w-1/2 place-content-center h-1/12">
            <Image src={pokemon.sprites.other.home.frontDefault ?? pokemon.sprites.other.officialArtwork?.frontDefault} width={500} height={500} alt="teste"
              className="absolute -top-98" />
          </div>
        </div>
        <div className="flex flex-col items-end rounded-t-3xl bg-white w-full h-3/5 mx overflow-y-hidden">
          <div className="flex flex-col w-full mt-4 py-8 px-10">
            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                centered
              >
                <Tab label="About" style={{ display: 'flex', width: '100%', fontWeight: 'bold', textTransform: 'capitalize', fontSize: '1.4rem' }} {...a11yProps(0)} />
                <Tab label="Base Stats" style={{ display: 'flex', width: '100%', fontWeight: 'bold', textTransform: 'capitalize', fontSize: '1.4rem' }} {...a11yProps(1)} />
                <Tab label="Evolution" style={{ display: 'flex', width: '100%', fontWeight: 'bold', textTransform: 'capitalize', fontSize: '1.4rem' }} {...a11yProps(2)} />
                <Tab label="Moves" style={{ display: 'flex', width: '100%', fontWeight: 'bold', textTransform: 'capitalize', fontSize: '1.4rem' }} {...a11yProps(3)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <About speciesId={pokemon.id} currentPokemon={pokemon} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam doloribus eos asperiores, aliquid exercitationem voluptates. Tempore sint rem incidunt fugit recusandae veritatis porro deleniti atque? Mollitia assumenda illum quia temporibus commodi. Debitis facilis at natus nostrum laudantium qui enim culpa ducimus provident voluptas, voluptatem repudiandae maxime corporis aut libero vitae sapiente a animi. Perferendis debitis voluptatem nostrum illum amet pariatur dicta quaerat sed reiciendis provident, deserunt vitae hic autem quae incidunt voluptates optio cumque voluptatum fugit neque? Laborum explicabo ratione saepe labore cum rerum id? Perspiciatis dolorum ipsa et ut facilis quis quisquam a doloribus, dignissimos, eveniet ratione mollitia illum.
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <EvolutionDetails id={pokemon.id} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt delectus similique incidunt dolores, odio accusamus qui fuga, culpa hic nisi numquam magni beatae? Ratione vero et laboriosam dignissimos quia assumenda, nisi nihil distinctio aliquam modi labore tempore officia repellat rem maxime debitis! Enim fugit placeat, modi eveniet id, eius sequi cupiditate earum sapiente blanditiis aspernatur optio assumenda maiores repellendus veniam ea provident qui magnam quisquam consequatur temporibus. Illum accusantium dicta dolorum alias doloribus aperiam! Sed ipsam aliquid doloribus. Molestiae dolorem odit ipsum nostrum temporibus repellat quia eaque iure id eos? Soluta itaque autem voluptas. Amet, saepe tempora, deleniti accusantium incidunt ducimus in fuga repellat, dolorum eveniet porro praesentium iste qui quas quidem dolorem quos voluptatum deserunt voluptatibus quaerat et consectetur molestiae nam. Amet pariatur molestiae omnis deserunt non quae?
            </CustomTabPanel>
          </div>
        </div>
      </div>
    </MainDiv>
  )
}