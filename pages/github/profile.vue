<template>
  <div class="container">
    <div class="card">
      <div class="card-grid">
        <img class="profile-image" :src="profile.avatar_url" />
        <div class="profile-details">
          <h4>{{ profile.name }}</h4>
          <a target="_blank" :href="profile.html_url">@{{ profile.login }} </a>
        </div>
        <div class="profile-details">
          <h5>Is this you?</h5>
        </div>
        <div class="profile-details actions">
          <vs-button class="fill" danger block>
            No
            <template #animate> Go Back</template>
          </vs-button>
          <vs-button success class="fill" block>
            Yes
            <template #animate> Add me to DSC JNEC Org!</template>
          </vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    profile: {
      avatar_url: null,
      name: null,
      login: null,
      html_url: null,
    },
  }),
  mounted() {
    const user = JSON.parse(localStorage.getItem('user')) || null
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || null
    if (user && isLoggedIn) {
      this.profile = user
    }
  },
}
</script>

<style lang="css" scoped>
.profile-image {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 0 auto;
}
.card-grid {
  display: grid;
  gap: 22px;
}
.profile-details {
  display: flex;
  gap: 24px;
}
.actions {
  height: 52px;
  gap: 12px !important;
}
</style>
