import React from 'react'
import { connect } from 'react-redux'
import { compose, withStateHandlers } from 'recompose'
import * as actions from '../redux/actions/index'
import * as messages from '../redux/constants/Messages'

const AddTask = ({handleOnChange, handleOnAdd}) => {
    return (
        <div className="col xl10 l12 m12 s12 mt-100">
            <div className="row">
                <div className="input-field col s10">
                    <input id="task" type="text" className="validate" onChange={handleOnChange}/>
                    <label>What you wanna do?</label>
                </div>
                <div className="input-field col s2">
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={handleOnAdd}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
        onAdd: task => {
            dispatch(actions.add(task))
        },
        changeMssg: mssg => {
            dispatch(actions.changeMessage(mssg))
        }
})

export default compose(
    connect(
        null,
        mapDispatchToProps
    ),
    withStateHandlers(
        {
            task: ''
        },
        {
            handleOnChange: () => event => {
                let mergeState = {
                    [event.target.id]: event.target.value
                }
                return mergeState
            },
            handleOnAdd: (state, {onAdd, changeMssg}) => {
                onAdd(state)
                changeMssg(messages.MSSG_ADD)
            }
        }
    )
)(AddTask)