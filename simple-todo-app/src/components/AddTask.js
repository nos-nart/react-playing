import React, { Component } from 'react'

class AddTask extends Component {
    render() {
        return (
            <div className="row">
                <div className="input-field no-margin col s8 m8 l10">
                    <input type="text" id="autocomplete-input" className="autocomplete"/>
                    <label>What do you wanna do?</label>
                </div>
                <div className="s4 m4 l2">
                    <button className="btn waves-effect waves-light">Add</button>
                </div>
            </div>
        )
    }
}

export default AddTask
