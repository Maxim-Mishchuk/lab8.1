export const studentsModule = {
    state: () => ({
        students: []
    }),

    getters: {
        getStudentByID(state, id) {

        }
    },

    mutations: {
        addStudent(state, student) {
            let id;
            if (state.students.length === 0) {
                id = 0;
            } else if (state.students.length > 0) {
                id = state.students[state.students.length-1].id + 1;
            }
            student.id = id;
            state.students.push(student);
        },

        deleteCheckedStudents(state, checkedIDs) {
            checkedIDs = checkedIDs.map(id => parseInt(id));
            state.students = state.students
                .filter(student => !checkedIDs.includes(student.id));
        },

        editStudentByID(state, student, id) {

        }
    },
    actions: {
        addStudent({ commit }, student) {
            commit('addStudent', student);
        },

        deleteCheckedStudents({ commit }, checkedIDs) {
            commit('deleteCheckedStudents', checkedIDs);
        }
    },
    namespaced:true
}