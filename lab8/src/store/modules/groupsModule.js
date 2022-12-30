import axios from "axios";

export const groupsModule = {
    state: () => ({
        groups: []
    }),

    getters: {
        GROUP_BY_ID: state=> id=> {
            return state.groups.find(group => group._id===id);
        },

        GROUPS: state => {
            return state.groups;
        }
    },

    mutations: {
        SET_GROUPS: (state, groups) => {
          state.groups = groups;
        },

        ADD_GROUP: (state, group) => {
            state.groups.push(group);
        },

        PUT_GROUP: (state, groupForEdit) => {
            let group = state.groups.find(group => group._id === groupForEdit._id)
            group.name=groupForEdit.name
            group.course=groupForEdit.course
            group.department_id=groupForEdit.department_id
        },

        DELETE_GROUP: (state, id) => {
            state.groups = state.groups.filter(group => group._id !== id)
        }

    },

    actions: {
        GET_GROUPS: async ({ commit }) => {
            let { data } = await axios.get('http://localhost:5000/groups/')
            commit('SET_GROUPS', data);
        },

        SAVE_GROUP: async ({ commit }, group) => {
            let {data} = await axios.post('http://localhost:5000/groups/', group)
            commit('ADD_GROUP', group);
        },

        UPDATE_GROUP: async ({ commit }, group) => {
            let {data} = await axios.put('http://localhost:5000/groups/', group)
            commit('PUT_GROUP', group);
        },

        REMOVE_GROUP: async ({ commit }, id) => {
            let {data} = await axios.delete("http://localhost:5000/groups/" + id)
            commit('DELETE_GROUP', id);
        },

        REMOVE_GROUPS: async ({ commit, dispatch }, ids) => {
            ids.forEach( id => dispatch('REMOVE_GROUP', id) )
        }
    },
    namespaced: true
}