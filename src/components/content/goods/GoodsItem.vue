<template>
<!--  <div v-for="item in goodItem" class="good-item">-->
<!--    <img :src="item.url" />-->
<!--  </div>-->
<!--  {{goodItem}}-->
  <div class="goods-item" @click="itemClick">
<!--      <a :href="goodsItem.url">-->
        <img v-lazy="goodsItem.img" @load="imageLoad"/>
        <div class="goods-info">
          <p>{{goodsItem.content}}</p>
          <span class="price">{{goodsItem.price}}</span>
          <span class="collect">{{goodsItem.collect}}</span>
        </div>
<!--      </a>-->
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
       this.$router.push('/detail/' + this.goodsItem.id)
    }
  }
}
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>