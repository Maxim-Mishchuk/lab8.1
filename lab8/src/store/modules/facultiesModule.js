export const facultiesModule = {
    state: () => ({
        faculties: []
    }),
    getters: {
        getFacultyByID(state, id) {

        }
    },

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

        deleteCheckedFaculties(state, checkedIDs) {
            checkedIDs = checkedIDs.map(id => parseInt(id));
            state.faculties = state.faculties
                .filter(faculty => !checkedIDs.includes(faculty.id));
        },

        editFacultyByID(state, faculty, id) {

        }
    },

    actions: {
        addFaculty({ commit }, faculty) {
            commit('addFaculty', faculty);
        },

        deleteCheckedFaculties({ commit }, checkedIDs) {
            commit('deleteCheckedFaculties', checkedIDs);
        }
    },
    namespaced: true
}