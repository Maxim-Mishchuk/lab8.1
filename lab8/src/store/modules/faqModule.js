export const faqModule = {
    state: () => ({
        faq: []
    }),

    getters: {
        getFAQbyID: state => id => {
            return state.faq.find(faq => faq.id === id);
        }
    },

    mutations: {
        addFAQ(state, faq) {
            let id;
            if (state.faq.length === 0) {
                id = 0;
            } else if (state.faq.length > 0) {
                id = state.faq[state.faq.length-1].id + 1;
            }

            faq.id = id;
            state.groups.push(faq);
        },

        deleteCheckedFAQ(state, checkedIDs) {
            checkedIDs = checkedIDs.map(id => parseInt(id));
            state.faq = state.faq
                .filter(faq => !checkedIDs.includes(faq.id));
        },

        editFAQByID(state, faqForEdit) {
            let faq = state.faq.find(faq => faq.id===faq.id)
            faq.question = faqForEdit.question
            faq.answer = faqForEdit.answer
        }
    },

    actions: {
        addFAQ({ commit }, faq) {
            commit('addFAQ', faq);
        },

        deleteCheckedFAQ({ commit }, checkedIDs) {
            commit('deleteCheckedFAQ', checkedIDs);
        },

        editFAQByID({commit}, faqForEdit) {
            commit('editFAQByID', faqForEdit)
        }
    },
    namespaced: true
}