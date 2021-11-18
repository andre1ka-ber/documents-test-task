<template>
  <div>
    <div class="documents-category" :class="{ 'expanded': isExpanded }">
      <button
          class="expand-category-button"
          @click="toggleCategory"
      >
        <i class="fas fa-angle-down"></i>
      </button>
      <div class="title">
        <span>{{ title }}</span>
      </div>
      <div class="description">
        {{ description }}
      </div>
      <DocumentsItemActions />
    </div>
    <transition name="fade">
      <div class="documents-category-children" v-show="isExpanded">
          <draggable
              :list="categoryChildren.get()[categoryId]"
              item-key="id"
              group="documents"
              handle=".drag-handler"
              ghost-class="highlight"
              chosen-class="dragging-item"
          >
            <template #item="{element}">
              <div>
                <DocumentsListItem :title="element.title" />
              </div>
            </template>
          </draggable>
          <div v-show="children.length === 0" class="no-items">
            <span>В данной категории нет документов</span>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {computed, ref} from "vue"
import {useStore} from "vuex";
import draggable from "vuedraggable";
import DocumentsItemActions from "./DocumentsItemActions";
import DocumentsListItem from "./DocumentsListItem";

export default {
  name: "DocumentsListCategory",
  components: {DocumentsListItem, DocumentsItemActions, draggable},
  props: {
    title: {
      type: String,
      default: () => ""
    },
    description: {
      type: String,
      default: () => ""
    },
    children: {
      type: Array,
      default: () => []
    },
    categoryId: {
      type: Number,
      default: () => 0
    }
  },
  setup(props) {
    const store = useStore()

    const categoryChildren = computed(() => ({
      get() {
        return store.state.documents.documents
      },
      set(value) {
        return store.commit("documents/updateCategoryChildrenList", {
          categoryId: props.categoryId,
          data: value
        })
      }
    }))

    const isExpanded = ref(false)

    const toggleCategory = () => {
      isExpanded.value = !isExpanded.value
    }

    if (props.children.length > 0) {
      isExpanded.value = true
    }

    return {
      isExpanded,
      toggleCategory,
      categoryChildren
    }
  }
}
</script>

<style>
.documents-category,
.documents-item {
  display: flex;
  align-items: center;
  border: 1px solid var(--list-item-border);
  border-top: none;
  padding: .8rem;
}
.documents-category:first-child,
.documents-item:first-child {
  border-top: 1px solid var(--list-item-border);
}
.documents-category .title {
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 500;
}
.expand-category-button {
  border: 1px solid var(--list-item-border);
  border-radius: 999px;
  background: transparent;
  height: 1.5rem;
  width: 1.5rem;
  font-size: 17px;
  color: var(--active-color);
  transition: all;
  transition-duration: 300ms;
  cursor: pointer
}
.expanded .expand-category-button {
  transform: rotate(180deg);
}
.documents-category .description {
  color: var(--secondary-color);
  font-size: 13px;
  margin-left: 1rem;
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: fade();
}
.documents-category-children {
  padding-left: 1rem;
  transition: all;
  transition-duration: 300ms;
}
.no-items {
  color: var(--secondary-color);
  font-size: 14px;
  margin: .5rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
