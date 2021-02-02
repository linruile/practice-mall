<template>
     <div class="car-nav-bar">
       <nav-bar slot="center" class="car">我的购物车</nav-bar>
     </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
name: "carNavBar",
  components: {
  NavBar,
  }
}
</script>

<style scoped>
     .car {
       color: white;
       background-color: #ff8198;
     }
</style>