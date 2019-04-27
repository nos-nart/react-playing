import React, { Fragment } from 'react'
import { List } from 'antd'
import { connect } from 'react-redux'

class TaskList extends React.Component {
    render() {
        let {tasks} = this.props
        console.log(tasks)
        return (
            <React.Fragment>
                <List 
                    className="margin-top"
                    locale={{emptyText: "No todo item"}}
                    dataSource={this.props.tasks}
                    renderItem={item => (
                        <List.Item>{item.name}</List.Item>
                    )}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks
})

export default connect(mapStateToProps, null)(TaskList)