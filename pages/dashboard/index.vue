<template>
  <div class="content">
    <Scripts />
    <Output />
  </div>
</template>

<script>
import Scripts from '@/components/Scripts'
import Output from '@/components/Output'
export default {
  layout: 'dashboard',
  components: {
    Scripts,
    Output
  }
}
</script>
