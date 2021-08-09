<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
       <div class="row">    
          <b-col lg="4">
            <base-input
              label="Trustee Rank"
              placeholder="Trustee Rank"
            >
            <select v-model="user_zone" class="form-control">
                <option>Pension</option>
                <option>Insurance</option>
               
            </select>
            </base-input>
          </b-col>
     
          <b-col lg="6">
            <base-input
              label="Allowance Type"
              placeholder="Allowance Type"
            >
            <select v-model="user_zone" class="form-control">
                <option>Sitting Allowance</option>
                <option>Mileage Alloance</option>
                
            </select>
            </base-input>
          </b-col>
    </div>
    <div class="row">
        
          <b-col lg="3">
            <base-input
              label="Choose Event"
              placeholder="Choose Event"
            >
            <select v-model="user_zone" class="form-control">
                <option>Meeting</option>
                <option>Training</option>
                
            </select>
            </base-input>
          </b-col>
     <div class="col-md-3">
       <label for="input-default">Effective Date:</label>
      <b-form-input type="date" placeholder="ffg"></b-form-input>
      
    </div>
      
          <b-col lg="4">
            <base-input
              label="Meeting Type"
              placeholder="Meeting Type"
            >
            <select v-model="user_zone" class="form-control">
                <option>AGM</option>
                <option>SGM</option>
                <option>AD hoc Meeting</option>
                <option>Special Board Meeting</option>
            </select>
            </base-input>
          </b-col>
     <div class="col-md-3">
       <label for="input-default">Amount:</label>
      <b-form-input id="input-default" placeholder="Amount"></b-form-input>
      
    </div>
    </div>
    <div class="row">
        <div class="col-md-3">
       <label for="input-default">Tax:</label>
      <b-form-input id="input-default" placeholder="%"></b-form-input>
      
    </div>
    <div class="col-md-6">
       <label for="input-default">Description:</label>
      <b-form-input id="input-default" placeholder="Description"></b-form-input>
      
    </div>
    </div>
  
     <br>
  <br>
  <br>
   <b-row>
    <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Scheme_servicing2()" variant="info">Save</b-button>
      
    </b-button-group>
    </b-col>
     </b-row>
    </base-header>
</template>
<script>
 import Scheme_servicing2 from '../../Servicing/Schemes/scheme_servicing2.vue'
export default {
  comments:{
    Scheme_servicing2
  },
  methods: {
    Scheme_servicing2(){
      this.$router.push('/Scheme_servicing2')
    }
  },
}
</script>