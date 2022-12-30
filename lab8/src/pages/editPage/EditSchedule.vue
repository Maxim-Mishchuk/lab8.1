<template>
  <form @submit.prevent>
    <h2>Edit schedule: {{ scheduleByID($route.params.id).name }}</h2>

    <custom-input
        placeholder="Name"
        type-validation="name"
        v-model="getSchedule.name"
        v-model:validation-value="validations.name"
    />

    <custom-input
        placeholder="Time"
        type-input="time"
        type-validation="time"
        v-model="getSchedule.time"
        v-model:validation-value="validations.time"
    />

    <custom-input
        placeholder="Classroom"
        type-validation="name"
        v-model="getSchedule.classroom"
        v-model:validation-value="validations.classroom"
    />

    <select @click="validateTeacherID" v-model="getSchedule.teacher_id">
      <option value="">Teacher</option>
      <option
          v-for="teacher in teachers"
          :value="teacher._id"
      >
        {{ teacher.name+" "+teacher.surname }}
      </option>
    </select>
    <message-form
        :type="messages.messageTeacherID.type"
        :message="messages.messageTeacherID.text"
    />

    <select @click="validateDisciplineID" v-model="getSchedule.discipline_id">
      <option value="">Discipline</option>
      <option
          v-for="discipline in disciplines"
          :value="discipline._id"
      >
        {{ discipline.name }}
      </option>
    </select>
    <message-form
        :type="messages.messageDisciplineID.type"
        :message="messages.messageDisciplineID.text"
    />

    <select @click="validateGroupID" v-model="getSchedule.group_id">
      <option value="">Group</option>
      <option
          v-for="group in groups"
          :value="group._id"
      >
        {{ group.name }}
      </option>
    </select>
    <message-form
        :type="messages.messageGroupID.type"
        :message="messages.messageGroupID.text"
    />

    <custom-submit @click="process" value="Edit"/>
  </form>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
import MessageForm from "@/components/MessageForm.vue";
import {mapActions, mapGetters} from 'vuex'
import CustomSubmit from "@/components/CustomSubmit.vue";
export default {
  name: "EditSchedule",
  components: {
    CustomInput,
    MessageForm,
    CustomSubmit
  },
  data() {
    return {

      validations: {
        name: true,
        teacher_id: true,
        discipline_id: true,
        group_id: true,
        time: true,
        classroom: true
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
    ...mapGetters({
      scheduleByID: 'schedules/SCHEDULE_BY_ID',

      teachers: "teachers/TEACHERS",
      disciplines: "disciplines/DISCIPLINES",
      groups: "groups/GROUPS"
    }),
    getSchedule(){
      return Object.assign({}, this.scheduleByID(this.$route.params.id))
    },
  },

  methods: {
    ...mapActions({
      editScheduleByID: 'schedules/UPDATE_SCHEDULE'
    }),

    process() {
      if (this.validateSchedule()) {
        this.editScheduleByID(this.getSchedule)
        this.$router.push('/scheduleTable')
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
      if (!this.getSchedule.teacher_id) {
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
      if (!this.getSchedule.discipline_id) {
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
      if (!this.getSchedule.group_id) {
        this.validations.group_id = false;
        this.messages.messageGroupID.type = 0;
        this.messages.messageGroupID.text = 'Please, choose the groupID'
      } else {
        this.validations.group_id = true;
        this.messages.messageGroupID.type = 1;
        this.messages.messageGroupID.text = 'GroupID`ve been chosen';
      }
    },
  }
}
</script>

<style scoped>

</style>