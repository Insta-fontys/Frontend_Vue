<template>
    <img :src="imageSource" alt="Red dot"/>
    <label>{{description}}</label>
    <div>
        Like dislike
    </div>
</template>

<script>
export default{
    props:{
        imageSource : String,
        description: String
    },
    Data(){
        return{
            img : ''
        }
    },
    mounted(){
        this.img = this.imageSource
    }
}
</script>
