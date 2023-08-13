"use client"; // This is a client component

import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { BiArrowBack, BiHeart, BiSolidHeart } from "react-icons/bi";
import Typography from '@mui/material/Typography';
import { apiGet } from "@/services/api-service";
import Pokemon from "@/models/pokemon";

export default function Details() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [value, setValue] = useState(0);


  const getPokemonData = async () => { 
    await apiGet('pokemon/bulbasaur', null, null)
    .then((response: Pokemon) => console.log(response.sprites["other"]["home"]["front_default"]))
    .catch((error) => {
      console.log(error);
    });
  }


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

  const test = async () => await getPokemonData();
  test();

  return (
    <div className="flex flex-col-reverse flex-wrap justify-center w-full h-screen bg-emerald-400">
      <div className="flex flex-col flex-wrap w-full h-full">
        <div className="flex flex-col rounded-t-3xl bg-none h-1/2 mx-10">
          <div className="flex mt-10">
            <div className="flex w-full justify-between py-6">
              <BiArrowBack className="cursor-pointer text-white w-14 h-10"></BiArrowBack>
              <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {
                  isHovered ?
                    <BiSolidHeart className="cursor-pointer text-white w-14 h-10"></BiSolidHeart> :
                    <BiHeart className="cursor-pointer text-white w-14 h-10"></BiHeart>
                }
              </div>
            </div>
          </div>
          <div className="flex mx-2">
            <div className="flex w-full justify-between py-6">
              <h1 className="font-bold text-6xl text-white">Bulbassaur</h1>
              <h3 className="font-bold text-3xl text-white mr-2">#001</h3>
            </div>
          </div>
          <div className="flex w-full justify-between mx-2">
            <div className="flex items-center">
              <div className="flex bg-emerald-300 rounded-full mr-4">
                <span className="font-bold text-white text-lg px-10 py-2">Grass</span>
              </div>
              <div className="flex bg-emerald-300 rounded-full">
                <span className="font-bold text-white text-lg px-10 py-2">Poison</span>
              </div>
            </div>
            <div className="">
              <span className="text-white text-xl px-6">Seed Pokemon</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center rounded-t-3xl bg-white h-1/2 mx">
          <div className="flex flex-col w-full mt-4 px-10">
            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                aria-label="basic tabs example"
                centered
              >
                <Tab label="About" className="flex w-full capitalize font-bold md:text-xl lg:text-xl" {...a11yProps(0)} />
                <Tab label="Base Stats" className="flex w-full capitalize font-bold md:text-xl lg:text-xl" {...a11yProps(1)} />
                <Tab label="Evolution" className="flex w-full capitalize font-bold md:text-xl lg:text-xl" {...a11yProps(2)} />
                <Tab label="Moves" className="flex w-full capitalize font-bold md:text-xl lg:text-xl" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic unde, sed velit rem ducimus ab sint eos, consequatur distinctio expedita perferendis? Provident non praesentium voluptatum laborum id quibusdam sunt impedit accusamus nisi esse delectus, consectetur ullam ex labore voluptatem! Consequatur quos quae eveniet distinctio laborum possimus beatae laboriosam aut, asperiores explicabo. Harum ratione sequi, deleniti illum dicta, velit iure blanditiis quos suscipit voluptate voluptates ipsum nulla iste modi atque, alias explicabo. Placeat, molestias mollitia voluptates perferendis ipsum aut ab rem! Saepe explicabo alias ipsum accusamus nesciunt sed quaerat consequatur. Vitae, voluptatem eligendi deleniti error quo pariatur eos necessitatibus corporis.
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam doloribus eos asperiores, aliquid exercitationem voluptates. Tempore sint rem incidunt fugit recusandae veritatis porro deleniti atque? Mollitia assumenda illum quia temporibus commodi. Debitis facilis at natus nostrum laudantium qui enim culpa ducimus provident voluptas, voluptatem repudiandae maxime corporis aut libero vitae sapiente a animi. Perferendis debitis voluptatem nostrum illum amet pariatur dicta quaerat sed reiciendis provident, deserunt vitae hic autem quae incidunt voluptates optio cumque voluptatum fugit neque? Laborum explicabo ratione saepe labore cum rerum id? Perspiciatis dolorum ipsa et ut facilis quis quisquam a doloribus, dignissimos, eveniet ratione mollitia illum.
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae incidunt esse atque iste magnam consequuntur nesciunt placeat, quibusdam quo! Dolorum ratione dolore similique nobis totam repellendus placeat alias perferendis perspiciatis, tempore iure aperiam blanditiis, ea accusamus amet officia? Eos officia quasi sit, quisquam quos vero, aspernatur architecto modi esse quia libero animi facere perspiciatis excepturi rem enim aliquam sequi dicta? Velit accusamus, ad libero nobis consequatur exercitationem sequi obcaecati in aliquid error, nesciunt accusantium? Praesentium deserunt expedita inventore quaerat a quam odit consequatur quos adipisci? Doloremque eaque voluptatum aspernatur quae, magnam illum rerum eveniet, id tempora necessitatibus, incidunt nostrum repellat? Voluptate amet sunt exercitationem, ipsa aliquid nisi ut asperiores provident?
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt delectus similique incidunt dolores, odio accusamus qui fuga, culpa hic nisi numquam magni beatae? Ratione vero et laboriosam dignissimos quia assumenda, nisi nihil distinctio aliquam modi labore tempore officia repellat rem maxime debitis! Enim fugit placeat, modi eveniet id, eius sequi cupiditate earum sapiente blanditiis aspernatur optio assumenda maiores repellendus veniam ea provident qui magnam quisquam consequatur temporibus. Illum accusantium dicta dolorum alias doloribus aperiam! Sed ipsam aliquid doloribus. Molestiae dolorem odit ipsum nostrum temporibus repellat quia eaque iure id eos? Soluta itaque autem voluptas. Amet, saepe tempora, deleniti accusantium incidunt ducimus in fuga repellat, dolorum eveniet porro praesentium iste qui quas quidem dolorem quos voluptatum deserunt voluptatibus quaerat et consectetur molestiae nam. Amet pariatur molestiae omnis deserunt non quae?
            </CustomTabPanel>
          </div>
        </div>
      </div>
    </div>
  )
}