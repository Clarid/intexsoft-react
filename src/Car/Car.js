import React from 'react'

class Car extends React.Component {
    
    state = {
        name: 'default',
        title: 'Title'
    }

    clickHandler = (name) => {
        this.setState({name});
    }

    onChangeHandler = event => {
        this.setState({title: event.target.value});
        console.log(event.target.value)
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <input onChange={this.onChangeHandler}></input>
                <button onClick={() => this.clickHandler('Changed Name')}>Click</button>
                <h2>{this.state.title}</h2>
            </div>
        )
    }

}

export default Car
