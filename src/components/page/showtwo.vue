<template>
    <div class="showtwo">
        <topnav></topnav>
        <div class="showtwo-ct">
            <div class="showtwo-box">
                <div class="showtwo-fork">
                  <i class="iconfont icon-guanbi"></i>
                </div>
                <div class="showtwo-list">
                    <router-link to='/advice'>
                        <span>建议与意见</span>
                    </router-link>
                    <router-link to='/advice'>
                        <span>联系方式</span>
                    </router-link>
                </div>
                <router-link to="/">
                  <div class="showtwo-back">
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
.showtwo {
  padding-bottom: 1px;

  .showtwo-ct {
    width: 100%;
    padding-top: 1px;
    height: ~"calc(100% - 101px)";
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("../../assets/img/map.png");
    .showtwo-box {
      width: 300px;
      height: auto;
      margin: 180px auto 0;
      .showtwo-fork {
        width: 109px;
        height: 109px;
        margin: 0 auto 80px;
        i {
          font-size: 100px;
          line-height: 109px;
          color: #B1B1B1;
        }
      }
      .showtwo-list {
        display: inline-block;
        width: 300px;
        height: auto;
        span {
          display: inline-block;
          font-size: 48px;
          color: #fff;
          letter-spacing: 0.7px;
          text-align: center;
          line-height: 77px;
          font-weight: 300;
          margin-bottom: 20px;
          &:hover {
            color: #5888fb;
            border-bottom: 2px solid #5888fb;
          }
        }
      }
      .showtwo-back {
        font-size: 28px;
        color: #dfdfdf;
        margin: 130px 0px 0px;
        letter-spacing: 0.41px;
        text-align: center;
        line-height: 73px;
        font-weight: 300;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .showtwo {
    .showtwo-ct {
    }
    .showtwo-list {
      font-size: 48px;
      color: #5888fb;
      letter-spacing: 0.7px;
      text-align: center;
      line-height: 110px;
    }
  }
}

@media screen and (min-width: 768px) {
  .showtwo {
    height: 100vh;
    .showtwo-ct {
      .showtwo-box {
        .showtwo-back {
          margin: 130px 0px 0px;
        }
      }
    }
  }
}

@media screen and (width: 1024px) {
}

@media screen and (width: 768px) {
  .showtwo .showtwo-ct {
    height: 100%;
  }
}
</style>
