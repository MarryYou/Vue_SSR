<template>
  <section class="container">
    <self-list class="self"></self-list>
     <div class="content">
        <div class="content_in">
         <h2>ABOUT BLOG</h2>
          <div class="talk">
		             这是博客第二发了，第一次的地址 ：http://106.15.183.98:8081/ , 之前的博客 （不对 算不上博客 只能是个草稿）
		            之前的博客就是为了走一遍前后端的流程，可惜功底不行，代码质量不高。后来一段时间忙于工作，也就近阶段偶然发现NUXT ，然后就想着作死尝鲜了。
		            借鉴了之前博客的主体设计思想，换了简约风的布局。		      
		            老实说比spa的话要快上不少，一边看一边做。
          </div>
        <h2>ABOUT ME</h2>
          <div class="talk">
                              保温杯里泡枸杞的90后  <br /> 坐标 ：南京 <br />    职业：切图仔<br />爱好：睡觉 打游戏 <br />
                              性别 男 爱好 女<br />暂未被认领的单身狗<br />籍贯：江苏徐州<br />qq：614345508<br />
                              才20多一点，总不能一直止步不前的浪费青春吧。 总得学点东西，为以后发展方向付出努力吧。<br />
                              这是我微信 欢迎妹子加我：
          </div>
          <img :src="this.address"/>
        </div>
     </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import self  from'~/components/self.vue'
import wchat from '~/assets/javascript/wchat.js'
export default {
  name:'about',
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
  data(){
  	return{
  		address:wchat
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
    	padding-top:30px;
      h2{
      	text-align: left;
      	margin-left: 70px;
      	color: #555;
      }
      .talk{
      	width: 80%;
      	margin: 30px auto 0px;
      	line-height: 30px;
      	margin-bottom: 50px;
      }
      img{
      	margin: 0 auto;
      	display: block;
      }
    	}
    }
 	}
 
</style>
