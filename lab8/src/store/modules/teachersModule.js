export const teachersModule = {
    state: () => ({
        teachers: [
            {
                id:124,
                name: 'a',
                surname: 'a',
                email: 'a@a.com',
                phone: 'a'
            }
        ]
    }),

    getters: {
        getTeacherByID: state => id => {
            return state.teachers.find(teacher => teacher.id===id)
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

        editTeacherByID(state, teacherForEdit) {
            let teacher = state.teachers.find(teacher => teacher.id===teacherForEdit.id)
            teacher.name = teacherForEdit.name
            teacher.surname = teacherForEdit.surname
            teacher.email = teacherForEdit.email
            teacher.phone = teacherForEdit.phone

        }
    },
    actions: {
        addTeacher({ commit }, teacher) {
            commit('addTeacher', teacher);
        },

        deleteCheckedTeachers({ commit }, checkedIDs) {
            commit('deleteCheckedTeachers', checkedIDs)
        },

        editTeacherByID({commit}, teacherForEdit) {
            commit('editTeacherByID', teacherForEdit)
        }
    },
    namespaced: true
}