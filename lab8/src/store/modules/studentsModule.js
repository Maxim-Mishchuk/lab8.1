import axios from "axios";

export const studentsModule = {
    state: () => ({
        students: []
    }),

    getters: {
        STUDENT_BY_ID: state => id=> {
            return state.students.find(student => student._id===id)
        },

        STUDENTS: state => {
            return state.students;
        }
    },

    mutations: {
        SET_STUDENTS: (state, students) => {
          state.students =  students
        },

        ADD_STUDENT: (state, student) => {
            state.students.push(student);
        },

        PUT_STUDENT: (state, studentForEdit) => {
            let student = state.students.find(student => student._id===studentForEdit._id)
            student.name=studentForEdit.name
            student.email=studentForEdit.email
            student.group_id=studentForEdit.group_id
            student.phone=studentForEdit.phone
        },

        DELETE_STUDENT: (state, id) => {
            state.students = state.students.filter(student => student._id !== id);
        }
    },

    actions: {
        GET_STUDENTS: async ({ commit }) => {
            let { data } = await axios.get('http://localhost:5000/students/')
            commit('SET_STUDENTS', data);
        },

        SAVE_STUDENT: async ({ commit }, student) => {
            let {data} = await axios.post('http://localhost:5000/students/', student)
            commit('ADD_STUDENT', student);
        },

        UPDATE_STUDENT: async ({ commit }, student) => {
            let {data} = await axios.put('http://localhost:5000/students/', student)
            commit('PUT_STUDENT', student);
        },

        REMOVE_STUDENT: async ({ commit }, id) => {
            let {data} = await axios.delete("http://localhost:5000/students/" + id)
            commit('DELETE_STUDENT', id);
        },

        REMOVE_STUDENTS: async ({ commit, dispatch }, ids) => {
            ids.forEach( id => dispatch('REMOVE_STUDENT', id) )
        }
    },

    namespaced:true
}