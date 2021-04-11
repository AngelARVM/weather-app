import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import '../css/global.css'
import styles from '../css/Card.module.css'

const Card = (props) => {
    return (
        <Fragment>
            <div className={styles.card}>
                <button className={styles.btnRed} onClick={props.onClose}>x</button>
                <h2 className={styles.h2}><Link to={`/city/${props.id}`}>{props.city.name}</Link></h2>
                <div className={styles.data}>
                    
                    <div className={styles.col}>
                        <h3>Min</h3>
                        {props.city.min} &#176;C
                    </div>
                    
                    <div className={styles.col}>
                        <h3>Max</h3>
                        {props.city.max} &#176;C
                    </div>
                    
                    <div className={styles.col}>
                        
                        <img src={`http://openweathermap.org/img/wn/${props.city.img}@2x.png`} alt="weather"/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Card;
