// 主题色更改
import variables from '@/style/elementui-variables.scss'; 
const settings = {
	state: {
		theme: variables.theme,
	},
	mutations: {
		CHANGE_SETTING: (state, {
			key,
			value
		}) => {
			if (Object.prototype.hasOwnProperty.call(state, key)) {
				state[key] = value
			}
		}
	},
	actions: {
		changeSetting({
			commit
		}, data) {
			commit('CHANGE_SETTING', data)
		}
	}
}

export default settings
