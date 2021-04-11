import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'
import styles from '../css/Links.module.css'

const Links = () => {
    return (
        <Fragment>
            <div className={styles.links}>
                <ul>
                    <li className={styles.li}><Link to="/">Home</Link></li>
                    <li className={styles.li}><Link to="/about">About</Link></li>
                </ul>
            </div>
        </Fragment>
    );
}

export default Links;
