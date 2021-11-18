<template>
  <div class="documents-wrapper">
    <DocumentsHeader />
    <DocumentInput />
    <DocumentsSearchList />
    <DocumentsList />
  </div>
</template>

<script>
import DocumentsHeader from "./Documents/DocumentsHeader";
import DocumentsList from "./Documents/DocumentsList";
import DocumentInput from "./Documents/DocumentsSearchInput";
import DocumentsSearchList from "./Documents/DocumentsSearchList";
export default {
  name: "Documents",
  components: {DocumentsSearchList, DocumentInput, DocumentsList, DocumentsHeader}
}
</script>

<style scoped>
.documents-wrapper {
  padding: 2rem;
}
</style>
