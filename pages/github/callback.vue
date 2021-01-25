<template>
  <div ref="loader" class="container loader">Hello</div>
</template>

<script>
// import Loader from '../../components/Loader'
export default {
  transition: 'slide-bottom',
  // components: { Loader },
  data: () => ({
    loading: true,
    redirectURL: '',
  }),
  async mounted() {
    this.openLoading()
    const { code } = this.$route.query
    if (code) {
      try {
        const payload = { code }
        const resp = await this.$axios.post(
          `${process.env.BACKEND_URL}/api/members/get-token`,
          payload
        )
        const actionPayload = {
          isLoggedIn: true,
          user: resp.data,
        }
        this.$store.dispatch('user/Login', actionPayload)
        this.$router.push('/github/profile')
      } catch (error) {
        this.$store.dispatch('user/Logout')
        this.$router.push('/github/problem')
      }
    } else {
      // this.$router.push('/github/join')
    }
  },
  methods: {
    async redirectToGH() {
      await this.$axios.get(`${process.env.BACKEND_URL}/redirect`)
    },
    openLoading() {
      this.$vs.loading({
        target: this.$refs.loader,
        color: 'dark',
        text: 'Fetching Your Github Profile...',
      })
    },
  },
}
</script>

<style></style>
