import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		cart: 100
	},
	mutations: {
		increment(state, cc) {
			// setTimeout(() => {
			state.count = cc.count;
			// }, 2000);
			// state.cart = state.count * state.cart;
		}
	},
	actions: {
		add: ({ commit }, count) => {
			setTimeout(() => {
				commit('increment', count);
			}, 2000);
		}
	}
})

export default store
