<template>
    <div>Hoi</div>
    <button @click="getPosts">getPosts</button>
</template>

<script>
import api from '../wrappers/PostWrapper.js'

    export default{
        methods:{
            async getPosts(){
                const resp = api.getPosts();
                console.log(resp);
            }
        }
    }
</script>
