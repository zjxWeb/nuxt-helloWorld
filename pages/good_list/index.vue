<template>
    <div>
        <h2>商品列表</h2>
        <ul>
            <li :key="item.name" v-for="item of list">
                <nuxt-link :to="'/detail/'+item.id">{{item.name}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    asyncData({app}) {
        const arr = app.sort([1,2,56,46,79,46,64]);
        console.log(arr)

        const arr2 = app.$integerSort([1,2,56,46,79,46,64]);
        console.log(arr2);
       
    },
    mounted(){
         const arr3 = this.$integerSort([1,2,56,46,79,46,64]);
         console.log(arr3);//实例插件
    },
    data:()=>{
        return {
            list:[
                {id:"009",name:'iphone',price:20000},
                {id:"007",name:'Huawei',price:80000},
                {id:"008",name:'meizu',price:2066}
            ]
        }
    }
}
</script>
<style>

</style>
