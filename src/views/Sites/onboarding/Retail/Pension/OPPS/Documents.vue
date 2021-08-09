<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
    <b-row>
    <label class="Upload National ID">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload National ID</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
 <div>
  <b-dropdown id="please confirm-1" text="Please Confirm" class="m-md-2">
    <b-dropdown-item>Transfer</b-dropdown-item>
    <b-dropdown-item>Regular Contribution</b-dropdown-item>
    
  </b-dropdown>
</div>

    </b-row>
    <br>
    <b-row>
   <label class="Upload Passport">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Passport</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
  <div>
  <b-dropdown id="benefit state-1" text="Benefit State" class="m-md-2">
    <b-dropdown-item>Active</b-dropdown-item>
    <b-dropdown-item>Inactive</b-dropdown-item>
   
    
  </b-dropdown>
</div>

    </b-row>
    <br>
    <b-row>
   <label class="Upload KRA pin certificate">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload KRA Pin Certificate</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    </b-row>
    <br>
    <b-row>
   <label class="Upload Utility Bill">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Utility Bill</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    </b-row>
    <br>
  
   <b-row>
    
    <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Beneficiaries()" variant="info">Save</b-button>
      
    </b-button-group>
    </b-col>
     <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Payments()" variant="warning">Next</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
    </card>
    </base-header>
</template>
<script>
import Payments from './Payments';
export default {
    components:{
        Payments
    },
    methods: {
        data() {
        return{
        test: ['Transfer', 'Regular Contribution'],
        testVal: null
    }  
    },
    Payments(){
        this.$router.push('/payments')
    }
        
    }
}

</script>