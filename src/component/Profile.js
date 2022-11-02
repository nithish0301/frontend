import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/AuthService";
import Registercopy from "./Registercopy";
import { Switch, Route, Link } from "react-router-dom";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container"  style={{color: "black"}}>
        {(this.state.userReady) ?

          <div className="card">
        
        <h1>UserName:  {currentUser.username}</h1>
        <p className="title">ID:  {currentUser.id}</p>
        <p>EMAILID:  {currentUser.email}</p>
        <p>ROLE:  {currentUser.roles}</p>
        
        
      </div>: null}

</div>
    );
  }
}
