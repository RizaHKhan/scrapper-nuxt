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
        <form
          @submit.prevent='log'
          class="landing__log__container__form">
          <div class="landing__log__container__form--row login">
            <label for="log">Login</label>
            <input
              id="login"
              v-model="logType"
              type="radio"
              name="log"
              value="login"
              checked
            />
          </div>
          <div class="landing__log__container__form--row register">
            <label for="log">Register</label>
            <input
              id="register"
              v-model="logType"
              type="radio"
              name="log"
              value="register"
            />
          </div>
          <div class="landing__log__container__form--row email">
            <label for="email">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </label>
            <input v-model="email" name="email" type="email" placeholder="Email..."/>
          </div>
          <div class="landing__log__container__form--row password">
            <label for="password">
              <font-awesome-icon :icon="['fas', 'unlock']" />
            </label>
            <input v-model="password" name="password" type="password" placeholder="Password..."/>
          </div>
          <input
            type="submit"
            value="Submit"
            class="button--neutral submit-btn"
          />
          <a href="#" class="forgot_password">Forgot Password?</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logType: [],
      email: '',
      password: ''
    }
  },
  methods: {
    async log () {
        const user = {
        email: this.email,
        password: this.password,
        logType: this.logType
      }

      this.$store.dispatch('user/log', user)
    }
  }
}
</script>
