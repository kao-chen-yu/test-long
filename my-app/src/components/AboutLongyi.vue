<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">關於瀧儀</span>
        </div>
    </div>
    
    <Bread></Bread>
    <div class="abouts">
                        
        <div class="about_menu">
            <b-list-group>
                <b-list-group-item href="#" @click="change('1')" id="button_title">公司簡介</b-list-group-item>
                <b-list-group-item href="#" @click="change('1')" id="button">公司簡介</b-list-group-item>
                <b-list-group-item href="#" @click="change('2')" id="button">發展沿革</b-list-group-item>
                <b-list-group-item href="#" @click="change('2')" id="button">瀧儀團隊</b-list-group-item>
                </b-list-group>
        

        </div>

        <div class ="about_content1" v-if="show === '1'">
            <div class="about_content">
                <h3>瀧儀公司簡介</h3>
                <span>這是個公司簡介，很神奇的，快來看看</span>
            </div>
        </div>

        <div class ="about_content1" v-if="show === '2'">
            <div class="about_content">
                <h3>瀧儀公司營運團隊</h3>
                <span>這是個公司營運團隊簡介，很神奇的，快來看看</span>
            </div>
        </div>


    </div>


 
</div>
</template>

<script>



import Bread from '@/components/BreadCrumb'
export default {
  name: 'AboutLongyi',
  data(){
    return {
		banner: {
            backgroundImage:"url(" + require("./../assets/banner.jpg") + ")"
        },
        about:{
            backgroundImage:"url(" + require("./../assets/background.jpg") + ")"
        },
        form: {
          email: '',
          name: '',
          message: ''
        },
        show:'1'
	}
  },
  components: {
       
        Bread
  },
  methods:{
     change(change_num){
         
         this.show = change_num;
     }
  }
}
</script>


<style scope>
.banner_title .title{
    font-family: '微軟正黑體, "Microsoft JhengHei", Arial, Helvetica;';
}

.abouts{
    
    height:500px;
}

.about_menu #button_title{

    background-color: unset;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-size:30px;
    font-weight:bold;
    padding-left:30px;

}
.about_menu #button{
    background-color: unset;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-size:20px;
    font-weight:bold;
    margin-left:10px;
}

.abouts h1{

    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
}

.abouts h3{
    padding-bottom:20px;
    border-bottom:2px solid rgba(0, 0, 0, 0.125);
    padding-top: 20px;
    font-weight:bold;
    
}
.text-center{
    background: rgb(202, 202, 202);
    border:brown;
    width:50%;
    margin:0 350px 0 400px;
}

.about_menu{
    width:25%;
    float: left;
    height:inherit;
    margin-top:10px;
}

.tech_content{
    float: left;
    
    height: 500px;
}

.tech_content h3{
    text-align:left;
    padding-top:0px;

}

.about_content1 .text-white{
    width:600px;
    height: 400px;
    float:left;
    margin:50px 20px 10px 20px;
}

.card-img{
    opacity: 0.8;
}

.tech_content .text-white{
    width:200px;
    height: 100px;
    float:left;
    margin:130px 20px 10px 20px;
}



.tech_icon .card-img{
    width:200px;
    height: 100px;
    float:left;
}

.tech_icon1 .card-img{
    width:200px;
    height: 100px;
    float: left;
}

.tech_icon2 .card-img{
    width:200px;
    height: 100px;
    float: right;
} 

.about_content1 .card{
    background:rgba(255,0,0,0);
}

.about_content1 .about_content{
    float: left;
    padding:0px 80px  !important;
    width:70%;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
