<template>

  <card>
    <div align-v="center" slot="header" >
      <b-col cols="12">
        <h3 class="mb-0">Approval Requests </h3>
      </b-col>
    </div>

    <b-list-group flush class="list my--3">
    <b-list-group-item v-for="meeting in meeting"
        :key="meeting.image"
        class="list-group-item px-0">
        <b-row align-v="center" >
            <b-col class="ml--2">
                <h3 class="mb-0">
                    <a href="javascript:;"> Approval Requests from User </a>
                </h3>
            </b-col>
            <b-col md="auto">
                <b-button type="primary" size="lg" variany="danger">Manage</b-button>
            </b-col>
        </b-row>
    </b-list-group-item>
</b-list-group>
<br><br>


  </card>
</template>

<script>
export default {
  data() {
    return {
      user: {
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  },

    data() {
      return {
        meeting: [
          {
            name: 'John Michael',
            status: 'Online',
            statusType: 'success',
            image: 'https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-1.jpg'
          },
          {
            name: 'Alex Smith',
            status: 'In a meeting',
            statusType: 'danger',
            image: 'https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-2.jpg'
          },
          {
            name: 'John Snow',
            status: 'Online',
            statusType: 'success',
            image: 'https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-5.jpg'
          }
        ]
      }
    }
};
  
</script>
<style></style>
