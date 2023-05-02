import React, { useState } from 'react';
import UserService from '../service/UserService'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate();
  const [view,setView] = useState("logIn");
  const [passAlert,setPassAlert] = useState("");
  const [loginModel,setLoginModel] = useState({mail:"",password:""});
  const [registerModel,setRegisterModel] = useState({mail:"",password:"",name:"",surname:""});
  const [response,setResponse] = useState({success:"",message:""});
  /*{
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
  
     
    } */
  
  const changeView = (view) => {
    setView(view);
    setPassAlert("");
    setResponse("");

    document.querySelectorAll('form').forEach((item) => {item.reset()})
    
  }
  const currentView = () => {
    switch(view) {
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
                    onInput={(e) => handle(e,registerModel)}
                    maxLength={50}                  
                    required/>
                </li>
                <li>
                  <label htmlFor="name">Name:</label>
                  <input 
                    onChange={(e) => handle(e,registerModel)} 
                    type="text" 
                    id="name"
                    maxLength={40}
                    required/>
                </li>
                <li>
                  <label htmlFor="surname">Surname:</label>
                  <input 
                    onChange={(e) => handle(e,registerModel)} 
                    type="text" 
                    id="surname" 
                    maxLength={40}
                    required/>
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input
                    onChange={(e) => {handlePassword(e); handle(e,registerModel)}}
                    type="password" 
                    id="password"
                    minLength={8}
                    maxLength={40}
                    required/>
                </li>
                <li>
                  <label htmlFor="repassword">Repassword:</label>
                  <input 
                    onChange={(e) => handlePassword(e)}
                    type="password"
                    id="repassword" 
                    maxLength={40}
                    required/>   
                </li>
                <label id="registerAlert" style={{color:getColor()}} >{getResponse().message}</label>
                <label id="passAlert" className='text-danger' >{getPassAlert()}</label>
              </ul>
             
            
            </fieldset> 
            <>
              <button 
                id="registerBtn" 
                onClick={(e)=>register(e)} >Register</button>

              <button type="button" onClick={ () => changeView("logIn")}>Have an Account?</button>
            </>
          </form>
        )
        
        case "logIn":
            return (
            <form onSubmit={()=>{return false}}>
                <h2>Welcome To Data Structures Course!</h2>
                <fieldset>
                <legend>Log In</legend>
                <ul>
                    <li>
                    <label htmlFor="mail">Mail:</label>
                    <input 
                      onInput={(e) => {handle(e,loginModel)}} 
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
                      onInput={(e) => {handle(e,loginModel)}}required/>
                    </li>
                    <li>
                    <i/>
                    <a onClick={ () => changeView("PWReset")} href="#">Forgot Password?</a>
                    </li>
                </ul>
                </fieldset>
                <label style={{color:getColor()}}>{getResponse().message}</label>
                <button 
                  id="loginBtn" 
                  onClick={(e) => {login(e)}}>Login</button>

                <button type="button" onClick={() => changeView("signUp")}>Create An Account</button>
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
          <button type="button" onClick={ () => changeView("logIn")}>Go Back</button>
        </form>
        )
      default:
        break
    }

    
  }
  const login = async (e)=>{
    
    //console.log(e);
    e.preventDefault();

    if(validate()){
      await UserService.login(loginModel.mail,loginModel.password)
        .then((res)=>{
          //console.log(res);
          setResponse(UserService.getResponse());
          if(UserService.getResponse().success === true){
            setTimeout(()=>{navigate("/courseMain")},2000)
          }
        })
      
    }
  }
  const register = async (e)=>{
   e.preventDefault();
    if(validate()){
      await UserService.register(registerModel.name,registerModel.surname,registerModel.mail,registerModel.password);
      setResponse(UserService.getResponse());
      setTimeout(()=>{window.location.reload()},2000)
    }
  }
  const handle = (e,whichModel) => {
    whichModel[e.target.id]=e.target.value;
  } 
  const handlePassword = (e) => {
    let password=registerModel.password;
    if(e.target.id === "password"){
      password=document.getElementById("repassword").value;
    }
    
    let isEqual= (e.target.value !== password);
    
    if(isEqual)
      setPassAlert("***Şifreler eşleşmiyor");  

    else
      setPassAlert("");


    if(view === "signUp")
      document.getElementById("registerBtn").disabled=isEqual;
  }
  const getPassAlert = ()=>{
    return passAlert;
  }
  const validate = () => {
    var valid=true;
    document.querySelectorAll("input").forEach((e)=>{
      if(!e.validity.valid){
        valid=false;             
      }            
    })
    return valid;
  }
  const getResponse = () => {
    return response;
  }
  const getColor = () => {
    let res=getResponse();
    
    return res.success ? 'green' : 'red';
  }
  
  return (
    <section id="entry-page">
      {currentView()}
      
    </section>
  );
}