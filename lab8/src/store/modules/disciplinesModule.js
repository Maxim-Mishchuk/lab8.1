import axios from "axios";

export const disciplinesModule = {
    state: () => ({
        disciplines: []
    }),
    getters: {
        DISCIPLINE_BY_ID: state => id => {
            return state.disciplines.find(discipline => discipline._id === id)
        },

        DISCIPLINES: state => {
            return state.disciplines
        }
    },
    mutations: {
        SET_DISCIPLINES: (state, disciplines) => {
            state.disciplines = disciplines;
        },

        ADD_DISCIPLINE: (state, discipline) => {
            state.disciplines.push(discipline);
        },

        PUT_DISCIPLINE(state,  disciplineForEdit) {
            let discipline = state.disciplines.find(discipline => discipline._id === disciplineForEdit._id)
            discipline.name = disciplineForEdit.name
        },

        DELETE_DISCIPLINE: (state, id) => {
            state.disciplines = state.disciplines.filter(discipline => discipline._id !== id)
        }
    },
    actions: {
        GET_DISCIPLINES: async ({ commit }) => {
            let { data } = await axios.get('http://localhost:5000/disciplines/')
            commit('SET_DISCIPLINES', data);
        },

        SAVE_DISCIPLINE: async ({ commit }, discipline) => {
            let {data} = await axios.post('http://localhost:5000/disciplines/', discipline)
            commit('ADD_DISCIPLINE', discipline);
        },

        UPDATE_DISCIPLINE: async ({ commit }, discipline) => {
            let {data} = await axios.put('http://localhost:5000/disciplines/', discipline)
            commit('PUT_DISCIPLINE', discipline);
        },

        REMOVE_DISCIPLINE: async ({ commit }, id) => {
            let {data} = await axios.delete("http://localhost:5000/disciplines/" + id)
            commit('DELETE_DISCIPLINE', id);
        },

        REMOVE_DISCIPLINES: async ({ commit, dispatch }, ids) => {
            ids.forEach( id => dispatch('REMOVE_DISCIPLINE', id) )
        }
    },
    namespaced: true
}