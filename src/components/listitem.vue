<template>
    <v-container grid-list-md text-xs-center> 
         <v-layout row wrap>
        	<v-flex  xs12 sm4 md3 lg3 v-for="(item,index) in items" :key=index >
         <v-card >
				<v-card-media
					:src="item.url"
					height="190px"
				></v-card-media>
				<v-card-title primary-title>
					<div>
					<v-list two-line subheader>
             <v-btn
                color="pink"
                dark
                small
                absolute
                mid
                left
                fab
              >
              <v-icon>add</v-icon>
              </v-btn>
					<v-subheader inset>
						<h2 class="text-md-center"> {{item.name}}
						</h2>
					</v-subheader>
					<v-list-tile-content>
						<v-list-tile-title class="text-md-center">{{ item.category }}</v-list-tile-title>
						<v-list-tile-sub-title class="text-md-center">  Rp {{ item.price }}</v-list-tile-sub-title>
					</v-list-tile-content>
					</v-list>
					</div>
				</v-card-title>
				<v-card-actions>
          <v-layout row>
                <v-flex xs6>
                  <v-btn outline color="black" @click="openModalEdit(item)">Edit</v-btn>
                    </v-flex>
                  <v-flex xs6>
                  <v-btn outline color="red">Delete</v-btn>
                  <!-- <Modal /> -->
                    </v-flex>
          </v-layout>
				</v-card-actions>
        </v-card>
        </v-flex>
         </v-layout>
</v-container>
</template>


<script>
// @ is an alias to /src
import {mapActions,mapState} from 'vuex'
import Modal from '@/components/ModalTest.vue'
export default {
  components: {
    Modal
  },
	methods :{
		...mapActions([
			"allItem","openModalEdit"
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