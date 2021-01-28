import React, { Component } from 'react'

export default class ChildComponnent extends Component {
    render() {
        return (
            <div>
                Hello {this.props.username}!
            </div>
        )
    }
}
