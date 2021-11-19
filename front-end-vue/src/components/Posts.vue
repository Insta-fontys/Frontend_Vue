<template>
    <div :key="post.id" v-for="post in posts">
        <Post @like-post="like(post)" :post="post"/>
    </div>
</template>

<script>
import Post from '../components/Post.vue'
    export default {
        name: 'Posts',
        props: {
            posts: Array
        },
        components:{
            Post
        },
        methods:{
            like(post){
                console.log("hehehehe" + post.id)
                this.$emit('test', post)

            }
        },
        emits: ["test"],
    }
</script>
