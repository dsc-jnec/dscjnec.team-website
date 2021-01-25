<template>
  <div class="container">
    <div class="card error-wrapper">
      <img src="/problem.svg" />
      <h2>Looks like something went wrong</h2>
      <div class="flex-bt">
        <nuxt-link class="full-width" to="/">
          <vs-button class="fill" block>
            Home
            <template #animate> Go!</template>
          </vs-button>
        </nuxt-link>
        <nuxt-link class="full-width" to="/github/join">
          <vs-button class="fill" success block>
            Try Again
            <template #animate> Go!</template>
          </vs-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.error-wrapper {
  padding: 2em;
}
.flex-bt {
  display: flex;
  gap: 24px;
  width: 100%;
  height: 50px;
}
.full-width {
  width: 100%;
  height: 100%;
  text-decoration: none;
}
.fill {
  height: 100%;
}
</style>
