import axios from "axios";

export const teachersModule = {
    state: () => ({
        teachers: []
    }),

    getters: {
        TEACHER_BY_ID: state => id => {
            return state.teachers.find(teacher => teacher._id===id);
        },

        TEACHERS: state => {
            return state.teachers;
        }
    },

    mutations: {
        SET_TEACHERS: (state, teachers) => {
            state.teachers = teachers
        },

        ADD_TEACHER: (state, teacher) => {
            state.teachers.push(teacher);
        },

        PUT_TEACHER: (state, teacherForEdit) => {
            let teacher = state.teachers.find(teacher => teacher._id===teacherForEdit._id)
            teacher.name = teacherForEdit.name
            teacher.surname = teacherForEdit.surname
            teacher.email = teacherForEdit.email
            teacher.phone = teacherForEdit.phone
        },

        DELETE_TEACHER: (state, id) => {
            state.teachers = state.teachers.filter(teacher => teacher._id !== id);
        }
    },
    actions: {
        GET_TEACHERS: async ({ commit }) => {
            let { data } = await axios.get('http://localhost:5000/teachers/')
            commit('SET_TEACHERS', data);
        },

        SAVE_TEACHER: async ({ commit }, teacher) => {
            let {data} = await axios.post('http://localhost:5000/teachers/', teacher)
            commit('ADD_TEACHER', teacher);
        },

        UPDATE_TEACHER: async ({ commit }, teacher) => {
            let {data} = await axios.put('http://localhost:5000/teachers/', teacher)
            commit('PUT_TEACHER', teacher);
        },

        REMOVE_TEACHER: async ({ commit }, id) => {
            let {data} = await axios.delete("http://localhost:5000/teachers/" + id)
            commit('DELETE_TEACHER', id);
        },

        REMOVE_TEACHERS: async ({ commit, dispatch }, ids) => {
            ids.forEach( id => dispatch('REMOVE_TEACHER', id) )
        }
    },
    namespaced: true
}