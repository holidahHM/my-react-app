<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
       <div>
    <b-tab active>
        <template v-slot:title >
           Edit Trust Details 
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
              label="Trust Code"
              placeholder="001" disabled
              v-model="user.trustcode"
            
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Alias Code"
              placeholder="MMUST/001/19" disabled
              v-model="user.aliascode"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Name"
              placeholder="CLEMENT OTANGA TRUST" disabled
              v-model="user.name"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              label="Category"
              v-model="user.category"
            >
            <select class="form-control">
                <option>Individual</option>
                <option>Group</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
              <base-input
              type="date"
              label="Commencement Date"
              placeholder="2018-12-31" disabled
              id="example-date-input"
              v-model="user.commencementDate"
            >
            </base-input>
          </b-col>
         <b-col lg="6">
              <base-input
              type="date"
              label="Registration Date"
              placeholder="2018-12-31" disabled
              id="example-date-input"
              v-model="user.regDate"
            >
            </base-input>
          </b-col>
        </b-row>
         <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="KRA Tax PIN"
              placeholder=""
              v-model="user.KRAtaxpin"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Email"
              placeholder=""
              v-model="user.email"
            >
            </base-input>
          </b-col>
         </b-row>
         <b-row>
             <b-col lg="6">
            <base-input
              type="text"
              label="Phone Number"
              placeholder=""
              v-model="user.phonenumber"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Postal Address"
              placeholder=""
              v-model="user.postaladdress"
            >
            </base-input>
          </b-col>
         </b-row>
        <b-row>
          <b-col lg="6">
              <base-input
              label="Deposit Frequency"
              v-model="user.DepositFrequency"
            >
            <select class="form-control">
                <option>Random</option>
                <option>Once</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
            </select>
            </base-input>
          </b-col>
         <b-col lg="6">
            <base-input
              type="text"
              label="Contact Person"
              placeholder=""
              v-model="user.contactperson"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
           <b-col lg="6">
            <base-input
              type="text"
              label="Owner"
              placeholder=""
              v-model="user.owner"
            >
            </base-input>
          </b-col>
        <b-col lg="6">
            <base-input
              type="text"
              label="Account Name"
              placeholder=""
              v-model="user.accountname"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
        <b-col lg="6">
            <base-input
              type="text"
              label="Account No"
              placeholder=""
              v-model="user.accountno"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Bank Name"
              placeholder=""
              v-model="user.bankname"
            >
            </base-input>
          </b-col>
        </b-row>
         <b-row>
         <b-col lg="6">
            <base-input
              type="text"
              label="Branch Name"
              placeholder=""
              v-model="user.branchname"
            >
            </base-input>
          </b-col>
        <b-col lg="6">
            <base-input
              type="text"
              label="Bank Code"
              placeholder=""
              v-model="user.bankcode"
            >
            </base-input>
          </b-col>
        </b-row>
         <b-row>
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
        
            <base-button  @click="Trusts()" type="primary">Submit</base-button>
        
        </b-row>
        <hr class="my-4">
         </b-form> 
    </b-tab>
</div>
  </card>
</base-header>
</template>
<script>
import Trusts from '../Schemes/Trusts'
export default {
components:{Trusts},
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
    Trusts(){
      this.$router.push('/Trusts')
    }
  }
  
};
</script>
<style></style>
