import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/pages/Main.vue";

import DepartmentForm from "@/pages/forms/DepartmentForm.vue";
import DisciplineForm from "@/pages/forms/DisciplineForm.vue";
import FacultyForm from "@/pages/forms/FacultyForm.vue";
import GroupForm from "@/pages/forms/GroupForm.vue";
import ScheduleForm from "@/pages/forms/ScheduleForm.vue";
import StudentForm from "@/pages/forms/StudentForm.vue";
import TeacherForm from "@/pages/forms/TeacherForm.vue";

import DepartmentTable from "@/pages/tables/DepartmentTable.vue";
import DisciplineTable from "@/pages/tables/DisciplineTable.vue";
import FacultyTable from "@/pages/tables/FacultyTable.vue";
import GroupTable from "@/pages/tables/GroupTable.vue";
import ScheduleTable from "@/pages/tables/ScheduleTable.vue";
import StudentTable from "@/pages/tables/StudentTable.vue";
import TeacherTable from "@/pages/tables/TeacherTable.vue";

import EditDepartment from "@/pages/editPage/EditDepartment.vue";
import EditDiscipline from "@/pages/editPage/EditDiscipline.vue";
import EditFaculty from "@/pages/editPage/EditFaculty.vue";
import EditGroup from "@/pages/editPage/EditGroup.vue";
import EditSchedule from "@/pages/editPage/EditSchedule.vue";
import EditStudent from "@/pages/editPage/EditStudent.vue";
import EditTeacher from "@/pages/editPage/EditTeacher.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Main
    },

    {
      path: '/departmentForm',
      component: DepartmentForm
    },
    {
      path: '/disciplineForm',
      component: DisciplineForm
    },
    {
      path: '/facultyForm',
      component: FacultyForm
    },
    {
      path: '/groupForm',
      component: GroupForm
    },
    {
      path: '/scheduleForm',
      component: ScheduleForm
    },
    {
      path: '/studentForm',
      component: StudentForm
    },
    {
      path: '/teacherForm',
      component: TeacherForm
    },
    {
      path: '/departmentTable',
      component: DepartmentTable
    },
    {
      path: '/disciplineTable',
      component: DisciplineTable
    },
    {
      path: '/facultyTable',
      component: FacultyTable
    },
    {
      path: '/groupTable',
      component: GroupTable
    },
    {
      path: '/scheduleTable',
      component: ScheduleTable
    },
    {
      path: '/studentTable',
      component: StudentTable
    },
    {
      path: '/teacherTable',
      component: TeacherTable
    },
    {
      path: '/editDepartment',
      component: EditDepartment
    },
    {
      path: '/editDiscipline',
      component: EditDiscipline
    },
    {
      path: '/editFaculty',
      component: EditFaculty
    },
    {
      path: '/editGroup',
      component: EditGroup
    },
    {
      path: '/editSchedule',
      component: EditSchedule
    },
    {
      path: '/editStudent',
      component: EditStudent
    },
    {
      path: '/editTeacher',
      component: EditTeacher
    },
  ]
})

export default router
