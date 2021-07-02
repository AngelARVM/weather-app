import React, {Fragment, useEffect} from 'react';
import { useHistory } from 'react-router';
import styles from '../css/City.module.css'
import arrow from '../assets/leftArrow.svg'
const City = (props) => {
    const history = useHistory()
    const handleClick = () => {
        history.push("/");
    }

    useEffect(() => {
        if(!props.city){
            history.push("/");
        }
    })

    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <button className={styles.button} onClick={handleClick}><img className={`${styles.backArrow} `+ (props.darkMode ? `${styles.backArrowDMode}` : "")} src={arrow} alt="go back"/></button>
                    <div className={styles.info}>
                        <h2>{props.city?.name}</h2>
                        <div className="info">
                            <div>Temperature: {props.city?.temp} ºC</div>
                            <div>Weather: {props.city?.weather}</div>
                            <div>Wind: {props.city?.wind} km/h</div>
                            <div>Clouds: {props.city?.clouds}</div>
                            <div>Latitude: {props.city?.latitud}º</div>
                            <div>Longitude: {props.city?.longitud}º</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default City;
