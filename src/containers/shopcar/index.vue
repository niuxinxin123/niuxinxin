<template>
  <div class="wraper">
    <v-header>
      <h3 class="mt10">
        <small class="float-right mt5 pr5" @click="checkAllItem">
          <Checkbox v-model="allCheck" @on-change="onCheckAll">全选</Checkbox>
        </small>
        购物车
      </h3>
    </v-header>
    <div class="wraper-container pt15 pb15">
      <v-product-item
        v-for="(list,index) in shopcarList"
        :key="list.pname"
        :list="list"
        :index="index"
        @update="onUpdate"
      ></v-product-item>
    </div>
    <v-footer>
      <v-cart :summary="summary" :total="total"></v-cart>
    </v-footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import vProductItem from "./item";
import vCart from "./cart";
import vHeader from "@/components/header";
import vFooter from "@/components/footer";

export default {
  name: "Shopcar",
  data() {
    return {
      allCheck: false,
      summary: 0,
      total: 0
    };
  },
  mounted() {
    this.$store.dispatch("getProductList");
  },
  components: {
    vCart,
    vHeader,
    vFooter,
    vProductItem
  },
  computed: mapState(["shopcarList", "checkAll"]),
  watch: {
    checkAll(newVal, oldVal) {
      this.allCheck = newVal;
    }
  },
  methods: {
    onCheckAll() {
      this.$store.commit("setCheckAll", this.allCheck);
    },
    onUpdate($type, $index) {
      switch ($type) {
        case "add":
          this.shopcarList[$index].count = 1;
          break;
        case "plus":
          if (this.shopcarList[$index].count >= 9) return;
          this.shopcarList[$index].count++;
          break;
        case "minus":
          this.shopcarList[$index].count--;
        default:
          break;
      }
      this.calculate();
    },
    checkAllItem() {
      this.shopcarList.map(item => {
        item.isCheck = !this.checkAll;
        this.calculate();
      });
    },
    calculate() {
      let tot = 0;
      let sum = 0;
      this.shopcarList.map(item => {
        if (item.isCheck) {
          tot += item.count;
          sum += item.count * item.price;
        }
      });
      this.total = tot;
      this.summary = sum;
    }
  }
};
</script>

<style>
</style>
