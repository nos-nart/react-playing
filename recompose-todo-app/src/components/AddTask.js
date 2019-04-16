import React from 'react'
import { connect } from 'react-redux'
import { compose, withStateHandlers } from 'recompose'
import * as actions from '../redux/actions/index'

const AddTask = ({handleChange, handleAdd}) => {
    return (
        <div className="col xl10 l12 m12 s12">
            <div className="row">
                <div className="input-field col s10">
                    <input id="task" type="text" className="validate" onChange={handleChange}/>
                    <label>What you wanna do?</label>
                </div>
                <div className="input-field col s2">
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={handleAdd}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAdd: task => {
            dispatch(actions.add(task))
        }
    }
}

const myHandler = withStateHandlers(
    {task: ''},
    {
        handleChange: (state, props) => event => {
            return {[event.target.id] : event.target.value}
        },
        handleAdd: (state, {onAdd}) => event => {
            onAdd(state.task)
        }
    }
)

export default compose(
    connect(
        mapDispatchToProps
    ),
    myHandler
)(AddTask)