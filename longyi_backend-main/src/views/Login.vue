<template>
  <div >
    <div class = "login_form">

      <b-form-group id="input-group-2" label="帳號:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.username"
          placeholder="請輸入帳號"
          required
        ></b-form-input>
      </b-form-group>

      <label for="text-password">密碼 : </label>
      <b-form-input 
          type="password" 
          id="text-password" 
          v-model="form.password"
          aria-describedby="password-help-block"
          placeholder="請輸入密碼"
          required></b-form-input>

      <div class = "button" style="margin-top: 30px;">
          <b-button type="submit" variant="primary" size="lg" @click="handleLogin">送出</b-button>
          
      </div>
    </div>
  </div>


</template>
<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return{
      form: {
          email: '',
          username: '',
          password:''
      }
    }
    
  },
  methods: {
       handleLogin() {
      const token = 'asdsadsafASFadfsaf'
      let username = this.form.username
      let password = this.form.password
      if (username !== '' && password !== '') {
        this.form.token = token
      } else {
        alert('帳號密碼不能為空')
      }
      Cookies.set('login', JSON.stringify(this.form), { expires: 1 })
      console.log(this.form)
      
      if (Cookies.get('login') && this.form.token) {
        alert('------get ------');
        this.$router.push({name: 'Dashboard'})
      }
    },

    removeCookie() {
      Cookies.remove('login')
    }
  }
}
</script>

<style scoped>

.login_form{
  width:50%;
  margin : 200px 250px 100px 400px;
}
</style>