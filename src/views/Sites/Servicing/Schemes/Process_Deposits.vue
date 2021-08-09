<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
       <div>
    <b-tab active>
        <template v-slot:title >
         Process Deposits 
        </template>
        <br>
        <div class="d-flex justify-content-center mb-3" >
        </div>
      <b-form @submit.prevent="updateProfile">

      <div class="pl-lg-4">
        <b-row>
         <b-col lg="6">
              <base-input
              type="date"
              label="Date"
              placeholder=""
              id="example-date-input"
              v-model="user.Date"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
         <b-col lg="6">
              <base-input
              label="Purpose"
              v-model="user.purpose"
            >
            <select class="form-control">
                <option>Additional Funds</option>
                <option>Closing Balances</option>
                 <option>Cancelled Cheque</option>
                  <option>Pension Benefits</option>
            </select>
            </base-input>
          </b-col>
           <b-col lg="6">
              <base-input
              type="text"
              label="Received From"
              placeholder=""
              v-model="user.receivedfrom"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
            <b-col lg="6">
              <base-input
              type="text"
              label="Amount"
              placeholder=""
              v-model="user.Amount">
            </base-input>
          </b-col>
             <b-col lg="6">
              <base-input
              type="text"
              label="Reference No"
              placeholder=""
              v-model="user.Referenceno"
            >
            </base-input>
          </b-col>
        </b-row>
         <b-row>
           <b-col lg="6">
              <base-input
              label="Payment Mode"
              v-model="user.paymentmode"
            >
            <select class="form-control">
                <option>Additional Funds</option>
                <option>Closing Balances</option>
                 <option>Cancelled Cheque</option>
                  <option>Pension Benefits</option>
            </select>
            </base-input>
          </b-col>
        <b-col lg="6">
              <base-input
              label="Service Provider"
              v-model="user.paymentmode"
            >
            <select class="form-control">
                <option>Bank of Baroda</option>
                <option>Equity</option>
                 <option>DTP</option>
                  <option>Consolidated Bank</option>
            </select>
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
        <b-col lg="12">
            <b-form-group label="Description" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
            <!--  <label class="form-control-label">About Me</label> -->
            <b-form-textarea rows="4" value="" id="about-form-textaria" placeholder=""></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <br>
      <b-row class="d-flex justify-content-center mb-3"  >
        
            <base-button  @click="Processed_Deposits()" type="primary">Submit</base-button>
        
        </b-row>
        <hr class="my-4">
         </b-form> 
    </b-tab>
</div>
  </card>
</base-header>
</template>
<script>
import Processed_Deposits from '../Schemes/Processed_Deposits.vue'
export default {
components:{Processed_Deposits},
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
    Processed_Deposits(){
      this.$router.push('/Processed_Deposits')
    }
  }
  
};
</script>
<style></style>
