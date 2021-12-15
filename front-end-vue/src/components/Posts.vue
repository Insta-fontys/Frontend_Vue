<template>
  <div
    v-for="post in posts"
    :key="post.id"
  >
    <Post
      :post="post"
      @like-post="like(post)"
      @react-post="test"
      @follow="follow"
      @donate="donate"
    />
  </div>
</template>

<script>
import Post from '../components/Post.vue'
    export default {
        name: 'Posts',
        components:{
            Post
        },
        props: {
            posts: Array
        },
        emits: ["test", "reaction", "follow", "donate"],
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
            },

            donate(e){
                this.$emit('donate', e)
            }
        },
    }
</script>
