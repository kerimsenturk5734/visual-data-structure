
let SERVICE_API_URL = "http://localhost:8080/v1/api/result";

//ENDPOINTS
let GETBYUID_ENDPOINT=`${SERVICE_API_URL}/user_uid_`;
let ADD_ENDPOINT=`${SERVICE_API_URL}/`;

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

    getByUIDandCourseId : async function (uid, courseId){
        await getFetch(`${SERVICE_API_URL}/user_uid_${uid}/course_id_${courseId}`);
    },

    add : async function (result) {
        await postFetch(result, ADD_ENDPOINT);
    }
};


const getFetch =  function(ENDPOINT){
    const token=localStorage.getItem("token");
    return fetch(ENDPOINT, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},
       })
       .then((response) => {
            switch (response.status) {
                case 403:{
                    alert("Lütfen giriş yapınız.")
                    window.location.replace("/");
                    break;
                }
                
                case 404:{
                    return ["NOT_FOUND"]
                }

                default:
                    break;
            }

            return response.json()
       })
       .then((responseJson) => {
            ResultService.setResponse(responseJson);
            //console.log(responseJson)
       })
       .catch((error) => {   
            console.error(error);
       });

}

const postFetch =  function(DATA, ENDPOINT){
    const token=localStorage.getItem("token");

    return fetch(ENDPOINT, {
        method: 'post',
        headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},
        body:JSON.stringify(DATA),
       })
       .then((response) => {
            if(response.status === 403){
                alert("Lütfen giriş yapınız.")
                window.location.replace("/");
            }
            return response;
       })
       .then((responseJson) => {
            ResultService.setResponse(responseJson);
       })
       .catch((error) => {
            console.error(error);
       });

}

export default ResultService;