import React from 'react';
import UserService from '../service/UserService'
const { Component } = React;




export default class EntryPage extends Component {
  state = {
    currentView: "logIn",
    passAlert: "",
    login:{
      mail:"",
      password:""
    },
    response:{
      success:"",
      message:"",
    },

    register:{
      mail:"",
      password:"",
      name:"",
      surname:""
    },

   
  }
  changeView = (view) => {
    this.setState({
      currentView: view,
      passAlert:"",
      response:"",
    })
    document.querySelectorAll('form').forEach((item) => {item.reset()})
    
  }
  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (            
          <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create An Account</legend>
              <ul>
                <li>
                  <label htmlFor="mail">Mail:</label>
                  <input
                    id="mail"
                    onInput={(e) => this.handle(e,this.state.register)}
                    maxLength={50}                  
                    required/>
                </li>
                <li>
                  <label htmlFor="name">Name:</label>
                  <input 
                    onChange={(e) => this.handle(e,this.state.register)} 
                    type="text" 
                    id="name"
                    maxLength={40}
                    required/>
                </li>
                <li>
                  <label htmlFor="surname">Surname:</label>
                  <input 
                    onChange={(e) => this.handle(e,this.state.register)} 
                    type="text" 
                    id="surname" 
                    maxLength={40}
                    required/>
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input
                    onChange={(e) => {this.handlePassword(e); this.handle(e,this.state.register)}}
                    type="password" 
                    id="password"
                    minLength={8}
                    maxLength={40}
                    required/>
                </li>
                <li>
                  <label htmlFor="repassword">Repassword:</label>
                  <input 
                    onChange={(e) => this.handlePassword(e)}
                    type="password"
                    id="repassword" 
                    maxLength={40}
                    required/>   
                </li>
                <label id="registerAlert" style={{backgroundColor:'green'}} >{this.getResponse().message}</label>
                <label id="passAlert" className='text-danger' >{this.getPassAlert()}</label>
              </ul>
             
            
            </fieldset> 
            <>
              <button 
                id="registerBtn" 
                onClick={(e)=>this.register(e)} >Register</button>

              <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
            </>
          </form>
        )
        
        case "logIn":
            return (
            <form>
                <h2>Welcome To Data Structures Course!</h2>
                <fieldset>
                <legend>Log In</legend>
                <ul>
                    <li>
                    <label htmlFor="mail">Mail:</label>
                    <input 
                      onInput={(e) => {this.handle(e,this.state.login)}} 
                      id="mail" 
                      type="email"
                      maxLength="50" 
                      required/>
                    </li>
                    <li>
                    <label htmlFor="password">Password:</label>
                    <input 
                      type="password" 
                      id="password"  
                      onInput={(e) => {this.handle(e,this.state.login)}}required/>
                    </li>
                    <li>
                    <i/>
                    <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
                    </li>
                </ul>
                </fieldset>
                <label style={{color:this.getColor()}}>{this.getResponse().message}</label>
                <button 
                  id="loginBtn" 
                  onClick={(e) => {this.login(e)}}>Login</button>

                <button type="button" onClick={() => this.changeView("signUp")}>Create An Account</button>
            </form>
            )
        case "PWReset":
            return (
          <form>
          <h2>Reset Password</h2>
          <fieldset>
            <legend>Password Reset</legend>
            <ul>
              <li>
                <em>A reset link will be sent to your inbox!</em>
              </li>
              <li>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required/>
              </li>
            </ul>
          </fieldset>
          <button>Send Reset Link</button>
          <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
        </form>
        )
      default:
        break
    }

    
  }
  login = async (e)=>{
    //console.log(e);
    //e.preventDefault();
    if(this.validate()){
      let loginUser=this.state.login;
      await UserService.login(loginUser.mail,loginUser.password)
      this.setState({response : UserService.getResponse()})
    }
  }
  register = async (e)=>{
   //e.preventDefault();
    if(this.validate()){
      let registerUser=this.state.register;
      await UserService.register(registerUser.name,registerUser.surname,registerUser.mail,registerUser.password);
      this.setState({response : UserService.getResponse()});
      
    }
  }
  handle = (e,whichModel) => {
    whichModel[e.target.id]=e.target.value;
  } 
  handlePassword = (e) => {
    let registerState=this.state.register;
    let password=registerState.password;
    if(e.target.id === "password"){
      password=document.getElementById("repassword").value;
    }
    
    let isEqual= (e.target.value !== password);
    
    if(isEqual){
      this.setState({
        passAlert: "***Şifreler eşleşmiyor"
      });
      
    }    
    else{
      this.setState({
        passAlert: ""
      });
    }

    if(this.state.currentView === "signUp")
      document.getElementById("registerBtn").disabled=isEqual;
  }
  getPassAlert = ()=>{
    return this.state.passAlert;
  }
  validate = () => {
    var valid=true;
    document.querySelectorAll("input").forEach((e)=>{
      if(!e.validity.valid){
        valid=false;             
      }            
    })
    return valid;
  }
  getResponse = () => {
    return this.state.response;
  }
  getColor = () => {
    let res=this.getResponse();
    
    return res.success ? 'green' : 'red';
  }
  render() {
    return (
      <section id="entry-page">
        {this.currentView()}
        
      </section>
    )
  }
}

