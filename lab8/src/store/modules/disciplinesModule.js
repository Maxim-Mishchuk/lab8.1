export const disciplinesModule = {
    state: () => ({
        disciplines: [
            {
                id:1,
                name: 'a',
            }
        ]
    }),
    getters: {
        getDisciplineByID: state=> id=> {
            return state.disciplines.find(discipline => discipline.id===id)
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

        editDisciplineByID(state,  disciplineForEdit) {
            let discipline = state.disciplines.find(discipline => discipline.id === disciplineForEdit.id)
            discipline.name = disciplineForEdit.name
        }
    },
    actions: {
        addDiscipline({ commit }, discipline) {
            commit('addDiscipline', discipline);
        },

        deleteCheckedDisciplines({ commit }, checkedIDs) {
            commit('deleteCheckedDisciplines', checkedIDs)
        },

        editDisciplineByID({commit},  disciplineForEdit) {
            commit('editDisciplineByID', disciplineForEdit)
        }
    },
    namespaced: true
}