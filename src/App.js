import React, { Component } from "react";

import { connect } from "react-redux";
import { addUser, deleteUser } from "./store/actions";

import "./App.css";

class App extends Component {
  state = {
    users: [],
    newUser: ""
  };

  onChangeUser = e => {
    this.setState({ newUser: e.target.value });
  };

  renderUser = user => {
    return (
      <div className="user" key={user}>
        {user}
        <input
          type="button"
          className="btn"
          value="Delete"
          onClick={() => this.deleteUser(user)}
        />
      </div>
    );
  };

  addUser = () => {
    this.props.addUser(this.state.newUser);
  };

  // deleteUser = userName => {
  //   this.setState(prevState => ({
  //     users: prevState.users.filter(user => user !== userName)
  //   }));
  // };

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <div style={{ display: "flex" }}>
          <input
            className="input-text"
            type="text"
            placeholder="Username"
            value={this.state.newUser}
            onChange={this.onChangeUser}
          />
          <input
            type="button"
            className="btn"
            onClick={this.addUser}
            value="Add User"
          />
        </div>
        <div className="user-list">
          {this.props.users && this.props.users.map(this.renderUser)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
