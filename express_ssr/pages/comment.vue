<template>
  <section class="container">
    <self-list class="self"></self-list>
     <div class="content">
        <div class="content_in">
         <!-- 来必力City版安装代码 -->
			<div id="lv-container" data-id="city" data-uid="MTAyMC8zNTIwMy8xMTczOA==">
				<script type="text/javascript">
			   (function(d, s) {
			       var j, e = d.getElementsByTagName(s)[0];
			
			       if (typeof LivereTower === 'function') { return; }
			
			       j = d.createElement(s);
			       j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
			       j.async = true;
			
			       e.parentNode.insertBefore(j, e);
			   })(document, 'script');
				</script>
			<noscript> 为正常使用来必力评论功能请激活JavaScript</noscript>
			</div>
<!-- City版安装代码已完成 -->
        </div>
     </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import self  from'~/components/self.vue'
export default {
  name:'comment',
  async asyncData () {
   try{
   	let {data} = await axios.get('api/blog')
    return {article:data.article}
   }catch(e){
   	//TODO handle the exception
   } 	
  },
  head () {
    return {
      title: 'BLOG'
    }
  },
  methods:{
  setIndexAnimate(){
  
  }
  },
  created(){
  	this.setIndexAnimate();
  },
  components :{
  'self-list':self
  }
}
</script>

<style scoped lang="less">
 .container{
 	margin: 0;
 	padding: 0;
 	height: 100%;
 	background: #ecf5ff;
 	width: 100% !important;
 	overflow-x: hidden;

 	display: flex;
 	.self{
 		flex: 3;
 		background: #ecf5ff;
 	}
 	.content{
 		flex: 7;
    padding: 15px 30px 15px 10px;
    margin-bottom: 20px;
    .content_in{
    	width: 100%;
    	height: 100%;
    	overflow: hidden;
    	background: #fff;
      #lv-container{
      	padding: 20px;
      }
    	}
    }
 	}
 
</style>
