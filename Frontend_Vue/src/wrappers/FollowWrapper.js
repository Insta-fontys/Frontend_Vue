import axios from "axios";

var baseUrl = "http://localhost:43085"

var apiConfig = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    }
}

export default {
    async PostFollow(model){
        var response;

        try{
            response = await axios.post(`${baseUrl}/api/Follow`, model, apiConfig) 
        }
        catch(error){
            response = error.response
        }
        return response
    },

    async getFollowers(){
        var response;

        try{
            response = await axios.get(`${baseUrl}/api/Follow`, apiConfig) 
        }
        catch(error){
            response = error.response
        }
        return response.data
    },
    
    async GetFollowings(){
        var response;

        try{
            response = await axios.get(`${baseUrl}/api/Follow/following`, apiConfig) 
        }
        catch(error){
            response = error.response
        }
        return response.data
    }
}