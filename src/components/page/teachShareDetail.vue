<template>
   <div class="techDetail">
        <topnav :bluesee=3></topnav>
   <div class="techDetail-ct">
     <div class="techDetail-box">
       <div class="techDetail-title">JAVA操作中的简捷方式</div>
       <div class="techDetail-two">作者：&nbsp;绍敏&nbsp;发布时间：2018-01-25&nbsp;18:16:26</div>
       <div class="techDetail-text">掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言是万维网浏览器使用的一种语言掌握HTML是网页的核心，是一种制作万维网页面的标准语言掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言掌握HTML是网页的核心，是一种制作万维网页面的标准语言。</div>
       <div class="techDetail-img">
         <img src="../../assets/img/textImg.png" alt="">
       </div>
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
.techDetail {
  // background-color: red;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .techDetail-ct {
    width: 100%;
    padding-top: 1px;
    //height: ~"calc(100% - 101px)";
    // background-image: url("../../assets/img/bg.png");
    background: #f5f5f5;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .techDetail-box {
      width: 1296px;
      margin: 0 auto;
      .techDetail-title {
        margin-top: 55px;
        font-size: 48px;
        color: #4a4a4a;
        letter-spacing: 1.71px;
        font-weight: 300;
      }
      .techDetail-two {
        margin: 5px 0 37px;
        font-size: 14px;
        color: #4a4a4a;
        letter-spacing: 0.5px;
        line-height: 28px;
      }
      .techDetail-text {
        font-size: 18px;
        color: #4a4a4a;
        letter-spacing: 0.64px;
        line-height: 30px;
        text-indent: 2em;
        text-align: left;
      }
      .techDetail-img {
        margin-top: 60px;
        width: 100%;
        height: 433px;
        overflow: hidden;
        img{
          width: 100%;
          // height: 100%;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .techDetail {
    .techDetail-ct {
      height: auto;
      padding-bottom: 25px;
      .techDetail-box {
        width: 90%;
        .techDetail-title {
          font-size: 36px;
          font-weight: 300;
        }
        .techDetail-two {
          margin: 5px 0 21px;
          font-size: 12px;
        }
        .techDetail-text {
          font-size: 14px;
          line-height: 24px;
        }
        .techDetail-img {
          margin-top: 25px;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .techDetail {
    .techDetail-ct {
      .techDetail-box {
        width: 90%;
      }
    }
  }
}
@media screen and (min-width: 1320px) {
}
@media screen and (width: 1024px) {
  .techDetail .techDetail-ct {
    height: 100%;
  }
}
@media screen and (width: 768px) {
  .techDetail .techDetail-ct {
    height: 100%;
  }
}
</style>
