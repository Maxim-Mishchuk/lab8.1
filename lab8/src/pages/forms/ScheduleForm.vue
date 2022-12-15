<template>
  <form action="" method="post" @submit.prevent>
    <h2>Add schedule</h2>

    <custom-input
        placeholder="Name"
        type-validation="name"
        v-model="schedule.name"
        v-model:validation-value="validations.name"
    />

    <custom-input
        placeholder="Time"
        type-input="time"
        type-validation="time"
        v-model="schedule.time"
        v-model:validation-value="validations.time"
    />

    <custom-input
        placeholder="Classroom"
        type-validation="name"
        v-model="schedule.classroom"
        v-model:validation-value="validations.classroom"
    />

    <select @click="validateTeacherID" v-model="schedule.teacher_id">
      <option value="">Teacher</option>
      <option
          v-for="teacher in teachers"
          :value="teacher.id"
      >
        {{ teacher.name+" "+teacher.surname }}
      </option>
    </select>
    <message-form
        :type="messages.messageTeacherID.type"
        :message="messages.messageTeacherID.text"
    />

    <select @click="validateDisciplineID" v-model="schedule.discipline_id">
      <option value="">Discipline</option>
      <option
          v-for="discipline in disciplines"
          :value="discipline.id"
      >
        {{ discipline.name }}
      </option>
    </select>
    <message-form
        :type="messages.messageDisciplineID.type"
        :message="messages.messageDisciplineID.text"
    />

    <select @click="validateGroupID" v-model="schedule.group_id">
      <option value="">Group</option>
      <option
          v-for="group in groups"
          :value="group.id"
      >
        {{ group.name }}
      </option>
    </select>
    <message-form
        :type="messages.messageGroupID.type"
        :message="messages.messageGroupID.text"
    />

    <custom-submit @click="process" value="Add"/>
  </form>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
import MessageForm from "@/components/MessageForm.vue";
import {mapActions, mapState} from 'vuex'
export default {
  name: "ScheduleForm",
  components: {
    CustomInput,
    MessageForm
  },


  data() {
    return {
      schedule: {
        name: '',
        teacher_id: '',
        discipline_id: '',
        group_id: '',
        time: '',
        classroom: ''
      },

      validations: {
        name: false,
        teacher_id: false,
        discipline_id: false,
        group_id: false,
        time: false,
        classroom: false
      },

      messages: {
        messageTeacherID: {
          type: null,
          text: ''
        },

        messageDisciplineID: {
          type: null,
          text: ''
        },

        messageGroupID: {
          type: null,
          text: ''
        },
      }
    }
  },

  computed: {
    ...mapState({
      teachers: state => state.teachers.teachers,
      disciplines: state => state.disciplines.disciplines,
      groups: state => state.groups.groups
    })
  },

  methods: {
    ...mapActions({
      addSchedule: 'schedules/addSchedule'
    }),

    process() {
      if (this.validateSchedule()) {
        this.addSchedule({...this.schedule});
        this.clearAllFields();
      }
    },

    validateSchedule() {
      let validations = [
          this.validations.name,
          this.validations.teacher_id,
          this.validations.discipline_id,
          this.validations.group_id,
          this.validations.time,
          this.validations.classroom
      ]

      return validations.filter(status => status === false).length === 0;
    },

    validateTeacherID() {
      if (!this.schedule.teacher_id) {
        this.validations.teacher_id = false;
        this.messages.messageTeacherID.type = 0;
        this.messages.messageTeacherID.text = 'Please, choose the teacherID'
      } else {
        this.validations.teacher_id = true;
        this.messages.messageTeacherID.type = 1;
        this.messages.messageTeacherID.text = 'TeacherID`ve been chosen';
      }
    },

    validateDisciplineID() {
      if (!this.schedule.discipline_id) {
        this.validations.discipline_id = false;
        this.messages.messageDisciplineID.type = 0;
        this.messages.messageDisciplineID.text = 'Please, choose the disciplineID'
      } else {
        this.validations.discipline_id = true;
        this.messages.messageDisciplineID.type = 1;
        this.messages.messageDisciplineID.text = 'DisciplineID`ve been chosen';
      }
    },

    validateGroupID() {
      if (!this.schedule.group_id) {
        this.validations.group_id = false;
        this.messages.messageGroupID.type = 0;
        this.messages.messageGroupID.text = 'Please, choose the groupID'
      } else {
        this.validations.group_id = true;
        this.messages.messageGroupID.type = 1;
        this.messages.messageGroupID.text = 'GroupID`ve been chosen';
      }
    },

    clearAllFields() {
      this.schedule.name = '';
      this.schedule.teacher_id = '';
      this.schedule.discipline_id = '';
      this.schedule.group_id = '';
      this.schedule.time = '';
      this.schedule.classroom = '';

      this.validations.name = false;
      this.validations.teacher_id = false;
      this.validations.discipline_id = false;
      this.validations.group_id = false;
      this.validations.time = false;
      this.validations.classroom = false;
    }
  }
}
</script>

<style scoped>

</style>