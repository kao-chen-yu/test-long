<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">最新消息</span>
        </div>
    </div>
    
    <div class="new_list">
        <div class = "date_show">
            <span>{{new_show.date}}</span>
        </div>
        <div class = "new_title">
            <h1>{{new_show.title}}</h1>
        </div>
    </div>

    <div  v-html="new_show.text" class="new_content" >
     
    </div>

    <div class="some_news">
        <div>
            <h1>相關連結</h1>
        </div>

        <a href="#">
            經濟部中小企業處2020中小企業商機媒合交流會新聞
        </a>
    </div>
    

</div>
</template>

<script>



import Bread from '@/components/BreadCrumb'
export default {
  name: 'LongyiNew',
  data(){
    return {
		banner: {
            backgroundImage:"url(" + require("./../assets/banner.jpg") + ")"
        },
        new_show:{
            date : '2021-01-04',
            title : '經濟部助中小企業佈局後疫情時代商機 生醫展創新 鏈結國內外商機',
            text : this.getext()
        },
        news: {
            image:require("./../assets/new_header.jpg") 
        }
    }
  },
  components: {
        
        Bread
  },
  methods:{
      goNew(){
          alert('test');
      },
      getext(){
          var text =  "經濟部中小企業處2020中小企業商機媒合交流會，瀧儀生醫科技王執行長向經濟部中小企業處蘇文玲副處長介紹以非接觸方式能夠加速傷口修復效果之生醫用電漿機。(文字扼要說明…)";
           text = text +"</br><img src='/longyi/static/img/new_header.98d2ac8.jpg'></br>";
           text = text +"全球嚴重特殊傳染性肺炎疫情未緩，生技醫療產業的發展成為全球關注議題。經濟部中小企業處於（21）日舉辦2020「中小企業商機媒合交流會」，鎖定生醫主題，邀請15家創新研發型企業，展出醫療器材、檢測平台、應用生技等領域具未來潛力的應用產品，加強異業合作，超前布署全球商機。";
         return text;
      }
  },
  computed:{

  }
}
</script>

<style>

.banner_title .title{
    font-family: '微軟正黑體, "Microsoft JhengHei", Arial, Helvetica;';
}


.new_list{
    border-top: solid 2px #EBEBEB;
    border-block: solid 2px #EBEBEB;
}
.date_show{
    margin: 20px 40px 10px 20px;
    padding: 5px 10px 5px 10px;
    width:160px;
    background: lightblue;
}

.date_show span{
    padding-left: 20px;
    font-size: large;
    color:gray;
}

.new_title{
    margin-left: 20px;
}

.new_content{
    border-block: solid 2px #EBEBEB;
    padding:50px;
    font-size :x-large;
}

.some_news{
    padding: 10px 50px;
    border-block: solid 2px #EBEBEB;
    font-size :x-large;
    color:gray;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
