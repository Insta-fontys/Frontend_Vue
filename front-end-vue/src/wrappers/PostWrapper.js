import axios from "axios";

var baseUrl = "http://localhost:43085"

var apiConfig = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    }
}

export default{
    async PostImage(description, imageinfo){
        const payload = {
            description: description,
            image: imageinfo,
        }
        var response;
        try{
            response = axios.post(`${baseUrl}/api/Post`, payload, apiConfig)
        }
        catch(error){
            response = error.response
        }

        return{
            response
        }
    },

    async UploadImage(image, post){
        var response;
        
        try{
            response = await axios.post(`${baseUrl}/api/Post/upload`, image, apiConfig)
            .then(this.PostImage(post.description, post.image))
            console.log(response)
        }
        catch(error){
            response = error.response
        }

        return{
            response
        }
    },

    async getPosts(){
        var response;

        try{
            response = await axios.get(`${baseUrl}/api/Post`, apiConfig)
        }
        catch(error){
            return error.response
        }
        return response.data
        
    },

    async likePost(post){
        var response;

        try{
            response = await axios.put(`${baseUrl}/api/Post/id`, post, apiConfig)
        }
        catch(error){
            return error.response
        }
        return response.data
    },

    async saveLike(post){
        var response; 
        
        try{
            response = await axios.post(`${baseUrl}/api/SaveLike`, post, apiConfig)
        }
        catch(error){
            return error.response
        }
        return response.data
    },

    async react(reaction){
        var response;

        try{
            response - await axios.post(`${baseUrl}/api/Reaction`, reaction, apiConfig)
        }
        catch(error){
            return error.response
        }
        return response.data
    }
}