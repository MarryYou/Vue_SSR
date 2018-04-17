<template>
	<div class="introduction">
		<div class="container">
	    <div class="self_logo">
			<img src="../assets/img/senlanqing.jpg"/>
		</div>	
		<div class="self_tit">
			<h1>一个 构建于 Nuxt.js 的 SSR 博客</h1>
		</div>
		<div class="self_link">
			<ul>
				<li> <span><nuxt-link to="/blog">BLOG</nuxt-link></span></li>
				<li> <span><nuxt-link to="/comment">COMMENT</nuxt-link></span></li>
				<li> <a href="https://github.com/MarryYou" target="_blank">GITHUB</a></li>
				<!--<li> <span><nuxt-link to="/me">ME</nuxt-link></span></li>-->
				<li> <span><nuxt-link to="/about">ABOUT</nuxt-link></span></li>
			</ul>
		</div>
		</div>

	</div>
</template>

<script>
	export default {
		methods:{
			routeTo(address){
				this.$router.push({path:address});
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
.introduction{
	position: absolute;
	left: 50%;
	top: 40%;

	z-index: 10;
	width: 80%;
	transform: translate(-50%,-50%);
	.container{
		position: relative;
		.self_logo{
			text-align: center;
			margin: auto;
			display: block;
			width: 100px;
			height: 100px;
			border: 1px solid  #32AAEE;
			border-radius: 50%;
			overflow: hidden;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.self_tit{
			text-align: center;
			line-height: 50px;
			color: #B64926;
		}
		.self_link{
			ul{			
              text-align: center;
			}
			 li{
				list-style: none;	
				display: inline;
			    margin: 0 40px;
			    line-height: 30px;
			    text-align: center;		
			    span{
			    	text-decoration: none;
			    	color: #EC7600;
			    	font-weight: 600;
			    	cursor: pointer;
			    }
			    a{
			    	text-decoration: none;
			    	color: #EC7600;
			    	font-weight: 600;
			    }
			}
		}
	}
}
</style>