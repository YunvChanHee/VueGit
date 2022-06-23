import Vue from "vue";
import Vuex from "vuex";
import mutations from './mutations'
import actions from './action'


Vue.use(Vuex);

// export 뒤에 default 비사용시 { 변수명 } 해야 함
export const store = new Vuex.Store({
    // News 데이터 가져오기
    state: {
        news: [],
        asks: [],
        jobs: [],
        user: {},
        item: {},
        list: [],

    },
    getters: {
        asks(state) {
            return state.asks;
        },
        fetchedItem(state) {
            return state.item
        }
    },
    // state 를 건들기 위해서는 mutations 를 사용해야 함
    mutations,
    actions,
});