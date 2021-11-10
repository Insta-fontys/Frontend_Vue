<template>
    <input type="file" accept="image/jpeg/*" />
    <input type="text" placeholder="description" v-model="description"/>
    <button @click="postImage">Post</button>
</template>

<script>
import api from '../wrappers/PostWrapper.js'

    export default{
        data(){
            return{
                description: '',
                image: ''
            }
        },

        methods:{
            async postImage(){
                const file = document.querySelector('input[type=file]').files[0]
                const form = new FormData();

                form.append('description', 'hello sir');
                form.append('image', file, 'hello')

                await api.UploadImage(form)
            }
        }
    }
</script>
