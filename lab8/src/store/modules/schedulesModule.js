export const schedulesModule = {
    state: () => ({
        schedules: []
    }),
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
        }
    },
    actions: {

    }
}