<template>
  <div class="landing">
    <div class="landing__sale">
      <div class="landing__sale__container">
        <h1 class="company">Scrapper<span>Pro</span></h1>
        <p>Custom built scripts with one-click functionality</p>
      </div>
    </div>
    <div class="landing__log">
      <div class="landing__log__container">
        <form class="landing__log__container__form">
          <label for="log">Login</label>
          <input id="login" type="radio" name="log" value="login" checked v-mode="user.logType"/>
          <label for="log">Register</label>
          <input id="register" type="radio" name="log" value="register" v-mode="user.logType"/>
          <label for="email">Email</label>
          <input name="email" type="email" v-model="user.email"/>
          <label for="password">Password</label>
          <input name="password" type="password" v-model="user.password"/>
          <input type="submit" value="Submit" class="button--danger" @click="log(user)"/>
          <a href="#">Forgot Password?</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      log: 'user/log'
    })
  }
}
</script>
