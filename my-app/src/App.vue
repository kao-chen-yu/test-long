<template>
<div id="app">		
	<Navbar />	   
        <router-view/>
    <FooterSample />
</div>
</template>

<script>

import Navbar from './components/NavBar.vue';
import FooterSample from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {Navbar,FooterSample},
}
</script>

<style>
nav.breadcrumbs ul {
            list-style: none;
            margin: 0;
            padding: 0;
}
nav.breadcrumbs ul li {
            display: inline-block;
}
nav.breadcrumbs ul li:before {
   content: ' | ';
            margin-left: 5px;
}
nav.breadcrumbs ul li:first-child:before {
            display: none;
}
body{font-family: '微軟正黑體, "Microsoft JhengHei", Arial, Helvetica;' !important;
     background-color :aliceblue !important;
}

.banner_title{
    top : 30%;
    position: absolute;;
    font-family: '微軟正黑體, "Microsoft JhengHei", Arial, Helvetica;';
    width:100%;
    text-align: center;
}
.banner{
    height:400px;
}

.banner .title {
    font-size:3em;
    opacity: 0.8;
    text-shadow: 0px 0px 6px rgba(0,0,0,0.5);
    color:white;

}

</style>

