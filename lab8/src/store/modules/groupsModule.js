export const groupsModule = {
    state: () => ({
        groups: []
    }),
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
    },
    actions: {

    }
}