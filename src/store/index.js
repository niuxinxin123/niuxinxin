import Vue from 'vue';
import Vuex from 'vuex';
import { _getProductList } from "@/api/shopcar";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: false,
    state: {
        summary: 0,
        total: 0,
        checkAll: false,
        shopcarList: []
    },
    mutations: {
        setShopcarList(state, payloay) {
            console.log(payloay)
            state.shopcarList = payloay;
        },
        setCheckAll(state, payloay) {
            state.checkAll = payloay
        }
    },
    actions: {
        async getProductList({ commit }) {
            const result = await _getProductList();
            commit('setShopcarList', result.data.result)
        }
    }
})