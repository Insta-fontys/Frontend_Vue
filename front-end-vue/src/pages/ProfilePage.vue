<template>
<h1>Profile Page</h1>
    <div class="panel">
        <div class="topSection">
            <div class="imageContainer">
                <img src="https://picsum.photos/200/300" alt="avatar"/>
            </div>
            <div class="dataContainer">
                <div class="usernameContainer">
                    <h2>UserName</h2>
                </div>
                <div class="data">
                    <label>posts 5 </label>
                    <label>followers 7 </label>
                    <label>following 9 </label>
                </div>
                <div class="data">
                    <label>Bio</label>
                    <label>Bio</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.panel{
    margin-left: auto;
    margin-right: auto;
    min-height: 50px;
    width: 45vw;
    background-color: grey;
    border: 2px solid black;
    border-radius: 5px;
}

.topSection{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 20vh;
}

.imageContainer{
    width: 25%;
}

img{
    width:100%;
    height: 100%;
    border-radius: 50%;
}

.dataContainer{
    width: 75%;
    display:flex;
    flex-direction: column;
}

.usernameContainer{
    display: grid;
    grid-template-columns: 200px 200px 200px;
}

.data{
    display: grid;
    grid-template-columns: 200px 200px 200px;
}

</style>
