import axios from "axios";

export const faqModule = {
    state: () => ({
        faq: []
    }),

    getters: {
        FAQ_BY_ID: state => id => {
            return state.faq.find(faq => faq._id === id);
        },

        FAQs: state => {
            return state.faq
        }
    },

    mutations: {
        SET_FAQS: (state, faqs) => {
            state.faq = faqs
        },

        ADD_FAQ: (state, faq) => {
            state.faq.push(faq);
        },

        PUT_FAQ(state, faqForEdit) {
            let faq = state.faq.find(faq => faq._id===faqForEdit._id)

            faq.question = faqForEdit.question
            faq.answer = faqForEdit.answer
        },

        DELETE_FAQ: (state, id) => {
            state.faq = state.faq
                .filter(faq => faq._id !== id);
        },
    },

    actions: {
        GET_FAQS: async ({ commit }) => {
            let { data } = await axios.get('http://localhost:5000/faq/')
            commit('SET_FAQS', data);
        },

        SAVE_FAQ: async ({ commit }, faq) => {
            let {data} = await axios.post('http://localhost:5000/faq/', faq)
            commit('ADD_FAQ', faq);
        },

        UPDATE_FAQ: async ({ commit }, faq) => {
            let {data} = await axios.put('http://localhost:5000/faq/', faq)
            commit('PUT_FAQ', faq);
        },

        REMOVE_FAQ: async ({ commit }, id) => {
            let {data} = await axios.delete("http://localhost:5000/schedules/" + id)
            commit('DELETE_FAQ', id);
        },

        REMOVE_FAQS: async ({ commit, dispatch }, ids) => {
            ids.forEach( id => dispatch('REMOVE_SCHEDULE', id) )
        }
    },
    namespaced: true
}