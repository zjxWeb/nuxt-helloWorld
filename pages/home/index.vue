<template>
    <div>
        <h2>Hoem page</h2>
        <button @click="sayHello">say hello</button>
    </div>
</template>
<script>
import Logo from '~/components/Logo.vue'

export default {
    methods:{
        sayHello(){
            this.$debug("sat hello???????")
        }
    }
}
</script>
<style>

</style>
