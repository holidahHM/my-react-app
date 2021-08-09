<template>
    <base-header  class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" >
     <b-row>
               <b-col xl="12" md="10">
          <stats-card title="Please Upload the Following Documents"
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                   <b-row>
                       
   <label class="Trustee Board Composition">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Trustee Board Composition</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    
    </b-row>
    <br>
    <b-row>
   <label class="Dates of Trustee Appointment and Tenure">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Dates of Trustee Appointment and Tenure</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
 
    </b-row>
    <br>
    <b-row>
   <label class="Trustee Bank details and Pin certificates">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Trustee Bank details and Pin certificates</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
 
    </b-row>
    
    <br>
    <b-row>
   <label class="Upload TPDK Certificates">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload TPDK Certificates</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    </b-row>
    
    <br>
   
                 
  </div>
  
            </template>
          </stats-card>

        </b-col>
     </b-row>
     <b-row>
      
    <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Beneficiaries()" variant="success">Save</b-button>
      
    </b-button-group>
    </b-col>
     <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Corporate_secretarial_Information()" variant="warning">Next</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
    </base-header>

</template>
<script>
import Corporate_secretarial_Information from '../Corporate/Corporate_secretarial_Information.vue'
export default {
    components: {
        Corporate_secretarial_Information
      
        
    },
    methods: {
      Corporate_secretarial_Information(){
        this.$router.push('/corporate_secretarial_information')
      },      
      }
    }

</script>