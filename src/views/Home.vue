<template>
  <div id="app">
  
    <navbar/>
    <br>
    <footers/>
   

</div>
</template>
<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'
import footers from '@/components/footer.vue'
export default {
  name: 'home',
  components: {
    navbar,footers
  },
  data(){
    return { 
    
    }
  } 
}
</script>
