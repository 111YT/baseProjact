<template>
   <div class="product">
        <topnav></topnav>

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
  .product {
    background-image: url('../../assets/img/index.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100vh;
    .top-box{
        ul{
            color: #fff;
            background: rgba(5,5,5,0.40);
            .nav-li{
                color: #fff;
                border-bottom: none;
                &：hover{
                    color: #2d8cf0 !important;
    border-bottom: 2px solid #2d8cf0 !important;
                }
            }
        }
    }
  }

</style>
