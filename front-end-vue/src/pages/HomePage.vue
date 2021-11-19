<template>
    <div>
        <Posts :posts="imagePosts"/>
    </div>
</template>

<script>
import api from '../wrappers/PostWrapper.js'
import Posts from '../components/Posts.vue'
// import ImagePostComponent from '../components/ImagePostComponent.vue'

    export default{
        components:{
            // ImagePostComponent,
            Posts
        },
        data(){
            return{
                imagePosts: []
            }
        },

        async created(){
            await this.getPosts()

        },
        methods: {
            async getPosts(){
                const response = await api.getPosts()
                //Object.keys(response).forEach(key => this.imagePosts.push(response[key]))
                this.imagePosts = response
                console.log("Images = " + this.imagePosts)
            }
        }
    }
</script>
