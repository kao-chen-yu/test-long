<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">核心技術</span>
        </div>
    </div>
    <Bread></Bread>
    <div class="technologies">
        <div class="tech_menu">
            <b-list-group>
                <b-list-group-item href="#"  id="button_title">核心技術</b-list-group-item>
                <b-list-group-item href="#" @click="change('1')" id="button">客製化低溫常壓電漿應用設計</b-list-group-item>
                <b-list-group-item href="#" @click="change('2')" id="button">醫療器材批發/製造</b-list-group-item>
                <b-list-group-item href="#" @click="change('3')" id="button">寵物精準大健康平台</b-list-group-item>
                </b-list-group>
        

        </div>

        <div class ="tech_content" v-if="show === '0'" style="margin-left: 50px;width: 60%;">
            <div >
                <h1 style="border-bottom: 4px solid rgba(0, 0, 0, 0.125);">核心技術</h1>
                
            </div>
            <a href="#">
            <b-card
                overlay
                img-src="https://picsum.photos/900/250/?image=1"
                img-alt="Card Image"
                text-variant="white"
                class = "tech_icon"
                @click="change('1')"
            >
                <b-card-text>
                客製化低溫常壓電漿應用設計
                </b-card-text>
            </b-card>
            </a>
            <a href="#">
            <b-card
                overlay
                img-src="https://picsum.photos/900/250/?image=2"
                img-alt="Card Image"
                text-variant="white"
                class = "tech_icon1"
                @click="change('2')"
            >
                <b-card-text>
                醫療器材批發/製造
                </b-card-text>
            </b-card>
            </a>
            <a href="#">
            <b-card
                overlay
                img-src="https://picsum.photos/900/250/?image=3"
                img-alt="Card Image"
                text-variant="white"
                class = "tech_icon2"
                @click="change('3')"
            >
                <b-card-text>
                寵物精準大健康平台
                </b-card-text>
            </b-card>
            </a>
        </div>
        <div class ="tech_content1" v-show="show === '1'">

            <h1>客製化低溫常壓電漿應用設計</h1>
            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
            
            <img src="https://picsum.photos/600/300/?image=22">

            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
        </div>

        <div class ="tech_content1" v-show="show === '2'">
            
            <h1>醫療器材批發/製造</h1>
            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
            
            <img src="https://picsum.photos/600/300/?image=19">

            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
            
        </div>

                <div class ="tech_content1" v-show="show === '3'">
            
            <h1>寵物精準大健康平台</h1>
            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
            
            <img src="https://picsum.photos/600/300/?image=21">

            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
            
        </div>
    </div>


</div>
</template>

<script>



import Bread from '@/components/BreadCrumb'
export default {
  name: 'Technology',
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
        show:'0'
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


.technologies{   
    height:1000px;
}

.technologies h1{

    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom:2px solid gray;
}

.technologies h3{

    text-align: center;
    padding-top: 20px;
    
}
.text-center{
    background: rgb(202, 202, 202);
    border:brown;
    width:50%;
    margin:0 350px 0 400px;
}

.tech_menu{
    width:25%;
    float: left;
    height:inherit;
    margin-top:20px;
}

.tech_menu #button_title{

    background-color: unset;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-size:30px;
    font-weight:bold;
    padding-left:30px;

}

.tech_menu #button{
    background-color: unset;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-size:20px;
    font-weight:bold;
    margin-left:10px;
}
.tech_content{
    float: left;
    
    height: 500px;
}

.tech_content h3{
    text-align:left;
    padding-top:0px;

}
.tech_content1{
    width:50%;
    float:left;
    margin:60px;
}
.tech_content1 .text-white{
    width:600px;
    height: 100px;
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
   margin:80px 20px 10px 80px;
}



.tech_icon .card-img{
    opacity:0.5;
    color:black;
    width:200px;
    height: 100px;
    float:left;
}

.tech_icon1 .card-img{
    opacity:0.5;
    color:black;
    width:200px;
    height: 100px;
    float: left;
}

.tech_icon2 .card-img{
    opacity:0.5;
    color:black;
    width:200px;
    height: 100px;
    float: right;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
