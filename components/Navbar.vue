<template>
  <div class="center examplex">
    <vs-navbar v-model="active" center-collapsed>
      <template #left>
        <img class="dsc-logo" src="logo.svg" alt="" />
      </template>
      <template #right>
        <a
          target="_blank"
          href="https://github.com/dsc-jnec/dscjnec.team-website"
        >
          <img height="40px" width="40px" src="github.svg" alt=""
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
