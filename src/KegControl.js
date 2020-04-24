import React from 'react';
import AddingKegs from './AddKegForm.js';
import KegList from './KegList.js';


class KegControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
            masterKegList: []
        };
    }

    handleAddKegToList = (newKeg) => {
        const newMasterKegList = this.state.masterKegList.concat(newKeg);
        this.setState({
            masterKegList: newMasterKegList,
            formVisibleOnPage: false
        })
    }


    
}