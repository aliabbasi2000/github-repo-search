<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="notification is-danger">{{ error }}</div>
    <div v-else>
      <div v-if="results.length === 0">No results found.</div>
      <div v-for="repo in results" :key="repo.id" class="box">
        <p><strong>{{ repo.name }}</strong> by {{ repo.owner.login }}</p>
        <p>{{ repo.description }}</p>
        <a :href="repo.html_url" target="_blank">View on GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    return {
      results: computed(() => store.state.results),
      loading: computed(() => store.state.loading),
      error: computed(() => store.state.error),
    }
  }
}
</script>
