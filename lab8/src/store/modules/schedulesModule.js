export const schedulesModule = {
    state: () => ({
        schedules: []
    }),

    getters: {
        getScheduleByID(state, id) {
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

        editScheduleByID(state, id) {

        }
    },
    actions: {
        addSchedule({ commit }, schedule) {
            commit('addSchedule', schedule)
        },

        deleteCheckedSchedules({ commit }, checkedIDs) {
            commit('deleteCheckedSchedules', checkedIDs);
        }
    },
    namespaced: true
}