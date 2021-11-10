<template>
    <div class="panel">
        <input type="text" v-model="email" placeholder="email"/>
        <input type="text" v-model="username" placeholder="password"/>
        <input type="checkbox" v-model="isFanAccount"/>
        <button @click="registerAccount">Register </button>
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
            }
        }
    }
</script>


