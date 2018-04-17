<template>
  <section class="container">
    <self-list class="self"></self-list>
     <div class="content">
        <div class="content_in">
        <div class="article" v-for="item in article">
         <div class="article_tit">
              <h2>                	
              <nuxt-link :to="{name:'article',query:{title:item._id}}">{{item.articletitle}}</nuxt-link>
              </h2>
            <div class="article_desc">
            	<span>
            		<i class="fa fa-calendar-o" aria-hidden="true"></i>
            	       发表于  {{item.createtime}}
            	</span>
            	<span>
            		<span class="line">|</span>
            		<i class="fa fa-tag" aria-hidden="true"></i>
            	      {{item.articletype}}
            	</span>
            	<span>
            		<span class="line">|</span>
            		<i class="fa fa-eye" aria-hidden="true"></i>
            		阅读次数 :{{item.PV}}
            	</span>
            </div>
         </div>
         <div class="article_content">
          {{item.desc}}
         </div>
         <div class="article_link">
         	<nuxt-link :to="{name:'article',query:{title:item._id}}">阅读全文 <i class="fa fa-angle-double-right" aria-hidden="true"></i></nuxt-link>
         </div>
        </div>
        </div>
     </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import self  from'~/components/self.vue'
export default {
  name:'info',
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
    	background: #fff;
    	padding-top:80px;
    	.article{
    		width: 90%;
    		margin: 0 auto;
    		margin-bottom: 20px;
    		background: #fff;
    		text-align: center;
    		box-shadow: 0 0 5px rgba(202,203,203,0.5);
    	.article_tit{
    		 	h2{
    				padding-top:30px;
    				font-size: 20px;
    				 a{    
    					    text-decoration: none;
    					    font-weight: 400;
    					    display: inline-block;
							    position: relative;
							    color: #555;
							    border-bottom: none;
							    line-height: 1.2;
							    vertical-align: top;
    				}
    				a::before{
    					  content: "";
						    position: absolute;
						    width: 100%;
						    height: 2px;
						    bottom: 0;
						    left: 0;
						    background-color: #000;
						    visibility: hidden;
						    -webkit-transform: scaleX(0);
						    -moz-transform: scaleX(0);
						    -ms-transform: scaleX(0);
						    -o-transform: scaleX(0);
						    transform: scaleX(0);
						    transition-duration: 0.2s;
						    transition-timing-function: ease-in-out;
						    transition-delay: 0s;
    				}
    			a:hover::before{
    				  visibility: visible;
						  -webkit-transform: scaleX(1);
						  -moz-transform: scaleX(1);
						  -ms-transform: scaleX(1);
						  -o-transform: scaleX(1);
						  transform: scaleX(1);
    			}
    			}
    			.article_desc{
    				font-size: 14px;
    				color: #555;
    				line-height: 40px;
    				 span{
    					margin: 5px 2px;
    				}
    			}
    		}
    		
    	.article_content{
    		text-align: left;
    		padding: 40px 30px;
    		line-height: 30px;
    		color: #555;
    	}
    	.article_link{  
    		padding-bottom: 20px;
    				  a{
    				  padding: 5px 10px;	
    					display: inline-block;   			
    					border: 1px solid #555;
    					font-size: 14px;
              background: #fff;
              text-decoration: none;
              border-radius: 5px;
    				}:hover{
    					color: #fff;
    					background: #000;
    				}
    			}
    	}
    }
 	}
 }
</style>
