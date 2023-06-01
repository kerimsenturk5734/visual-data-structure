import { Navigate } from "react-router-dom";
import UserService from '../service/UserService'
import React, { Component } from 'react'
import * as Loader from 'react-loader-spinner'

class AuthCheck extends Component {
    constructor(props){
        super(props);
        this.state={
            confirm:null,
        }
    }
    
    
    validateToken=async (token)=>{     
        if(token!==null){
            await UserService.isTokenValid(token)
            this.setState({confirm:UserService.getResponse()});
        }
    }


  render() {

    const token = localStorage.getItem("token");
    this.validateToken(token);

    if(token === null){
        {alert("Lütfen giriş yapin")}
        return (
            <Navigate replace to="/"/>      
        )       
    }
    else if(this.state.confirm === null){
        return (
            <Loader.TailSpin
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
          />
        )
    }  
   else{
        if(this.state.confirm){
            if(this.props.path === undefined)
                return (
                    <div>403 No Authorized</div>
                )

            return (
                <Navigate replace to={this.props.path} state={true}/>
            )
        }
        else{
            return (
                <Navigate replace to="/" />
            )
        }
    }

  }
}


export function AuthCheckBuilder(path) {

  return (
    <AuthCheck path={path}/>
  )
}

export default AuthCheck