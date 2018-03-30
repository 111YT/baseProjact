<template>
  <div class="topNavTwo">
    <ul >
      <router-link to="/productInfo">
      <li :class="{bluclick:blueshow==1}" >产品信息</li>
      </router-link>
      <router-link to="/versionInfor">
      <li :class="{bluclick:blueshow==2}" >版本记录</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    blueshow: ""
  },
  data() {
    return {};
  }
};
</script>

<style lang='less'>
@media screen and (min-width: 768px) {
  .topNavTwo {
    width: 100%;
    height: 95px;
    background: #f9f9f9;
    ul {
      margin: 0 auto;
      li {
        display: inline-block;
        margin: 37px 77px;
        font-size: 16px;
        color: #000000;
        cursor: pointer;
      }
      .bluclick {
        color: #5788fc;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .topNavTwo {
    width: 100%;
    height: 95px;
    background: #f9f9f9;
    ul {
      // margin: 0 auto;
      a {
        display: inline-block;
        width: 50%;
        float: left;
        li {
          width: 49%;
          display: inline-block;
          margin: 37px 0px;
          text-align: center;
          font-size: 16px;
          color: #000000;
          cursor: pointer;
        }
        .bluclick {
          color: #5788fc;
        }
      }
    }
  }
}
</style>
