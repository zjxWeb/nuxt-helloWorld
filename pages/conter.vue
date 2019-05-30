<template>
    <div>
        <p>{{$store.state.count}}</p>
        <button @click="$store.commit('add')">+1</button>
        <hr/>
        <p>{{$store.state.subcount.scount}}</p>
        <button @click="$store.commit('subcount/addScount')">+2</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    button{
        width: 20vw;
        height: 10vh;
    }
</style>
