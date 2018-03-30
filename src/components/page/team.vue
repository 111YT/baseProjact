<template>
   <div class="team">
        <topnav :bluesee=1></topnav>
         <div class="team-content">
           <div class="teamBox">
              <div class="circles" style="width:200px;height:200px;top:50px;left:20px;">
                <img src="../../assets/img/personOne.jpg" alt="" style="margin-top: -30px;">

              </div>
              <div class="circles" style="width:172px;height:172px;top:20px;left:300px;">
                <img src="../../assets/img/personTwo.jpg" alt="" style="margin-top: -43px;">

              </div>
              <div class="circles" style="width:190px;height:190px;top:50px;left:556px;">
                <img src="../../assets/img/personTree.jpg" alt="">

              </div>
              <div class="circles" style="width:200px;height:200px;top:41px;left:1096px;">
                <img src="../../assets/img/personFour.jpg" alt="">

              </div>
              <div class="circles" style="width:180px;height:180px;top:400px;">
                <img src="../../assets/img/personFive.jpg" alt="">

              </div>
              <div class="circles" style="width:200px;height:200px;top:240px;left:200px;">
                <img src="../../assets/img/personSix.jpg" alt="">

              </div>
              <div class="circles" style="width:200px;height:200px;top:150px;left:900px;">
                <img src="../../assets/img/personSeven.jpg" alt="">

              </div>
              <div class="circles" style="top:350px;left:442px;">
                <img src="../../assets/img/personEight.jpg" alt="">

              </div>
              <div class="circles" style="width:200px;height:200px;top:250px;left:684px;">
                <img src="../../assets/img/personNine.jpg" alt="">

              </div>
              <div class="circles" style="width:172px;height:172px;top:500px;left:200px;">
                <img src="../../assets/img/personTen.jpg" alt="">

              </div>
              <div class="circles" style="width:230px;height:230px;top:350px;left:1050px;">
                <img src="../../assets/img/personEleven.jpg" alt="">

              </div>
              <div class="circles" style="width:160px;height:160px;top:584px;left:859px;">
                <img src="../../assets/img/personTwolve.jpg" alt="">

              </div>
              <div class="circles" style="width:190px;height:190px;top:550px;left:857px;">
                <img src="../../assets/img/personThirteen.jpg" alt="">

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
    .team-content {
      width: 100%;
      padding-top: 1px;
      height: ~"calc(100% - 200px)";
      background-image: url("../../assets/img/bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;

      .teamBox{
        margin:0 auto;
        width: 1300px;
        height: 800px;
        background-color: red;
        position: relative;
        .circles{
              position: absolute;
              width: 230px;
              height: 230px;
              border-radius: 50%;
              overflow: hidden;
              img{
background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;


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
