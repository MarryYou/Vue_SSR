<template>
  <section class="container">
    <bg-show></bg-show>
    <introduction></introduction>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import bg_canvas from '~/components/bg_canvas.vue'
import self_introduction from '~/components/self_introduction.vue'
export default {
  async asyncData () {
   try{

   }catch(e){
   	//TODO handle the exception
   } 	
  },
  head () {
    return {
      title: 'BLOG'
    }
  },
  mounted () {
  window.addEventListener('scroll', this.handleScroll)
},
  methods:{
  	handleScroll () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//console.log(scrollTop)
}
  },
  created(){
   axios.get('api/PV').then((res)=>{
   	let readers =0;
   	this.$store.commit('setArticles',res.data.article.length)
	   	res.data.article.forEach((item)=>{
	   		readers += item.PV;
	   	})
   	this.$store.commit('setReaders',readers);
   })
  },
  components :{
    'bg-show':bg_canvas,
     'introduction':self_introduction
  }
}
</script>

<style scoped>
.container{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
