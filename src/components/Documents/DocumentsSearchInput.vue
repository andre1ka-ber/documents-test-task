<template>
  <form
      class="document-input-form"
      @submit.prevent
      @focusin="addFocusedClass"
      @focusout="removeFocusedClass"
      ref="form"
  >
    <div class="document-input">
      <i class="fas fa-search"></i>
      <input type="text" v-model="inputValue" placeholder="Поиск...">
      <button
          type="button"
          @click="resetInput"
          :class="{'hide-reset-button': hideResetButton}"
      >
        <i class="fas fa-times"></i>
      </button>
    </div>
  </form>
</template>

<script>
import { computed, ref } from "vue";
import useSearch from "../../composable/useSearch";

export default {
  name: "DocumentInput",
  setup() {
    const form = ref("")

    const addFocusedClass = () => {
      form.value.classList.add("focused")
    }
    const removeFocusedClass = () => {
      form.value.classList.remove("focused")
    }

    const { inputValue, resetInput } = useSearch()

    const hideResetButton = computed(() => {
      return inputValue.value.length === 0;
    })

    return {
      inputValue,
      resetInput,
      hideResetButton,
      form,
      addFocusedClass,
      removeFocusedClass
    }
  }
}
</script>

<style scoped>
.document-input-form {
  margin-top: 1rem;
}
.document-input {
  width: fit-content;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--list-item-border);
  transition: all;
  transition-duration: 150ms;
  font-size: 1rem;
  color: var(--secondary-color)
}
.document-input-form.focused .document-input{
  border-bottom-color: var(--active-color);
}
.document-input input {
  width: 30vw;
  padding: .7rem 0;
  border: none;
  margin: 0 0.5rem;
  font-size: 1rem;
  font-weight: 500;
}
.document-input input:focus {
  outline: none;
}
.document-input button {
  border: none;
  background: none;
  color: var(--warning-color);
  cursor: pointer;
}
.hide-reset-button {
  transition: visibility ease-in-out;
  transition-duration: 300ms;
  visibility: hidden;
}
</style>
