export const departmentsModule = {
    state: () => ({
        departments: []
    }),
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
    },
    actions: {

    }
}