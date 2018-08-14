<template>
  <div id="app">
  <v-app id="inspire">
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Item name"
              outline
				  v-model="inputItemName"
            ></v-text-field>
          </v-flex>
        </v-layout>
         <v-layout row wrap>
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="category"
              outline
				  v-model="inputCategory"
            ></v-text-field>
          </v-flex>
        </v-layout>
          <v-layout row wrap>
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="price"
              outline
				  v-model="inputPrice"
            ></v-text-field>
          </v-flex>
        </v-layout>
         <v-layout row wrap>
          <v-flex xs12 sm6 md3>
            <input type="file" v-on:change="getImage">
          </v-flex>
        </v-layout>
          <v-layout row wrap>
          <v-flex xs12 sm6 md3>
                <v-btn color="info" v-on:click="upload">Upload</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-app>
</div>
</template>
<script>
	import {mapActions,mapState} from 'vuex'
	export default {
		methods :{
			...mapActions([
				"upload","getImage"
			])
		},
		computed :{
			...mapState([
				"itemName","price","url","category"
			]),
			inputItemName :{
				get(){
					return this.$store.state.itemName
				},
				set(value){
					return this.$store.commit('setItemName',value)
				}
			},
			inputPrice :{
				get(){
					return this.$store.state.price
				},
				set(value){
					return this.$store.commit('setPrice',value)
				}
			},
			inputCategory:{
				get(){
					return this.$store.state.category
				},
				set(value){
					return this.$store.commit('setCategory',value)
				}
			},
			inputUrl :{
				get(){
					return this.$store.state.url
				},
				set(value){
					return this.$store.commit('setUrl',value)
				}
			},

		}
	}
</script>
