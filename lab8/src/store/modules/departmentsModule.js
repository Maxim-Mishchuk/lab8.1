import axios from "axios";

export const departmentsModule = {
    state: () => ({
        departments: []
    }),
    getters: {
        DEPARTMENT_BY_ID: state => id => {
            return state.departments.find(department => department._id===id)
        },

        DEPARTMENTS: state => {
            return state.departments
        }
    },
    mutations: {
        SET_DEPARTMENTS: (state, departments) => {
            state.departments = departments;
        },

        ADD_DEPARTMENT: (state, department) => {
            state.departments.push(department);
        },

        PUT_DEPARTMENT: (state, newDepartment) => {
            let departmentForEdit = state.departments.find(department => department._id === newDepartment._id);
            departmentForEdit.name = newDepartment.name;
            departmentForEdit.short_name = newDepartment.short_name;
            departmentForEdit.faculty_id = newDepartment.faculty_id;
        },

        DELETE_DEPARTMENT: (state, id) => {
            state.departments = state.departments.filter(department => department._id !== id)
        }
    },
    actions: {
        GET_DEPARTMENTS: async ({ commit }) => {
            let { data } = await axios.get('http://localhost:5000/departments/')
            commit('SET_DEPARTMENTS', data);
        },

        SAVE_DEPARTMENTS: async ({ commit }, department) => {
            let {data} = await axios.post('http://localhost:5000/departments/', department)
            commit('ADD_DEPARTMENT', department);
        },

        UPDATE_DEPARTMENT: async ({ commit }, department) => {
            let {data} = await axios.put('http://localhost:5000/departments/', department)
            commit('PUT_DEPARTMENT', department);
        },

        REMOVE_DEPARTMENT: async ({ commit }, id) => {
            let {data} = await axios.delete("http://localhost:5000/departments/" + id)
            commit('DELETE_DEPARTMENT', id);
        },

        REMOVE_DEPARTMENTS: async ({ commit, dispatch }, ids) => {
            ids.forEach( id => dispatch('REMOVE_DEPARTMENT', id) )
        }
    },
    namespaced: true
}