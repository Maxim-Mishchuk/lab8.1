export const disciplinesModule = {
    state: () => ({
        disciplines: []
    }),
    mutations: {
        addDiscipline(state, discipline) {
            let id;
            if (state.disciplines.length === 0) {
                id = 0;
            } else if (state.disciplines.length > 0) {
                id = state.disciplines[state.disciplines.length-1].id + 1;
            }
            discipline.id = id;
            state.disciplines.push(discipline);
        },
    },
    actions: {

    }
}