import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

const Message = ({mssg}) => {
    return (
        <div className="col xl12 l12 m12 s12">
            <p className="teal-text center-align">
                {mssg}
            </p>
        </div>
    )
}

const mapStateToProps = (state) => ({mssg: state.message})

export default compose(
    connect(
        mapStateToProps
    )
)(Message)