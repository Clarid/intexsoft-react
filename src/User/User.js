import React from 'react'
import './User.css'

export default props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age} years old</h2>
            <input type='text' onChange={props.onChangeName} defaultValue={props.name}></input>
            <button onClick={props.onChangeTitle}>Change title</button>
            <button onClick={props.onDeleteUser}>Delete user</button>
        </div>
    )
}