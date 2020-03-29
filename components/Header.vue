<template>
  <div class="header">
    <a href="/dashboard" class="header__company">
      <h1 class="company">Scrapper<span>Pro</span></h1>
    </a>
    <ul class="header__nav">
      <li>
        <nuxt-link class="button" :to="'/dashboard/' + user._id">
          <font-awesome-icon :icon="['fa', 'columns']" />
          Dashboard
        </nuxt-link>
      </li>
      <!-- <li>
        <nuxt-link class="button" :to="'/tickets/' + user._id">
          <font-awesome-icon :icon="['fa', 'ticket-alt']" />
          Ticket
        </nuxt-link>
      </li> -->
      <li>
        <nuxt-link @click="logout" class="button" to="/">
          <font-awesome-icon :icon="['fas', 'plug']" />
          Logout
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'user/user'
    })
  },
  methods: {
    ...mapActions({
      logout: 'user/logout'
    })
  }
}
</script>
