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


