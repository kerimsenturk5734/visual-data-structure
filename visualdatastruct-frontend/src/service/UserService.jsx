import {
    LoginUserRequest,
    RegisterUserRequest
} from '../model/User'
let SERVICE_API_URL = "http://localhost:8080/v1/api/users";

//ENDPOINTS
let LOGIN_ENDPOINT = `${SERVICE_API_URL}/login`;
let REGISTER_ENDPOINT = `${SERVICE_API_URL}/register`;

const UserService = {
    login: function (mail, password) {
        let loginUser = new LoginUserRequest(mail, password);
        console.log(loginUser);
        postFetch(loginUser, LOGIN_ENDPOINT);
    },

    register: function (name, surname, mail, password) {
        let registerUser = new RegisterUserRequest(name, surname, mail, password);
        console.log(registerUser);
        postFetch(registerUser, REGISTER_ENDPOINT);
    }

};


const postFetch = (DATA, ENDPOINT) => {
    fetch(ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(DATA),
            headers: {
                'Content-type': 'application/json',
                'Accept': '*/*',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Handle data
        })
        .catch((err) => {
            console.log(err.message);
        });

}

export default UserService;