import Vue from 'vue';
import Vuex from 'vuex';
// root
import action from './action.js';
import mutation from './mutation.js';
import getter from './getter.js';
// module
import settings from './modules/index.js';
import user from './modules/user.js';
Vue.use(Vuex);
var store = new Vuex.Store({
	modules: {
		settings,
		user
	},
	mutation,
	action,
	getter
})

export default store
