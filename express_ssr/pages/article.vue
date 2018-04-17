<template>
  <section class="container">
    <self-list class="self"></self-list>
     <div class="content">
        <div class="content_in">
        	<div class="content_tit">
        		<h4>{{Article.articletitle}}</h4>
        		 <div class="content_desc">
            	<span>
            		<i class="fa fa-calendar-o" aria-hidden="true"></i>
            	       发表于  {{Article.createtime}}
            	</span>
            	<span>
            		<span class="line">|</span>
            		<i class="fa fa-tag" aria-hidden="true"></i>
            	      {{Article.articletype}}
            	</span>
            	<span>
            		<span class="line">|</span>
            		<i class="fa fa-eye" aria-hidden="true"></i>
            		阅读次数 :{{Article.PV}}
            	</span>
            </div>
        	</div>
        	<div class="content_show" v-html="Article.content">
        		
        	</div>
        </div>
     </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import self  from'~/components/self.vue'
export default {
  name:'article',
  async asyncData ({query,error}) {
// let art =[];
// let {data} = await axios.get('api/blog',{params:{
//    	'page':window.sessionStorage.getItem('page')
// }})
// data.article.forEach((item,index)=>{
//   if(item._id === query.title){
//   	art.push(item)
//   }
// })
// return {Article:art[0]}
  },
  head () {
    return {
      title: 'BLOG'
    }
  },
  methods:{
  getArticle(){
  	let title = this.$route.query.title
  	axios.get('api/blog',{params:{
      	'page':this.$store.state.page
   }}).then((res)=>{
   	  res.data.article.filter((item)=>{
   	  	if(item._id == title){
   	  		this.Article = item
   	  	}
   	  })
   })
  },
  setPv(){
 let title = this.$route.query.title;
  axios.get('api/setPV',{params:{
      	'title':title
   }}).then((res)=>{
        console.log(res)
   })
  }
  },
  data(){
  	return{
  		Article:''
  	}
  },
  created(){
  	this.getArticle();
  	this.setPv();
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
 	width: 100% !important;
 	display: flex;
 	.self{
 		flex: 3;
 		background: #ecf5ff;
 	}
 	.content{
 		flex: 7;
    background: #ecf5ff;
    padding: 15px 30px 15px 10px;
    .content_in{
    	width: 100%;
    	height: 100%;
    	background: #fff;
    	.content_tit{
    		padding-top:30px;
    		line-height:30px;
    		font-size:18px;
    		text-align:center;           
    		.content_desc{
    		    font-size: 14px;
    				color: #555;
    				line-height: 40px;
    				 span{
    					margin: 5px 2px;
    				}
    	}
    	}
    	.content_show{
    		width: 80%;
    		padding-top: 20px;
        margin: 0 auto;
        overflow: hidden;
    	}
    }
 	}
 }
</style>
