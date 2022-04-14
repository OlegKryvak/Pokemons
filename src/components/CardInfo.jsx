import React from "react";
import styles from './CardInfo.module.css';

const CardInfo = ({ itemData }) => {
    function ucFirst(str) { 
        if (!str) return str;

        return str[0].toUpperCase() + str.slice(1);
    }
    return <div className={styles.container}>
        {
            (!itemData) ? <div></div> : //rendering info about pokemon
                <div className={styles.item}> 
                    <img src={itemData.sprites.front_default} alt="poke card"/>
                    <h1>{ucFirst(itemData.species.name)}</h1>
                    <div className={styles.abilities}>
                        <h2>Abilities:</h2>
                        {
                            itemData.abilities.map(ability => {
                                return (
                                    <div key={ability.ability.url}>
                                        {ability.ability.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.types}>
                        <h2>Types</h2>
                        {
                            itemData.types.map(type => {
                                return (
                                    <div key={type.type.url}>
                                        {type.type.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
        }
    </div>;
};
export default CardInfo;
