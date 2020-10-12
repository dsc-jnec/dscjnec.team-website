<template>
  <vs-card type="2">
    <template #title>
      <h3></h3>
    </template>
    <template #img>
      <img :src="link" alt="" />
    </template>
    <template #text>
      <h4>{{ description }}</h4>
      <div v-if="refs !== ''">
        <a style="text-decoration: none" :href="refs" target="_blank"
          ><vs-button block>
            <h3>{{ text }}</h3>
          </vs-button></a
        >
      </div>
      <div class="social-grid" v-else>
        <a target="_blank" href="https://www.facebook.com/dscjnec">
          <img height="40px" width="40px" src="facebook.svg" alt=""
        /></a>

        <a target="_blank" href="https://twitter.com/DscJnec">
          <img height="40px" width="40px" src="twitter.svg" alt=""
        /></a>

        <a target="_blank" href="https://www.instagram.com/dscjnec/">
          <img height="40px" width="40px" src="instagram.svg" alt=""
        /></a>

        <a target="_blank" href="https://www.linkedin.com/company/dscjnec">
          <img height="40px" width="40px" src="linkedin.svg" alt=""
        /></a>
      </div>
    </template>
  </vs-card>
</template>

<script>
export default {
  props: {
    link: { type: String, default: '' },
    text: { type: String, default: '' },
    description: { type: String, default: '' },
    refs: { type: String, default: '' },
  },
}
</script>

<style lang="css" scoped>
.social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
