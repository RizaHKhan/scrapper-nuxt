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
          <input
            id="login"
            v-model="user.logType"
            type="radio"
            name="log"
            value="login"
            checked
          />
          <label for="log">Register</label>
          <input
            id="register"
            v-model="user.logType"
            type="radio"
            name="log"
            value="register"
          />
          <label for="email">Email</label>
          <input v-model="user.email" name="email" type="email" />
          <label for="password">Password</label>
          <input v-model="user.password" name="password" type="password" />
          <input
            type="submit"
            value="Submit"
            class="button--danger"
            @click="log(user)"
          />
          <a href="#">Forgot Password?</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      user: {
        logType: [],
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
