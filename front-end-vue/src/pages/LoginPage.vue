<template>
    <input type="text" v-model="email"/>
    <input type="text" v-model="password"/>
    <button @click="handleLogin">Login</button>

</template>

<script>
import api from '../wrappers/AuthenticationWrapper.js'

export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        async handleLogin(){

            const loginCred = {
                email: this.email,
                password: this.password
            };

            const response = await api.signIn(loginCred);
            localStorage.setItem('jwt', response.token)
            if(this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl)
            }
            else {
                this.$router.push('home')
            }
        }
    }
}
</script>
