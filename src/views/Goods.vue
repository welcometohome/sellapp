<template>
  <div class="box">
    <div class="left_div">
      <ul class="content">
        <!-- 当索引和点击索引相同时，表示被选中 -->
        <p
          v-for="(v,index) in data"
          :key="index"
          @click="btn(index)"
          :class="{leftGoods:true,active:index==curIndex}"
        >
          <img style="width:12px" v-show="v.type == 1" src="../assets/img/special_3@2x.png" />
          {{v.name}}
        </p>
      </ul>
    </div>
    <div class="right_div">
      <ul class="content">
        <div v-for="(v,i) in data" :key="v.name" :id="i">
          <div class="title">{{v.name}}</div>
          <div v-for="(v2,i) in v.foods" :key="i">
            <div class="content1">
              <div>
                <img :src="v2.icon" alt />
              </div>
              <div>
                <p>{{v2.name}}</p>
                <p>{{v2.description}}</p>
                <p>月售:{{v2.sellCount}} 好评率{{v2.rating}}%</p>
                <p class="price">
                  ￥{{v2.price}}
                  <del>{{v2.oldPrice}}</del>
                  <span style="float:right">
                    <button type="button">-</button>1
                    <button type="button">+</button>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getgoods } from "../api/api";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      data: [],
      curIndex: 0 //当前选中的索引
    };
  },
  created() {
    getgoods().then(res => {
      this.data = res.data.data;
      console.log(res.data.data);
    });
  },
  mounted() {
    // 左
    new BScroll(document.querySelector(".left_div"), { click: true });
    // 右
    window.rightDiv=new BScroll(document.querySelector(".right_div"));
  },
  methods: {
    btn(index) {
      this.curIndex = index; //点击的索引
      // console.log(index);
    window.rightDiv.scrollToElement(document.getElementById(index),600)
    },
  }
};
</script>

<style lang="less" scoped>
.box {
  display: flex;
  max-height: 500px;
  height: 100%;
  .left_div {
    width: 80px;
    height: 300px;
    overflow: scroll;
    .leftGoods {
      padding: 8%;
      background: #f3f6f6;
      border-bottom: 1px solid #dadee2;
    }
    .active {
      background: #fff;
    }
  }
  .right_div {
    flex: 1;
    overflow: scroll;
    .title {
      background: #f3f6f6;
    }
    .content1 {
      display: flex;
      align-items: center;
      font-size: 12px;
      padding: 10px;
      > div {
        display: inline-block;
      }
      .price {
        color: red;
        del {
          color: #ccc;
        }
        button {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #00a1dc;
          color: #fff;
          border: none;
          outline: none;
        }
      }
      div:first-child {
        width: 25%;
        img {
          width: 100%;
          vertical-align: super;
        }
      }
      div:last-child {
        width: 60%;
        margin-left: 10px;
      }
    }
    img {
      width: 30%;
    }
    .color {
      background: #f4f5f7;
    }
  }
}
</style>