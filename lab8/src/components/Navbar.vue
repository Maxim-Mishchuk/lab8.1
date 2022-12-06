<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-btn" >Main</router-link>

    <div class="select-btn">
      <div @click="showContent">
        Forms
      </div>
      <div class="select-btn-content">
        <router-link to="/facultyForm">FacultyForm</router-link>
        <router-link to="/departmentForm">DepartmentForm</router-link>
        <router-link to="/groupForm">GroupForm</router-link>
        <router-link to="/studentForm">StudentForm</router-link>
        <router-link to="/disciplineForm">DisciplineForm</router-link>
        <router-link to="/teacherForm">TeacherForm</router-link>
        <router-link to="/scheduleForm">ScheduleForm</router-link>
      </div>
    </div>

    <div class="select-btn">
      <div>
        Tables
      </div>
      <div class="select-btn-content">
        <router-link to="/facultyTable">FacultyTable</router-link>
        <router-link to="/departmentTable">DepartmentTable</router-link>
        <router-link to="/groupTable">GroupTable</router-link>
        <router-link to="/studentTable">StudentTable</router-link>
        <router-link to="/disciplineTable">DisciplineTable</router-link>
        <router-link to="/teacherTable">TeacherTable</router-link>
        <router-link to="/scheduleTable">ScheduleTable</router-link>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    showContent(event){
      console.log(event);
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: right;

  background: black;
  color: white;

  box-sizing: border-box;
}

.navbar-btn {
  padding: 25px;
}

.select-btn {
  position: relative;
  padding: 25px;
}

.navbar-btn:hover, .select-btn:hover, .select-btn-content a:hover {
  background: white;
  color: black;
}

.select-btn-content{
  display: none;
  position: absolute;
  right: 0;
  top: calc(50px + 1em);

  background: black;
  color: white;
}

.select-btn-content a {
  display: block;
  padding: 15px;
}



.select-btn:hover .select-btn-content {
  display: block;
}

</style>