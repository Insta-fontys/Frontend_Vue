<template>
    <div class="background">
        <div class="logo">
            <img src="../assets/MyGramLogo.png"/>
        </div>
        <h1>{{this.prop_name}}</h1>
        <h2>{{this.prop_role}}</h2>
    <div class="links">
        <div v-if="prop_isCreator" class="holder" @click="goToProfilePage">
            <i class="fas fa-home fa-2x icon"></i>
        </div>
        <div v-else class="holder">
            <router-link to="/"><i class="fas fa-home fa-2x icon"></i></router-link>
        </div>
        <div v-if="prop_isCreator" class="holder">
            <router-link to="/createPost"><i class="fas fa-camera fa-2x icon"></i></router-link>
        </div>
        <div class="holder">
            <router-link to="/buytokens"><i class="fas fa-money-bill-wave fa-2x icon"></i> </router-link>
        </div>
        <div class="holder">
            <router-link to="/followers"> <i class="fas fa-users fa-2x icon"></i> </router-link>
        </div>
        <div class="holder" @click="logout">
            <i class="fas fa-sign-out-alt fa-2x icon"></i>
        </div>
    </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
        }
    },
    props:{
        prop_name: {default: "name", type: String},
        prop_role: {default: "role", type: String},
        prop_isCreator: {default: true, type: Boolean}
    },
    methods:{
        logout(){       
            localStorage.removeItem('jwt')
            this.$router.push('login')
        },
        goToProfilePage(){
            this.$router.push({path: 'profile', query: {username: this.prop_name}})
        }
    }
}
</script>


<style scoped>
    .background{
        background-image: url("../assets/Background.png");
        position:fixed;
        top:0;
        left:0;
        width:8%;
        z-index:100;
        height: 100%;
    }

    .logo{
        margin-top: 5%;
    }

    img{
        width: 100%;
    }

    h1, h2{
        color:green;
    }

    .links{
        display:flex;
        flex-direction: column;
    }

    .holder{
        width: 60%;
        height: 90%;
        margin-top: 5px;
        border: 2px solid white;
        border-radius: 90px;
        margin-left: auto;
        margin-right: auto;
        background-color: black;
    }

        .holder:hover{
            cursor: pointer;
        }
    
    .icon{
        color: white;
        margin-top: 0;
        margin-bottom: auto;
        z-index: 0;
    }
</style>