import { useStore } from "vuex";
import { debounce } from "lodash";
import { ref, watch } from "vue";

export default  function () {
    const inputValue = ref("")

    const store = useStore()

    const startSearch = debounce(() => {
        store.dispatch("documents/searchDocuments", inputValue.value)
    }, 1000)

    watch(inputValue, () => {
        if (inputValue.value.length > 0) {
            startSearch()
        }
    })

    const resetInput = () => {
        inputValue.value = ""
        store.dispatch("documents/finishSearch")
    }

    return {
        inputValue,
        startSearch,
        resetInput
    }
}
