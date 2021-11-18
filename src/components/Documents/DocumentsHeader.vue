<template>
  <div class="documents-header">
    <div class="documents-header-title">
      <span>Документы</span>
    </div>
    <div class="document-header-actions">
      <button class="bookmark-action">
        <i class="fas fa-bookmark"></i>
      </button>
      <button>
        <i class="fas fa-plus"></i>
        <span>Новый тип</span>
      </button>
      <button>
        <i class="fas fa-plus"></i>
        <span>Новый документ</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DocumentsHeader"
}
</script>

<style scoped>
.documents-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.documents-header-title {
  font-size: 1.5rem;
  font-weight: 500;
}
.document-header-actions button {
  display: inline-grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1rem auto;
  height: 2rem;
  min-width: 2rem;
  padding: .4rem;
  font-size: 13px;
  font-weight: 600;
  background: transparent;
  border: 1px solid #e2e2e2;
  border-radius: 999px;
  margin-left: .7rem;
  cursor: pointer;
}
.document-header-actions span {
  margin: 0 .5rem;
}
.document-header-actions i {
  font-size: 1rem;
  color: var(--active-color);
}
.document-header-actions button:hover {
  transition: background-color ease-in;
  transition-duration: 150ms;
  background-color: rgba(0,0,0, 5%);
}
.bookmark-action i {
  font-weight: 100;
  color: var(--secondary-color);
}
</style>
