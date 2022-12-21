export const schedulesModule = {
    state: () => ({
        schedules: []
    }),

    getters: {
        getScheduleByID: state=> id=> {
            return state.schedules.find(schedule => schedule.id===id)
        }
    },

    mutations: {
        addSchedule(state, schedule) {
            let id;
            if (state.schedules.length === 0) {
                id = 0;
            } else if (state.schedules.length > 0) {
                id = state.schedules[state.schedules.length-1].id + 1;
            }
            schedule.id = id;
            state.schedules.push(schedule);
        },

        deleteCheckedSchedules(state, checkedIDs) {
            checkedIDs = checkedIDs.map(id => parseInt(id));
            state.schedules = state.schedules
                .filter(schedule => !checkedIDs.includes(schedule.id));
        },

        editScheduleByID(state, scheduleForEdit) {
            let schedule = state.schedules.find(schedule => schedule.id===scheduleForEdit.id)

            schedule.name = scheduleForEdit.name
            schedule.teacher_id =scheduleForEdit.teacher_id
            schedule.discipline_id = scheduleForEdit.discipline_id
            schedule.group_id = scheduleForEdit.group_id
            schedule.time =scheduleForEdit.time
            schedule.classroom = scheduleForEdit.classroom

        }
    },
    actions: {
        addSchedule({ commit }, schedule) {
            commit('addSchedule', schedule)
        },

        deleteCheckedSchedules({ commit }, checkedIDs) {
            commit('deleteCheckedSchedules', checkedIDs);
        },

        editScheduleByID({ commit }, scheduleForEdit) {
            commit('editScheduleByID', scheduleForEdit)
        }
    },
    namespaced: true
}