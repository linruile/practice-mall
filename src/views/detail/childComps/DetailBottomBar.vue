<template>
   <div class="bottom-bar">
      <div class="bar-item bar-left">
        <div>
          <i class="icon service"></i>
          <span class="text">客服</span>
        </div>
        <div>
          <i class="icon shop"></i>
          <span class="text">店铺</span>
        </div>
        <div>
          <i class="icon select"></i>
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="bar-item bar-right">
          <span class="cart" @click="addToCar">加入购物车</span>
          <span class="buy">购买</span>
      </div>
   </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCar() {
      // console.log('加入购物车');
      this.$emit('addToCar')
    }
  }
}
</script>

<style scoped>
    .bottom-bar {
      height: 58px;
      background: #fff;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 49px;
      display: flex;
      text-align: center;
      /*margin-bottom: 49px;*/
    }

    .bar-item {
      flex: 1;
      display: flex;
    }
    .bar-item>div {
      flex: 1;
    }
    .bar-left .text {
      font-size: 13px;
    }
    .bar-left .icon {
      display: block;
      width: 22px;
      height: 22px;
      margin: 6px auto 3px;
      background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    }
    .bar-left .service {
      background-position: 0 -54px;
    }
    .bar-left .shop {
      background-position: 0 -98px;
    }
    .bar-right {
      font-size: 15px;
      color: #ffffff;
      line-height: 58px;
    }
    .bar-right .cart {
      background-color: #ffe817;
      color: #333;
      width: 85px;
    }
    .bar-right .buy {
      background-color: #f69;
      width: 75px;
      height: 58px;
    }
</style>