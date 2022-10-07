<template>

<div>
   
     <footer>
        <div class="footer_longyi">
            <div class="container">
                <img class="logo" src="./../assets/logo-02.png">
                <div>
                    <div class="footer-text">
                    <p>瀧儀生醫科股份有限公司© 2020 ALL RIGHTS RESERVED</p>
                    <p>82151高雄市路竹區北嶺里路科五路92號4樓B室</p>
                    <p>營業時間 : 週一至週五8:00至17:00</p>
                    <p style="width: 550px;">Tel：07-695-5080｜Fax:07-695-5082 | Email:lysbio7258@gmail.com</p>
                    
                    </div>
                  <div class="footer-icon">
                        <font-awesome-icon class="icon" :icon="['fab', 'facebook']" size="2x" />
                        <font-awesome-icon class="icon" :icon="['fab', 'instagram']" size="2x"/>
                        <font-awesome-icon class="icon" :icon="['fab', 'youtube']" size="2x" style = "color:red;"/>
                  </div>
                </div>
            </div>
        </div>
    </footer>

</div>

</template>
<script>
    export default 
	{}
</script>

<style>

.footer_longyi {
   
   left: 0;
   bottom: 0;
   width: 100%;
   height: 200px;
   background:linear-gradient(white,rgb(3, 91, 162));
   color: white;
   padding-left:300px;
}

.footer_longyi .logo {
    margin-top : 40px;
    float:left;

}

.footer_longyi .footer-text{
  padding-top:40px;
  width:50%;
  margin-left:50px;
  margin-right:0px;
  float: left;
}

.footer_longyi .footer-icon{
  padding-top:30px;
  width:15%;
  margin-right:0px;
}

.footer-icon .icon{
      margin-right:5px;
}

.footer-text p{
  margin-bottom:0.5em;
  font-size:smaller;
}
</style>