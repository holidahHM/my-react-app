<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <b-row>
    <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Scheme_billing()" variant="info">Scheme Billing</b-button>
      
    </b-button-group>
    </b-col>
     <b-col class="col-md-3">
      <b-button-group>
     <b-dropdown id="dropdown-left" text="Expense and Allowances" variant="info" class="m-2">
    <b-dropdown-item><router-link to="/Invoice_Processing">Invoice Processing</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/Trustee_Allowances">Trustee Allowances</router-link></b-dropdown-item>
	</b-dropdown>
      
    </b-button-group>
    </b-col>
     <b-col class="col-md-3">
      <b-button-group>
     <b-dropdown id="dropdown-left" text="Expense Approvals" variant="info" class="m-2">
    <b-dropdown-item><router-link to="/Commission_Approvals">Commission Approvals</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/Expense_Recquisitions">Recquisitions</router-link> </b-dropdown-item>
	</b-dropdown>
      
    </b-button-group>
    </b-col>
     <b-col class="col-md-3">
      <b-button-group>
     <b-dropdown id="dropdown-left" text="Transfers and Commissions" variant="info" class="m-2">
    <b-dropdown-item><router-link to="/Commissions">Commissions</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/Product _Setting">Product Settings</router-link></b-dropdown-item>
	</b-dropdown> 
    </b-button-group>
    </b-col>
  </b-row>
  <br>
  <b-row>
    <b-col class="col-md-3">
      <b-button-group>
     <b-dropdown id="dropdown-left" text="Batch Entry" variant="info" class="m-2">
    <b-dropdown-item><router-link to="/Load_Batch"> Particular Batches</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/Transfers_in">Transfers In</router-link></b-dropdown-item>
     <b-dropdown-item><router-link to="/Load_Contributions">Load Contributions Batches</router-link></b-dropdown-item>
	</b-dropdown>   
    </b-button-group>
    </b-col>
    
    <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Attendance_and_Certificates()" variant="info">Attendance and Certificates</b-button>
      
    </b-button-group>
    </b-col>
     <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Set_Trustee_Allowance()" variant="info">Set Trustee Allowance</b-button>
      
    </b-button-group>
    </b-col>
     <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Calculate_Trustee_Allowance()" variant="info">Calculate Trustee Allowance</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
  </base-header>
</template>
<script>
import Scheme_billing from '../Schemes/Scheme_billing'

import Set_Trustee_Allowance from '../../CRM/Trustee_Actions/Set_Trustee_Allowance.vue'
import Attendance_and_Certificates from '../../CRM/Trustee_Actions/Attendance_and_Certificates'
import Calculate_Trustee_Allowance from '../../CRM/Trustee_Actions/Calculate_Trustee_Allowance'

export default {
    components:{
        Scheme_billing,
        
        Set_Trustee_Allowance,
        Attendance_and_Certificates,
        Calculate_Trustee_Allowance
    },
    methods: {
  
         Scheme_billing(){
            this.$router.push('/Scheme_billing')
        },
       Set_Trustee_Allowance(){
            this.$router.push('/set_trustee_allowance')
        },
        Attendance_and_Certificates(){
            this.$router.push('/attendance_and_certificates')
        },
        Calculate_Trustee_Allowance(){
            this.$router.push('/calculate_trustee_allowance')
        }
    },


}
</script>

<style>

</style>
