<template>
 <div class="poductDetail">
   <div class="poductDetail-hd">
       <topnav :page='1'></topnav>
   </div>
   <div class="poductDetail-ct">
     <div class="detilL">
       <div class="detailImg">
         <img src="../../assets/img/phone.png" alt="">
       </div>
       <div class="detailTitle">MiHotel项目</div>
       <div class="detailTwo">UI设计作为整个项目工作中的第一部分主要通过设计师</div>
       <router-link to="/poductMore">
          <div class="detailMore">更多>>></div>
       </router-link>

     </div>
     <div class="detailR">
       <div class="detailR-box">
       <p><b>掌握</b>HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言掌握HTML是网页的核心，是一种制作万维网页面的标准语网页面的标准语言，是万维网浏览器使用的一种语言掌握HTML是网页的核心，是一种制言，是万维网浏览器使用的一种语言是万维网浏览器使用的一种语言掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言是万维网浏览器使用的一种语言掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言是万维网浏览器使用的一种语言掌握HTML是网页的核</p>
       <div class="detailR-img">
         <img src="" alt="">
       </div>
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
.poductDetail {
  // background-color: red;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .poductDetail-ct {
    width: 100%;
    padding-top: 1px;
    height: ~"calc(100% - 101px)";
    .detilL {
      float: left;
      width: 37.5%;
      height: 100%;
      background: #5888fb;
      padding-top: 1px;
      .detailImg {
        margin: 0 auto;
        width: 165px;
        height: 165px;
        border-radius: 100px;
        overflow: hidden;
        margin-top: 185px;
      }
      .detailTitle {
        margin-top: 35px;
        font-size: 48px;
        color: #fdfbfd;
        letter-spacing: 0.7px;
      }
      .detailTwo {
        margin-top: 20px;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 0.54px;
        text-align: center;
        line-height: 30px;
      }
      .detailMore {
        float: left;
        margin-left: 20px;
        font-size: 10px;
        color: #ffffff;
        letter-spacing: 0.3px;
        text-align: center;
        line-height: 30px;
      }
    }
    .detailR {
      float: right;
      width: 62.5%;
      height: 100%;
      background: #f3f3f3;
      .detailR-box {
        width: 88%;
        height: auto;
        margin: 100px auto 0;
        p {
          font-size: 18px;
          text-indent: 2em;
          text-align: left;
          color: #000000;
          letter-spacing: 0.5px;
          line-height: 30px;
          b {
            font-weight: normal;
            font-size: 36px;
            color: #000000;
            letter-spacing: 0.5px;
            line-height: 30px;
          }
        }
      }
      .detailR-img {
        width: 100%;
        height: auto;
        margin: 60px auto 0;
        background-color: red;
      }
    }
  }
}
</style>
