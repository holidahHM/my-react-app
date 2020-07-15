import React from 'react';
import './App.css';

import { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { username } = this.state;
        let elem = document.createElement('p');
        elem.innerText = username;
        elem.style.marginLeft = "44%"
        document.body.appendChild(elem)

    }
    render() {
        const { username } = this.state;
        return (
            <div>
                <h2>Sign up form</h2>
                <form>

                    <input type="text" value={username} placeholder="Username" onChange={this.handleUsernameChange} /> <br />
                    <button onClick={this.handleSubmit}>Submit</button>

                </form>
            </div>
        )
    }
}

export default Form