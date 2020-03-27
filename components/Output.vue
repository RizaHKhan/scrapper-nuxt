<template>
  <div class="output component">
    <h2 class="title">Output</h2>
    <ul v-if="response">
      <li v-for="(item, index) in response" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters({
      response: 'script/getResponse'
    })
  }
}
</script>
