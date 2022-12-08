export const facultiesModule = {
    state: () => ({
        faculties: []
    }),
    mutations: {
        addFaculty(state, faculty) {
            let id;
            if (state.faculties.length === 0) {
                id = 0;
            } else if (state.faculties.length > 0) {
                id = state.faculties[state.faculties.length-1].id + 1;
            }
            faculty.id = id;
            state.faculties.push(faculty);
        },

        deleteCheckedFaculties(state, checkedFacultiesIDs) {
            checkedFacultiesIDs = checkedFacultiesIDs.map(id => parseInt(id));
            state.faculties = state.faculties
                .filter(faculty => !checkedFacultiesIDs.includes(faculty.id));
        },
    },
    actions: {
        addFaculty({ commit }, faculty) {
            commit('addFaculty', faculty);
        },

        deleteCheckedFaculties({ commit }, checkedFacultiesIDs) {
            commit('deleteCheckedFaculties', checkedFacultiesIDs);
        }
    },
    namespaced: true
}