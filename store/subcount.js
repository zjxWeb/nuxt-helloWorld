export const state = () => ({
    scount: 0
})

export const mutations ={
    addScount(state) {
        state.scount += 2
    }
}