import React, {Fragment, useState} from 'react';
/* import {Redirect} from 'react-router-dom' */
import styles from '../css/SearchBar.module.css'
import '../css/global.css'

const SearchBar = (props) => {
    //input state will contain input value
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        //empty string? then alert! else call onSearch with input state as argument
        input === "" ? alert('Enter a city name') : props.onSearch(input)
        //setting input state & input.value as ""
        setInput(e.target.input.value = "")
    }

    const handleChange = (e) =>{
        //update input state as input value
        setInput(e.target.value)
    }

    return (
        <Fragment>
            <div className={styles.searchBar}>
                <div className={styles.switch}>
                    <input type="checkbox" checked={props.darkMode} readOnly/>
                    <span className={`${styles.slider} ${styles.round}`} onClick={props.onSwitch}></span>
                </div>
                <div className={styles.search}>
                    <form onSubmit={handleSubmit}> 
                        <input className={styles.input} onChange={handleChange} type="text" name="input" placeholder="Search city"/>
                        <input className={styles.btn} type="submit" value="Add"  />
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default SearchBar;
