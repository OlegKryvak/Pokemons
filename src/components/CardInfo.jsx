import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const CardInfo = ({ itemData }) => {

    return <div>
        {
            (!itemData) ? <div></div> : //rendering info about pokemon
                <Box sx={{ mt: '50px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <img src={itemData.sprites.front_default} alt="poke card" />
                    <Box sx={{ fontSize: 40, fontWeight: 900, textTransform: 'capitalize', textAlign: 'center', mb: 1 }}>
                        {itemData.species.name}</Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <h2>Abilities:</h2>
                        {
                            itemData.abilities.map(ability => {
                                return (
                                    <Box sx={{ m: 1,  fontSize: 18}} key={ability.ability.url}>
                                        {ability.ability.name}
                                    </Box>
                                )
                            })
                        }
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <h2>Types:</h2>
                        {
                            itemData.types.map(type => {
                                return (
                                    <Box sx={{ m: 1, fontSize: 18 }} key={type.type.url}>
                                        {type.type.name}
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Box>
        }
    </div>;
};
export default CardInfo;
