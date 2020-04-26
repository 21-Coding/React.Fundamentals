import React from 'react'; 
import KegDetails from './KegDetails.js'
import KegList from './KegList.js'
import AddKegForm from './AddKegForm.js'

class KegControl extends React.Component {

  
        constructor(props) {
            super(props);
            this.state = {
                formVisibleOnPage: false,
                masterKegList: [],
                selectedKegList: null
            };
        }

        handleClick = () => {
            if (this.state.selectedKeg !== null) {
                this.setState({
                    formVisibleOnPage: false,
                    selectedKeg: null
                });
            } else {
                this.setState(prevState => ({
                    formVisibleOnPage: false,
                    selectedKeg: null
                }));
            }
        }
        handleAddingKegToList = (newKeg) => {
            const newMasterKegList =
        }


        handleChangingSelectedKeg = (id) => {
            const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id) [0];
            this.setState({ selectedKeg: selectedKeg });
        }

        render() {
            let currentVisibleState = null;
            let buttonText = null;

            if (this.state.selectedKeg != null) {
                currentVisibleState = <KegDetails
                keg = {this.state.selectedKeg} />
                buttonText = "Return to Kegs";
            } else if (this.state.formVisibleOnPage) {
                currentVisibleState = <AddKegForm onNewKeg = {this.handleAddingKegToList} />
                buttonText = "Return to Keg List";

            } else {
                currentVisibleState = <KegList
                kegList={this.state.masterKegList}
                onKegSelection={this.handleChangeSelectedKeg}
                onMinusOne={this.handleMinusOne} />
            buttonText = "Add new Keg";

            }

            return (
                <React.Fragment>
                    {currentVisibleState}
                    <button onClick ={this.handleClick}>
                    {buttonText}
                    </button>
                </React.Fragment>
            );
        }


    }


export default KegControl;