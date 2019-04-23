import React, { Component } from 'react'
import * as actions from './../actions/index'
import {connect} from 'react-redux'
import * as messages from './../constants/Message'

class AddTask extends Component {
    state = {
        todo: ''
    }

    onAdd = () => {
        this.props.add(this.state.todo)
        this.props.changeMes(messages.MSG_ADD)
    }
    
    render() {
        return (
            <div className="row">
                <div className="input-field no-margin col s8 m8 l10">
                    <input type="text" id="autocomplete-input" className="autocomplete" onChange={e => this.setState({todo: e.target.value})}/>
                    <label>What do you wanna do?</label>
                </div>
                <div className="s4 m4 l2">
                    <button className="btn waves-effect waves-light" onClick={this.onAdd}>Add</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        add: (task) => {
            dispatch(actions.add(task))
        },
        changeMes: messId => {
            dispatch(actions.changeMessage(messId))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTask)
