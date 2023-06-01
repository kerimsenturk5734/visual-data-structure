
import {
    LoginUserRequest,
    RegisterUserRequest
} from '../model/User'

let SERVICE_API_URL = "http://localhost:8080/v1/api/users";

//ENDPOINTS
let LOGIN_ENDPOINT = `${SERVICE_API_URL}/login`;
let REGISTER_ENDPOINT = `${SERVICE_API_URL}/register`;
let VALIDATE_ENDPOINT = `${SERVICE_API_URL}/validate`;

const state = {
    response:"",

}

const UserService = {
    getResponse:function(){
        return state.response;
    },
    setResponse:function(val){
        state.response = val;
    },
    login: async function (mail, password) {
        let loginUser = new LoginUserRequest(mail, password);
        //console.log(loginUser);
        
         await postFetch(loginUser, LOGIN_ENDPOINT);
         let res=state.response;

         if(res.success === true){
            localStorage.setItem("token",res.data.token.key);
            localStorage.setItem("uid",res.data.uid)
            localStorage.setItem("mail",res.data.mail)
            localStorage.setItem("name",res.data.name)
            localStorage.setItem("surname",res.data.surname)

         }
    },

    logout:function(){
        localStorage.removeItem("user");
        
    },
    
    isTokenValid:async function(token){
         return fetch(VALIDATE_ENDPOINT, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body:token,
           })
           .then((response) =>{
                if(response.status === 403){
                    alert("Lütfen giriş yapınız.")
                    window.location.replace("/");
                }
                return response.json()
           })
           .then((responseJson) => {
                UserService.setResponse(responseJson);
               // console.log(responseJson);
           })
           .catch((error) => {
             console.error(error);
           });
    
    },

    register: async function (name, surname, mail, password) {
        let registerUser = new RegisterUserRequest(name, surname, mail, password);
        await postFetch(registerUser, REGISTER_ENDPOINT);
        
    }

    
};


const postFetch =  function(DATA, ENDPOINT){
    return fetch(ENDPOINT, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(DATA),
       })
       .then((response) => response.json())
       .then((responseJson) => {
            UserService.setResponse(responseJson);
       })
       .catch((error) => {
         console.error(error);
       });

}

export default UserService;