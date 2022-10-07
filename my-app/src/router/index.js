import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LongyiNews from '@/components/LongyiNews'
import LongyiNew from '@/components/LongyiNew'
import ContactUs from '@/components/ContactUs'
import Technology from '@/components/Technology'
import Products from '@/components/Products'
import AboutLongyi from '@/components/AboutLongyi'
import Invest from '@/components/Invest'

Vue.use(Router)

export default new Router({
  routes: [
    {
		  path: '/',
		  name: 'Home',
		  component: Home,
		  afterEach:() => {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
},
		  meta: {
			breadcrumb: '首頁'
		  },
		  
    },
	{ 
			path: '/longyi_news',  
			name: 'LongyiNews',
			component: LongyiNews,
			afterEach:() => {
							document.body.scrollTop = 0;
							document.documentElement.scrollTop = 0;
			},
			meta: {
				text: '最新消息',
				to : { name : LongyiNews } 
			}

	},
	{ 
		path: '/longyi_new',  
		name: 'LongyiNew',
		component: LongyiNew,
		afterEach:() => {
						document.body.scrollTop = 0;
						document.documentElement.scrollTop = 0;
		},
		meta: {
			text: '最新消息',
			to : { name : LongyiNews } 
		}

	},
	{ 
		path: '/contact_us',  
		name: 'ContactUs',
		component: ContactUs,
		afterEach:() => {
						document.body.scrollTop = 0;
						document.documentElement.scrollTop = 0;
		},
		meta: {
			text: '聯絡我們',
			to : { name : ContactUs } 
		}

	},
	{ 
		path: '/technology',  
		name: 'Technology',
		component: Technology,
		afterEach:() => {
						document.body.scrollTop = 0;
						document.documentElement.scrollTop = 0;
		},
		meta: {
			text: '核心技術',
			to : { name : Technology } 
		}

	},
	{ 
		path: '/products',  
		name: 'Products',
		component: Products,
		afterEach:() => {
						document.body.scrollTop = 0;
						document.documentElement.scrollTop = 0;
		},
		meta: {
			text: '產品介紹',
			to : { name : Products } 
		}

	},
	{ 
		path: '/about_longyi',  
		name: 'AboutLongyi',
		component: AboutLongyi,
		afterEach:() => {
						document.body.scrollTop = 0;
						document.documentElement.scrollTop = 0;
		},
		meta: {
			text: '關於瀧儀',
			to : { name : AboutLongyi } 
		}

	},
	{ 
		path: '/invest',  
		name: 'Invest',
		component: Invest,
		afterEach:() => {
						document.body.scrollTop = 0;
						document.documentElement.scrollTop = 0;
		},
		meta: {
			text: '投資人專區',
			to : { name : Invest } 
		}

	}

	 
  ]
})