<template>
    <div class="personDetail">
        <topnav></topnav>
        <Row>
          <Col span="12">
          <div class="imgBox">
               <img src="./../../assets/img/person.jpg" alt="">
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
  background: #F5F5F5;
  .ivu-row {
    width: 100%;
    height: ~"calc(100% - 101px)";
  }
  .ivu-col-span-12 {
    height: 100%;
    width: 50%;
    overflow: hidden;
    .imgBox{
      img {
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 100%;
      /* height: 100%; */
      }
    }
    .personTitle{
      margin-top: 25%;
      h2{
        font-size: 64px;
  color: #000000;
  margin-bottom: 80px;
  letter-spacing: 0.93px;
  text-align: center;
  line-height: 90px;
  font-weight: normal;
      }
      p{

        display: inline-block;
        width: 80%;
        font-size: 24px;
color: #4A4A4A;
letter-spacing: 0.86px;
text-align: center;
line-height: 36px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .personDetail {
  }
}

@media screen and (min-width: 768px) {
}

@media screen and (width: 1024px) {
}

@media screen and (width: 768px) {
}
</style>
