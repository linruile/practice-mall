<template>
  <div class="detail-nav-bar">
    <detail-nav-bar></detail-nav-bar>
    <detail-bottom-bar @addToCar="addToCart"/>
  </div>

</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailBottomBar
  },
  data() {
    return{
      id: null
    }
  },
  created() {
    this.id = this.$route.params.id
  },
  methods: {
    addToCart(){
      this.$toast.show('加入购物车成功',2000)
    }
  }
}
</script>

<style scoped>
   .detail {
     height: 44px;
     width: 44px;
     color: aqua;
   }
</style>