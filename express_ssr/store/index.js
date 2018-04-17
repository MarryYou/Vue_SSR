import Vue  from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = () => new Vuex.Store({
	state:{
     list_tag:'/',
     articles:0,
     readers:0,
     page:1,
	},
	mutations:{
		setTag(state,tag){
			state.list_tag = tag
			window.sessionStorage.setItem('list_tag',tag);
		},
		setArticles(state,num){
			state.articles = num
		},
		setReaders(state,num){
			state.readers = num			
		},
		setPage(state,num){
			state.page = num;
			window.sessionStorage.setItem('page',num);
		}
	}
})
export default store

