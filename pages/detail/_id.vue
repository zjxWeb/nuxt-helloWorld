<template>
    <div>
        <h2>详情页面</h2>
        <p> {{$route.params.id}}</p>
        <p>{{detail.prics}}</p>
        <p>{{detail.description}}</p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
//   asyncData ({ params }) {
//     return axios.get(`/data/test.json`)
//     .then((res) => {
//         console.log(res);
//       return {
//           detail:res.data
//       };
//     })
//   }
    async asyncData ({ params }) {
    let { data } = await axios.get(`/data/test.json`)
    return {detail:data }
  }
}
</script>
<style>

</style>
