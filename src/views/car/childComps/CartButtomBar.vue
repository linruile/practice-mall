<template>
   <div class="bottom-bar">
      <div class="check-content">
        <check-button class="check-button" />
        <span>全选</span>
      </div>
     <div class="price">
       合计: {{}}
     </div>
     <div class="calculate">
       去计算: {{}}
     </div>
   </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
export default {
  name: "CartButtomBar",
  components: {
    CheckButton
  }
}
</script>

<style scoped>
   .bottom-bar {
     /*position: relative;    !*相对定位*!*/
     display: flex;         /*水平布局*/

     height: 40px;
     line-height: 40px;
     font-size: 14px;
     background-color: #eeeeee;
     margin-top: 435px;
   }

   .check-content {
     display: flex;
     align-items: center;
     margin-left: 10px;
     width: 60px;
   }
   .check-button {
     width: 20px;
     height: 20px;
     line-height: 20px;
     margin-right: 5px;
   }
   .price {
     margin-left: 20px;
     flex: 1;
   }
   .calculate {
     width: 90px;
     background-color: red;
     color: #fff;
     text-align: center;
   }
</style>