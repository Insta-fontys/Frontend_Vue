import axios from "axios";

var baseUrl = "http://localhost:43085"

var apiConfig = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    }
}

export default {
    async getUserData(name){
        var response;
        try{
            response = await axios.get(`${baseUrl}/api/User/${name}`, apiConfig)
        }
        catch(error){
            response = error.response
        }   
        console.log(response)
        return response.data
    }
}