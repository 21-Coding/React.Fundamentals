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
            <div onClick={() => props.whenClicked(props.id)}>

            <div style={kegTypes}>
                <p>Name: {props.name}</p>
                <p>Brand: {props.brand}</p>
                <p>Price: {props.price}</p>
                <p>ALC: {props.ALC}%</p>
                <p>Pints: {props.pints}</p>
                <div>
                    
                 </div>
            </div>

            </div>

        </React.Fragment>
    )

}

Keg.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ALC: PropTypes.number.isRequired,
    pints: PropTypes.number.isRequired,
    id: PropTypes.string, 
    whenClicked: PropTypes.func,
    
}

export default Keg;