import axios from 'axios'

var baseUrl = "http://localhost:43085"

var apiConfig = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    }
}

export default {
    async postTokens(tokens){
        var response;

        try{
            response = await axios.put(`${baseUrl}/api/Token`, tokens, apiConfig)
        }
        catch(error){
            response = error.response
        }
        return response
    },

    async donateTokens(model){
        var response; 

        try{
            response = await axios.put(`${baseUrl}/api/Token/donate`, model, apiConfig)
        }
        catch(error){
            response = error.response
        }
        return response
    }
}