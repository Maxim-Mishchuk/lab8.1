import axios from "axios";

export const schedulesModule = {
    state: () => ({
        schedules: []
    }),

    getters: {
        SCHEDULE_BY_ID: state => id => {
            return state.schedules.find(schedule => schedule._id === id)
        },

        SCHEDULES: state => {
            return state.schedules
        }
    },

    mutations: {
        SET_SCHEDULES: (state, schedules) => {
            state.schedules = schedules
        },

        ADD_SCHEDULE: (state, schedule) => {
            state.schedules.push(schedule);
        },


        PUT_SCHEDULE: (state, scheduleForEdit) => {
            let schedule = state.schedules.find(schedule => schedule._id === scheduleForEdit._id)

            schedule.name = scheduleForEdit.name
            schedule.teacher_id =scheduleForEdit.teacher_id
            schedule.discipline_id = scheduleForEdit.discipline_id
            schedule.group_id = scheduleForEdit.group_id
            schedule.time =scheduleForEdit.time
            schedule.classroom = scheduleForEdit.classroom
        },

        DELETE_SCHEDULE: (state, id) => {
            state.schedules = state.schedules.filter(schedule => schedule._id !== id)
        }
    },
    actions: {
        GET_SCHEDULES: async ({ commit }) => {
            let { data } = await axios.get('http://localhost:5000/schedules/')
            commit('SET_SCHEDULES', data);
        },

        SAVE_SCHEDULE: async ({ commit }, schedule) => {
            let {data} = await axios.post('http://localhost:5000/schedules/', schedule)
            commit('ADD_SCHEDULE', schedule);
        },

        UPDATE_SCHEDULE: async ({ commit }, schedule) => {
            let {data} = await axios.put('http://localhost:5000/schedules/', schedule)
            commit('PUT_SCHEDULE', schedule);
        },

        REMOVE_SCHEDULE: async ({ commit }, id) => {
            let {data} = await axios.delete("http://localhost:5000/schedules/" + id)
            commit('DELETE_SCHEDULE', id);
        },

        REMOVE_SCHEDULES: async ({ commit, dispatch }, ids) => {
            ids.forEach( id => dispatch('REMOVE_SCHEDULE', id) )
        }
    },
    namespaced: true
}