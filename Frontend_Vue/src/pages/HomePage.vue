<template>
    <div>
        <Posts @test="likePost" @reaction="reaction" @follow="follow" @donate="donate" @profile="goToProfilePage" :posts="imagePosts"/>
    </div>
</template>

<script>
import api from '../wrappers/PostWrapper.js'
import Posts from '../components/Posts.vue'
import followApi from '../wrappers/FollowWrapper.js'
import donateApi from '../wrappers/TokenWrapper.js'
// import ImagePostComponent from '../components/ImagePostComponent.vue'

    export default{
        components:{
            // ImagePostComponent,
            Posts
        },
        data(){
            return{
                imagePosts: [],
                reactions: []
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
                console.log("imagePosts = " + this.imagePosts)
            },
            async likePost(post){
                var response =  await api.saveLike(post)
                if(response)
                    await api.likePost(post)
            },

            async reaction(e){
                await api.react(e)
            },

            async follow(e){
                const payload = {
                    creatorId: e
                }
                console.log(payload)
                await followApi.PostFollow(payload);
            },

            async donate(e){
                await donateApi.donateTokens(e);
                alert("thank you for your donation")
            },

            goToProfilePage(e){
                this.$router.push({path: 'profile', query: {username: e}})
            }
        }
    }
</script>
