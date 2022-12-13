export const facultiesModule = {
    state: () => ({
        faculties: [
            {
                id:1,
                name:'a',
                short_name:'a'
            }
        ]
    }),
    getters: {
        getFacultyByID(state, id) {
            return state.faculties.find(faculty => faculty.id===id)
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

        editFacultyByID(state, id) {

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