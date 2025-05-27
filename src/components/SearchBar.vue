<template>
  <div class="field has-addons">
    <div class="control is-expanded">
      <input
        class="input"
        type="text"
        placeholder="Search GitHub repositories... e.g. aliabbasi2000/MemeGame :)"
        v-model="searchQuery"
        @keyup.enter="search"
      />
    </div>
    <div class="control">
      <button class="button is-primary" @click="search">
        Search
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const searchQuery = ref('')
    const store = useStore()

    const search = () => {
      if (searchQuery.value.trim() !== '') {
        store.commit('setQuery', searchQuery.value)
        store.dispatch('searchRepositories')
      }
    }

    return { searchQuery, search }
  }
}
</script>
