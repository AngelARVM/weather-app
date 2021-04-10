import React, {Fragment} from 'react';

const Cards = (props) => {
    return (
        
        <Fragment>
        {console.log(props.cities)}
            <h3>{!props.cities ? "No cities to show": "Show" }</h3>
        </Fragment>
    );
}

export default Cards;
