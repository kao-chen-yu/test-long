<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">產品介紹</span>
        </div>
    </div>
    <Bread></Bread>
    <div class="products">
        <div class="prod_menu">
            <b-list-group>
                <b-list-group-item href="#"  id="button_title">產品介紹</b-list-group-item>
                <b-list-group-item href="#" @click="change('1')" id="button">客製化低溫常壓電漿應用設計</b-list-group-item>
                <b-list-group-item href="#" @click="change('2')" id="button">醫療器材批發/製造</b-list-group-item>
                <b-list-group-item href="#" @click="change('3')" id="button">寵物精準大健康平台</b-list-group-item>
                </b-list-group>
        

        </div>

        <div class ="prod_content" v-if="show === '0'" style="margin-top: 70px;margin-left: 50px;width: 60%;">            
            <h1 style="border-bottom: 4px solid rgba(0, 0, 0, 0.125);">產品介紹</h1>
               
            
            
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
        <div class ="prod_content1" v-show="show === '1'" >
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


        <div class ="prod_content1" v-show="show === '2'">
            <h1>醫療器材批發/製造</h1>
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

                <div class ="prod_content1" v-show="show === '3'">
            <h1>寵物精準大健康平台</h1>
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
    </div>


    

</div>
</template>

<script>



import Bread from '@/components/BreadCrumb'
export default {
  name: 'Products',
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



.products{
    
    height:1000px;
}

.products h1{

    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom:2px solid gray;
}

.prod_content1 p{
    margin-left : 0px;
}
.products h3{

    text-align: center;
    padding-top: 20px;
    
}
.text-center{
    background: rgb(202, 202, 202);
    border:brown;
    width:50%;
    margin:0 350px 0 400px;
}

.prod_menu{
    width:25%;
    float: left;
    height:inherit;
    margin-top:90px;
}

.prod_menu #button_title{

    background-color: unset;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-size:30px;
    font-weight:bold;
    padding-left:30px;

}

.prod_menu #button{
    background-color: unset;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-size:20px;
    font-weight:bold;
    margin-left:10px;
}

.prod_content{
    float: left;
    height: 500px;
    
}

.prod_content h3{
    text-align:left;
    padding-top:50px;

}

.prod_content1 .text-white{
    width:600px;
    height: 100px;
    float:left;
    margin:50px 20px 10px 20px;
}

.card-img{
    opacity: 0.3;
}

.prod_content .text-white{
    width:200px;
    height: 100px;
    float:left;
    margin:80px 20px 10px 80px;
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

.prod_content1{
    width:60%;
    float:left;
    margin:60px;
}

.prod_content1 .text-white{
    background-color:inherit;
    border:0;
    color:rgb(44, 44, 44);
}

.prod_content1  .position-relative{
    width:1000px;
    margin-left:50px;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
