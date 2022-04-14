import React from "react";
import styles from './CardItem.module.css';

const CardItem = ({ items, load, infoItem }) => {
    return <div className={styles.container}>
        {
            load ? <div>Loading...</div> //if no data set loading
                : items.map((item, index) => { //mapping of data of pokemons
                    if (index < 12) {
                        return (
                            <div className={styles.item} key={item.id} onClick={() => { infoItem(item) }}>
                                <img src={item.sprites.front_default} alt="pokemon card" />
                                <h1>{item.name}</h1>
                            </div>
                        )
                    }
                })
        }
    </div>;
};
export default CardItem;
