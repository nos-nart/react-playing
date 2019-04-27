import React, { Fragment } from 'react'
import { Input, Tooltip } from 'antd'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/index'

class AddTask extends React.Component{
    state = {
        task: ''
    }

    handlePressEnter = e => {
        console.log(e.target.value)
        this.setState({
            task: e.target.value
        })

        this.props.handleAdd(this.props.task)
        e.target.value = ''
    }

    render() {
        return (
            <React.Fragment>
                <Tooltip title="Todo application uses ant design">
                    <h1 className='app-title margin-top'>Todo</h1>
                </Tooltip>
                <Input placeholder="What do you wanna do?" 
                    onPressEnter={this.handlePressEnter}
                />
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    handleAdd: task => {
        dispatch(actions.add(task))
    }
})

export default connect(null, mapDispatchToProps)(AddTask)