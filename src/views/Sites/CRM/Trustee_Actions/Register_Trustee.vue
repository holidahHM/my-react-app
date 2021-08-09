<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">

                  <div class="row">
    <div class="col-md-2">
       <label for="input-default">Date Deed filed:</label>
      <b-form-input type="date" placeholder="Mon"></b-form-input>
    </div>
     
    <div class="col-md-2">
     <p>Cert Status</p>
               <select v-model="text">
                 <option disabled value="">Status</option>
                        <option>Certified</option>
                        <option>Non-compliant</option>
                       
              </select>
              
    </div>
    <div class="col-md-2">
       <label for="input-default">Trustee Cert. Date:</label>
      <b-form-input type="date" placeholder="Bank"></b-form-input>
      
    </div>
    <div class="col-md-2">
       <label for="input-default">Term Ending:</label>
      <b-form-input type="date" placeholder="date"></b-form-input>
      
    </div>
    
  </div>  
  
              <div class="row">
                  <div class="col-md-2">
       <label for="input-default">Trustee Name:</label>
      <b-form-input id="input-default" placeholder="e.g John Oloo"></b-form-input>
    </div>
     <div class="col-md-2">
     <p>Gender</p>
               <select v-model="text">
                 <option disabled value="">Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        
              </select>
              
    </div>
    <div class="col-md-2">
     <p>Term</p>
               <select v-model="text">
                 <option disabled value="">Term</option>
                        <option>1</option>
                        <option>2</option>
                       
              </select>
              
    </div>
    <div class="col-md-2">
       <label for="input-default">Date Elected:</label>
      <b-form-input type="date" placeholder="date"></b-form-input>
      
    </div>
     <div class="col-md-2">
       <label for="input-default">Pin:</label>
      <b-form-input id="input-default" placeholder="Pin"></b-form-input>
      
    </div>
    
              </div>
              <br>
              
              <div class="row">
                  <div class="col-md-2">
       <label for="input-default">ID. NO:</label>
      <b-form-input id="input-default" placeholder="ID"></b-form-input>
    </div>
     <div class="col-md-3">
     <p>Designation</p>
               <select v-model="text">
                 <option disabled value="">Designation</option>
                        <option>Member Elected</option>
                        <option>Sponsor Nominated</option>
                        
              </select>
              
    </div>
    <div class="col-md-3">
     <p>Rank</p>
               <select v-model="text">
                 <option disabled value="">Trustee Rank</option>
                        <option>Chairman</option>
                        <option>Council/Corp. Trustee</option>
                        <option>Trustee</option>
                         <option>Secretary</option>
                          <option>Liaison Officer</option>
              </select>
              
    </div>
   
    <div class="col-md-4">
     <p>System Status</p>
               <select v-model="text">
                 <option disabled value="">status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                        
              </select>
              
    </div>
              </div>
              
              <div class="row">
                  <div class="col-md-3">
       <label for="input-default">Date of Birth:</label>
      <b-form-input type="date" placeholder="Mon"></b-form-input>
    </div>
     <div class="col-md-3">
      <label for="input-default">Email:</label>
      <b-form-input type="mail" placeholder="Postal Address"></b-form-input>
      
              
    </div>
    <div class="col-md-3">
      <label for="input-default">Phone Number:</label>
      <b-form-input id="input-default" placeholder="Telephone"></b-form-input>
      
              
    </div>
    <div class="col-md-2">
       <label for="input-default">Postal Address:</label>
      <b-form-input id="input-default" placeholder="Postal Address"></b-form-input>
      
    </div>
              </div>
              
              <div class="row">
                       <div class="col-md-3">
     <p>Select Bank</p>
               <select v-model="text">
                 <option disabled value="">Bank</option>
                        <option>Co-operative</option>
                        <option>KCB</option>
                        <option>Standard Chartered</option>
                        
              </select>
              
    </div>
                  <div class="col-md-3">
       <label for="input-default">Bank Account No.:</label>
      <b-form-input id="input-default" placeholder="A/c no."></b-form-input>
    </div>
    
    <div class="col-md-3">
    
   
       <label for="input-default">Bank Branch:</label>
      <b-form-input id="input-default" placeholder="Bank"></b-form-input>
      
    </div>
              </div>
              <br>
              <div class="row">
                   <div class="col-md-3">
                       <label class="Upload ID">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload ID</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
                   </div>
                  <div class="col-md-3">
                       <label class="Upload PIN">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload PIN</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
                   </div>
                  <div class="col-md-3">
                       <label class="Upload Photo">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Photo</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
                   </div>
                  <div class="col-md-3">
                       <label class="Upload Appointement">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Appointement</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
                   </div>
                  
              </div>
              
  
  
  <br>
  <br>
  <br>
   <b-row>
    <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Trustee_Mgt()" variant="info">Save</b-button>
      
    </b-button-group>
    </b-col>
     </b-row>
    </base-header>
</template>
<script>
 import Trustee_Mgt from '../Trustee_Mgt'
export default {
  comments:{
    Trustee_Mgt
  },
  methods: {
    Trustee_Mgt(){
      this.$router.push('/trustee_mgt')
    }
  },
}
</script>