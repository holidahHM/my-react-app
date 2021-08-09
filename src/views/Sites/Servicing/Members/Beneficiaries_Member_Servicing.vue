<template>
     <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
     <card>
          <b-row>
		  <b-col lg="6">
            <base-input
              label="Beneficiary Name"
              placeholder=""
            >
            <select v-model="user_zone" class="form-control">
                <option></option>
                <option></option>
            </select>
            </base-input>
          </b-col>
		  <b-col lg="6">
            <base-input
              type="date"
              label="Date of Birth"
              placeholder=""
              id="example-date-input"
              v-model="user.date_birth"
            >
            </base-input>
          </b-col>
        </b-row>
		<b-row>
          <b-col lg="6">
            <base-input
              type="integer"
              label="Beneficiary Code"
              placeholder="Beneficiary Code" readonly
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
		  <b-col lg="6">
            <base-input
              type="date"
              label="Date of Appointment"
              placeholder="Date of Appointment"
              id="example-date-input"
              v-model="user.date_appointmet"
            >
            </base-input>
          </b-col>
        </b-row>
		<b-row>
          <b-col lg="6">
            <base-input
              type="integer"
              label="Phone No"
              placeholder="Phone No"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
		  <b-col lg="6">
            <base-input
              label="Gender"
              placeholder="Gender"
            >
            <select v-model="user_zone" class="form-control">
                <option>Male</option>
                <option>Female</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
		<b-row>
          <b-col lg="6">
            <base-input
              label="Relationship"
              placeholder="Relationship"
            >
            <select v-model="user_zone" class="form-control">
                <option>Son</option>
                <option>Daughter</option>
                <option>Spouse</option>
            </select>
            </base-input>
          </b-col>
		  <b-col lg="6">
            <base-input
              type="mail"
              label="Email"
              placeholder="Email"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
        </b-row>
		<b-row>
          <b-col lg="6">
            <base-input
              type="address"
              label="Postal Address"
              placeholder="Postal Address"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
		  <b-col lg="6">
            <base-input
              type="percentage"
              label="Percentage Share"
              placeholder=""
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
        </b-row>
		<b-row>
			 <b-col class="col-md-3">
       <b-button-group>
      <b-button @click="Members()" variant="info">Save</b-button>
      
    </b-button-group>
    </b-col>
		</b-row>
    
     </card>
     </base-header>
</template>

<script>
import Members from '../Members/Members'
export default {
	comments:{
		Members
	},
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
    },
	Members(){
		this.$router.push('/members')
	}
  }
};
</script>
<style></style>
