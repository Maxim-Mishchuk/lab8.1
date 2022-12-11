export const teachersModule = {
    state: () => ({
        teachers: []
    }),

    getters: {
        getTeacherByID(state, id) {

        }
    },

    mutations: {
        addTeacher(state, teacher) {
            let id;
            if (state.teachers.length === 0) {
                id = 0;
            } else if (state.teachers.length > 0) {
                id = state.teachers[state.teachers.length-1].id + 1;
            }
            teacher.id = id;
            state.teachers.push(teacher);
        },

        deleteCheckedTeachers(state, checkedIDs) {
            checkedIDs = checkedIDs.map(id => parseInt(id));
            state.teachers = state.teachers
                .filter(teacher => !checkedIDs.includes(teacher.id));
        },

        editTeacherByID(state, teacher, id) {

        }
    },
    actions: {
        addTeacher({ commit }, teacher) {
            commit('addTeacher', teacher);
        },

        deleteCheckedTeachers({ commit }, checkedIDs) {
            commit('deleteCheckedTeachers', checkedIDs)
        }
    },
    namespaced: true
}