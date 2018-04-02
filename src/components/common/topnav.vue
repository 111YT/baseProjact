<template>
   <header class="top-box">
<!-- 右边栏导航 -->
<div class="mask-box" :class="{noseeRight:this.showFour == false}">
  <div class="mask-ct">
    <div class="search-box">
        <input type="text" name="" id="" placeholder="搜索您想要的内容">
        <Icon type="ios-search-strong" class="searchIcon"></Icon>
    </div>
    <ul>
      <li :class="{blubg:bluesee==1}" >产品/项目</li>
      <li :class="{blubg:bluesee==2}">团队</li>
      <li :class="{blubg:bluesee==3}">活动／技术分享</li>
      <li :class="{blubg:bluesee==4}">投诉/建议</li>
      <li :class="{blubg:bluesee==5}">联系方式</li>
    </ul>
  </div>
  <div class="forks" @click='shownavs(2)'>
    <Icon type="android-close"></Icon>

  </div>
</div>
     <Menu mode='horizontal' class="headerbox">
        <div class="layout-logo">Logo</div>
        <div class="lavout-manu" @click="shownavs(1)" >
          <Icon class="iconmanu" type="navicon"></Icon>
        </div>
        <div class="layout-nav nosee">
            <MenuItem name='1' class="nav-li" :class="{blunav:bluesee==1}" >产品/项目</MenuItem>
            <MenuItem name='2' class="nav-li" :class="{blunav:bluesee==2}" >团队</MenuItem>
          <router-link to="/teachShare">
            <MenuItem name='3' class="nav-li" :class="{blunav:bluesee==3}"  >活动／技术分享</MenuItem>
          </router-link>
          <!-- <router-link to='/showtwo'>
             <MenuItem name='4' class="nav-li" v-if='this.showFour'>投诉/建议</MenuItem>
        </router-link> -->
        </div>
     </Menu>


   </header>
</template>

<script>
export default {
  props: {
    bluesee: ""
  },
  data() {
    return {
      showFour: false
    };
  },
  methods: {
    shownavs(value) {
      var screenWidth = document.querySelectorAll(".headerbox")[0].offsetWidth;
      if (screenWidth < 768) {
        if(value==1){
          this.showFour = true;
        }else{
          this.showFour = false;
        }
      } else {
        this.showFour = false;

      }
    }
  }
};
</script>

<style lang='less'>
@media screen and (min-width: 768px) {
  .top-box {
    .headerbox {
      height: 100px;
      // background: red;
      &:after {
        background: #fff !important;
      }
      .layout-logo {
        float: left;
        margin-top: 21px;
        margin-left: 40px;
      }
      .layout-nav {
        float: right;
        line-height: 7;
        .nav-li {
          padding: 0 0 5px 0;
          margin: 0 45px;
          font-size: 16px;
          line-height: 32px;
          margin-top: 31px;
        }
        .blunav {
          color: #2d8cf0 !important;
          border-bottom: 2px solid #2d8cf0 !important;
        }
      }
      .lavout-manu {
        float: right;
        .ivu-icon-navicon {
          margin-right: 40px;
          font-size: 36px;
          margin-top: 13px;
          line-height: 2;
        }
      }
    }
    .mask-box{
      display: none;
    }
  }
}
@media screen and (width: 768px) {
  .top-box .headerbox .layout-logo {
    margin-top: -2px;
  }
  .top-box .headerbox .lavout-manu .ivu-icon-navicon {
    margin-top: -4px;
  }
}
@media screen and (max-width: 768px) {
  .top-box {
    // height: 232px;
    .headerbox {
      height: 60px;
      z-index: 100;
      .layout-logo {
        float: left;
        margin-left: 40px;
      }
      .layout-nav {
        width: 100%;
        margin-top: -4px;
        text-align: left;
        overflow: hidden;
        .nav-li {
          width: 100%;
          height: 37px;
          padding: 12px 30px 0;
          line-height: 1;
          border: none;
          color: #495060;
          &:hover {
            background-color: #f9f9f9;
            color: #495060;
            border-bottom: none;
          }
        }
        .blunav {
          color: #2d8cf0 !important;
        }
      }
      .nosee {
        display: none;
      }

      .lavout-manu {
        float: right;
        height: 40px;
        .ivu-icon-navicon {
          margin-right: 40px;
          font-size: 36px;
          // margin-top: 13px;
          line-height: 2;
        }
      }
    }
    .mask-box {
      width: 100%;
      height: 100%;
      background: rgba(1, 1, 1, 0.7);
      position: fixed;
      z-index: 200;
      .mask-ct {
        float: right;
        width: 260px;
        height: 100%;
        background-color: #fff;
        .search-box {
          width: 219px;
          margin: 0 auto;
          border-bottom: 1px solid #dbdbdb;

          input {
            margin: 10px 0 5px 0;
            width: 200px;
            height: 30px;
            border: none;
            padding-left: 10px;
          }
          .searchIcon {
            font-size: 20px;
          }
        }
        ul {
          text-align: left;
          width: 100%;
          height: auto;
          li {
            color: #151515;
            line-height: 62px;
            padding-left: 25px;
            height: 60px;
          }
          .bluebg {
            background-color: #5888fb;
            color: #fff;
          }
        }
      }
      .forks {
        display: inline-block;
        width: 19px;
        height: 19px;
        float: right;
        margin: 9px 29px 0 0;
        i {
          font-size: 41px;
          color: #5888fb;
        }
      }
    }
          .noseeRight{
        display: none;
      }
  }
}
.showNav {
  animation: mymove 1.5s;
  -webkit-animation: mymove 1.5s;
}

@keyframes mymove {
  from {
    height: 0px;
  }
  to {
    height: 160px;
  }
}

@-webkit-keyframes mymove {
  from {
    height: 0px;
  }
  to {
    height: 160px;
  }
}
.showhearder {
  animation: downs 1.5s;
  -webkit-animation: downs 1.5s;
  height: 240px !important;
}

@keyframes downs {
  from {
    height: 60px;
  }
  to {
    height: 240px;
  }
}

@-webkit-keyframes downs {
  from {
    height: 60px;
  }
  to {
    height: 240px;
  }
}
</style>
