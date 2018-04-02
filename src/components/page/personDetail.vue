<template>
    <div class="personDetail">
        <topnav :bluesee=2></topnav>
        <Row justify="center">
          <Col span="12">
            <div class="imgBox">
                <img src="./../../assets/img/eight.jpg" alt="">
            </div>
          </Col>
          <Col span="12">
          <div class="personTitle">
             <h2>陈益时</h2>
             <p>掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言掌握HTML是网页的核心掌握HTML是网页的核心</p>
          </div>
          </Col>

        </Row>
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
.personDetail {
  padding-bottom: 1px;
  height: 100vh;
  background: #f5f5f5;
  .ivu-row {
    width: 100%;
    height: ~"calc(100% - 101px)";
  }
  .ivu-col-span-12 {
    height: 100%;
    width: 50%;
    overflow: hidden;
    .imgBox {
      background-image: url("../../assets/img/eight.jpg");
      background-size: 100% 100%;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
      img{
        display: none;
      }
    }
    .personTitle {
      margin-top: 25%;
      h2 {
        font-size: 64px;
        color: #000000;
        margin-bottom: 80px;
        letter-spacing: 0.93px;
        text-align: center;
        line-height: 90px;
        font-weight: normal;
      }
      p {
        display: inline-block;
        width: 80%;
        font-size: 24px;
        color: #4a4a4a;
        letter-spacing: 0.86px;
        text-align: center;
        line-height: 36px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .personDetail {
    .ivu-col-span-12 {
      width: 100%;
      height: auto;
      margin: 20px auto 0;
      .imgBox {
        background-image:none;
        width: 88%;
        margin: 0 auto;
        height: 100%;
        // background-image: url("../../assets/img/eight.jpg");
        img{
          display: inline-block;
          height: 100%;
          width: 100%;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
      }
      .personTitle {
        margin-top: 8%;
        h2 {
          margin-bottom: 16px;
          font-size: 24px;
          color: #000000;
          letter-spacing: 0.35px;
          text-align: center;
          line-height: 33px;
        }
        p {
          font-size: 12px;
          color: #666666;
          letter-spacing: -0.39px;
          text-align: center;
          line-height: 24px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
}

@media screen and (width: 1024px) {
}

@media screen and (width: 768px) {
}
</style>
