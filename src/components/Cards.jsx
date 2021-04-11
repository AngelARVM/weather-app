import React, {Fragment} from 'react';
import Card from './Card'
import styles from '../css/Cards.module.css'
import '../css/global.css'

const Cards = (props) => {
    return (
        
        <Fragment>
            <div className={styles.cards}>   
                {props.cities.length === 0 ? <h3>No cities to show</h3>: 
                props.cities.map(city => <Card city={city} id={city.id} onClose={() => props.onClose(city.id)} key={city.id}/>)}
            </div>
        </Fragment>
    );
}

export default Cards;
