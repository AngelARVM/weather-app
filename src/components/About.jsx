import React, {Fragment} from 'react';
import styles from '../css/About.module.css'
import '../css/global.css'

const About = () => {
    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.description}>
                    <h2>Weather App</h2>
                    <p>This is a classic weather-app project in React using <a href="https:openweathermap.com/api" target="_blank" rel="noopener noreferrer">openweathermap</a>'s API. <br/> 
                    It was made for a bootcamp project in the front-end study module.</p>
                </div>

                <div className={styles.instructions}>

                </div>

                <div className={styles.signature}>
                    <p><strong>Angel Romero</strong></p>
                </div>
            </div>
        </Fragment>
    );
}

export default About;
