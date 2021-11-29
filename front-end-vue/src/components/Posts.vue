<template>
    <div :key="post.id" v-for="post in posts">
        <Post @like-post="like(post)" @react-post="test" @follow="follow" :post="post"/>
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
        async created(){
            console.log("posts = " + this.posts)
        },
        methods:{
            like(post){
                console.log("hehehehe" + post.id)
                this.$emit('test', post)

            },

            test(e){
                this.$emit('reaction', e)
            },

            follow(e){
                this.$emit('follow', e)
            }
        },
        emits: ["test", "reaction", "follow"],
    }
</script>
