import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import Logo from '../assets/weather-129.svg'
import SearchBar from './SearchBar'
import Links from './Links'
import '../css/global.css'
import styles from '../css/Nav.module.css'


const Nav = (props) => {
    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <div>
                        <Link to="/"><span className={styles.left}><img className="logo" src={Logo} alt="logo"/> <h3>Weather App</h3></span></Link>
                    </div>
                    <div>
                        <Links />
                    </div>
                    <div className={styles.right}>
                        <SearchBar onSearch={props.onSearch}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Nav;
