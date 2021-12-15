<template>
  <div>
    <h1 v-if="isFan">
      Following
    </h1>
    <h1 v-else>
      Followers
    </h1>
    <div>
      <Followers
        :followers="followers"
        :is-fan="isFan"
      />
    </div>
  </div>
</template>

<script>
import api from "../wrappers/FollowWrapper.js";
import jwtUtil from "../JwtManager.js";
import Followers from "../components/Followers.vue";

export default {
  components:{
    Followers
  },
  data(){
    return{
      followers: [],
      isFan: false
    };
  },

  async created(){
    var role = jwtUtil.getRole();
    console.log("role = " + role);
    if(role == "creator")
      this.followers = await api.getFollowers();
    else{
      this.followers = await api.GetFollowings();
      this.isFan = true;
    }

    console.log("Followers = " + this.followers);
  }
};
</script>
