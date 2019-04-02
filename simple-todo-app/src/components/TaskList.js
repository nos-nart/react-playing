import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions/index'
import Search from './Search'
import Task from './Task'

class TaskList extends Component {
    onSearch = (fil) => {
        this.props.onSearch(fil)
    }

    render() {
        let {tasks, fil} = this.props
        let listTask = tasks.map((task, index) => {
            return (<tr>
                        <Task 
                            key={index} 
                            name={task.name}
                        />
                    </tr>)
        })
        return (
            <div className="col s12 m12 l12">
                <table class="striped">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>ID</th>
                        <th>Todo</th>
                    </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <Search onHandleSearch={this.onSearch(fil)}/>
                            </td>
                        </tr>
                        {listTask}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToPtops = state => {
    return {
        tasks: state.tasks,
        fil: state.search
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: fil => {
            dispatch(actions.search(fil))
        }
    }
}

export default connect(mapStateToPtops, mapDispatchToProps)(TaskList)
