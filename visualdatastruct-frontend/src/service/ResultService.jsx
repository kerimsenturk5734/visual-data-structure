
let SERVICE_API_URL = "http://localhost:8080/v1/api/result";

//ENDPOINTS
let GETBYUID_ENDPOINT=`${SERVICE_API_URL}/user_uid_`;

const state = {
    response:"",

}

const ResultService = {
    
    getResponse:function(){
        return state.response;
    },
    setResponse:function(val){
        state.response = val;
    },
    getByUID: async function (uid) {
        await getFetch(`${GETBYUID_ENDPOINT}${uid}`);
    }, 
};


const getFetch =  function(ENDPOINT){
    const token=localStorage.getItem("token");

    return fetch(ENDPOINT, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},
       })
       .then((response) => {
            if(response.status === 403){
                alert("Lütfen giriş yapınız.")
                window.location.replace("/");
            }
            return response.json()
       })
       .then((responseJson) => {
            ResultService.setResponse(responseJson);
            //console.log(responseJson)
            console.log(ENDPOINT)
       })
       .catch((error) => {
            
            //console.error(error);
       });

}

export default ResultService;