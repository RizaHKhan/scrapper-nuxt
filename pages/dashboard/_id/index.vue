<template>
  <div class="content">
    <Scripts />
    <Output />
    <Meta />
  </div>
</template>

<script>
import Scripts from '@/components/Scripts'
import Output from '@/components/Output'
import Meta from '@/components/Meta'
export default {
  layout: 'dashboard',
  components: {
    Scripts,
    Output,
    Meta
  }
}
</script>
