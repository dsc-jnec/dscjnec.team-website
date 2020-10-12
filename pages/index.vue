<template>
  <div>
    <transition name="fade" mode="out-in">
      <div key="1" v-if="!loading" class="container">
        <div class="grid-base">
          <template v-for="(link, index) in links">
            <Card
              :key="index"
              :link="link"
              :text="text[index]"
              :description="description[index]"
              :refs="refs[index]"
            />
          </template>
        </div>
      </div>
      <div key="3" v-if="loading">
        <Logo />
      </div>
    </transition>
  </div>
</template>

<script>
import Card from '../components/Card'
import Logo from '../components/Logo'
export default {
  transition: 'slide-bottom',
  components: { Card, Logo },
  data: () => ({
    links: ['join.svg', 'social.svg', 'community.svg', 'youtube.svg'],
    text: [
      'Join Our Team!',
      'Connect to Us!',
      'Be a part of the DSC community!',
      'Watch our sessions!',
    ],
    description: [
      'Join the DSC organizing team and watch yourself grow!',
      'Follow Us on Our Socail Media Handles! We are everywhere!',
      'Be an official chapter member on the DSC platform!',
      'Subscribe our YouTube Channel for past and upcoming content!',
    ],
    refs: [
      'https://forms.gle/LMz7tgBUuuozVPNR8',
      '',
      'https://dsc.community.dev/mgms-jawaharlal-nehru-engineering-college/',
      'https://www.youtube.com/channel/UCVOLADqRPuMjgX8MkDhBNcA',
    ],
    loading: true,
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
.pagebg {
  background: url(/bg.svg);
}
.grid-base {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 45px;
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
</style>
