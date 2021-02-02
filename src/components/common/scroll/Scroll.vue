<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      scroll: null
    }
  },
  mounted() {
    //创建滚动对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    })
    //监听滚动位置
    this.scroll.on('scroll', (position) => {
      // console.log(position);
      this.$emit('scroll',position)
    })
    this.scroll.on('pullingUp', () =>{
      this.$emit('pullingUpClick')
    })
  },
  methods: {
    scrollTo(x, y, time) {
     this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      this.scroll && this.scroll.refresh()
      console.log('---');
      console.log(this.scroll)
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>