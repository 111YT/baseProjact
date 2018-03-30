<template>
    <div class="advice">
        <topnav></topnav>
        <div class="advice-ct">
            <div class="advice-box">
                <form>
                    <div class="adviceL">
                        <div class="advice-title">
                            建议与意见
                        </div>
                        <div class="titles">
                            <span style="margin-right:75px">姓名</span>
                            <span>电话</span>
                        </div>
                        <div class="inp">
                            <input type="text" style="margin-right:75px">
                            <input type="text">
                        </div>
                        <div class="titles">
                            <span>建议与意见</span>
                        </div>
                        <div class="advice-text">
                            <textarea rows="5"></textarea>
                        </div>
                        <router-link to='/thanks'>
                          <div class="sub">
                              <button>提交</button>
                          </div>
                        </router-link>
                    </div>
                </form>
                <div class="adviceR">
                    <div class="advice-title">
                        联系方式
                    </div>
                    <div class="phone-list">
                        <p>+86 0571-85084466</p>
                        <p> 85084466@ipms.cn</p>
                        <P> 浙江省杭州市西湖区文三路508号天苑大厦21F</P>
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
    .advice {
        padding-bottom: 1px;
        height: 100vh;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: url("../../assets/img/map.png");
        .advice-ct {
            width: 100%;
            padding-top: 1px;

            .advice-box{
                width: 1320px;
                height: auto;
                margin: 0 auto;

                .adviceL {
                margin-top: 85px;
                float: left;
                width: 760px;
                height: auto;
                text-align: left;
                .advice-title {
                    font-size: 64px;
                    color: #FFFFFF;
                    letter-spacing: 0.93px;
                    line-height: 74px;
                    margin-bottom: 45px;
                }
                .titles {
                    margin-top: 40px;
                    span {

                        display: inline-block;
                        font-size: 18px;
                        color: #FFFFFF;
                        letter-spacing: 0.26px;
                        line-height: 36px;
                        width: 340px;
                    }
                }

                .inp {
                    input {
                        width: 340px;
                        height: 46px;
                        background: rgba(255, 255, 255, 0.5);
                        border-radius: 10px;
                        border: none;
                    }
                }
                .advice-text {
                    textarea {
                        width: 760px;
                        height: 259px;
                        background: rgba(255, 255, 255, 0.5);
                        border: none;
                        border-radius: 10px;
                    }
                }
                .sub {
                    text-align: center;
                    button {
                        background: #5888FB;
                        border-radius: 6px;
                        margin-top:70px;
                        color: #fff;
                        display: inline-block;
                        padding: 14px 106px;
                        font-size: 18px;
                        color: #FFFFFF;
                        letter-spacing: 0.26px;
                        text-align: center;
                        border: none;

                    }
                }

            }
            .adviceR {
                margin-top: 85px;
                float: right;
                width: 430px;
                height: auto;
                text-align: left;
                .advice-title {
                    font-size: 64px;
                    color: #FFFFFF;
                    letter-spacing: 0.93px;
                    line-height: 74px;
                    margin-bottom: 45px;
                }
                .phone-list {
                    margin-top: 60px;
                    p {
                        font-size: 18px;
                        color: #FAFAFA;
                        letter-spacing: 0.26px;
                        line-height: 26px;
                        margin-bottom: 30px;
                    }

                }
            }
            }

        }
    }

    @media screen and (max-width: 768px) {
        .advice {
            .advice-ct {}
            .advice-list {
                font-size: 48px;
                color: #5888FB;
                letter-spacing: 0.7px;
                text-align: center;
                line-height: 110px;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .advice {
            .advice-ct {}
        }
    }

    @media screen and (width: 1024px) {
        .advice .advice-ct {
            height: 100%;
        }
    }

    @media screen and (width: 768px) {
        .advice .advice-ct {
            height: 100%;
        }
    }
</style>
