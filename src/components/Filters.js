import React from 'react';

class Filters extends React.Component {
    
    render() {
        // console.log(this.props)
        return(
            <div>
                {/* Sort by onChange Dropdown with Name and Weight */}
                <select onChange={this.props.handleDropDown} id="sort-options">
                    <option value="name">name</option>
                    <option value="weight">weight</option>
                </select>

                {/* Greased? Checkbox on Change */}
                <label>Greased? </label>
                <input type="checkbox" name="greased" value="greased" defaultChecked="" onChange={this.props.handleChecked} />

                {/* Hidden Hogs button onClick */}
                <button className="hide-hogs" onClick={this.props.handleHidden}>Hide Hogs?</button>
            </div>
        )
    }
}

export default Filters