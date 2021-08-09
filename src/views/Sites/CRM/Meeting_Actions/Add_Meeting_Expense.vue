<template>
     <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
     <div class="row">
<div class="col-sm-5">
                           <label for="input-default"> Expense Date:</label>
      <b-form-input type="date" placeholder="mm/dd/"></b-form-input>
      
                       
   </div>
   
</div>
<div class="row">
     <div class="col-sm-5">
       <base-input
              label="Select Approver"
              v-model="user.email"
            >
            <select class="form-control">
                <option>John</option>
                <option>Joseph</option>
                <option>Mary</option>
                <option>Anne</option>
                
            </select>
            </base-input>

    </div>
    
     <div class="col-md-5">
                           <label for="input-default">Title:</label>
      <b-form-input id="input-default" placeholder="Request Title"></b-form-input>
      
                       
   </div>
</div>

<br>
<h3>Cost Breakdown</h3>
<div class="row">
  <div class="col-md-5">
    <base-input
              label="Select Category"
              v-model="user.email"
            >
            <select class="form-control">
                 <option>Airtime</option>
                        <option>Entertainment</option>
                        <option>Transport</option>
                        <option>Meals</option>
                        <option>Accomodation</option>
                        <option>Tender</option>
                        <option>Tender Security/Bid Bond</option>
                        <option>Legal</option>
                
            </select>
            </base-input>
  </div>
    
    
     <div class="col-md-5">
                           <label for="input-default">Amount:</label>
      <b-form-input id="input-default" placeholder="Amount"></b-form-input>
      
                       
   </div>
</div>
<div class="row">
 <div class="col-md-5">
                           <label for="input-default">Basis:</label>
      <b-form-input id="input-default" placeholder="Basis"></b-form-input>
      
                       
   </div>
</div>
<br>
   
     <b-row>
    
      <b-button-group>
      <b-button @click="Meetings2()" variant="warning">Save</b-button>
      
    </b-button-group>
   
     </b-row>
     </base-header>
     
</template>
<script>
import Meetings2 from '../Meetings2'
export default {
    components:{
        Meetings2
    },
     data() {
    return {
      user: {
      }
    };
  },
    methods: {
        Meetings2(){
            this.$router.push('/meetings2')
        },
        
        updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
    },
}
</script>