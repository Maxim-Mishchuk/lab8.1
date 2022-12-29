import axios from "axios";

export const facultiesModule = {
    state: () => ({
        faculties: []
    }),

    getters: {
        FACULTY_BY_ID: state => id => {
            return state.faculties.find(faculty => faculty._id===id)
        },

        FACULTIES: state => {
            return state.faculties
        }
    },

    mutations: {
        SET_FACULTIES: (state, faculties) => {
            state.faculties = faculties;
        },

        ADD_FACULTY: (state, faculty) => {
            state.faculties.push(faculty);
        },

        PUT_FACULTY: (state, newFaculty) => {
            let facultyForEdit = state.faculties.find(faculty => faculty._id === newFaculty._id);
            facultyForEdit.name = newFaculty.name;
            facultyForEdit.short_name = newFaculty.short_name;
        },

        DELETE_FACULTY: (state, id) => {
            state.faculties = state.faculties.filter(faculty => faculty._id !== id)
        }
    },

    actions: {
        GET_FACULTIES: async ({ commit }) => {
            let { data } = await axios.get('http://localhost:5000/faculties/')
            commit('SET_FACULTIES', data);
        },

        SAVE_FACULTY: async ({ commit }, faculty) => {
            let {data} = await axios.post('http://localhost:5000/faculties/', faculty)
            commit('ADD_FACULTY', faculty);
        },

        UPDATE_FACULTY: async ({ commit }, faculty) => {
            let {data} = await axios.put('http://localhost:5000/faculties/', faculty)
            commit('PUT_FACULTY', faculty);
        },

        REMOVE_FACULTY: async ({ commit }, id) => {
            let {data} = await axios.delete("http://localhost:5000/faculties/" + id)
            commit('DELETE_FACULTY', id);
        },

        REMOVE_FACULTIES: async ({ commit, dispatch }, ids) => {
            ids.forEach( id => dispatch('REMOVE_FACULTY', id) )
        }
    },
    namespaced: true
}