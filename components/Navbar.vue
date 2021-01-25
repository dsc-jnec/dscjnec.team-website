<template>
  <div class="center examplex">
    <vs-navbar v-model="active" center-collapsed>
      <template #left>
        <img class="dsc-logo" src="/logo.svg" alt="" />
      </template>
      <template v-if="$store.state.user.isLoggedIn" #right>
        <a target="_blank" :href="$store.state.user.user.html_url">
          <img
            height="40px"
            width="40px"
            :src="$store.state.user.user.avatar_url"
            alt=""
        /></a>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    active: 'guide',
  }),
}
</script>

<style lang="css" scoped>
.dsc-logo {
  height: 80px;
  width: 320px;
}
@media only screen and (max-width: 768px) {
  .dsc-logo {
    height: 65px;
    width: 240px;
  }
}
</style>
