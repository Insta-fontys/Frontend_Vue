<template>
<div class="background">
    <div class="panel">
        <div class="section">
            <div class="input">
                <i class="icon fas fa-envelope"/>
                <div class="line" />
                <input v-model="email" class="input-field" placeholder="Email"/>
            </div>
            <div class="input">
                <i class="icon fas fa-lock"/>
                <div class="line" />
                <input v-model="username" class="input-field" placeholder="Username"/>
            </div>
            <label>Fan account </label><input type="checkbox" v-model="isFanAccount"/>
        </div>
        <div class="section" >
            <button class="btn" @click="registerAccount">Register</button>
        </div>
    </div>
</div>
</template>

<script>
import api from '../wrappers/RegistrationWrapper.js'

    export default{
        data(){
            return{
                email: '',
                username: '',
                isFanAccount: false
            }
        },

        methods: {
            async registerAccount(){
                if(!this.email || !this.username){
                    alert("All fields need to be filled in")
                    return
                }
                const payload = {
                    email: this.email,
                    username: this.username
                }

                if(this.isFanAccount){
                    await api.createFan(payload)
                }
                else{
                    await api.createCreator(payload)
                }
                alert("Account has been created")
                this.$router.push('login')
            }
        }
    }
</script>

<style scoped>
.background{
        width: 99vw;
        height: 98vh;
        background-color: blue;
    }
    .panel{
        position: absolute;
        min-width: 500px;
        width: 32.5vw;
        height: 50vh;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-color: white;
        box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .section{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title{
        font-weight: 400;
        font-style: normal;
        font-size: 4em;
        color: var(--text-color);
        opacity: 0.85;
    }

    .input{
        width: 75%;
        height: 50px;
        border: 3px solid black;
        border-radius: 10px;
        display: flex;
        align-items: center;
        margin-bottom: 25px;
    }

    .icon{
        font-size: 2rem;
        color: black;
        opacity: 0.85;
        margin: 20px;
        min-width: 32px;
        display: flex;
        justify-content: center;
    }

    .line{
        border: 1px solid black;
        opacity: 0.85;
        height: 35px;
    }

    .input-field{
        font-family: Strait;
        padding: 20px;
        font-weight: 400;
        font-style: normal;
        font-size: 1.5rem;
        color: grey;
        opacity: 0.85;
        height: 0px;
        width: 100%;
        border: none;
        background: white;
    }

    .input-field:focus{
        outline: none;
    }

    .btn{
        width: 50%;
        height: 50px;
        font-family: Strait;
        padding: 20px;
        font-weight: 400;
        font-style: normal;
        font-size: 2rem;
        color: white;
        background: blue;
        border-radius: 10px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s ease;
    }

    .btn:hover{
        transform: scale(1.025);
        box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
    }

    p:hover{
        cursor: pointer;
    }
</style>



