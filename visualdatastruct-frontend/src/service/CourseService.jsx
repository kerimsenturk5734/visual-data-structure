

let SERVICE_API_URL = "http://localhost:8080/v1/api/courses";

//ENDPOINTS
let GETALLBYORDERED_ENDPOINT = `${SERVICE_API_URL}/`;
let GETBYNAME_ENDPOINT=`${SERVICE_API_URL}/name_`;


const state = {
    response:"",

}

const CourseService = {
    getResponse:function(){
        return state.response;
    },
    setResponse:function(val){
        state.response = val;
    },
    getAllByOrderedById: async function () {
        await getFetch(GETALLBYORDERED_ENDPOINT);
    },
    getByName: async function (name) {
        await getFetch(`${GETBYNAME_ENDPOINT}${name}`);
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
            CourseService.setResponse(responseJson);
       })
       .catch((error) => {
         console.error(error);
       });

}

export default CourseService;