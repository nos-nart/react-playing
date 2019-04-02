import React, { Component } from 'react'
import {connect} from 'react-redux'

class Message extends Component {
    render() {
        let {message} = this.props
        return (
            <div className="col s12 m12 l12 xl12">
                <p className="center-align blue-text">{message}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps, null)(Message)