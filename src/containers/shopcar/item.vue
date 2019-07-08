<template>
  <div class="clearfix mb15 bdb1 p10">
    <div class="col-xs-1 pl5 pr5 pt20">
      {{index}}
      <Checkbox v-model="list.isCheck" @on-change="onChange"/>
    </div>
    <dl class="clearfix col-xs-11 pl0">
      <dt class="col-xs-4">
        <img :src="list.imgUrl" class="img-responsive img-circle bd1 p10">
      </dt>
      <dd class="col-xs-8">
        <h4 v-text="list.pname"></h4>
        <div class="mt15">
          <div class="float-right mt3">
            <span v-if="list.count" class="img-circle p10 bg-fuchsia">
              <i class="glyphicon glyphicon-minus f14 text-white" @click="minus(index)"></i>
            </span>
            <span v-if="list.count" v-text="list.count" class="pl5 pr5"></span>
            <span class="img-circle p10 bg-fuchsia">
              <i
                v-if="list.count<1"
                class="glyphicon glyphicon-shopping-cart f14 text-white"
                @click="add(index)"
              ></i>
              <i v-else class="glyphicon glyphicon-plus f14 text-white" @click="plus(index)"></i>
            </span>
          </div>价格:
          <span v-text="list.price"></span>
        </div>
        <p class="text-red mt5" v-show="list.count>=9">最多购买 9 件商品</p>
      </dd>
    </dl>
  </div>
</template>

<script>
import { Checkbox } from "iview";

export default {
  props: {
    list: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  methods: {
    add($index) {
      this.$emit("update", "add", $index);
    },
    plus($index) {
      this.$emit("update", "plus", $index);
    },
    minus($index) {
      this.$emit("update", "minus", $index);
    },
    onChange() {
      this.$emit("update");
    }
  },
  components: {
    Checkbox
  }
};
</script>

<style>
</style>
