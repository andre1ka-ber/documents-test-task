<template>
  <div class="documents-item">
    <div class="title">
      <span>{{ title }}</span>
    </div>

    <DocumentsItemActions />
  </div>
</template>

<script>
import DocumentsItemActions from "./DocumentsItemActions";

export default {
  name: "DocumentsListItem",
  props: {
    title: {
      type: String,
      default: () => ""
    }
  },
  components: { DocumentsItemActions }
}
</script>

<style scoped>
.documents-item {
  padding: .4rem .8rem !important;
}
.documents-item .title {
  margin-left: 1rem;
  font-size: 1rem;
}
</style>
