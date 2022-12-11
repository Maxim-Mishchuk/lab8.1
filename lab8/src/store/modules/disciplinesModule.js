export const disciplinesModule = {
    state: () => ({
        disciplines: []
    }),
    getters: {
        getDisciplineByID(state, id) {

        }
    },
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

        deleteCheckedDisciplines(state, checkedIDs) {
            checkedIDs = checkedIDs.map(id => parseInt(id));
            state.disciplines = state.disciplines
                .filter(discipline => !checkedIDs.includes(discipline.id));
        },

        editDisciplineByID(state, discipline, id) {

        }
    },
    actions: {
        addDiscipline({ commit }, discipline) {
            commit('addDiscipline', discipline);
        },

        deleteCheckedDisciplines({ commit }, checkedIDs) {
            commit('deleteCheckedDisciplines', checkedIDs)
        }
    },
    namespaced: true
}