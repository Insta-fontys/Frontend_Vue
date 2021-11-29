<template>
    <div>
    </div>
</template>

<script>
import api from '../wrappers/FollowWrapper.js'
import jwtUtil from '../JwtManager.js'

export default {
    created(){
        var role = jwtUtil.getRole()
        console.log("role = " + role)
        if(role == "creator"){
            api.getFollowers()
        }
        else
            api.GetFollowings();
    }
}
</script>
