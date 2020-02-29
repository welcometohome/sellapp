<template>
  <div class="main">
    <div class="top" :style="{backgroundImage:`url(${data.avatar})`}">
      <div class="left">
        <img :src="data.avatar" class="img" />
      </div>
      <div class="right">
        <img src="../assets/img/brand@2x.png" alt class="img1" />
        <span>{{data.name}}</span>
        <p>
          <span>{{data.description}}</span> /
          <span>{{data.deliveryTime}}分钟送达</span>
        </p>
        <p class="p1">
          <img src="../assets/img/decrease_3@2x.png" alt class="img3" />
          <span>{{ data.supports ? data.supports[0].description : '' }}</span>
        </p>
      </div>
    </div>
    <p style="background:#404145">
      <img src="../assets/img/bulletin@2x.png" alt style="width:10%" />
      <span class="font">{{data.bulletin}}</span>
    </p>
    <div class="router_link">
      <router-link to="/">商品</router-link>
      <router-link to="/evaluate">评论</router-link>
      <router-link to="/business">商家</router-link>
    </div>
    <router-view></router-view>
    <div class="shop">
      <div class="shopcar-left">
        <div class="cart">
          <div class="subcart">
            <Icon type="md-cart" size="30" />
          </div>
        </div>
        <div class="money">￥0</div>
        <div class="pack">另需配送费￥{{data.deliveryPrice}}</div>
      </div>
      <div class="shopcar-right">￥{{data.minPrice}} 起送</div>
    </div>
    <div class="footer"></div>
  </div>
</template>
 

<script>
import { getdata } from "../api/api.js";
export default {
  data() {
    return {
      data: {}
    };
  },
  created() {
    getdata().then(res => {
      this.data = res.data.data;
      // console.log(this.data)
    });
  }
};
</script>

<style lang="less" scope>
.main {
  height: 100%;
  .img {
    width: 80px;
  }
  .img1 {
    width: 15%;
    vertical-align: top;
  }
  .img3 {
    width: 10%;
  }
  .p1 {
    align-items: center;
  }
  .top {
    display: flex;
    justify-content: space-around;
    padding: 3%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #fff;
    .left {
      display: inline-block;
      width: 120px;
    }
    .right {
      display: inline-block;
      width: 100%;
    }
  }
  .font {
    width: 90%;
    height: 2%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    color: #fff;
  }
  a:hover {
    color: red;
  }
  img {
    width: 5%;
  }
  .router_link {
    display: flex;
    justify-content: space-around;
    height: 30px;
    line-height: 30px;
  }
  .shop {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #333;
    position: fixed;
    display: flex;
    justify-content: space-around;
    color: #949597;
    color: #eee;
    bottom: 0;
    .shopcar-left {
      width: 65%;
      display: flex;
      .money {
        margin-right: 20px;
      }
      .cart {
        width: 60px;
        height: 60px;
        margin-top: -10px;
        margin-left: -10px;
        background: #333;
        text-align: center;
        border-radius: 50%;
        .subcart {
          width: 50px;
          height: 50px;
          background: #555;
          border-radius: 50%;
          margin: 5px auto 0;
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 60px;
  }
}
</style>