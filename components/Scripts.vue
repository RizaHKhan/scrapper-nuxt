<template>
  <div class="scripts component">
    <h2 class="title">Scripts</h2>
    <ul class="scripts__list">
      <li class="scripts__list__item">
        <p>Checklist</p>
        <button @click="checklist(token)" class="button">Run</button>
      </li>
      <li class="scripts__list__item">
        <p>StackOverflow</p>
        <button @click="stackoverflow(token)" class="button">Run</button>
      </li>
      <li class="scripts__list__item">
        <p>Outbreak</p>
        <button @click="outbreak(token)" class="button">Run</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      token: 'user/token'
    })
  },
  methods: {
    ...mapActions({
      checklist: 'script/checklist',
      outbreak: 'script/outbreak',
      stackoverflow: 'script/stackoverflow'
    })
  }
}
</script>
