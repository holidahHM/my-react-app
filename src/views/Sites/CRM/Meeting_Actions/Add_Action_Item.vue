<template>
     <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
     <div class="row">
   <div class="col-sm-4">
                           <label for="input-default">Action item:</label>
      <b-form-input id="input-default" placeholder="Action Item"></b-form-input>
      
                       
   </div>
    <div class="col-sm-4">
                           <label for="input-default"> Date Due:</label>
      <b-form-input type="date" placeholder="mm/dd/"></b-form-input>
      
                       
   </div>
      </div>
      
      <div class="row">
    
        <b-col lg="4">
            <base-input
              label="Select Meeting"
              v-model="user.email"
            >
            <select class="form-control">
                <option>Board of Trustees Meeting</option>
                <option>AGM</option>
                <option>Special Board Meeting</option>
                <option>Ad hoc Comittee Meeting</option>
                
            </select>
            </base-input>
          </b-col>   
            <b-col lg="4">
            <base-input
              label="Allocate To"
              v-model="user.email"
            >
            <select class="form-control">
                <option>Mary</option>
                <option>Nancy</option>
                <option>John</option>
                <option>Mark</option>
                
            </select>
            </base-input>
          </b-col> 
   </div>
   <br>
   <br>
   <br>
   <br>
     <b-row>
    <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Meetings2()" variant="info">Save</b-button>
      
    </b-button-group>
    </b-col>
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