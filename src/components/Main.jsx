import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import CardItem from "./CardItem";
import CardInfo from "./CardInfo";
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const Main = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    const [nextPage, setNextPage] = useState();      //state initialization 
    const [prevPage, setPrevPage] = useState();
    const [itemInfo, setItemInfo] = useState();
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');



    const getPokemonData = async () => {
        setLoad(true);
        const res = await axios.get(url);
        setNextPage(res.data.next)
        setPrevPage(res.data.previous);  //set nest and prev url;
        getItem(res.data.results); //call of function to get pokemons
        setLoad(false);  //changing status of loading
    }

    const getItem = async (res) => {
        res.map(async (item) => {
            const pokeData = await axios.get(item.url); //getting of JSON data
            setData(state => {
                state = [...state, pokeData.data];
                state.sort((a, b) => a.id > b.id ? 1 : -1); //setting and sorting of pokemons data
                return state;
            })
        })
    }


    useEffect(() => {
        getPokemonData();  //useEffect calls fuction when url of Next or Prec changes
    }, [url])

    return <div>

        <div>
        </div>

        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={10}>

                    {typeof data !== 'undefined' ?
                        <CardItem items={data} load={load} infoItem={item => setItemInfo(item)} /> : //cheking data
                        <div></div>
                    }
                    <div>
                        {prevPage && <Button sx={{m: 1, width: '100px' }} variant="contained" color="error" onClick={() => {
                            setData([]); //reinitialization of state of empty array to  make portions data
                            setUrl(prevPage); // set url of prev page 
                        }}>
                            Previous
                        </Button>}
                        {nextPage && <Button sx={{m: 1, width: '100px' }} variant="contained" color="success" onClick={() => {
                            setData([])
                            setUrl(nextPage) // set url of next page 
                        }}>
                            Next
                        </Button>}
                    </div>


                </Grid>
                <Grid item xs={6} >
                    <Box sx={{display: 'flex', justifyContent: 'center' }}>
                        <CardInfo itemData={itemInfo} />
                    </Box>
                </Grid>
            </Grid>
        </Box>

    </div>;
};
export default Main;
