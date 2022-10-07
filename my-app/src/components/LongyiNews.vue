<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">最新消息</span>
        </div>
    </div>

    <Bread></Bread>
    <b-tabs content-class="mt-3" style="margin: 20px;">
        <b-tab  title="產品訊息" active>
            <b-card-group deck>
              <b-card  v-for="(item,index) in 4" :key="index"
                :img-src="news[index].image"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; height:400px;"
                class="mb-5"
                img-height="40%"
                @click="goNew"
            >

            <div style="padding-bottom:10px;">
                {{news[index].date}}
            </div>
            <div style="font-size:19px;">
                {{news[index].title}}               
            </div>
            <a href="#" class="new_link">
                <b-card-text>                    
                {{news[index].content_info}}
                </b-card-text>

            </a>    
            </b-card>
            </b-card-group>
            <b-card-group deck>
              <b-card  v-for="(item,index) in 4" :key="index"
                title="Card Title1"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; height:400px;"
                class="mb-5"
                img-height="40%"
                @click="goNew"
            >
            <a href="#" class="new_link">
                <b-card-text>
                    {{item}}
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

            </a>    
            </b-card>
            </b-card-group>
        </b-tab>
        <b-tab title="近期活動">
            <b-card-group deck>
              <b-card  v-for="(item,index) in 4" :key="index"
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=26"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; height:350px;"
                img-height="60%"
                class="mb-5"
                @click="goNew"
            >

            <a href="#" class="new_link">
                <b-card-text>
                    {{item}}
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                
            </a>
            </b-card>
            </b-card-group>
        </b-tab>
        <b-tab title="典範案例">
                        <b-card-group deck>
              <b-card  v-for="(item,index) in 4" :key="index"
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=27"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; height:350px;"
                img-height="60%"
                class="mb-5"
                @click="goNew"
            >

            <a href="#" class="new_link">
                <b-card-text>
                    {{item}}
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                
            </a>
            </b-card>
            </b-card-group>
        </b-tab>
        <b-tab title="產業新聞">
                        <b-card-group deck>
              <b-card  v-for="(item,index) in 4" :key="index"
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=28"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; height:350px;"
                img-height="60%"
                class="mb-5"
                @click="goNew"
            >

            <a href="#" class="new_link">
                <b-card-text>
                    {{item}}
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

            </a>    
            </b-card>
            </b-card-group>
        </b-tab>
    </b-tabs>


    

</div>
</template>

<script>



import Bread from '@/components/BreadCrumb'
export default {
  name: 'LongyiNews',
  data(){
    return {
		banner: {
            backgroundImage:"url(" + require("./../assets/banner.jpg") + ")"
        },
        news: [
                {
                "image":"https://lh3.googleusercontent.com/M0trHWJPYxqoMeDQa4W-_6UJiusnnGFQw4AlrhRpXxtETWFXn3HutGxSYaCYPmPreAZNK-llbyyMpcGfH7JMtniP7sP5zQtO2cBdI-cveV_gWQn4sGNIitDnpW5HxGYUX9zsJMLgDQ=w1200",
                "title":"經濟部助中小企業佈局後疫情時代商機 生醫展創新 鏈結國內外商機",
                "content_info" : "經濟部助中小企業佈局後疫情時代商機 生醫展創新 鏈結國內外商機.....",
                "date" : '2021/02/01'
                },
                {
                "image":"https://lh3.googleusercontent.com/M0trHWJPYxqoMeDQa4W-_6UJiusnnGFQw4AlrhRpXxtETWFXn3HutGxSYaCYPmPreAZNK-llbyyMpcGfH7JMtniP7sP5zQtO2cBdI-cveV_gWQn4sGNIitDnpW5HxGYUX9zsJMLgDQ=w1200",
                "title":"經濟部助中小企業佈局後疫情時代商機 生醫展創新 鏈結國內外商機2",
                "content_info" : "經濟部助中小企業佈局後疫情時代商機 生醫展創新 鏈結國內外商機.....",
                "date" : '2021/02/02'
                },
                {
                "image":"https://lh3.googleusercontent.com/M0trHWJPYxqoMeDQa4W-_6UJiusnnGFQw4AlrhRpXxtETWFXn3HutGxSYaCYPmPreAZNK-llbyyMpcGfH7JMtniP7sP5zQtO2cBdI-cveV_gWQn4sGNIitDnpW5HxGYUX9zsJMLgDQ=w1200",
                "title":"經濟部助中小企業佈局後疫情時代商機 生醫展創新 鏈結國內外商機3",
                "content_info" : "經濟部助中小企業佈局後疫情時代商機 生醫展創新 鏈結國內外商機.....",
                "date" : '2021/02/03'
                },
                {
                "image":"https://lh3.googleusercontent.com/M0trHWJPYxqoMeDQa4W-_6UJiusnnGFQw4AlrhRpXxtETWFXn3HutGxSYaCYPmPreAZNK-llbyyMpcGfH7JMtniP7sP5zQtO2cBdI-cveV_gWQn4sGNIitDnpW5HxGYUX9zsJMLgDQ=w1200",
                "title":"經濟部助中小企業佈局後疫情時代商機 生醫展創新 鏈結國內外商機4",
                "content_info" : "經濟部助中小企業佈局後疫情時代商機 生醫展創新 鏈結國內外商機.....",
                "date" : '2021/02/04'
                }
                    
            ]
	}
  },
  components: {
        
        Bread
  },
  methods:{
      goNew(){
          //alert('test');
           this.$router.push({ name : 'LongyiNew'})
      }
  },
  created (){
    this.$axios
      .get('http://localhost:8080/news')
      .then(response => {
        console.log(response.data);
        this.news = response.data;
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>

<style scope>

.banner_title .title{
    font-family: '微軟正黑體, "Microsoft JhengHei", Arial, Helvetica;';
}
.container_news{
    margin : 40px;
    height : 900px;
}
.new_case{

    width:calc(100%/4 - 22px);
    margin:10px;
    float: left;
    padding-bottom: 0px;
    background-color:rgba(128, 128, 128, 0.1);
    height: calc(100%/3 - 22px);
}

.container_news .new_picture{
    width:100%;
    height: 60%;
    padding: 10px;
}

.new_case .news_date{
    font-size:15px;
    color:gray;
    list-style: none;
    margin-left : 10px;
    margin-top:10px;
}

.new_case .news_title{
    font-size:1.1em;
    color:blue;
    list-style: none;
    margin-left : 10px;
}

.nav-tabs .nav-link{
    color:gray;
}



.card-deck{
    margin:40px;
}

.new_link{
    color:gray;
}

.nav-tabs .nav-item{
    font-size: 1.3rem;
    margin-bottom:0px;
}

.nav-tabs{
    border-bottom:2px solid gray;
}
.card-body .card-title{
    font-size: 1rem  !important;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
