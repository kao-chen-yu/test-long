<template>

<div>
    <b-breadcrumb :items="items"></b-breadcrumb>
</div>
</template>

<script>  

export default {
  components: {
    },
  data:{ 
        items: [],
         
  },
 created (){
     
     this.getItems();
 },
  methods: { 
	
    getItems(){

        console.log(this.$route.meta);
        this.items = [
        {
            text: '首頁',
            to: { name: 'Home' }
        }
        ]

        this.items.push(this.$route.meta);

        console.log(this.items);
    },
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

<style>
.breadcrumb{
    font-size:1.5rem;
    background-color: inherit  !important;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
