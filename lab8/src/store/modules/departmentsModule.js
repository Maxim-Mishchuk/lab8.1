export const departmentsModule = {
    state: () => ({
        departments: []
    }),
    getters: {
      getDepartmentByID(state, id) {

      }
    },
    mutations: {
        addDepartment(state, department) {
            let id;
            if (state.departments.length === 0) {
                id = 0;
            } else if (state.departments.length > 0) {
                id = state.departments[state.departments.length-1].id + 1;
            }
            department.id = id;
            state.departments.push(department);
        },

        deleteCheckedDepartments(state, checkedIDs) {
            checkedIDs = checkedIDs.map(id => parseInt(id));
            state.departments = state.departments
                .filter(department => !checkedIDs.includes(department.id));
        },

        editDepartmentByID(state, department, id) {

        }
    },
    actions: {
        addDepartment({ commit }, department) {
            commit('addDepartment', department);
        },

        deleteCheckedDepartments({ commit }, checkedIDs) {
            commit('deleteCheckedDepartments', checkedIDs)
        }
    },
    namespaced: true
}