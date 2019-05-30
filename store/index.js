// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// const store = () => new Vuex.Store({
//     state: {
//         count:1
//     },
//     mutations:{
//         add(state){
//             state.count++;
//         }
//     }
// })


// export default store;

export const state = () => ({
    count:1
})
export const mutations = {
    add(state) {
        state.count++;
    }
}