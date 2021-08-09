<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
       <div>
    <b-tab active>
        <template v-slot:title >
         Beneficiary Details 
        </template>
        <br>
        <div class="d-flex justify-content-center mb-3" >
        </div>
      <b-form @submit.prevent="updateProfile">

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Code"
              placeholder="" 
              v-model="user.code"
            
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Name"
              placeholder="" 
              v-model="user.Name"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
        <b-col lg="6">
              <base-input
              type="date"
              label="Date Of Birth"
              placeholder=""
              id="example-date-input"
              v-model="user.DateofBirth"
            >
            </base-input>
          </b-col>
           <b-col lg="6">
              <base-input
              type="date"
              label="Date Of Appointment"
              placeholder=""
              id="example-date-input"
              v-model="user.DateofAppointment"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
            <b-col lg="6">
              <base-input
              label="Gender"
              v-model="user.Gender"
            >
            <select class="form-control">
                <option>Male</option>
                <option>Female</option>
            </select>
            </base-input>
          </b-col>
             <b-col lg="6">
              <base-input
              label="Relationship"
              v-model="user.Relationship"
            >
            <select class="form-control">
                <option>Spouse</option>
                <option>Child</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
         <b-row>
          <b-col lg="6">
            <base-input
              type="checkbox"
              label="Has Fund Limit"
              placeholder=""
              v-model="user.hasfundlimit"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="number"
              label="Age Limit: (Years)"
              placeholder=""
              v-model="user.agelimit"
            >
            </base-input>
          </b-col>
         </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="checkbox"
              label="Has Fund Limit"
              placeholder=""
              v-model="user.hasfundlimit"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="number"
              label="Fund Limit: (Percentage)"
              placeholder=""
              v-model="user.fundlimit"
            >
            </base-input>
          </b-col>
         </b-row>
        <b-row>
           <b-col lg="6">
            <base-input
              type="text"
              label="Email"
              placeholder=""
              v-model="user.email"
            >
            </base-input>
          </b-col>
         <b-col lg="6">
            <base-input
              type="text"
              label="Phone No"
              placeholder=""
              v-model="user.phonenumber"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
           <b-col lg="6">
            <base-input
              type="text"
              label="Address"
              placeholder=""
              v-model="user.address"
            >
            </base-input>
          </b-col>
        <b-col lg="6">
            <base-input
              type="text"
              label="Guardian"
              placeholder=""
              v-model="user.guardian"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
        <b-col lg="6">
            <base-input
              type="text"
              label="Account Name"
              placeholder=""
              v-model="user.accountname"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Account No"
              placeholder=""
              v-model="user.accountno"
            >
            </base-input>
          </b-col>
        </b-row>
         <b-row>
         <b-col lg="6">
            <base-input
              type="text"
              label="Bank Name"
              placeholder=""
              v-model="user.bankname"
            >
            </base-input>
          </b-col>
        <b-col lg="6">
            <base-input
              type="text"
              label="Branch Name"
              placeholder=""
              v-model="user.branchname"
            >
            </base-input>
          </b-col>
        </b-row>
         <b-row>
                <b-col lg="6">
            <base-input
              type="text"
              label="Branch Code"
              placeholder=""
              v-model="user.branchcode"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              label="Status"
              v-model="user.status"
            >
            <select class="form-control">
                <option>Active</option>
                <option>Dormant</option>
                <option>Closed</option>
            </select>
            </base-input>
          </b-col>
         </b-row>
      </div>
      <br>
      <b-row class="d-flex justify-content-center mb-3"  >
        
            <base-button  @click="Trust_Servicing()" type="primary">Submit</base-button>
        
        </b-row>
        <hr class="my-4">
         </b-form> 
    </b-tab>
</div>
  </card>
</base-header>
</template>
<script>
import Trust_Servicing from '../Schemes/Trust_Servicing'
export default {
components:{Trust_Servicing},
  data() {
    return {
      user: {
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    },
    Trust_Servicing(){
      this.$router.push('/Trust_Servicing')
    }
  }
  
};
</script>
<style></style>
