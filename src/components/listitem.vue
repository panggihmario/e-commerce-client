<template>
    <v-container grid-list-md text-xs-center> 
         <v-layout row wrap>
        	<v-flex  xs12 sm4 md3  v-for="(item,index) in items" :key=index >
         <v-card >
				<v-card-media
					:src="item.url"
					height="190px"
				></v-card-media>
				<v-card-title primary-title>
					<div>
					<v-list two-line subheader>
					<v-subheader inset>
						<h2> {{item.name}}
						</h2>
					</v-subheader>
					
					<v-list-tile-content>
						<v-list-tile-title>{{ item.category }}</v-list-tile-title>
						<v-list-tile-sub-title> Rp {{ item.price }}</v-list-tile-sub-title>
					</v-list-tile-content>
					
					</v-list>
					</div>
				</v-card-title>
				<v-card-actions>
					<v-btn outline color="indigo" v-on:click="addToCart(item)">Add to Cart</v-btn>
					
				</v-card-actions>
        </v-card>
        </v-flex>
          
        
       
         </v-layout>
</v-container>
</template>





<script>
// @ is an alias to /src
import {mapActions,mapState} from 'vuex'
export default {
	methods :{
		...mapActions([
			"allItem"
		])
	},
	computed :{
		...mapState([
			"items"
		])
	},
	mounted(){
		this.allItem()
	}
}
</script>

<style lang="scss">
.v-card {
    display: block;
    border-radius: 5px;
    border: solid 2px;  
    min-width: 0;
    position: relative;
    text-decoration: none;
    padding :-1px;
    margin :6px
    
    
}
</style>