<template>
  <section class="section">
    <div class="container">
      <h1 class="title">GitHub Repository Search</h1>
      <SearchBar />
      <RepoList />
    </div>
  </section>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import RepoList from './components/RepoList.vue'

export default {
  components: {
    SearchBar,
    RepoList
  }
}
</script>
