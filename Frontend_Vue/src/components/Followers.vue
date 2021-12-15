<template>
<div class="panel">
    <div :key="follower.id" v-for="follower in followers">
        <Follower :follower="follower" :isFan="isFan"/>
    </div>
</div>
</template>

<script>
import Follower from '../components/Follower.vue'

export default {
    name: 'Followers',
    props:{
        followers: Array,
        isFan: Boolean
    },
    components:{
        Follower
    }
}
</script>

<style scoped>
.panel{
    margin-left: auto;
    margin-right: auto;
    height: fit-content;
}
</style>
