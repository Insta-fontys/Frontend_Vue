import axios from "axios";

var baseUrl = "http://localhost:43085"

export default {

    async createFan(data){
        var response;

        try{
            response = await axios.post(`${baseUrl}/api/Register/fan`, data)
        }
        catch(error){
            response = error.response;
        }

        return{
            response
        }
    },

    async createCreator(data){
        var response;

        try{
            response = await axios.post(`${baseUrl}/api/Register/creator`, data)
        }
        catch(error){
            response = error.response;
        }

        return{
            response
        }
    },
}