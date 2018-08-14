import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		itemName :'',
		category :'',
		price : null,
		url :'',
		items :[]
	},
	mutations: {
		setItems(state,payload){
			state.items = payload
		},
		setItemName(state,payload){
			state.itemName = payload
		},
		setCategory(state,payload){
			state.category = payload
		},
		setPrice(state,payload){
			state.price = payload
		},
		setUrl(state,payload){
			state.url = payload
		}
	},
	actions: {
		upload(context){
			let formData = new FormData()
			formData.append('item',this.state.url)
			// console.log(this.state.itemName,this.state.category,this.state.price)
			axios.post('http://localhost:3000/upload',formData)
			.then(result=>{
				console.log('success')
				axios.post('http://localhost:3000/item/addItem',{
					name : this.state.itemName,
					category : this.state.category,
					price : this.state.price,
					url : result.data.link
				})
				.then(data=>{
					console.log(data)
				})
				.catch(err=>{
					console.log(err)
				})
			})
			.catch(function(){
				console.log('error')
			})

		},
		getImage(context,data){
			this.state.url = data.target.files[0]
		},
		allItem(context){
			axios.get('http://localhost:3000/item/listitem')
			.then(data=>{
				console.log(data)
				let result = data.data
				context.commit('setItems',result)
			})
		}
	}
})
