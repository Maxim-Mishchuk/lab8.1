export const groupsModule = {
    state: () => ({
        groups: []
    }),

    getters: {
        getGroupByID(state, id) {

        }
    },

    mutations: {
        addGroup(state, group) {
            let id;
            if (state.groups.length === 0) {
                id = 0;
            } else if (state.groups.length > 0) {
                id = state.groups[state.groups.length-1].id + 1;
            }
            group.id = id;
            state.groups.push(group);
        },

        deleteCheckedGroups(state, checkedIDs) {
            checkedIDs = checkedIDs.map(id => parseInt(id));
            state.groups = state.groups
                .filter(group => !checkedIDs.includes(group.id));
        },

        editGroupByID(state, group, id) {

        }
    },

    actions: {
        addGroup({ commit }, group) {
            commit('addGroup', group);
        },

        deleteCheckedGroups({ commit }, checkedIDs) {
            commit('deleteCheckedGroups', checkedIDs);
        }
    },
    namespaced: true
}