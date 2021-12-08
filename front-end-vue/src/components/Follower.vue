<template>
    <div class="panel">
        <div v-if="isFan">
            <div class="followItem">
                <img src="https://picsum.photos/200/300" alt="avatar"/>
                <label>{{follower.creator.username}}</label>
                <button>Unfollow</button>
            </div>
        </div>
        <div v-else> 
            <div class="followItem">
                <img src="https://picsum.photos/200/300" alt="avatar"/>
                <label>{{follower.fan.username}}</label>
                <button>Remove</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Follower',
    props: ['follower', 'isFan']
}

</script>


<style scoped>
button{
    margin-left: auto;
    margin-right: 10px;
}

img{
    height: 80px;
    width: 80px;
    border-radius: 50%;
}

label{
    margin-left: 10px;
}

.panel{
    background-color: #c4c7c44f;
    width: 20vw;
    border: 1px solid black;
    margin-bottom: 5px;
}

.followItem{
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: 5%;
}
</style>