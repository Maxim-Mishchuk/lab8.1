import {createStore} from "vuex";
import {facultiesModule} from "@/store/modules/facultiesModule";
import {departmentsModule} from "@/store/modules/departmentsModule";
import {groupsModule} from "@/store/modules/groupsModule";
import {studentsModule} from "@/store/modules/studentsModule";
import {teachersModule} from "@/store/modules/teachersModule";
import {disciplinesModule} from "@/store/modules/disciplinesModule";
import {schedulesModule} from "@/store/modules/schedulesModule";

export default createStore({
    modules: {
        faculties: facultiesModule,
        departments: departmentsModule,
        groups: groupsModule,
        students: studentsModule,
        teachers: teachersModule,
        disciplines: disciplinesModule,
        schedules: schedulesModule
    },
})