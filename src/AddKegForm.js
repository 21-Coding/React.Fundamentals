import React from 'react';
import PropTypes from 'prop-types'; 
import ReusableForm from './ReusableForm';

function AddKegForm(props) {

    function handleAddKegFormSubmission(event) {
        event.preventDefault();
        props.onAddKegCreation({
            name: event.target.name.value,
            brand: event.target.brand.value,
            price: event.target.price.value,
            ALC: event.target.ALC.value,
            pint: event.target.pint.value,
            id: v4()

        });
    }

    return (
        <React.Fragment>
            <ReusableForm
            formHandler={handleAddKegFormSubmission}
            buttonText="Add Keg" />
        </React.Fragment>
    );
}