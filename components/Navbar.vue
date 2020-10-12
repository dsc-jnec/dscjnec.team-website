<template>
  <div class="center examplex">
    <vs-navbar v-model="active" center-collapsed>
      <template #left>
        <img height="80px" width="320px" src="logo.svg" alt="" />
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

<style lang="scss" scoped></style>
