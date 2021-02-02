<template>
    <div class="car">
      <!--顶部条-->
      <nav-bar class="nav-bar">
        <div slot="center">购物车({{carLength}})</div>
      </nav-bar>


      <!--底部条-->
      <cart-buttom-bar></cart-buttom-bar>
    </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartButtomBar from "@/views/car/childComps/CartButtomBar";
import {mapGetters} from 'vuex'
export default {
  name: "Car",
  components: {
    NavBar,
    CartButtomBar
  },
  computed: {
    // ...mapGetters(['carLength'])不知道为什么用不了
    carLength() {
      return this.$store.state.popList.length;
    }
  }
}
</script>

<style scoped>
    .car {
      height: 100vh;
    }
    .nav-bar {
      background-color: var(--color-high-text);
      color: #fff;
    }
</style>
