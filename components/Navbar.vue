<template>
  <div class="center examplex">
    <vs-navbar v-model="active" center-collapsed>
      <template #left>
        <img height="80px" width="320px" src="/logo.svg" alt="" />
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 'guide',
  }),
}
</script>

<style lang="scss" scoped></style>
