<template>
<h1>Profile Page</h1>
    <div class="panel">
        <div class="topSection">
            <div class="profileimageContainer">
                <img src="https://picsum.photos/200/300" alt="avatar"/>
            </div>
            <div class="dataContainer">
                <div class="usernameContainer">
                    <h2>{{this.username}}</h2>
                </div>
                <div class="data">
                    <label>posts: {{this.posts.length}}</label>
                    <label>followers: {{this.followers.length}} </label>
                </div>
                <div class="data">
                    <label>{{this.bio}}</label>
                    <label>{{this.website}}</label>
                </div>
            </div>
        </div>
        <div class="imageContainer"> 
            <div v-for="post in posts" :key="post.id">
                <Post :post="post"/>
            </div>
        </div>
    </div>
</template>

<script>
import Post from '../components/ProfilePost.vue'
import userApi from '../wrappers/UserWrapper.js'

export default {
    data(){
        return{
            username: '',
            posts: [],
            followers: [],
            bio: '',
            website: ''
        }
    },
    components:{
        Post
    },
    async created(){
        this.username = this.$route.query.username

        const response = await userApi.getUserData(this.username)
        this.username = response.username
        this.posts = response.posts
        this.bio = response.bio
        this.website = response.website
        this.followers = response.followers
    }
}
</script>

<style scoped>
.panel{
    margin-left: auto;
    margin-right: auto;
    min-height: 50px;
    width: 45vw;
    background-color: grey;
    border: 2px solid black;
    border-radius: 5px;
}

.topSection{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 20vh;
}

.profileimageContainer{
    width: 25%;
}

img{
    width:100%;
    height: 100%;
    border-radius: 50%;
}

.dataContainer{
    width: 75%;
    display:flex;
    flex-direction: column;
}

.usernameContainer{
    display: grid;
    grid-template-columns: 200px 200px 200px;
}

.data{
    display: grid;
    grid-template-columns: 200px 200px 200px;
}

.imageContainer{
    display:grid;
    grid-template-columns: 400px 400px;
}

</style>
