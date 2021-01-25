<template>
  <div :style="styleProp" class="pagebg">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: { Navbar },
  data: () => ({
    styleProp: `background: url(${process.env.CLIENT_BASE_URL}bg.jpeg);`,
  }),
  mounted() {
    const user = JSON.parse(localStorage.getItem('user')) || null
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || null
    if (user && isLoggedIn) {
      const actionPayload = {
        isLoggedIn,
        user,
      }
      this.$store.dispatch('user/Login', actionPayload)
    }
  },
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
a {
  text-decoration: none;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 24px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 55px;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 25px 0;
}

.subtitle {
  font-weight: 300;
  font-size: 1.1rem;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 15px;
  max-width: 600px;
}

.subtitle a {
  font-weight: 500;
  color: inherit;
}
.card {
  background: #1e2023;
  height: 420px;
  margin: 0 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding: 12px 24px;
  color: #fff;
  border-radius: 100px 15px 50px 25px;
}
.links {
  padding-top: 15px;
  margin-bottom: 20px;
}

.content-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
}

.plus {
  font-size: 2.5rem;
  margin: 15px;
  color: #35495e;
}

.h3 {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  margin: 10px;
}
.grid-base {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 45px;
}
.signin-button {
  background: #000;
  width: 210px;
  border-radius: 8px;
  padding: 14px;
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
}
.signin-button-icon {
  width: 24px;
  height: 24px;
  margin: auto;
}
.signin-button-text {
  color: white;
  display: inline-flex;
  align-items: center;
  text-decoration: none !important;
}
@media only screen and (max-width: 768px) {
  .grid-base {
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .container {
    padding-top: 15vh;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
@media only screen and (min-width: 768px) {
  .grid-base {
    padding: 150px 0px;
  }
  .promo-banner {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .promo-banner > .vs-card {
    min-width: 100%;
  }
  .promo-banner > .vs-card > .vs-card__text {
    min-width: 100%;
  }
  .card {
  }
}
</style>
