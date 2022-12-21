export const faqModule = {
    state: () => ({
        faq: [
            {
                id:0,
                question: 'who?',
                answer: 'Me'
            },

        ]
    }),

    getters: {
        getFAQByID: state => id => {
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
            state.faq.push(faq);
        },

        deleteCheckedFAQ(state, id) {
            state.faq = state.faq
                .filter(faq => faq.id !== id);
        },

        editFAQByID(state, faqForEdit) {
            let faq = state.faq.find(faq => faq.id===faqForEdit.id)
            faq.question = faqForEdit.question
            faq.answer = faqForEdit.answer
        }
    },

    actions: {
        addFAQ({ commit }, faq) {
            commit('addFAQ', faq);
        },

        deleteCheckedFAQ({ commit }, id) {
            commit('deleteCheckedFAQ', id);
        },

        editFAQByID({commit}, faqForEdit) {
            commit('editFAQByID', faqForEdit)
        }
    },
    namespaced: true
}