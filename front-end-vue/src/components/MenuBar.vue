<template>
    <div class="background">
        <h1>{{this.name}}</h1>
        <h2>{{this.role}}</h2>
    <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/createPost">Create</router-link>
        <router-link to="/buytokens">Tokens </router-link>
    </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            name: '',
            role: ''
        }
    }
}
</script>


<style scoped>
    .background{
        background-color: #c0c0c0;
        position:fixed;
        top:0;
        left:0;
        width:8%;
        z-index:100;
        height: 100%;
    }

    .links{
        display:flex;
        flex-direction: column;
    }
</style>