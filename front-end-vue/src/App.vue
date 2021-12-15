<template>
  <Menu v-if="isNotNavigationPage" :prop_name="name" :prop_role="role" :prop_isCreator="isCreator"/>
  <router-view/>
</template>

<script>
import Menu from '../src/components/MenuBar.vue'
import jwtUtil  from '../src/JwtManager.js'

export default {
    components:{
      Menu
    },
    data(){
      return{
        name: '',
        role: '',
        isCreator: true
      }
    },
    methods:{
      getUserInfo(){
        this.name = jwtUtil.getName();
        this.role = jwtUtil.getRole();
        if(this.role != "creator")
            this.isCreator = false
        console.log(this.isCreator)
      }
    },
    computed: {
    isNotNavigationPage() {
      if(this.$route.name !== 'login' && this.$route.name !== 'register'){
        this.getUserInfo();
        return true;
      }
      return false;
    }
  }

}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
