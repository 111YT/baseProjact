<template>
   <div class="techShare">
        <topnav :bluesee=3></topnav>
    <div class="techShare-ct">
     <div class="techShare-list">
        <ul class=" clearfix">
          <router-link to='/teachShareMore'>
            <li>
              <div class="techShare-title">JAVA的简便快捷方式</div>
              <div class="techShare-text">掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言掌握HTML是网页的核心掌握</div>
            </li>
          </router-link>
          <router-link to='/teachShareMore'>
            <li>
              <div class="techShare-title">JAVA的简便快捷方式</div>
              <div class="techShare-text">掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言掌握HTML是网页的核心掌握</div>
            </li>
          </router-link>
          <router-link to='/teachShareMore'>
            <li>
              <div class="techShare-title">JAVA的简便快捷方式</div>
              <div class="techShare-text">掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言掌握HTML是网页的核心掌握</div>
            </li>
          </router-link>
          <router-link to='/teachShareMore'>
            <li>
              <div class="techShare-title">JAVA的简便快捷方式</div>
              <div class="techShare-text">掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言掌握HTML是网页的核心掌握</div>
            </li>
          </router-link>

        </ul>
     </div>
     <router-link to="/teachShareMore">
        <div class="techShare-more">
          更多>>>
        </div>
     </router-link>
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
@media screen and (max-width: 768px) {
  .techShare {
    height: auto;
    .techShare-ct {
      width: 100%;
      padding-top: 1px;
      height: calc(100% - 101px);
      background-image: url("../../assets/img/bgtwo.png");
      padding-bottom: 30px;
      .techShare-list {
        // width: 1300px;
        margin: 0 auto;
        ul {
          margin-top: 23px;
          width: 100%;
          height: auto;
          display: inline-block;
          li {
            margin: 20px auto;
            /* float: left; */
            display: inline-block;
            /* width: 600px; */
            height: auto;
            width: 90%;
            /* right: 0; */
            /* left: 0; */
            .techShare-title {
              font-size: 29px;
              color: #ffffff;
              letter-spacing: 0;
              text-align: center;
            }
            .techShare-text {
              margin-top: 8px;
              font-size: 13px;
              color: #ffffff;
              letter-spacing: 0.64px;
              text-align: center;
              line-height: 20px;
              /* margin: 4px auto 0; */
              /* left: 0; */
              /* right: 0; */
            }
          }
        }
      }
      .techShare-more {
        margin-top: 45px;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 0.26px;
        text-align: center;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .techShare {
    height: 100vh;
    .techShare-ct {
      width: 100%;
      padding-top: 1px;
      /* height: 100%; */
      background-image: url("../../assets/img/bgtwo.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .techShare-list {
        width: 100%;
        margin: 0 auto;
        ul {
          margin-top: 85px;
          li {
            margin: 30px 0 0;
            // float: left;
            display: inline-block;
            width: 660px;
            height: auto;
            // &:nth-child(2n) {
            //   float: right;
            // }
            .techShare-title {
              font-size: 48px;
              color: #ffffff;
              letter-spacing: 0;
              text-align: center;
            }
            .techShare-text {
              margin-top: 7px;
              font-size: 18px;
              color: #ffffff;
              letter-spacing: 0.64px;
              text-align: center;
              line-height: 30px;
              padding-bottom: 30px;
            }
          }
        }
      }
      .techShare-more {
        margin-top: 25px;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 0.26px;
        text-align: center;
        padding-bottom: 30px;
      }
    }
  }
}
@media screen and (min-width: 1320px) {
  .techShare {
    .top-box {
      .headerbox {
        min-width: 1320px;
      }
    }
    .techShare-ct {
      height: ~"calc(100% - 101px)";
      .techShare-list {
        ul {
          display: inline-block;
          width: 1320px;
          margin: 115px auto 0;
          li {
            margin: 54px 0;
            float: left;
            width: 600px;
            &:nth-child(2n) {
              float: right;
            }
            .techShare-text {
              margin-top: 40px;
              padding-bottom: 0px;
            }
          }
        }
      }
    }
  }
}
</style>
