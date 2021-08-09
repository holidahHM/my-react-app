<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <b-row>
    <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Register_Trustee()" variant="info">Register Trustee</b-button>
      
    </b-button-group>
    </b-col>
    <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Attendance_and_Certificates()" variant="success">Attendance and Certificates</b-button>
      
    </b-button-group>
    </b-col>
     <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Set_Trustee_Allowance()" variant="success">Set Trustee Allowance</b-button>
      
    </b-button-group>
    </b-col>
     <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Calculate_Trustee_Allowance()" variant="success">Calculate Trustee Allowance</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
  </base-header>
</template>

<script>
import Register_Trustee from '../CRM/Trustee_Actions/Register_Trustee'
import Set_Trustee_Allowance from '../CRM/Trustee_Actions/Set_Trustee_Allowance'
import Attendance_and_Certificates from '../CRM/Trustee_Actions/Attendance_and_Certificates'
import Calculate_Trustee_Allowance from '../CRM/Trustee_Actions/Calculate_Trustee_Allowance'

export default {
    comments:{
        Register_Trustee,
        Set_Trustee_Allowance,
        Attendance_and_Certificates,
        Calculate_Trustee_Allowance
    },
    methods: {
       Register_Trustee(){
            this.$router.push('/register_trustee')
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