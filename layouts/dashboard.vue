<template>
  <div class="dashboard">
    <Header />
    <Sidebar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

export default {
  middleware: 'auth',
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>
