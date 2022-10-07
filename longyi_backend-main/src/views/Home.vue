<template>
  <div class="main home">
    <div class="side">
      <div class="logo">後臺編輯系統</div>
      <nav>
        <label>Home</label>
        <ul>
          <li @click="$router.push({name: 'Dashboard'})">Dashboard</li>
          <li @click="$router.push({name: 'Component'})">首頁圖片</li>
          <li @click="$router.push({name: 'DataEvent'})">最新消息編輯</li>
        </ul>
        <label>狀態管理</label>
        <ul>
          <li @click="$router.push({name: 'Vuex'})">Vuex</li>
        </ul>
        <label>多語系處理</label>
        <ul>
          <li @click="$router.push({name: 'VueI18n'})">i18n</li>
        </ul>
        <label>上傳機制</label>
        <ul>
          <li @click="$router.push({name: 'Uploader'})">Uploader</li>
        </ul>
        <label>圖表</label>
        <ul>
          <li @click="$router.push({name: 'Dashboard'})">v-charts</li>
        </ul>
      </nav>
      <div class="footer"></div>
    </div>
    <div class="primary">
      <div class="header">
        
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: "home",

  data() {
    return {
      pathName: ''
    }
  },

  mounted() {
    console.log(this.$route.name)
  },

  computed: {
    getRouterName(){
      return this.$route.name
    }
  },

  methods: {

  }
};
</script>
