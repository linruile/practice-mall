import Vue from 'vue'
import Vuex from "vuex";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

//1,安装插件
Vue.use(Vuex)

const state ={
    popList: [{
        id: 1,
        url: "https://shop.mogu.com/detail/1mve6zg?acm=3.ms.1_4_1mve6zg.15.1343-102815-68998.rJ18MsngflLdZ.sd_117-swt_15-imt_6-c_1_3_586182113_0_0_3-t_rJ18MsngflLdZ-lc_3-fcid_50273-pid_180-pit_1-dit_-idx_47-dm1_5002&amp;cparam=MTYxMTcxNzczMV8xMWtfZTI1MDdlYjZjNDExNGY1Y2ZhNWY4YWM3ODUzMmUwZmRfM18wXzU4NjE4MjExM180ZjhkXzBfMF8wXzQ5NV8xXzNfbG9jLTA=&amp;ptp=31.q0vvrb.0.0.7Hv53I1L",
        img: "https://s5.mogucdn.com/mlcdn/c45406/200810_12452eg0k39l6ckk1jbgdb63304kf_640x960.jpg_750x1000.v1cAC.81.jpg",
        content: "卫衣女薄款2020新款春秋ins宽松学生外套连帽假两件上衣",
        price: "¥57",
        collect: 100
    },
        {
            id: 2,
            url: "https://shop.mogu.com/detail/1mve6zg?acm=3.ms.1_4_1mve6zg.15.1343-102815-68998.rJ18MsngflLdZ.sd_117-swt_15-imt_6-c_1_3_586182113_0_0_3-t_rJ18MsngflLdZ-lc_3-fcid_50273-pid_180-pit_1-dit_-idx_47-dm1_5002&amp;cparam=MTYxMTcxNzczMV8xMWtfZTI1MDdlYjZjNDExNGY1Y2ZhNWY4YWM3ODUzMmUwZmRfM18wXzU4NjE4MjExM180ZjhkXzBfMF8wXzQ5NV8xXzNfbG9jLTA=&amp;ptp=31.q0vvrb.0.0.7Hv53I1L",
            img: "https://s5.mogucdn.com/mlcdn/c45406/200810_12452eg0k39l6ckk1jbgdb63304kf_640x960.jpg_750x1000.v1cAC.81.jpg",
            content: "卫衣女薄款2020新款春秋ins宽松学生外套连帽假两件上衣",
            price: "¥66",
            collect: 200
        },
        {
            id: 3,
            url: "https://shop.mogu.com/detail/1mve6zg?acm=3.ms.1_4_1mve6zg.15.1343-102815-68998.rJ18MsngflLdZ.sd_117-swt_15-imt_6-c_1_3_586182113_0_0_3-t_rJ18MsngflLdZ-lc_3-fcid_50273-pid_180-pit_1-dit_-idx_47-dm1_5002&amp;cparam=MTYxMTcxNzczMV8xMWtfZTI1MDdlYjZjNDExNGY1Y2ZhNWY4YWM3ODUzMmUwZmRfM18wXzU4NjE4MjExM180ZjhkXzBfMF8wXzQ5NV8xXzNfbG9jLTA=&amp;ptp=31.q0vvrb.0.0.7Hv53I1L",
            img: "https://s5.mogucdn.com/mlcdn/c45406/200810_12452eg0k39l6ckk1jbgdb63304kf_640x960.jpg_750x1000.v1cAC.81.jpg",
            content: "卫衣女薄款2020新款春秋ins宽松学生外套连帽假两件上衣",
            price: "¥88",
            collect: 300
        },
        {
            id: 4,
            url: "https://shop.mogu.com/detail/1mve6zg?acm=3.ms.1_4_1mve6zg.15.1343-102815-68998.rJ18MsngflLdZ.sd_117-swt_15-imt_6-c_1_3_586182113_0_0_3-t_rJ18MsngflLdZ-lc_3-fcid_50273-pid_180-pit_1-dit_-idx_47-dm1_5002&amp;cparam=MTYxMTcxNzczMV8xMWtfZTI1MDdlYjZjNDExNGY1Y2ZhNWY4YWM3ODUzMmUwZmRfM18wXzU4NjE4MjExM180ZjhkXzBfMF8wXzQ5NV8xXzNfbG9jLTA=&amp;ptp=31.q0vvrb.0.0.7Hv53I1L",
            img: "https://s5.mogucdn.com/mlcdn/c45406/200810_12452eg0k39l6ckk1jbgdb63304kf_640x960.jpg_750x1000.v1cAC.81.jpg",
            content: "卫衣女薄款2020新款春秋ins宽松学生外套连帽假两件上衣",
            price: "¥99.99",
            collect: 600
        },
        {
            id: 5,
            url: "https://shop.mogu.com/detail/1mve6zg?acm=3.ms.1_4_1mve6zg.15.1343-102815-68998.rJ18MsngflLdZ.sd_117-swt_15-imt_6-c_1_3_586182113_0_0_3-t_rJ18MsngflLdZ-lc_3-fcid_50273-pid_180-pit_1-dit_-idx_47-dm1_5002&amp;cparam=MTYxMTcxNzczMV8xMWtfZTI1MDdlYjZjNDExNGY1Y2ZhNWY4YWM3ODUzMmUwZmRfM18wXzU4NjE4MjExM180ZjhkXzBfMF8wXzQ5NV8xXzNfbG9jLTA=&amp;ptp=31.q0vvrb.0.0.7Hv53I1L",
            img: "https://s5.mogucdn.com/mlcdn/c45406/200810_12452eg0k39l6ckk1jbgdb63304kf_640x960.jpg_750x1000.v1cAC.81.jpg",
            content: "卫衣女薄款2020新款春秋ins宽松学生外套连帽假两件上衣",
            price: "¥199.99",
            collect: 999999
        },
        {
            id: 6,
            url: "https://shop.mogu.com/detail/1mve6zg?acm=3.ms.1_4_1mve6zg.15.1343-102815-68998.rJ18MsngflLdZ.sd_117-swt_15-imt_6-c_1_3_586182113_0_0_3-t_rJ18MsngflLdZ-lc_3-fcid_50273-pid_180-pit_1-dit_-idx_47-dm1_5002&amp;cparam=MTYxMTcxNzczMV8xMWtfZTI1MDdlYjZjNDExNGY1Y2ZhNWY4YWM3ODUzMmUwZmRfM18wXzU4NjE4MjExM180ZjhkXzBfMF8wXzQ5NV8xXzNfbG9jLTA=&amp;ptp=31.q0vvrb.0.0.7Hv53I1L",
            img: "https://s5.mogucdn.com/mlcdn/c45406/200810_12452eg0k39l6ckk1jbgdb63304kf_640x960.jpg_750x1000.v1cAC.81.jpg",
            content: "卫衣女薄款2020新款春秋ins宽松学生外套连帽假两件上衣",
            price: "¥299.99",
            collect: 9
        },
        {
            id: 7,
            url: "https://shop.mogu.com/detail/1mve6zg?acm=3.ms.1_4_1mve6zg.15.1343-102815-68998.rJ18MsngflLdZ.sd_117-swt_15-imt_6-c_1_3_586182113_0_0_3-t_rJ18MsngflLdZ-lc_3-fcid_50273-pid_180-pit_1-dit_-idx_47-dm1_5002&amp;cparam=MTYxMTcxNzczMV8xMWtfZTI1MDdlYjZjNDExNGY1Y2ZhNWY4YWM3ODUzMmUwZmRfM18wXzU4NjE4MjExM180ZjhkXzBfMF8wXzQ5NV8xXzNfbG9jLTA=&amp;ptp=31.q0vvrb.0.0.7Hv53I1L",
            img: "https://s5.mogucdn.com/mlcdn/c45406/200810_12452eg0k39l6ckk1jbgdb63304kf_640x960.jpg_750x1000.v1cAC.81.jpg",
            content: "卫衣女薄款2020新款春秋ins宽松学生外套连帽假两件上衣",
            price: "¥299.99",
            collect: 999
        },
        {
            id: 8,
            url: "https://shop.mogu.com/detail/1mve6zg?acm=3.ms.1_4_1mve6zg.15.1343-102815-68998.rJ18MsngflLdZ.sd_117-swt_15-imt_6-c_1_3_586182113_0_0_3-t_rJ18MsngflLdZ-lc_3-fcid_50273-pid_180-pit_1-dit_-idx_47-dm1_5002&amp;cparam=MTYxMTcxNzczMV8xMWtfZTI1MDdlYjZjNDExNGY1Y2ZhNWY4YWM3ODUzMmUwZmRfM18wXzU4NjE4MjExM180ZjhkXzBfMF8wXzQ5NV8xXzNfbG9jLTA=&amp;ptp=31.q0vvrb.0.0.7Hv53I1L",
            img: "https://s5.mogucdn.com/mlcdn/c45406/200810_12452eg0k39l6ckk1jbgdb63304kf_640x960.jpg_750x1000.v1cAC.81.jpg",
            content: "卫衣女薄款2020新款春秋ins宽松学生外套连帽假两件上衣",
            price: "¥399.99",
            collect: 99
        },
        {
            id: 9,
            url: "https://shop.mogu.com/detail/1mve6zg?acm=3.ms.1_4_1mve6zg.15.1343-102815-68998.rJ18MsngflLdZ.sd_117-swt_15-imt_6-c_1_3_586182113_0_0_3-t_rJ18MsngflLdZ-lc_3-fcid_50273-pid_180-pit_1-dit_-idx_47-dm1_5002&amp;cparam=MTYxMTcxNzczMV8xMWtfZTI1MDdlYjZjNDExNGY1Y2ZhNWY4YWM3ODUzMmUwZmRfM18wXzU4NjE4MjExM180ZjhkXzBfMF8wXzQ5NV8xXzNfbG9jLTA=&amp;ptp=31.q0vvrb.0.0.7Hv53I1L",
            img: "https://s5.mogucdn.com/mlcdn/c45406/200810_12452eg0k39l6ckk1jbgdb63304kf_640x960.jpg_750x1000.v1cAC.81.jpg",
            content: "卫衣女薄款2020新款春秋ins宽松学生外套连帽假两件上衣",
            price: "¥399.99",
            collect: 99
        },
        {
            id: 10,
            url: "https://shop.mogu.com/detail/1mve6zg?acm=3.ms.1_4_1mve6zg.15.1343-102815-68998.rJ18MsngflLdZ.sd_117-swt_15-imt_6-c_1_3_586182113_0_0_3-t_rJ18MsngflLdZ-lc_3-fcid_50273-pid_180-pit_1-dit_-idx_47-dm1_5002&amp;cparam=MTYxMTcxNzczMV8xMWtfZTI1MDdlYjZjNDExNGY1Y2ZhNWY4YWM3ODUzMmUwZmRfM18wXzU4NjE4MjExM180ZjhkXzBfMF8wXzQ5NV8xXzNfbG9jLTA=&amp;ptp=31.q0vvrb.0.0.7Hv53I1L",
            img: "https://s5.mogucdn.com/mlcdn/c45406/200810_12452eg0k39l6ckk1jbgdb63304kf_640x960.jpg_750x1000.v1cAC.81.jpg",
            content: "卫衣女薄款2020新款春秋ins宽松学生外套连帽假两件上衣",
            price: "¥399.99",
            collect: 99
        }
    ]
}
//2,创建对象
const store = new Vuex.Store({
    state,
    mutations,
    actions
})

//3,导出store独享
export default store