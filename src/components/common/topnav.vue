<template>
   <header class="top-box">
     <Menu mode='horizontal' class="headerbox">
        <div class="layout-logo">Logo</div>
        <div class="lavout-manu" @click="shownavs" >
          <Icon class="iconmanu" type="navicon"></Icon>
        </div>
        <div class="layout-nav nosee">

            <MenuItem name='1' class="nav-li" :class="{blunav:bluesee==1}" >产品/项目</MenuItem>
            <MenuItem name='2' class="nav-li" :class="{blunav:bluesee==2}" >团队</MenuItem>
          <router-link to="/teachShare">
            <MenuItem name='3' class="nav-li" :class="{blunav:bluesee==3}"  >活动／技术分享</MenuItem>
          </router-link>
          <router-link to='/showtwo'>
             <MenuItem name='4' class="nav-li" v-if='this.showFour'>投诉/建议</MenuItem>
        </router-link>
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
      showdown: false,
      showFour: false
    };
  },
  methods: {
    shownavs() {
      var screenWidth = document.querySelectorAll(".headerbox")[0].offsetWidth;
      console.log(screenWidth);
      this.showdown = !this.showdown;
      if (screenWidth < 768) {
        if (this.showdown == true) {
          this.showFour = true;
          document.querySelectorAll(".layout-nav")[0].classList.remove("nosee");
          document.querySelectorAll(".layout-nav")[0].classList.add("showNav");
          document
            .querySelectorAll(".headerbox")[0]
            .classList.add("showhearder");
          console.log("111");
        } else {
          document.querySelectorAll(".layout-nav")[0].classList.add("nosee");
          document
            .querySelectorAll(".layout-nav")[0]
            .classList.remove("showNav");
          document
            .querySelectorAll(".headerbox")[0]
            .classList.remove("showhearder");
        }
      } else {
        this.showFour = false;
        if (this.showdown == true) {
          this.$router.push({ path: "/showtwo" });//这是菜单图标的跳转路由
        } else {
        }
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
