<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
    <b-row>
        <b-col xl="4" md="8">
            <input v-model="message" placeholder="Full names">
        </b-col>
         <b-col xl="4" md="8">
            <input v-model="message" placeholder="Email">
        </b-col>
       <b-col xl="4" md="8">
            <input v-model="message" placeholder="Telephone">
        </b-col>
    </b-row>
    <br>
    <b-row>
        <b-col xl="4" md="8">
             <input type="date" v-model="datepicker" placeholder="Examhhplke">
        </b-col>
         <b-col xl="4" md="8">
            <input v-model="message" placeholder="Relationship">
        </b-col>
         <b-col xl="4" md="8">
            <input v-model="integer" placeholder="ID. NO">
        </b-col>
    </b-row>
    <br>
    <b-row>
         <b-col xl="4" md="8">
            <input v-model="message" placeholder="Benefit percentage">
        </b-col>
    </b-row>
    <br>
    <br>


     
      <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I understand that the Trustees of the scheme have the final discretion to decide who should receive benefits under the scheme.
      This nomination cancels and supersedes any previous nomination.
    </b-form-checkbox>

    <div>State: <strong>{{ status }}</strong></div>
  </div>
   <b-row>
    <b-col xl="4" md="6">
      <b-button-group>
      <b-button @click="Application_Form()" variant="info">View</b-button>
      
    </b-button-group>
    </b-col>
    <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Beneficiaries()" variant="success">Save</b-button>
      
    </b-button-group>
    </b-col>
     <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Documents()" variant="warning">Next</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
    </card>
    </base-header>
</template>
<script>
import Datepicker from 'vuejs-datepicker';
import Documents from './Documents';
 
export default {
  // ...
  components: {
    Datepicker,
    Documents
  },
     methods: {
      Documents() {
        this.$router.push('/documents')
        }
      }
    
  }
  

</script>
