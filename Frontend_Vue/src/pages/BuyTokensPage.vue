<template>
    <div class="panel">
        <div class="item item--1">
            <div class="content">
                <h1> 100 Tokens</h1>
                <label> $10.00</label>
                <button @click="buyTokens(100)">Buy</button>
            </div>
        </div>
        <div class="item item--2">
            <div class="content">
                <h1> 200 Tokens</h1>
                <label> $20.00</label>
                <button @click="buyTokens(200)">Buy</button>
            </div>
        </div>
        <div class="item item--3">
            <div class="content">
                <h1> 300 Tokens</h1>
                <label> $30.00</label>
                <button @click="buyTokens(300)">Buy</button>
            </div>
        </div>
        <div class="item item--4">
            <div class="content">
                <h1> 400 Tokens</h1>
                <label> $40.00</label>
                <button @click="buyTokens(400)">Buy</button>
            </div>
        </div>
        <div class="item item--5">
            <div class="content">
                <h1> 500 Tokens</h1>
                <label> $50.00</label>
                <button @click="buyTokens(500)">Buy</button>
            </div>
        </div>
        <div class="item item--6">
            <div class="content">
                <h1> 600 Tokens</h1>
                <label> $60.00</label>
                <button @click="buyTokens(600)">Buy</button>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../wrappers/TokenWrapper.js'

export default {
    data(){
        return{

        }
    },
    methods:{
        buyTokens(amount){
            const payload = {
                Amount: amount
            }
            api.postTokens(payload)
        }
    }
}
</script>

<style scoped>
.panel{
    width: 800px;
    height: 400px;
    
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    margin: auto;

    grid-template-rows: 180px 180px;
	grid-template-columns: 246px 246px 246px;
	
	grid-gap: 30px;
}

h1{
    font-size: 1em;
    font-weight: bold;
}

button{
    background-color: rgb(255, 115, 0);
    height: 40px;
}

.item{
    padding: 20px;
	font-size: 30px;
	font-family: sans-serif;
	color: white;
    background-color: rgb(255, 255, 255);
    border: 2px solid grey;
    border-radius: 5%;
}

.content{
    display: flex;
    flex-direction: column;
    color: black;
}
</style>
