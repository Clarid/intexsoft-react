import React from 'react'
import classes from './User.css'
import Radium from 'radium'

const User = props => {
    const divStyle = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .15)',
        ':hover': {
            border: '1px solid #aaa',
            cursor: 'pointer',
            boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)'
        }
    };

    const inpClasses = [classes.input];

    if (props.name.length) {
        inpClasses.push(classes.green);
    } else {
        inpClasses.push(classes.red);
    }

    if (props.name.length > 4) {
        inpClasses.push(classes.bold);
    }

    return (
        <div className={classes.User} style={divStyle}>
            <h1>{props.name}</h1>
            <h2>{props.age} years old</h2>
            <input className={inpClasses.join(' ')} type='text' onChange={props.onChangeName} defaultValue={props.name}></input>
            <button onClick={props.onChangeTitle}>Change title</button>
            <button onClick={props.onDeleteUser}>Delete user</button>
        </div>
    )
}

export default Radium(User);