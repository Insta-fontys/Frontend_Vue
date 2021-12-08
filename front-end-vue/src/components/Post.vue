<template>
<div class="panel">
    <div class="topBar">
        <label>{{post.creatorUsername}}</label>
        <button class="follow" @click="onClickFollow(post.creatorId)">Follow</button>
    </div>
    <div class="content">
        <img class="img" :src="post.image"/>
    </div>
    <div class="contentJudge">
        <div class="likeComment">
            <button @click="onLikeClick(post.post)"><i :class="{ 'far fa-heart': !isLiked, 'fas fa-heart': isLiked}" ></i></button>
            <label>{{post.likes}}</label>
            <i class="far fa-comment"></i>
        </div>
        <div class="bookmark">
            <i class="far fa-bookmark"></i>
        </div>
    </div>
    <div class="reaction">
        <textarea v-model="reaction"/><button @click="onReactionPost()">React</button>
    </div>
    <div class="description">
            <h3>{{post.description}}</h3>
    </div> 
    <div :key="reaction.id" v-for="reaction in post.reactions">
        <div>{{reaction.message}}</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Post',
    props: ['post'],
    mounted(){
        console.log(this.post)
    },
    data(){
        return{
            isLiked: false,
            reaction: '',
            message: ''
        }
    },
    methods: {
        onLikeClick(value){
            this.$emit('like-post', value)
            this.isLiked = !this.isLiked
        },
        onReactionPost(){
            if(!this.reaction){
                alert("please fill in a reaction")
                return
            }

            const payload={
                postId: this.post.id,
                like: this.like,
                message: this.reaction
            }
            this.$emit('react-post', payload)
        },
        onClickFollow(name){
            this.$emit('follow', name)
        }
    },
    emits:["like-post", "react-post", "follow"],
}
</script>

<style scoped>
    
    .panel{
        align-content: center;
        justify-content: center;
        margin-left: 40%;
        background-color: #c4c7c44f;
        width: 20vw;
        border: 1px solid black;
    }
    
    .topBar{
        margin-top: 5px;
        margin-left: 10px;
        display:flex;
        flex-direction: row;
    }

    .follow{
        margin-left: auto;
        margin-right: 10px;
        border: 0 solid black;
    }

        .follow:hover{
            background-color: rgb(69 176 209);
        }

    .content{
        align-content: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        position: relative;
        height: auto;
        padding: 10px;
    }
    
    .img{
        display: block;
        max-width:400px;
        max-height:500px;
        width: auto;
        height: auto;
    }

    .contentJudge{
        margin-top: 5px;
        margin-left: 10px;
        display:flex;
        flex-direction: row;
    }

    .likeComment{
        margin-right: auto;
    }

    .bookmark{
        margin-left: auto;
        margin-right: 10px;
    }

    .reaction{
        margin-top: 5px;
        flex-direction: row;
        display: flex;
        margin-left: 10px;
    }

    .description{
        width: 95%;
        font-size: .8rem;
        display: inline-flex;
        flex-direction: row;
    }

    label{
        font-style: italic;
    }

</style>
