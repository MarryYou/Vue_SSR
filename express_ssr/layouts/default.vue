<template>
  <div>
    <nuxt></nuxt>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    MyFooter
  },
  methods:{
  	fetchTag(){
  		let path = this.$route.path
  		this.$store.commit('setTag',path);
  	}
  },
  watch:{
  	'$route':'fetchTag'
  }
  
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html,body{
	margin: 0;
	padding: 0;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
	font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
}
.container
{
  margin: 0;
  width: 100%;
}

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
