
import {
    LoginUserRequest,
    RegisterUserRequest
} from '../model/User'

let SERVICE_API_URL = "http://localhost:8080/v1/api/users";

//ENDPOINTS
let LOGIN_ENDPOINT = `${SERVICE_API_URL}/login`;
let REGISTER_ENDPOINT = `${SERVICE_API_URL}/register`;

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
         console.log(state.response);
    },

    register: async function (name, surname, mail, password) {
        let registerUser = new RegisterUserRequest(name, surname, mail, password);
        console.log(registerUser);
        await postFetch(registerUser, REGISTER_ENDPOINT);
        console.log(state.response);
        
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