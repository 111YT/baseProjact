<template>
   <div class="techShareMore">
        <topnav :bluesee=3></topnav>
   <div class="techShareMore-ct">
     <div class="techShareMore-list">
        <ul >
          <router-link to="/teachShareDetail">
              <li>
                <div class="techShareMore-title">专业技能</div>
                <div class="techShareMore-text">掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言掌握HTML是网页的核心掌握HTML是网页的核心，是一种制作万维网页面的标准语是网页的核心言，是万维网浏览器使用的一种语言掌握HTML是网页</div>
              </li>
          </router-link>
              <li style="background-color:#5888FB">
                <div class="techShareMore-title">专业技能</div>
                <div class="techShareMore-text">掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言掌握HTML是网页的核心掌握HTML是网页的核心，是一种制作万维网页面的标准语是网页的核心言，是万维网浏览器使用的一种语言掌握HTML是网页</div>
              </li>
              <li>
                <div class="techShareMore-title">专业技能</div>
                <div class="techShareMore-text">掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言掌握HTML是网页的核心掌握HTML是网页的核心，是一种制作万维网页面的标准语是网页的核心言，是万维网浏览器使用的一种语言掌握HTML是网页</div>
              </li>
        </ul>
     </div>
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
  .techShareMore {
    height: 100vh;
    .techShareMore-ct {
      width: 100%;
      padding-top: 1px;
      // height: calc(100% - 60px);
      background-image: url("../../assets/img/bgtwo.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .techShareMore-list {
        // width: 1170px;
        // margin: 0 auto;
        ul {
          // margin-top: 20px;
          margin-top: -5px;
          li {
            padding-top: 1px;
            width: 100%;
            padding-bottom: 67px;
            .techShareMore-title {
              margin-top: 44px;
              font-size: 36px;
              color: #ffffff;
              letter-spacing: 0.7px;
              text-align: center;
            }
            .techShareMore-text {
              width: 88%;
              margin: 16px auto 0;
              font-size: 14px;
              color: #ffffff;
              letter-spacing: 0.64px;
              text-align: center;
              line-height: 25px;
            }
          }
        }
      }
      .techShareMore-more {
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
  .techShareMore {
    height: 100vh;
    .techShareMore-ct {
      width: 100%;
      padding-top: 1px;
      //  height: calc(100% - 60px);
      background-image: url("../../assets/img/bgtwo.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .techShareMore-list {
        // width: 1170px;
        // margin: 0 auto;
        ul {
          // margin-top: 20px;
          margin-top: -5px;
          li {
            padding-top: 1px;
            width: 100%;
            padding-bottom: 67px;
            .techShareMore-title {
              margin-top: 44px;
              font-size: 48px;
              color: #ffffff;
              letter-spacing: 0.7px;
              text-align: center;
            }
            .techShareMore-text {
              width: 90%;
              margin: 40px auto 0;
              font-size: 18px;
              color: #ffffff;
              letter-spacing: 0.64px;
              text-align: center;
              line-height: 30px;
            }
          }
        }
      }
      .techShareMore-more {
        margin-top: 45px;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 0.26px;
        text-align: center;
      }
    }
  }
}
@media screen and (min-width: 1320px) {
  .techShareMore {
    .top-box {
      .headerbox {
        min-width: 1320px;
      }
    }
    .techShareMore-ct {
      .techShareMore-list {
        ul {
          margin-top: -5px;
          li {
            .techShareMore-text {
              width: 1170px;
            }
          }
        }
      }
    }
  }
}
@media screen and (width: 1024px) {
  .techShareMore .techShareMore-ct {
    height: 100%;
  }
}
@media screen and (width: 768px) {
  .techShareMore .techShareMore-ct {
    height: 100%;
  }
}
</style>
