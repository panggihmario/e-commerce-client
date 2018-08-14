<template>
    <v-container grid-list-md text-xs-center >
	 <v-layout >
      <v-flex xs4 order-md3 order-xs2 v-for="(item,index) in items" :key=index class="card">
        <v-card id="cards"> 
            <center>
          <v-card-media class="image"
            :src="item.url"
            height="290px"
          ></v-card-media>
            </center>
          <v-card-title primary-title>
              
            <div>
              <h3 class="text-md-right">{{item.name}}</h3>
              <div>{{item.price}} <br>{{item.category}}</div>
            </div>
          </v-card-title>
  
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
         
        </v-card>
      </v-flex>
    </v-layout>
	</v-container>
</template>

<style scoped>
    .image{
        width: 300px;
        
    };
    .cards{
        width: 500px
    }
</style>



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