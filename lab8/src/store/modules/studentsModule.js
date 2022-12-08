export const studentsModule = {
    state: () => ({
        students: []
    }),
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
    },
    actions: {

    }
}