export const teachersModule = {
    state: () => ({
        teachers: []
    }),
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
    },
    actions: {

    }
}