<template>
   <div class="version">
        <topnav :bluesee=1></topnav>
        <navtwo :blueshow=2></navtwo>
         <div class="version-content">
            <div class="version-top">版本记录</div>
            <ul>
                <li>
                  <div class="list-title">V1.1.1.0</div>
                  <div class="list-title-two">2017年2月16日</div>
                  <div class="list-text">全新改版的界面风格，全新的用户体验，为用户提供更高效的操作；提高自营能力，促进价值最大化。全新改版的界面风格，全新的用户体验，为用户提供更高效的操作；提高自营能力，促进价值最大化。全新改版的界面风格，全新的用户体验，为用户提供更高效的操作。</div>
                </li>
                <li>
                  <div class="list-title">V1.1.1.0</div>
                  <div class="list-title-two">2017年2月16日</div>
                  <div class="list-text">全新改版的界面风格，全新的用户体验，为用户提供更高效的操作；提高自营能力，促进价值最大化。全新改版的界面风格，全新的用户体验，为用户提供更高效的操作；提高自营能力，促进价值最大化。全新改版的界面风格，全新的用户体验，为用户提供更高效的操作。</div>
                </li>
            </ul>
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
  .version {
    .version-content {
      width: 100%;
      margin: 0 auto;
      text-align: left;
      padding-bottom: 30px;
      .version-top {
        font-size: 36px;
        color: #4a4a4a;
        letter-spacing: 1.5px;
        margin-top: 30px;
        width: 90%;
        margin: 30px auto 0;
      }
      ul {
        li {
          border-bottom: 2px solid #1111;
          width: 90%;
          margin: 0 auto 10px;
          display: block;
          .list-title {
            font-size: 20px;
            color: #4a4a4a;
            letter-spacing: 0.64px;
            margin-top: 15px;
          }
          .list-title-two {
            font-size: 14px;
            color: #666666;
            letter-spacing: 0.64px;
            line-height: 30px;
          }
          .list-text {
            font-size: 12px;
            color: #666666;
            letter-spacing: 0.64px;
            line-height: 23px;
            margin-top: 12px;
            padding-bottom: 23px;
            // text-indent: 2em;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .version {
    .version-content {
      width: 80%;
      margin: 0 auto;
      text-align: left;
      .version-top {
        font-size: 64px;
        color: #4a4a4a;
        letter-spacing: 1.5px;
        margin-top: 30px;
        width: 90%;
        // margin: 30px auto 0;
      }
      ul {
        li {
          margin-bottom: 10px;
          // display: inline-block;
          border-bottom: 2px solid #1111;
          .list-title {
            font-size: 30px;
            margin-top: 35px;
          }
          .list-title-two {
            font-size: 18px;
          }
          .list-text {
            font-size: 18px;
            line-height: 30px;
            margin-top: 23px;
            padding-bottom: 30px;
            // text-indent: 2em;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1320px) {
  .version {
    .version-content {
      width: 1305px;
    }
  }
}
</style>
