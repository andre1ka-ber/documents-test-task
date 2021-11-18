<template>
  <div class="documents-item-actions">
    <button>
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button class="trash">
      <i class="fas fa-trash-alt"></i>
    </button>
    <button class="drag-handler">
      <i class="fas fa-arrows-alt-v drag-handler"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "DocumentsItemActions"
}
</script>

<style scoped>
.documents-item-actions {
  margin-left: auto;
}
.documents-item-actions button {
  border: 0;
  background: none;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  font-size: 16px;
  color: var(--secondary-color)
}
.documents-item-actions .trash {
  color: var(--warning-color)
}
.documents-item-actions button:hover {
  color: var(--active-color)
}
</style>
