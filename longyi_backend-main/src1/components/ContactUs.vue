<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">聯絡我們</span>
        </div>
    </div>
    <Bread></Bread>
    <div class="contacts">

        <b-card bg-variant="light" class="contact_right">
                    <div class="contact_information">

                        <div style="float: left;margin-left: 100px;">
                        <div style="width: 500px; height: 200px;margin-left: 70%;">
                          <p style="text-align: center;">瀧儀生醫科股份有限公司</p>
                          <p class = "information">地址 : 高雄市路竹區北嶺里路科五路92號4樓B室</p>
                          <p class = "information">電話 : 07-695-5080</p>
                          <p class = "information">E-mail : lysbio7258@gmail.com</p>
                        </div>                      
                        <GmapMap                                           
                        :center="{ lat: 22.827961, lng: 120.257980}"
                        :zoom="18"
                        style="width: 500px; height: 450px"
                        >


                        <GmapMarker
                            :key="index"
                            v-for="(m, index) in markers"
                            :position="m.position"
                            :clickable="true"
                            :draggable="true"
                            @click="toggleInfoWindow(m,i)"
                        />
                          <gmap-info-window 
                          :options="infoOptions" 
                          :position="infoWindowPos" 
                          :opened="infoWinOpen" 
                          @closeclick="infoWinOpen=false">
                            
                            <div class = "map_info">
                            <p>{{infoContent}}</p>
                            <p>{{infolocation}}</p>
                            <b-button @click="openMap()">打開地圖</b-button>
                            </div>
                        </gmap-info-window>

                        </GmapMap>
                        </div>
                        </div>

                        <div style = "float: left;width: 40%;margin-left: 60px;height: 600px;margin-top: 200px;">
                          <b-form @submit="onSubmit">    
                            
                            <b-form-group
                                label="姓名 : "
                                label-for="nested-street"
                                label-cols-sm="2"
                                label-size="lg" 
                                :invalid-feedback="invalidFeedback"
                                :state="state"
                            >
                            
                                <b-form-input id="nested-street" v-model="form.name"></b-form-input>
                            </b-form-group>
                           <b-form-group
                                label="連絡電話 : "
                                label-for="nested-street"
                                label-cols-sm="2"
                                label-size="lg" 
                                :invalid-feedback="invalidFeedback1"
                                :state="state1"
                            >
                                <b-form-input id="nested-street" v-model="form.contractNumber"></b-form-input>
                            </b-form-group>
                            <b-form-group
                                label="E-mail: "
                                label-for="nested-city"
                                label-cols-sm="2"
                                label-size="lg" 
                                :invalid-feedback="invalidFeedback2"
                                :state="state2"
                            >
                                <b-form-input id="nested-city" v-model="form.email"></b-form-input>
                            </b-form-group>

                            <b-form-group
                                label="意見:"
                                label-for="nested-state"
                                label-cols-sm="2"
                                label-size="lg" 
                            >
                            <b-form-textarea
                            id="textarea"
                            v-model="form.message"
                            placeholder="Enter something..."
                            rows="3"
                            max-rows="6"
                            ></b-form-textarea>

                            
                            </b-form-group>
                            <b-button type="submit" style="margin-top:20px; margin-left:85%;">確定送出</b-button>
                            </b-form>

                        </div>

        </b-card>


    </div>

</div>
</template>

<script>

import Bread from '@/components/BreadCrumb'
export default {
  name: 'ContactUs',
  data(){
    return {
		banner: {
            backgroundImage:"url(" + require("./../assets/banner.jpg") + ")"
        },
        form: {
          email: '',
          name: '',
          message: '',
          contractNumber : '',
        },

        markers: [
        {
          position: { lat: 22.827961, lng: 120.257980 },
          infoText: '瀧儀生醫科股份有限公司',
          location: '高雄市路竹區北嶺里路科五路92號4樓B室'
        }
      ],
      distance: 0,
          infoContent: '',
          infolocation: '',
          infoWindowPos: null,
          infoWinOpen: false,
          currentMidx: null,
          //optional: offset infowindow so it visually sits nicely on top of our marker
          infoOptions: {
            pixelOffset: {
              width: 0,
              height: -35
            }
          }

      
	}
  },
  components: {
       
        Bread
  },
  computed: {
      state() {
        return this.form.name.length >= 1
      },
      invalidFeedback() {
        if (this.form.name.length > 0) {
          return ''
        }
        return '必填'
      },
            state1() {
        return this.form.contractNumber.length >= 1
      },
      invalidFeedback1() {
        if (this.form.contractNumber.length > 0) {
          return ''
        }
        return '必填'
      },
            state2() {
        return this.form.email.length >= 1
      },
      invalidFeedback2() {
        if (this.form.email.length > 0) {
          return ''
        }
        return '必填'
      }
  },
  methods:{
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      toggleInfoWindow: function(marker, idx) {
            this.infoWindowPos = marker.position;
            this.infoContent = marker.infoText;
            this.infolocation = marker.location;
            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == idx) {
              this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
              this.infoWinOpen = true;
              this.currentMidx = idx;

            }
        },
        openMap(){
            window.open('https://reurl.cc/a5N65Q');
        }
        
  }
}
</script>


<style>
.contacts{
    height:700px;
}
#contact_card{
    width:50%;
    border:brown;
    float: left;
    height:inherit;
    border:brown;
}

.contact{
    font-size: xx-large;
}

.form-row {
    margin-top:20px;
}

.contact_right{
    height:inherit;
    border:brown;
}

.contact_information{
    font-size: 40px;
        
}

.contact_information p{
    padding-top: 10px;
    margin-bottom: 0px;
}

.map_info p{
    text-align: left;
    margin-bottom: 10px;
    padding-top :0px;
    font-size: large;
    
}



.company_info{
  padding-top:50px;
}



.contact_information .information{
  font-size: large;
  color:gray;
  text-align: center;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
