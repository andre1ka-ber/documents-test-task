<template>
  <div v-if="isSearchStarted"  class="search-result">
    <div class="documents-list">
      <DocumentsListItem
          v-for="item in searchResult"
          :key="item.title"
          :title="item.title"
          :description="item.description"
      />
    </div>
    <div v-show="searchResult.length === 0" class="not-found">
      Ничего не найдено. Попробуйте изменить параметры поиска
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex"
import { computed } from "vue";
import DocumentsListItem from "./DocumentsListItem";

export default {
  name: "DocumentsSearchList",
  components: {DocumentsListItem},
  setup() {
    const store = useStore()

    const searchResult = computed(() => store.state.documents.searchResult)
    const isSearchStarted = computed(() => store.state.documents.searchStarted)

    return {
      searchResult,
      isSearchStarted
    }
  }
}
</script>

<style scoped>
.search-result {
  margin-top: 2rem;
}
.not-found {
  color: var(--secondary-color)
}
</style>
