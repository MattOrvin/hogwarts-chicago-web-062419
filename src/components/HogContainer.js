import React from 'react'
import Hogs from './Hogs'
import Filters from './Filters'
import HogData from '../porkers_data';
import hogs from '../porkers_data';


class HogContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            hogsArray: HogData,
            filters: 'name', //'weight'
            greased: false,
            showHidden: false
        }
    }
    
    handleChecked = (event) => {
        // Set the State of grease to true if checked, or false if unchecked
        this.setState({greased: event.target.checked})
    }

    handleDropDown = (event) => {
        // Change the state of state.filters onChange of dropdown from Filters.js        
        this.setState({filters: event.target.value})
    }

    handleHidden = () => {
        // Toggle the state of showHidden
        this.setState({showHidden: !this.state.showHidden})
    }
    filterHiddenArray = (hogsArray) => {
        let hiddenArray
        this.state.showHidden ? 
        hiddenArray = hogsArray.filter(hog => hog.hidden ) : hiddenArray = hogsArray
        return hiddenArray
    }
    filterGreaseArray = (hogsArray) => {
        // Take in an array and only return the ones with the greased === true
        let greaseArray
        this.state.greased ? 
        greaseArray = hogsArray.filter(hog => hog.greased ) : greaseArray = hogsArray
        return greaseArray
    }

    sortArrayName = (hogsArray) => {
        const filteredHogs = this.filterGreaseArray(this.filterHiddenArray(hogsArray)).sort((a, b) => {
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
        return filteredHogs
    }

    sortArrayWeight = (hogsArray) => {
        const filteredHogs = this.filterGreaseArray(this.filterHiddenArray(hogsArray)).sort((a, b) => {
            if(a.weight < b.weight) { return -1; }
            if(a.weight > b.weight) { return 1; }
            return 0;
        })
        return filteredHogs
    }

    render(){
        return( 
            <div>   
                <Filters handleDropDown={this.handleDropDown} handleChecked={this.handleChecked} handleHidden={this.handleHidden} />
                {
                    this.state.filters === 'name' ?
                    <Hogs hogsArray={this.sortArrayName(this.state.hogsArray)} /> :
                    <Hogs hogsArray={this.sortArrayWeight(this.state.hogsArray)} />
                }
            </div>
        )
    }
}

export default HogContainer