<template>
  <div class="eva">
    <div class="title">
      <Row>
        <i-col span="18" push="6" class="left">
          服务态度：
          <Rate show-text allow-half v-model="valueCustomText">
            <span style="color: #f5a623">{{ valueCustomText }}</span>
          </Rate>
          <br/>
          服务态度：
          <Rate show-text allow-half v-model="valueText">
            <span style="color: #f5a623">{{ valueText }}</span>
          </Rate>
          <p>送达时间：44分钟</p>
        </i-col>
        <i-col span="6" pull="18">
          <p class="fontSize">3.9</p>
          <p class="weight">综合评分</p>
          <p>高于周边商家69.2%</p>
        </i-col>
      </Row>
    </div>
    <div class="content">
      <div class="top"></div>
      <div class="bottom">
        <div class="btop">
          <span class="first">全部57</span>
          <span class="two">满意47</span>
          <span class="three">不满意10</span>
        </div>
        <div class="bbtom" v-for="(v,i) in list" :key="i">
          <div class="img">
            <img :src="v.avatar" alt />
          </div>
          <div class="text">
            <p class="p1">
              <span>{{v.username}}</span>
              <span>{{v.rateTime}}</span>
            </p>
            <p>
              <Rate show-text allow-half v-model="score">
                <span style="color:#f5a623">{{ v.score }}</span>
              </Rate>
              <span>{{v.deliveryTime}}分钟送达</span>
            </p>
            <p>{{v.text}}</p>
            <p>{{v.recommend}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { evaluate } from "../api/api.js";
export default {
  data() {
    return {
      valueCustomText: 3.8,
      valueText: 4.0,
      list: {},
      score: ""
    };
  },
  created() {
    evaluate().then(res => {
      this.list = res.data.data;
    //   console.log(res.data.data);
    });
  }
};
</script>

<style lang="less" scoped>
.eva {
  border-top: 1px solid #ccc;
  .title {
    padding: 20px;
    .fontSize {
      font-size: 24px;
      color: orange;
    }
    .weight {
      font-weight: bold;
      font-size: 16px;
    }
  }
  .top {
    height: 15px;
    background: #ccc;
  }
  .bottom {
    .btop {
      padding: 10px;
      border-bottom: 1px solid #e8e8e8;
      span {
        display: inline-block;
        width: 70px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-right: 10px;
      }
      .first {
        background: #00a0dc;
        color: #fff;
      }
      .two {
        background: #ccecf7;
        color: #455d61;
      }
      .three {
        background: #eaebed;
        color: #505559;
      }
    }
    .bbtom {
      .img {
        display: inline-block;
        width: 10%;
        img {
          width: 100%;
          vertical-align: top;
          position: relative;
          top: -95px;
        }
      }
      .text {
        display: inline-block;
        width: 90%;
        .p1{
            display: flex;
            justify-content: space-between;
        }
      }
    }
  }
}
</style>