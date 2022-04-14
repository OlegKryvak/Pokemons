import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const CardItem = ({ items, load, infoItem }) => {
    const componentStyle = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        }
    }


    return <Box style={componentStyle.container} >
        {
            load ? <div>Loading...</div> //if no data set loading
                : items.map((item, index) => { //mapping of data of pokemons
                    if (index < 12) {
                        return (
                            <Box sx={{
                                width: '28%',
                                m: 1,
                                p: 1,
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                boxShadow: 3,
                                cursor: 'pointer',
                                borderRadius: 1,
                                border: 1,
                                borderColor: 'primary.main'
                            }}
                                key={item.id} onClick={() => { infoItem(item) }}>
                                <img src={item.sprites.front_default} alt="pokemon card" />
                                <Box sx={{ textTransform: 'capitalize', fontSize: 18 }}>{item.name}</Box>
                            </Box>

                        )
                    }
                })
        }
    </Box>;

};
export default CardItem;
