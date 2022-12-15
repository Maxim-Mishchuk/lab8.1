export const departmentsModule = {
    state: () => ({
        departments: []
    }),
    getters: {
        getDepartmentByID: state=> id=>{
            return state.departments.find(department => department.id===id)

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

        editDepartmentByID(state, departmentForEdit) {
            let department = state.departments.find(department => department.id===departmentForEdit.id)
            department.name=departmentForEdit.name
            department.faculty_id=departmentForEdit.faculty_id
            department.short_name=departmentForEdit.short_name
        }
    },
    actions: {
        addDepartment({ commit }, department) {
            commit('addDepartment', department);
        },

        deleteCheckedDepartments({ commit }, checkedIDs) {
            commit('deleteCheckedDepartments', checkedIDs)
        },
        editDepartmentByID({commit}, departmentForEdit){
          commit('editDepartmentByID', departmentForEdit)
        }
    },
    namespaced: true
}