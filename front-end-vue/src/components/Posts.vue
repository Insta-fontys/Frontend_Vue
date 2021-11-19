<template>
    <div :key="post.id" v-for="post in posts">
        <Post :post="post"/>
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
        }
    }
</script>
