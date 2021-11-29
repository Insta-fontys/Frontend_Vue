<template>
    <input type="file" accept="image/jpeg" @change="convertImage"/>
    <input type="text" placeholder="description" v-model="description"/>

    <div id="preview">
        <img v-if="url" :src="url" />
    </div>    
    <button @click="postImage">Post</button>
</template>

<script>
import api from '../wrappers/PostWrapper.js'

    export default{
        data(){
            return{
                description: '',
                image: '',
                url: ''
            }
        },

        methods:{
            async postImage(){
                await this.convertImage();
                await api.PostImage(this.description, this.image);
            },

            async convertImage(){
                const file = document.querySelector('input[type=file]').files[0]
                const reader = new FileReader()
                this.url = URL.createObjectURL(file)
                
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
