import React, {Fragment} from 'react';
import { useHistory } from 'react-router';
import arrow from '../assets/leftArrow.svg'
import styles from '../css/About.module.css'
import '../css/global.css'

const About = (props) => {
    const history = useHistory()
    const handleClick = () => {
        history.push("/");
    }

    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                <button className={styles.button} onClick={handleClick}><img className={`${styles.backArrow} `+ (props.darkMode ? `${styles.backArrowDMode}` : "")} src={arrow} alt="go back"/></button>
                    <div className={styles.description}>
                        <h2>Weather App</h2>
                        <p>This is a classic weather-app project in React using Current Weather Data API from <a href="https:openweathermap.com/api" target="_blank" rel="noopener noreferrer">openweathermap</a>. <br/> 
                        It was made for a bootcamp project in the front-end study module.</p>
                    </div>
                    <div className={styles.instructions}>
                    </div>
                    <div className={styles.signature}>
                        <p><strong>Hecho con ❤️</strong></p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default About;
