<template>
<h1>{{msg}}</h1>
<button @click="genRanNum()"> Generate random Number </button>
<h2>{{random_number}}</h2>
</template>

<script>
export default {
    name: 'RandomNumber',
    data(){
        return{
        random_number:0
        }
    },

    props: {
        msg: String,
        min:{type: Number, default: 1},
        max:{type: Number, default: 10}
    },
    
    methods:{
        genRanNum(){
            this.random_number = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) // generate random number from 1 to 100
        }
    }
}
    </script>