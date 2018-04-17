<template>
	<div id="self">
	<div class="mask">
	<div class="mask_tit">
		森蓝情の博客	
	</div>
	<div class="mask_list">
    <ul class="mask_menu" ref='menu_list'>
    	<li :class="{'tag-active':list[0]}">
    	<nuxt-link to="/">
    	<div class="tag">
    		<i class="fa fa-home" aria-hidden="true"></i>
    	</div>
    	<span>首页</span>
    	</nuxt-link>
    	</li >
    	<li :class="{'tag-active':list[1]}">
    	<nuxt-link to="/blog">
    	<div class="tag">
    	<i class="fa fa-bookmark" aria-hidden="true"></i>
    	</div>
    	<span>博客</span>
    	</nuxt-link>
    	</li>
    	<li  :class="{'tag-active':list[2]}">
    	<nuxt-link to="/comment">
    	<div class="tag">
    	<i class="fa fa-comments" aria-hidden="true"></i>  	
    	</div>
    	<span>留言</span>
    	</nuxt-link>
    	</li>
    	<li :class="{'tag-active':list[3]}">
    	<nuxt-link to="/about">
    	 <div class="tag">
    	<i class="fa fa-user-md" aria-hidden="true"></i>   			
    	 </div>
    	<span>关于</span>
    	</nuxt-link>
    	</li>
    	<!--<li :class="{'tag-active':list[4]}">
    	<nuxt-link to="/tags">
    	<div class="tag">
    	<i class="fa fa-tags" aria-hidden="true"></i>  			
    		</div>
    	<span>标签</span>
    	</nuxt-link>
    	</li>-->
    </ul>
	</div>
	</div>
	<div class="self_info">
		<div class="logo">
			<img src="../assets/img/person.png"/>
		</div>
		<div class="name">
			<p>范浩天&nbsp;&nbsp;&nbsp;</p>
		</div>
		<div class="desc">
			<p>早上好。</p>
		</div>
		<div class="menu">
			<div class="menu_li right_line">
				<p class="num">{{this.$store.state.articles}}</p>
				<p class="menu_title">日志</p>	
			</div>
			<div class="menu_li">
				<p class="num">{{this.$store.state.readers}}</p>
				<p class="menu_title">阅读量</p>	
			</div>
		</div>
		<div class="self_skill">
			<h4>TAG CLOUD&nbsp;&nbsp;</h4>
			<div class="list">
				<el-tag color="#fff" size="medium">HTML</el-tag>
				<el-tag color="#fff" size="medium">CSS</el-tag>
				<el-tag color="#fff" size="medium">JAVASCRIPT</el-tag>
				<el-tag color="#fff" size="medium">JQUERY</el-tag>
				<el-tag color="#fff" size="medium">ZPOTO</el-tag>
				<el-tag color="#fff" size="medium">VUE</el-tag>
				<el-tag color="#fff" size="medium">NUXT</el-tag>
				<el-tag color="#fff" size="medium">EXPRESS</el-tag>
				<el-tag color="#fff" size="medium">NODEJS</el-tag>
                <el-tag color="#fff" size="medium">NGINX</el-tag>
			</div>
		</div>
		<div class="friend_link">
			<h4>FRIEND LINK&nbsp;&nbsp;</h4>
		  <div class="link">
			<a href="https://github.com/MarryYou">Github</a>
			<a href="https://juejin.im">掘金</a>
			<a href="https://cn.vuejs.org">VUE</a>
			<a href="https://zh.nuxtjs.org">NUXT</a>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		name:'',
		created(){
        this.setMenuList(this.$store.state.list_tag);
		},
		props:[],
		components:{
		},
		data() {
		return {
        list:[false,false,false,false,false,false,false]
			}
		}, 	
		methods: {
		handleScroll(){
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          console.log(scrollTop)
		},
         setMenuList(tag){
          switch(tag){
          	case '/':
          	this.killOther(this.list,0)
          	break;
          	case'/blog':
          	this.killOther(this.list,1)
          	break;
          	case'/comment':
          	this.killOther(this.list,2)
          	break;
          	case'/about':
          	this.killOther(this.list,3)
          	break;
          	case'/tags':
          	this.killOther(this.list,4)
          	break;
          	case'/info':
          	this.killOther(this.list,5)
          	break;
          	case'/book':
          	this.killOther(this.list,6)
          	break;   
          	default:
          	this.killOther(this.list,1)
          	break;   
          }
         },
         killOther(list,id){
         	list.forEach((item)=>{
         		item = false;
         	})
         	list[id] = true;
         }
		},
		watch:{			
			}
		}
</script>
<style type="text/css">

</style>
<style lang="less" scoped="scoped">
.tag-active{
	background: #f5f5f5;
	position: relative;
	a::after{
	position: absolute;
	right: 20px;
	top: 50%;
	transform: translateY(-50%);
	display: block;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	content: '';
	background: #bbb;
}
}
	#self {
		margin: 0;
		padding: 0;
		padding: 15px 10px 15px 50px;
		 .mask{
			width: 100%;
			height: 450px;			
			background: #fff;
			margin: 0 auto;
			padding-bottom: 20px;
			border: 1px solid #E3E3E3;
			.mask_tit{
				width: 100%;
		        font-size: 20px;
		        padding: 20px;
		        text-align: center;
		        line-height: 40px;
		        color: #fff;
		        background: #333;
			}
			.mask_logo{
				width: 30%;
				text-align: center;
				border-radius: 50%;
				margin-left: 50%;
				transform: translateX(-50%);
				overflow: hidden;
				position: relative;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.mask_list{
				padding-top: 20px;
				.mask_menu{
					list-style: none;
					 li{
					    position: relative;
						display: block;
						padding: 10px;
						cursor: pointer;
					}:hover{
						background: #E3E3E3;
					}
				}
				.tag{
					display: inline-block;
					min-width: 50px;
				  i{
					padding: 0 5px 0 20px;
					font-size: 18px;
				}
				}

				a{  
					display: block;
					color: #555;
					font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
					font-size: 14px;
					line-height: 25px;
					text-decoration: none;
					text-align: left;
				}
			}
		}
		.self_info{
			margin-top: 20px;
			padding-top: 50px;
			background:#fff;
			width: 100%;
			   .logo{
				width: 100%;
				position: relative;		
				height:120px;
				img{
					 position: absolute;
				     border-radius: 50%;	   					 
					 height: 100%;

					 background: #fff;
					 left: 50%;
			         transform: translateX(-50%);
				}
			}
			.name{
				margin-top: 10px;
				text-align: center;
				font-size: 14px;
				font-weight: 600;
				line-height: 30px;
			}
			.desc{
				color: #555;
				font-size: 14px;
				text-align: center;
			}
			.menu{
				text-align: center;
				line-height: 20px;
				padding-top: 25px;
				font-size: 14px;
				.menu_li{
					padding: 5px 10px;
					display:inline-block;
					.num{
					 font-weight: 700;
					}
					.menu_title{
						color: #999;
					}
				}
				.right_line{
					border-right:1px solid #eee;
				}
			}
			.self_skill{
				padding: 20px 40px;
				text-align: center;
				color: #555;	
				.list{
					padding-top: 20px;
					text-align: left;
					.el-tag{
						color: #555;
						border: 1px solid #555;
						margin: 5px;
					}
				}			
			}
			.friend_link{
				padding: 20px 40px;
				text-align: center;
				color: #555;
				.link{
					padding: 20px;
				}
				a{  
					text-decoration:  underline;
					padding: 5px;
					color: #55;
				}
			}
		}
	}
</style>
