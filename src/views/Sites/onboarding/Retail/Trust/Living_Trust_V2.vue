<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
    <b-row>
    <label class="Upload National ID of Setlor">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload National ID of Setlor</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
   <label class="Upload KRA Pin of Setlor">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload KRA Pin of Setlor</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    </b-row>
    <br>
    <b-row>
   <label class="Upload List of Assets">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload List of Assets</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
   <label class="Upload Copy of Will">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Copy Of Will</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    </b-row>
    <br>
    <b-row>
   <label class="Upload Beneficiary Birth Certificates">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Beneficiary Birth Certificates</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    </b-row>
    <br>
    <b-row>
  
    </b-row>
    <br>
    <br>
     <div class="row">
    <div class="col-md-2">
       <label for="input-default">Enter Trust Code:</label>
      <b-form-input id="input-default" placeholder="Trust code"></b-form-input>
    </div>
    <div class="col-md-3">
      <label for="input-default">Enter Account Number:</label>
      <b-form-input id="input-default" placeholder="Account No."></b-form-input>
    </div>
    <div class="col-md-4">
       <label for="input-default">Enter Category:</label>
      <b-form-input id="input-default" placeholder="Category"></b-form-input>
    </div>
  </div>
  <div class="row">
    <div class="col-md-2">
       <label for="input-default">Enter Trust Name:</label>
      <b-form-input id="input-default" placeholder="Trust Name"></b-form-input>
    </div>
    <div class="col-md-3">
      <label for="input-default">Enter Branch Name:</label>
      <b-form-input id="input-default" placeholder="Branch Name."></b-form-input>
    </div>
    <div class="col-md-4">
       <label for="input-default">Enter Commencement Date:</label>
      <b-form-input type="date" placeholder="date"></b-form-input>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-2">
       <label for="input-default">Enter Registration date:</label>
      <b-form-input type="date" placeholder="Registration date"></b-form-input>
    </div>
     <div class="col-md-3">
     <p>Status</p>
               <select v-model="text">
                 <option disabled value="">Status</option>
                        <option>Active</option>
                        <option>Dormant</option>
                        <option>Closed</option>
              </select>
              
    </div>
    <div class="col-md-4">
       <label for="input-default">Enter Account Name:</label>
      <b-form-input id="input-default" placeholder="Account Name"></b-form-input>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-2">
       <label for="input-default">Enter Pin:</label>
      <b-form-input id="input-default" placeholder="Pin"></b-form-input>
    </div>
    <div class="col-md-4">
       <label for="input-default">Enter Bank Name:</label>
      <b-form-input id="input-default" placeholder="Bank Name"></b-form-input>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-2">
       <label for="input-default">Enter Deposit Frequency:</label>
      <b-form-input id="input-default" placeholder="Montly, Quarterly etc"></b-form-input>
    </div>
    <div class="col-md-4">
       <label for="input-default">Enter Bank Code:</label>
      <b-form-input id="input-default" placeholder="Bank Code"></b-form-input>
    </div>
  </div>
  <br>
  <b-row>
    
    <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Schemes()" variant="info">Set Up Trust</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
    </card>
    </base-header>
    
</template>
<script>
import Schemes from '../../../Servicing/Schemes/Schemes'
export default {
  comments:{
    Schemes
  },
  methods: {
    Schemes(){
      this.$router.push('/schemes')
    }
  },
}
</script>