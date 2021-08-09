<template>



  <card>
    
    <div align-v="center" slot="header" >
      <b-col cols="12">
        <h3 class="mb-0">Add Prospect </h3>
      </b-col>
    </div>

    <b-form >
      <h6 class="heading-small text-muted mb-4">Prospect information</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Prospect Name"
              placeholder="Prospect Name"
              v-model="user.username"
            >
            </base-input>
            <span>Choice: {{user.username}}</span>
          </b-col>
          <b-col lg="6">
            <base-input
              label="Choose Division"
              placeholder="Choose Division"
             
            >
            <select v-model="user_zone" class="form-control">
                <option>Pension</option>
                <option>Insurance</option>
                <option>Trust</option>
                <option>Training</option>
            </select>
            </base-input>
            <span>Choice: {{user_zone}}</span>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="email"
              label="Email address"
              placeholder="Prospect Email"
              v-model="user.email"
            >
            </base-input>
            <span>Choice: {{user.email}}</span>
          </b-col>
          <b-col lg="6">
            <base-input
              label="Choose Product or Service"
              placeholder="Choose Product or Service"
              
            >
            <select v-model="user_accessto" class="form-control">
                <option v-if="user_zone ==='Pension'">OPPS</option>
                <option v-if="user_zone ==='Pension'">IDD</option>
                <option v-if="user_zone ==='Insurance'">Easy Cover</option>
                <option v-if="user_zone ==='Insurance'">PRMC</option>
                <option v-if="user_zone ==='Insurance'">Domestic Package</option>
                <option v-if="user_zone ==='Insurance'">Personal Accident</option>
                <option v-if="user_zone ==='Training'">Soft skills</option>
                <option v-if="user_zone ==='Trust'">Living</option>
            </select>
            <span>Choice: {{user_accessto}}</span>
            </base-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Prospect Phone Number"
              placeholder="Prospect Phone Number"
              v-model="user.number"
            >
            </base-input>
            <span>Choice: {{user.number}}</span>
          </b-col>
          <b-col lg="6">
            <b-form-group label="Add Note" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
            <!--  <label class="form-control-label">About Me</label> -->
            <b-form-textarea rows="4" v-model="user.note" id="about-form-textaria" placeholder=""></b-form-textarea>
            <span>Choice: {{user.note}}</span>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="date"
              label="Date of Contact"
              placeholder="DAte of Contact"
              id="example-date-input"
              v-model="user.date"
            >
            </base-input>
            <span>Choice: {{user.date}}</span>
          </b-col>
        </b-row>
      </div>

      <b-row class="d-flex justify-content-center mb-3"  >
        
            <base-button type="info" @click.prevent="prospectSave"><router-link to='/your-prospect'>Save</router-link></base-button>
        
            <base-button type="danger">Delete</base-button>
        
        </b-row>

        <div class="alert alert-danger" v-if="error">
            {{ error }}
          </div>
          <div class="alert alert-success" v-if="successData">
            {{ successData }}
          </div>
        <hr class="my-4">

    </b-form>
  </card>
</template>
<script>
import { saveProspect } from '../../../api/users.api';
export default {
  data() {
    return {
      user: {
      },
      username:'', 
      number:'',
      email:'',
      date:'',
      user_zone:'',
      user_accessto:'',
      note:'',
    };
  },
  methods: {
    updateProfile() {
      // alert('Your data: ' + JSON.stringify(this.user));
      alert(JSON.stringify(this.user))
      
    },
   


    
  }
};
</script>
<style></style>
