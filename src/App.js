import React from 'react';
import classes from './App.css';
import User from './User/User'

class App extends React.Component {

  state = {
    users: [
      {name: 'Ivan', age: 24, id: '123qwe'},
      {name: 'Petya', age: 25, id: 'kdsf6'},
      {name: 'Vasya', age: 26, id: 'dfsy72'}
    ],
    pageTitle: 'Default Title',
    isUsersListCollapsed: true
  }

  changeTitleHandler(pageTitle) {
    this.setState({pageTitle});
  }

  changeUserNameHandler = (id, event) => {
    const newUsers = [...this.state.users];
    const user = newUsers.find((user) => {return user.id === id});
    user.name = event.target.value;
    this.setState({users: newUsers});
  }

  deleteUserHandler = (userId) => {
    this.setState({users: this.state.users.filter(user => user.id !== userId)});
  }

  toggleUsersListHandler = () => {
    this.setState({isUsersListCollapsed: !this.state.isUsersListCollapsed})
  }

  render() {
    let usersList = null;

    if (this.state.isUsersListCollapsed) {
      usersList = this.state.users.map(user => { return <User 
                    name={user.name} 
                    age={user.age} 
                    onChangeTitle={this.changeTitleHandler.bind(this, user.name)}
                    onChangeName={(event) => this.changeUserNameHandler(user.id, event)}
                    onDeleteUser={() => this.deleteUserHandler(user.id)}
                    key={user.id}
                  /> })
    }

    return (
      <div className={classes.App}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.changeTitleHandler.bind(this, 'Default')}>Change title</button>
        <button onClick={() => this.toggleUsersListHandler()}>Toggle users list</button>
        {
          usersList         
        }        
      </div>
    );
  }
}

export default App;
