import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBATLjMwvKkdJLr3uBUisd7r6n7IL2M2jg",
    language : 'zh-tw',
    region: 'TW'
  }
});