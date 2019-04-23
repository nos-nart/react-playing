import React, { Component } from 'react'

export default class Task extends Component {
    render() {
        let {id, name, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                    <button className="btn btn-danger waves-light waves-effect">Delete</button>
                </td>
            </tr>
        )
    }
}
