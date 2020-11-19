<template>
  <div>
    <transition-group tag="div" name="fade" mode="out-in">
      <div v-show="!loading" key="1">
        <div class="container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeQn1gtktChacPODNh4F4D3QsxiNMF9EAq13GNPK1EhcHJ2cA/viewform?embedded=true"
            :width="formWidth"
            height="1800"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
          </iframe>
        </div>
        <Footer />
      </div>
      <div v-if="loading" key="3">
        <Logo />
      </div>
    </transition-group>
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  components: { Footer },
  data: () => ({
    loading: true,
    formWidth: '680px',
  }),

  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
    if (screen.width < 768) {
      this.formWidth = '420px'
    }
  },
}
</script>

<style lang="css" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 180px;
}
</style>
