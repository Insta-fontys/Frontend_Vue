<template>
<div class="panel">
    <div class="content">
        <label>{{post.creatorId}}</label>
        <img class="img" :src="post.image"/>
    </div>
    <div class="contentJudge">
        <button @click="onLikeClick(post.post)">like</button>
        <i :class="{ 'far fa-heart': !isLiked, 'fas fa-heart': isLiked } " @click="onLikeClick(post.id)"></i>
        <label>{{post.likes}}</label>
        <i class="far fa-comment"></i>
        <i class="far fa-bookmark"></i>
    </div>
    <div class="description">
            <h3>{{post.description}}</h3>
    </div> 
</div>
</template>

<script>
export default {
    name: 'Post',
    props: {
        post: Object
    },
    data(){
        return{
            isLiked: false
        }
    },
    methods: {
        onLikeClick(value){
            console.log("heoi")
            this.$emit('like-post', value)
            this.isLiked = !this.isLiked
            console.log("Isliked = " + this.isLiked)
        }
    },
    emits:["like-post"],
}
</script>

<style scoped>
    
    .panel{
        align-content: center;
        justify-content: center;
        margin-left: 40%;
        background-color: green;
        width: 20vw;
        border: 1px solid black;
    }

    .content{
        align-content: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        position: relative;
        height: auto;
        padding: 10px;
    }

    .contentJudge{
        width: 95%;
        display: inline-flex;
        flex-direction: row;
    }

    .contentJudge  div:last-child {
        float: right;
    }

    .img{
        display: block;
        max-width:400px;
        max-height:500px;
        width: auto;
        height: auto;
    }

    .description{
        width: 95%;
        font-size: .8rem;
        display: inline-flex;
        flex-direction: row;
    }

</style>
