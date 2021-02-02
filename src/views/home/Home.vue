<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div> </nav-bar>
    <tab-control
        class="tab-control"
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        v-show="isTabFixed"
    />
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUpClick="pullingUpClick">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend :recommends="recommends" />
      <feature-view />
      <tab-control
          :titles="['流行','新款','精选']"
          @tabClick="tabClick"
          ref="tabControl2"
      />
      <goods-list :goods="showGoods"/>
    </scroll>
<!--      直接监听back-top组件事件，只能通过@click.native方法进行监听-->
      <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>

  import HomeSwiper from "./childComps/HomeSwiper"
  import Recommend from "./childComps/Recommend";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import GoodsItem from "@/components/content/goods/GoodsItem";
  import Scroll from "@/components/common/scroll/Scroll";
  import BackTop from "@/components/content/backTop/BackTop";

  import {getHomeMultidata} from "../../network/home";
  import {debounce} from "@/common/utils";

  export default {
    name: "Home",
    components: {
      GoodsItem,
      HomeSwiper,
      Recommend,
      FeatureView,

      Scroll,
      NavBar,
      TabControl,
      BackTop,

      GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        // good: {
        //   'pop':  [],
        //   'news':[],
        //   'sell': [],
        // }
        good: {
          'pop': [],
          'news': [],
          'sell': []
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    methods: {
      /**
       * 事件监听相关方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break
          case 1:
            this.currentType = 'news';
            break
          case 2:
            this.currentType = 'sell';
            break
        }
        //让两个tabControl的currentIndex保持一致
        if(this.$refs.tabControll1 !== undefined){
          this.$refs.tabControl1.currentIndex = index
          this.$refs.tabControl2.currentIndex = index
        }
      },

      backClick(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      /**
       * 标志是否显示
       * @param position
       */
      contentScroll(position) {
        // console.log(position);
        //1,判断backTop是否显示
        this.isShowBackTop = (-position.y) > 1000

        //2,决定tabControl是否吸顶（position: fixed）
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      /**
       * 是否需要上传加载更多
       */
      pullingUpClick(){
        console.log('上传加载更多');
      },

      swiperImageLoad(){
        //计算tabControl距离顶部的距离
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      }


    },
    computed: {
      showGoods(){
        return this.good[this.currentType]
      }
    },
    mounted() {
      /**
       * 监听item中图片加载完成
       */
      const refresh =debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('itemImageLoad', () => {
        // console.log(this.$refs.scroll.refresh);
        refresh()
      })
    },

    activated() {
      //当用户点击页面是，调用这个函数
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
      // console.log(this.$refs.scroll)
    },
    deactivated() {
      //当用户离开当前页面进入别的页面时，调用这个函数
      this.saveY = this.$refs.scroll.getScrollY()
    },
    created() {
      /**
       * 网络请求相关方法
       */
      //1,请求多个数据
      getHomeMultidata().then( res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(res.data.recommend.list)
        // console.log(res);
      })
      //自己设置的一些数据
      // this.pop.push(...this.$store.state.popList)
      // this.good['pop'].push(this.$store.state.popList)
      this.good['pop']=this.$store.state.popList
      // console.log(this.good['pop'])
      this.good['news'] = this.$store.state.popList
      this.good['sell'] = this.$store.state.popList
      // this.pop = this.$store.state.popList
    },

  }
</script>

<style scoped>

  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background: var(--color-tint);
    color: #fff;

    /*在使用浏览器原生滚动时，为了让导航不跟随一起滚动*/
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: relative;
    /*top: 44px;*/
    /*保证文字不被盖上*/
    z-index: 9;
  }
  .content {
    /*height: calc(100% - 44px - 49px);*/
    position: absolute;
    /*top: 44px;*/
    /*bottom: 49px;*/
    /*left: 0;*/
    /*right: 0;*/
    /*height: 100%;*/
    /*overflow: hidden;*/
  }

</style>
