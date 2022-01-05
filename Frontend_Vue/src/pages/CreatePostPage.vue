<template>
<div class="panel">
    <div>
        <div id="preview" class="preview">
            <img v-if="url" :src="url" />
        </div> 
        <input type="file" accept="image/jpeg" @change="convertImage"/>
    </div>
    <div class="descriptionPanel">
        <label>Description</label><br>
        <textarea placeholder="desciption" v-model="description"></textarea>
        <button @click="postImage">Post</button>
    </div>
</div>


       
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

<style scoped>
.panel{
    width: 800px;
    height: 410px;
    
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    margin: auto;
    grid-template-rows: 100% 100%;
    grid-template-columns: 50% 50%;

}

img{
    width:400px;
    height: 400px;
}

.preview{
    border: 2px solid black;
    width: 400px;
    height: 400px;
}

.descriptionPanel{
    flex-direction: column;
}

button{
    position: absolute;
    bottom:   0;
    left: 70%;

    width: 120px;
}

label{
    top: 100px;
}

textarea{
    margin-top: 10vh;
}
</style>