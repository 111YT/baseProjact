<template>
        <div class="thanks">
            <topnav></topnav>
            <div class="thanks-ct">
                <div class="thanks-box">
                    <div class="thanks-fork">
                      <i class="iconfont icon-guanbi"></i>
                    </div>
                    <div class="thanks-list">
                        <span>感谢您的</span>
                        <span>  宝贵意见</span>
                        <span>  谢谢</span>
                    </div>
                    <router-link to="/">
                    <div class="thanks-back">
                        返回>
                    </div>
                </router-link>
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
.thanks {
  padding-bottom: 1px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("../../assets/img/map.png");
  .thanks-ct {
    width: 100%;
    padding-top: 1px;
    height: ~"calc(100% - 101px)";
    .thanks-box {
      width: 300px;
      height: auto;
      margin: 180px auto 0;
      .thanks-fork {
        width: 109px;
        height: 109px;
        margin: 0 auto 80px;
        i {
          font-size: 100px;
          line-height: 109px;
          color: #b1b1b1;
        }
      }
      .thanks-list {
        display: inline-block;
        width: 295px;
        height: auto;
        font-weight: 300;
        span {
          display: inline-block;
          font-size: 48px;
          color: #fff;
          letter-spacing: 0.7px;
          text-align: center;
          line-height: 77px;
          // margin-bottom: 20px;
        }
      }
      .thanks-back {
        font-size: 28px;
        color: #dfdfdf;
        margin: 130px 0px 60px;
        letter-spacing: 0.41px;
        text-align: center;
        line-height: 73px;
        font-weight: 300;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .thanks {
    .thanks-ct {
    }
    .thanks-list {
      font-size: 48px;
      color: #5888fb;
      letter-spacing: 0.7px;
      text-align: center;
      line-height: 110px;
    }
  }
}

@media screen and (min-width: 768px) {
  .thanks {
    .thanks-ct {
    }
  }
}

@media screen and (width: 1024px) {
  .thanks .thanks-ct {
    height: 100%;
  }
}

@media screen and (width: 768px) {
  .thanks .thanks-ct {
    height: 100%;
  }
}
</style>
