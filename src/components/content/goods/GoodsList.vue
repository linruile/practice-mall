<template>
  <div class="goods">
<!--    <goods-item v-for="item in goods" :good-item="goods" />-->
      <goods-item v-for="(item,id) in goods" :goodsItem="item" :key="id"/>
<!--    <div v-for="item in goods">-->
<!--      <a :href="item.url">-->
<!--        <img :src="item.img" />-->
<!--        <span>{{item.content}}</span>-->
<!--        <span>{{item.price}}</span>-->
<!--      </a>-->
<!--    </div>-->
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default(){
        return []
    }
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style scoped>
    .goods {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 2px;
    }

</style>