<template>
   <div class="team">
        <topnav :bluesee=2></topnav>
         <div class="team-content">
           <div class="teamBox">
              <div class="circles" style="width:200px;height:200px;top:50px;left:20px;">
                <img src="../../assets/img/one.jpg" alt="" style="margin-top: 0px;">

              </div>
              <div class="circles" style="width:172px;height:172px;top:20px;left:300px;">
                <img src="../../assets/img/two.jpg" alt="" style="margin-top:0px;">

              </div>
              <div class="circles" style="width:190px;height:190px;top:62px;left:556px;">
                <img src="../../assets/img/tree.jpg" alt="" style="width: 135%;margin-left: -24px;">

              </div>
              <div class="circles" style="width:200px;height:200px;top:41px;left:1096px;">
                <img src="../../assets/img/four.jpg" alt="" style="width: 173%; margin-left: -46px;">

              </div>
              <div class="circles" style="width:180px;height:180px;top:331px;margin-left:10px;">
                <img src="../../assets/img/five.jpg" alt="">

              </div>
              <div class="circles" style="width:200px;height:200px;top:210px;left:200px;">
                <img src="../../assets/img/six.jpg" alt="">

              </div>
              <div class="circles" style="width:200px;height:200px;top:115px;left:887px;">
                <img src="../../assets/img/seven.jpg" alt="" style="margin-left: -9px;">

              </div>
              <div class="circles" style="top:307px;left:429px;">
                <img src="../../assets/img/eight.jpg" alt="" style="margin-top: -22px; width: 120%; margin-left: -10px;">

              </div>
              <div class="circles" style="width:200px;height:200px;top:264px;left:706px;">
                <img src="../../assets/img/nine.jpg" alt="" style="margin-left: -13px;">

              </div>
              <div class="circles" style="width:172px;height:172px;top:464px;left:218px;">
                <img src="../../assets/img/ten.jpg" alt="">

              </div>
              <div class="circles" style="width:230px;height:230px;top:310px;left:1024px;">
                <img src="../../assets/img/eleven.jpg" alt="">

              </div>
              <div class="circles" style="width:160px;height:160px;top:481px;left:666px;">
                <img src="../../assets/img/twolve.jpg" alt="" style="width: 300%; margin-top: -80px;margin-left: -91px;">

              </div>
              <div class="circles" style="width:190px;height:190px;top:580px;left:24px;">
                <img src="../../assets/img/thirteen.jpg" alt="" style="width: 148%;margin-left: -36px;margin-top: -19px;">
              </div>
              <div class="circles" style="width:190px;height:190px;top:550px;left:857px;">
                <img src="../../assets/img/thirteen.jpg" alt="" style="width: 148%;margin-left: -36px;margin-top: -19px;">
              </div>
              <div class="circles" style="width:190px;height:190px;top:587px;left:457px;">
                <img src="../../assets/img/thirteen.jpg" alt="" style="width: 148%;margin-left: -36px;margin-top: -19px;">
              </div>
              <div class="circles" style="width:190px;height:190px;top:600px;left:1074px;">
                <img src="../../assets/img/thirteen.jpg" alt="" style="width: 148%;margin-left: -36px;margin-top: -19px;">
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
.team {
  height: 100vh;
  .team-content {
    width: 100%;
    padding-top: 1px;
    // height: ~"calc(100% - 200px)";
    height: calc(100% - 101px);
    background-image: url("../../assets/img/teamBg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;

    .teamBox {
      margin: 0 auto;
      width: 1300px;
      height: 800px;
      position: relative;
      .circles {
        position: absolute;
        width: 230px;
        height: 230px;
        border-radius: 50%;
        overflow: hidden;
        img {
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 110%;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
}
@media screen and (min-width: 768px) and (max-width: 1320px) {
  .team {
  }
}
@media screen and (min-width: 1320px) {
  .team {
    .top-box {
      .headerbox {
        min-width: 1320px;
      }
    }
  }
}
</style>
