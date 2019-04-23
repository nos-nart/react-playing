import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions/index'
import Task from './Task'

class TaskList extends Component {
    onDelete = id => {
        this.props.delete(id)
    }
    render() {
        let {tasks} = this.props
        let listTask = tasks.map((task, index) => {
            return (
                        <Task 
                            key={index} 
                            index={index}
                            name={task.name}
                            id={task.id}
                            handleDelete={this.onDelete}
                        />
                    )
        })
        return (
            <div className="col s12 m12 l12">
                <table className="striped responsive-table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>ID</th>
                            <th>Todo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {listTask}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToPtops = state => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        delete: id => {
            dispatch(actions.remove(id))
        }
    }
}

export default connect(mapStateToPtops, mapDispatchToProps)(TaskList)
