<template>
   <div class="product">
        <topnav></topnav>
        <div class="index-ct">
          <h1>TEAM WORK</h1>
          <p>UI设计作为整个项目工作中的第一部分主要通过设计师对软件的人机交互、操作逻辑把控界面美观的整体设计、操作逻辑把控界面美观的整体设计</p>
        </div>
   </div>
</template>

<script>
import topnav from "../common/topnav";
export default {
  components: {
    topnav
  }
};
</script>

<style lang='less'>
.product {
  background-image: url("../../assets/img/index.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  .top-box {
    ul {
      color: #fff;
      background: rgba(5, 5, 5, 0.4);
      .nav-li {
        color: #fff;
        border-bottom: none;
        &：hover {
          color: #2d8cf0 !important;
          border-bottom: 2px solid #2d8cf0 !important;
        }
      }
    }
  }
  .index-ct {
    text-align: center;
    margin-top: 15%;
    h1 {
      font-size: 84px;
      color: #4a4a4a;
      letter-spacing: 1.22px;
    }
    p {
      display: inline-block;
      width: 54%;
      font-size: 26px;
      color: #4a4a4a;
      letter-spacing: 0.86px;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>
