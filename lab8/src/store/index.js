import {createStore} from "vuex";

export default createStore({
    state: {
        faculties: [],
        departments: [],
        groups: [],
        students: [],

        teachers: [],
        disciplines: [],

        schedules: []
    },
    mutations: {
        addFaculty(state, faculty) {
            faculty.id = state.faculties.length;
            state.faculties.push(faculty);
        },

        addDepartment(state, department) {
            department.id = state.departments.length;
            state.departments.push(department);
        },

        addGroup(state, group) {
            group.id = state.groups.length;
            state.groups.push(group);
        },

        addStudent(state, student) {
              student.id = state.students.length;
              state.students.push(student);
        },

        addTeacher(state, teacher) {
            teacher.id = state.teachers.length;
            state.teachers.push(teacher);
        },

        addDiscipline(state, discipline) {
            discipline.id = state.disciplines.length;
            state.disciplines.push(discipline);
        },

        addSchedule(state, schedule) {
            schedule.id = state.schedules.length;
            state.schedules.push(schedule);
        }
    }
})