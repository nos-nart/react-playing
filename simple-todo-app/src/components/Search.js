import React, { Component } from 'react'
import * as actions from './../actions/index'
import {connect} from 'react-redux'

class Search extends Component {
    state = {
        fil: ''
    }

    onSearch = () => {
        this.props.search(this.state.fil)
    }

    render() {
        return (
            <div className="row">
                <div className="input-field no-margin col s8 m8 l10">
                    <input type="text" id="autocomplete-input" className="autocomplete" onChange={e => this.setState({fil: e.target.value})}/>
                    <label>What are you looking for?</label>
                </div>
                <div className="s4 m4 l2">
                    <button className="btn waves-effect waves-light" onClick={this.onSearch}>Search</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        search: fil => {
            dispatch(actions.search(fil))
        }
    }
}

export default connect(null, mapDispatchToProps)(Search)
