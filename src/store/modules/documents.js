import { categories, documents } from "../../constants/testingData";

const state = () => ({
    categories,
    documents,
    searchResult: [],
    searchStarted: false
})

const getters = {}

const actions = {
    searchDocuments({ commit, state }, value) {
        commit("startSearch")

        if (!value) {
            commit("setSearchResult", [])
            commit("finishSearch")
            return
        }

        let searchResult = [];

        Object.entries(state.documents).forEach(([categoryId, documents]) => {
            const trimmedValue = value.toLowerCase()
            state.categories.forEach((category) => {
                if (+category.id === +categoryId && (
                    category.title.toLowerCase().includes(trimmedValue) ||
                    category.description.toLowerCase().includes(trimmedValue))
                ) {
                    searchResult = [...searchResult, ...documents]
                }
            })
            documents.forEach((document) => {
                if (document.title.toLowerCase().includes(trimmedValue) ||
                    document.description.toLowerCase().includes(trimmedValue)
                ) {
                    searchResult = [...searchResult, document]
                }
            })
        })

        commit("setSearchResult", searchResult)
    },
    finishSearch({ commit }) {
        commit("setSearchResult", [])
        commit("finishSearch")
    }
}

const mutations = {
    updateDocumentsList(state, value) {
        state.documents[0] = value
    },
    updateCategoryList(state, value) {
        state.categories = value
    },
    updateCategoryChildrenList(state, { categoryId, data }) {
        state.documents[categoryId] = data
    },
    setSearchResult(state, result) {
        console.log(result)
        state.searchResult = result
    },
    startSearch(state) {
        state.searchStarted = true
    },
    finishSearch(state) {
        state.searchStarted = false
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}
