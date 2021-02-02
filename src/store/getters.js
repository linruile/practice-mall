export default {
    carLength(state){
        return state.popList.length
    },
    carList(state) {
        return state.popList()
    }
}