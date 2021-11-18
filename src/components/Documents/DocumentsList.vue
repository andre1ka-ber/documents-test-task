<template>
  <div v-if="!isSearchStarted" class="documents-list">
    <draggable
        :list="categories.get()"
        item-key="id"
        group="categories"
        handle=".drag-handler"
        ghost-class="highlight"
        chosen-class="dragging-item"
    >
      <template #item="{ element }">
        <DocumentsListCategory
            :title="element.title"
            :description="element.description"
            :children="documents.get()[element.id] ?? []"
            :category-id="element.id"
        >
        </DocumentsListCategory>
      </template>
    </draggable>

    <div class="without-category-items">
      <draggable
          v-model="documents.get()[0]"
          item-key="id"
          group="documents"
          handle=".drag-handler"
          animation="150"
          ghost-class="highlight"
          chosen-class="dragging-item"
      >
        <template #item="{ element }">
          <DocumentsListItem :title="element.title" />
        </template>
      </draggable>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex"
import DocumentsListCategory from "./DocumentsListCategory";
import DocumentsListItem from "./DocumentsListItem";
import draggable from "vuedraggable"

export default {
  name: "DocumentsList",
  components: {DocumentsListItem, DocumentsListCategory,draggable},
  setup() {
    const drag = ref(false)
    const store = useStore()

    const categories = computed(() => ({
      get() {
        return store.state.documents.categories
      },
      set(value) {
        return store.commit("documents/updateCategoryList", value)
      }
    }))
    const documents = computed(() => ({
      get() {
        return store.state.documents.documents
      },
      set(value) {
        return store.commit("documents/updateDocumentsList", value)
      }
    }))

    const isSearchStarted = computed(() => store.state.documents.searchStarted)

    return {
      drag,
      categories,
      documents,
      isSearchStarted
    }
  }
}
</script>

<style>
.highlight {
  border-bottom: 3px solid var(--active-color);
}
.dragging-item {
  box-shadow: 5px 5px 20px -2px var(--active-color);
}
</style>

<style scoped>
.documents-list,
.without-category-items{
  margin-top: 1.5rem;
}
</style>
