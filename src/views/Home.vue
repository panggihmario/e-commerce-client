<template>
  <div id="app">
  
    <navbar/>

<listitem/>
    <br>
    <footers/>
   

</div>
</template>
<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'
import footers from '@/components/footer.vue'
import listitem from '@/components/listitem.vue'
import {mapActions,mapState} from 'vuex'
export default {
  	name: 'home',
  	components: {
   navbar,footers,listitem
  	},
  	data(){
    	return { 
    
    	}
  },
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
