import React, { Component } from 'react'

export class Checked extends Component {
    state = {
        isChecked: false
    }

    onChange = e =>{
        this.setState({isChecked : e.target.checked})
    }


    render() {
        const {isChecked} = this.state
        return (
            <div>
                <h1>Is it chekced : {isChecked ? "yes" : "no"}</h1>
                <label>Is it checked
                    <input type="checkbox"
                    checked={isChecked}
                    onChange={this.onChange}/>
                </label>
            </div>
        )
    }
}

export default {Checked}
