<template>
   <div class="productInfo">
        <topnav :bluesee=1></topnav>
        <navtwo :blueshow=1></navtwo>
            <div class="productInfo-ct">
                    <div class="product-top">产品信息</div>
                    <ul>
                        <li>更新日期<b>2018年2月28日</b></li>
                        <li>版本 <b>1.1.1.0</b> </li>
                        <li>开发商<b>杭州绿云科技有限公司</b></li>
                    </ul>
                    <div class="product-text">
                        <p >掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言是万维网浏览器使用的一种语言掌握HTML是网页的核心，是一种制作万维网页面的标准语言掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言掌握HTML是网页的核心，是一种制作万维网页面的标准语言。是一种制作万维网页面的标准语言掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言掌握HTML是网页的核心，是一种制作万维网页面的标准语言。
                        </p>
                    </div>
                    <div class="product-img">
                        <img src="../../assets/img/version.png" alt="">
                    </div>
          </div>
        </div>
</template>

<script>
import topnav from "../common/topnav";
import navtwo from "../common/navtwo";
export default {
  components: {
    topnav,
    navtwo
  }
};
</script>

<style lang='less'>
@media screen and (max-width: 768px) {
  .productInfo {
    .productInfo-ct {
      width: 90%;
      margin: 0 auto;
      text-align: left;
      .product-top {
        font-size: 36px;
        color: #4a4a4a;
        letter-spacing: 1.5px;
        margin-top: 45px;
        font-weight: 300;
      }
      ul {
        margin: 20px 0 15px;
        li {
          margin-bottom: 10px;
          font-size: 16px;
          color: #666666;
          letter-spacing: 0.64px;
          line-height: 19px;
          margin-right: 60px;
          b {
            margin-left: 15px;
            font-weight: normal;
            color: #151515;
          }
        }
      }
      .product-text {
        font-size: 14px;
        color: #4a4a4a;
        letter-spacing: 0.64px;
        line-height: 30px;
        margin-top: 35px;
        text-indent: 2em;
      }
      .product-img {
        width: 100%;
        height: 526px;
        margin: 40px 0 50px;
        overflow: hidden;
        img {
          background-size: 100% 100%;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .productInfo {
    .productInfo-ct {
      width: 90%;
      margin: 0 auto;
      text-align: left;
      .product-top {
        font-size: 64px;
        font-weight: 300;
      }
      ul {
        margin: 20px 0 15px;
        li {
          display: inline-block;
          font-size: 18px;
          line-height: 30px;
          b {
            margin-left: 15px;
            font-weight: normal;
            color: #151515;
          }
        }
      }
      .product-text {
        font-size: 18px;
        line-height: 30px;
        margin-top: 30px;
        text-indent: 2em;
      }
      .product-img {
        width: 100%;
        height: 526px;
        margin: 40px 0 50px;
        overflow: hidden;
        img {
          background-size: 100% 10%;
        }
      }
    }
  }
}
@media screen and (min-width: 1320px) {
  .productInfo {
    .productInfo-ct {
      width: 1300px;
      margin: 0 auto;
      text-align: left;
      .product-top {
        font-size: 64px;
        color: #4a4a4a;
        letter-spacing: 1.5px;
        margin-top: 45px;
        font-weight: 300;
      }
      ul {
        margin: 20px 0 15px;
        li {
          margin-bottom: 10px;
          display: inline-block;
          font-size: 18px;
          color: #666666;
          letter-spacing: 0.64px;
          line-height: 30px;
          margin-right: 60px;
          b {
            margin-left: 15px;
            font-weight: normal;
            color: #151515;
          }
        }
      }
      .product-text {
        font-size: 18px;
        color: #4a4a4a;
        letter-spacing: 0.64px;
        line-height: 30px;
        text-indent: 2em;
      }
      .product-img {
        width: 100%;
        height: 526px;
        margin: 40px 0 50px;
      }
    }
  }
}
</style>
