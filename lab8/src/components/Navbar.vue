<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-logo">Scheduler</router-link>

    <router-link to="/" class="navbar-btn" >Main</router-link>

    <div class="select">
      <div @click="openDropdown(0)" class="navbar-btn">
        Forms
      </div>
      <div :class="{active: isActive[0]}" class="select-content">
        <router-link class="select-content-btn" to="/facultyForm">FacultyForm</router-link>
        <router-link class="select-content-btn" to="/departmentForm">DepartmentForm</router-link>
        <router-link class="select-content-btn" to="/groupForm">GroupForm</router-link>
        <router-link class="select-content-btn" to="/studentForm">StudentForm</router-link>
        <router-link class="select-content-btn" to="/disciplineForm">DisciplineForm</router-link>
        <router-link class="select-content-btn" to="/teacherForm">TeacherForm</router-link>
        <router-link class="select-content-btn" to="/scheduleForm">ScheduleForm</router-link>
      </div>
    </div>

    <div class="select">
      <div @click="openDropdown(1)" class="navbar-btn">
        Tables
      </div>
      <div :class="{active: isActive[1]}" class="select-content">
        <router-link class="select-content-btn" to="/facultyTable">FacultyTable</router-link>
        <router-link class="select-content-btn" to="/departmentTable">DepartmentTable</router-link>
        <router-link class="select-content-btn" to="/groupTable">GroupTable</router-link>
        <router-link class="select-content-btn" to="/studentTable">StudentTable</router-link>
        <router-link class="select-content-btn" to="/disciplineTable">DisciplineTable</router-link>
        <router-link class="select-content-btn" to="/teacherTable">TeacherTable</router-link>
        <router-link class="select-content-btn" to="/scheduleTable">ScheduleTable</router-link>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      isActive: [false, false]
    }
  },

  methods: {
    openDropdown(num) {
      for(let i = 0; i < this.isActive.length; i++) {
        if (i !== num) {
          this.isActive[i] = false;
        }
      }
      this.isActive[num] = !this.isActive[num]
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: right;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  padding: 0 10px;

  background: black;
  color: white;

  font-size: 24px;

  box-sizing: border-box;
}

.navbar-logo {
  padding: 19px;
  font-size: 1.5em;
  margin-right: auto;
}

.navbar-btn {
  position: relative;
  padding: 25px;

  cursor: pointer;
}

.navbar-btn::after{
  content: "";
  position: absolute;

  left: 0;
  bottom: 15px;
  width: 100%;
  height: 2px;

  background: white;
  opacity: 0;

  transform: translateY(-5px);
  transition: 0.25s all ease-out;
}

.navbar-btn:hover::after{
  opacity: 1;
  transform: translateY(0);
}

.select {
  position: relative;
}

.select-content{
  display: none;
  position: absolute;
  right: 0;
  top: calc(50px + 1em);
  border-top: white solid 5px;
  background: black;
}

.select-content-btn {
  position: relative;
  display: block;
  padding: 15px;
}

.select-content-btn::after {
  content: "";
  position: absolute;

  left: 13px;
  bottom: 10px;
  width: calc(100% - 26px);
  height: 2px;

  background: white;

  transform: scaleX(0);
  transform-origin: bottom right;
  transition: 0.25s transform ease-out;
}

.select-content-btn:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.active {
  display: block;
}
</style>