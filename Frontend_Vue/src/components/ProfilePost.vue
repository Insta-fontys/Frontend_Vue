<template>
  <div>
    <img class="img" :src="post.image">
  </div>
</template>

<script>
export default {
    name: 'PostItem',
    props: ['post'],
    data(){
        return{
            isLiked: false,
            reaction: '',
            message: '',
            donateTokens: 0
        }
    },
}
</script>

<style scoped>
    .img{
        display: block;
        width:300px;
        height:400px;
    }

    .description{
        width: 95%;
        font-size: .8rem;
        display: inline-flex;
        flex-direction: row;
    }

</style>
