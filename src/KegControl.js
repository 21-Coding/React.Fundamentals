import React from 'react';
import AddingKegs from './AddKegForm.js';
import KegList from './KegList.js';


class KegControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterKegList: []
        };
    }

    handleAddKegToList = (newKeg) => {
        const newMasterKegList = this.state.masterKegList.concat(newKeg);
        this.setState({
            masterKegList: newMasterKegList,
            formVisibleOnPage: false
        });
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.selectedKeg != null) {
            currentlyVisibleState = <KegDetail />
            buttonText = "Return to Kegs";
        } else if (this.state.formVisibleOnPage) {
          currentlyVisibleState = <AddNewKeg onNewKeg={this.handleAddKegToList} />
          buttonText = "Return to List";
        } else {
            currentlyVisibleState = <KegList
            kegList={this.state.masterKegList}
            onKegSelect={this.handleChangingSelected} />
          buttonText = "Add Keg";
        }
    }

            return (
                <React.Fragment>
                <div>
                    {currentlyVisibleState}
                    <button onClick ={this.handleClick}>{buttonText}</button>
                </div>
                </React.Fragment>
            );
        }
   

export default KegControl;