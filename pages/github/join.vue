<template>
  <div>
    <transition-group tag="div" name="fade" mode="out-in">
      <div v-show="!loading" key="1">
        <div class="container">
          <div class="card">
            <img src="/github-white.svg" />
            <div>Sign In with Github to join DSC JNEC Organization!</div>
            <a :href="redirectURL">
              <div class="signin-button">
                <img class="signin-button-icon" src="/github-white.svg" />
                <span class="signin-button-text">Sign In with Github</span>
              </div>
            </a>
          </div>
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
import Logo from '../../components/Logo'
import Footer from '../../components/Footer'
export default {
  transition: 'slide-bottom',
  components: { Logo, Footer },
  data: () => ({
    loading: true,
    redirectURL: '',
  }),
  mounted() {
    this.redirectURL = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    setTimeout(() => {
      this.loading = false
    }, 500)
    // this.$store.dispatch('user/Login', { isLoggedIn: true, user: {} })
  },
  methods: {
    async redirectToGH() {
      await this.$axios.get(`${process.env.BACKEND_URL}/redirect`)
    },
  },
}
</script>

<style></style>
