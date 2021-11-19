<template>
    <img :src="post.image"/>
    <h3>{{post.description}}</h3>
    <label>{{post.likes}}</label>
</template>

<script>
export default {
    name: 'Post',
    props: {
        post: Object
    }
}
</script>
