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
                       
   <label class="RBA appointment Certificate">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload RBA Appointment Certificate</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    
    </b-row>
    <br>
    <b-row>
   <label class="Audited Financial Statements">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Audited Financial Statements: 3 Yrs</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
 
    </b-row>
    <br>
    <b-row>
   <label class="I-tax Login Credentials">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload I-tax Login Credentials</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
 
    </b-row>
    
    <br>
    
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
      <b-button @click="Corporate_Administrative_records()" variant="warning">Next</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
    </base-header>

</template>
<script>
import Corporate_Administrative_records from '../Corporate/Corporate_Administrative_Records'
export default {
    components: {
        Corporate_Administrative_records
      
        
    },
    methods: {
      Corporate_Administrative_records(){
        this.$router.push('/corporate_administrative_records')
      },      
      }
    }

</script>