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
  <b-col class="col-md-4">
       <label for="input-default">Enter Scheme Name:</label>
      <b-form-input id="input-default" placeholder="Scheme Name"></b-form-input>
    
  </b-col>
    
    </b-row>
    <br>
    <b-row>
   <label class="Tax Exemption Certificate">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Tax Exemption Certificate</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
 <b-col class="col-md-4">
       <label for="input-default">Enter Scheme Code:</label>
      <b-form-input id="input-default" placeholder="Scheme Code"></b-form-input>
    
  </b-col>
    </b-row>
    <br>
    <b-row>
   <label class="KRA Pin Certificate">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload KRA Pin Certificate</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label> 
  <b-col class="col-md-4">
      <p>Category</p>
               <select v-model="text">
                 <option disabled value="">Category</option>
                        <option>Pension</option>
                        <option>Provident</option>
                       
              </select>
    
  </b-col>
    </b-row>
    
    <br>
    <b-row>
   <label class="Upload Trustee Deed and Rules">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Trustee Deed and Rules</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
  <b-col class="col-md-4">
      <p>Scheme Type</p>
               <select v-model="text">
                 <option disabled value="">Type</option>
                        <option>Defined Contributions</option>
                        <option>Defined Benefits</option>
                       
              </select>
    
  </b-col>
    </b-row>
    
    <br>
    <b-row>
   <label class="Upload Investment Policy Statement">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Investment Policy Statement</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    </b-row>
                 
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
      <b-button @click="Corporate_Financial_Information()" variant="warning">Next</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
    </base-header>

</template>
<script>
import Corporate_Financial_Information from '../Corporate/Corporate_Financial_Information'
export default {
    components: {
        Corporate_Financial_Information
      
        
    },
    methods: {
      Corporate_Financial_Information(){
        this.$router.push('/corporate_financial_information')
      },      
      }
    }

</script>