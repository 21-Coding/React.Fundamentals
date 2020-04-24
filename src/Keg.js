import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

    const kegTypes = {
        height: '200px',
        width: '200px',
        border: '1px solid black',
        borderRadius: '25px',
        padding: '5%',
    }

    return (
        <React.Fragment>
            <div>
                <p>Name: {props.name}</p>
                <p>Brand: {props.brand}</p>
                <p>Price: {props.price}</p>
                <p>ALC: {props.ALC}%</p>
                <p>Pints: {props.pints}</p>
                <div>
                    <button type="submit">Add</button>
                    <button type="submit">Remove</button>
                 </div>
            </div>

        </React.Fragment>
    )

}