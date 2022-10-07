<template>

<div>
   
   <b-navbar fixed = "top" toggleable="lg" type="light" variant="light" >
    <a href="#" @click="goHome">
      <img src="./../assets/logo-02.png" width="200px" height="100px">
     </a>
    <div class = "all-navbar">
        <b-navbar-brand href="#" @click="goNews" class = "navb" >最新消息  </b-navbar-brand>
        <b-navbar-brand href="#" @click="goAboutLongyi" class = "navb">關於瀧儀</b-navbar-brand>
        <b-navbar-brand href="#" @click="goTech" class = "navb">核心技術</b-navbar-brand>
        <b-navbar-brand href="#"  class = "navb">產品一覽 </b-navbar-brand>
        <b-navbar-brand href="#" @click="goInvest" class = "navb">投資人專區</b-navbar-brand>
        <b-navbar-brand href="#" @click="goContact" class = "navb">聯絡我們</b-navbar-brand>

    </div>
  </b-navbar>
</div>

</template>
<script>
    export default 
	{ 
	
	data() {return {}}, 
  
  methods: { 
	
		goNews(){
      this.$router.push({ path : '/longyi_news'})
    },
    goContact(){
      this.$router.push({ path : '/contact_us'})
    },
    goTech(){
      this.$router.push({ path : '/technology'})
    },
    goHome(){
      this.$router.push({ path : '/'})
    },
    goProducts(){
      this.$router.push({ path : '/products'})
    },
    goAboutLongyi(){
      this.$router.push({ path : '/about_longyi'})
    },
    goInvest(){
      this.$router.push({ path : '/invest'})
    }
	
	
	} 
	}
</script>

<style scope>

.all-navbar .navb{
  position: relative;
  left: 0px;
  color:#063456;
  font-weight: bold;
  text-align:center;
}

.navbar-light .navbar-brand{
  color:#063456 !important;
  font-size:15px;
  margin-left:20px;
}

.all-navbar{
    position: relative;
    font-family:'微軟正黑體, "Microsoft JhengHei", Arial, Helvetica;';
    left: 50px;
    margin-left:30%;
    color:#063456;
}

.sticky-top{
    position: relative;
    left: 0px;
    font-size :medium;
    text-align:center;
    height:100px;
}

.bg-light {
   height : 100px;
}

</style>