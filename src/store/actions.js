export default {
    //模拟添加商品是的方法
    //1,查找之前数组中是否有该商品
    addCart(context,payload){
        let oldProduct = context.state.popList.find(item => item.iid === payload.iid)
       //2,判断oldProduct
        if(oldProduct){
            // oldProduct.count +=1
            context.commit('addCounter',oldProduct)
        }else{
            // payload.count =1
            // state.popList.push(payload)
            payload.count =1
            context.commit('addToCart',payload)
        }

    }
}