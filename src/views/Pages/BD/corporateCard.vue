<template>


  <card>
    <div align-v="center" slot="header" >
      <b-col cols="12">
        <h3 class="mb-0">Add Corporate </h3>
      </b-col>
    </div>

    <b-form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">Corporate information</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Name"
              placeholder="Corporate Name"
              v-model="user.username"
            >
            </base-input>
          </b-col>
           <b-col lg="6">
            <base-input
              type="email"
              label="Email address"
              placeholder="Corporate Email"
              v-model="user.email"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
           <b-col lg="6">
            <base-input
              type="email"
              label="Postal Address"
              placeholder="Corporate Postal Address"
              v-model="user.email"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="date"
              label="Date of Contact"
              placeholder="DAte of Contact"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
         
        </b-row>

        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Phone Number"
              placeholder="Corporate Phone Number"
              v-model="user.firstName"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <b-form-group label="Add Note" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
            <!--  <label class="form-control-label">About Me</label> -->
            <b-form-textarea rows="4" value="" id="about-form-textaria" placeholder=""></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </div>

      <b-row class="d-flex justify-content-center mb-3"  >
        <router-link to="/corporate">
            <base-button type="info">Save</base-button>
        </router-link>
            <base-button type="danger">Delete</base-button>
        
        </b-row>
        <hr class="my-4">

    </b-form>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
      },
      i_f_name:'', //i stands for internal
      i_l_name:'',
      i_email:'',
      user:'',
      user_zone:'',
      user_accessto:''
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style></style>
