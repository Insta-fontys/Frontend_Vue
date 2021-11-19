<template>
    <input type="file" accept="image/jpeg" @change="convertImage"/>
    <input type="text" placeholder="description" v-model="description"/>
    <button @click="postImage">Post</button>
</template>

<script>
import api from '../wrappers/PostWrapper.js'
import ImageConverter from "../ImageConverter";

    export default{
        data(){
            return{
                description: '',
                image: ''
            }
        },

        methods:{
            async postImage(){
                await this.convertImage();
                await api.PostImage(this.description, this.image);
            },
            
            onChange(){
                const file = document.querySelector('input[type=file]').files[0]
                console.log(ImageConverter.convertImage(file));
            },

            async convertImage(){
                const file = document.querySelector('input[type=file]').files[0]
                const reader = new FileReader()

                let rawImg;
                reader.onloadend = () => {
                    rawImg = reader.result;
                    this.image = rawImg;  
                }
                return reader.readAsDataURL(file);
            }
        }
    }
</script>
