module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '森蓝情の博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '森蓝情の博客' },
      { name: 'Keywords', content: 'senlanqing' },
      { name: 'renderer', content: 'webkit | ie - comp | ie - stand' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ],
    script:[],
            __dangerouslyDisableSanitizers: ['script']
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css',
  'element-ui/lib/theme-chalk/index.css'
       ],
	 plugins: [{
	  src: '~plugins/element-ui',
	  ssr: true,
	}],
   loading:{
   	color:'rgba(255,152,0,0.44)',
   	height:'2px'
   },
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios','element-ui'],
    /*
    ** Run ESLINT on save
    */
//  extend (config, ctx) {
//    if (ctx.isClient) {
//      config.module.rules.push({
//        enforce: 'pre',
//        test: /\.(js|vue)$/,
//        loader: 'eslint-loader',
//        exclude: /(node_modules)/
//      })
//    }
//  }
  }
}
