<template>
  <div>
    <card>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Tabs for changing products -->
      <b-row>
        <b-col xl="12" md="12">
          <b-card no-body>    
          <b-tabs pills card> 
            <!--Pension Tab-->
             <b-tab title="New Group" active>
               <!--Country select -->
<!--1st row-->
              <b-row>
               <b-col xl="12" md="10">
          <stats-card title="Please Upload the Following"
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                   <b-row>
                       
   <label class="Upload Duly Executed Employer Application">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Duly Executed Employer Application: {{value.name}}</span>
      <span v-else>Duly Executed Employer Application</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
  <label class="Upload Nomination of Beneficiary Forms">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Nomination of Beneficiary Forms: {{value.name}}</span>
      <span v-else>Nomination of Beneficiary Forms</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
  
    </b-row>
    <br>
    <b-row>
   <label class="Upload Duly Executed participating agreement">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Duly Executed participating agreement: {{value.name}}</span>
      <span v-else>Upload Duly Executed participating agreement</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
  <label class="Upload Member Joining Forms">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Member Joining Forms: {{value.name}}</span>
      <span v-else>Member Joining Forms</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    </b-row>
    <br>
    <b-row>
   <label class="Upload Pin Certificate">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Pin Certificate: {{value.name}}</span>
      <span v-else>Pin Certificate</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
  <label class="Upload HR contact Persons">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value"> HR contact Persons: {{value.name}}</span>
      <span v-else> HR contact Persons</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    </b-row>
    
    <br>
    <b-row>
   <label class="Upload Registration Certificate">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Registration Certificate: {{value.name}}</span>
      <span v-else>Registration Certificate</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
  <label class="Upload Management Committee Details">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Management Committee Details: {{value.name}}</span>
      <span v-else>Upload Management Committee Details</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    </b-row>
    
    <br>
    <b-row>
   <label class="Upload Memorandum or Article">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Memorandum or Article: {{value.name}}</span>
      <span v-else>Upload Memorandum or Article</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    </b-row>
                 
  </div>
  
            </template>
          </stats-card>

        </b-col>
<!--end of 1st row--></b-row>
<!--2nd row-->

<!--start of 3rd row -->

<!--end of 3rd row-->


              </b-tab> 
              <!--Insurance Tab-->          
                    <b-tab title="Convert Scheme"><b-card-text>
                      <!--1st row-->
  
             
<!--end of3rd row-->
                    </b-card-text>
                    </b-tab>      
           </b-tabs>  
          </b-card>
        </b-col>
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
      <b-button @click="Umbrella_Scheme_Setup()" variant="warning">Next</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
   
    </base-header>
    </card>
     </div>
</template>
<script>
import Umbrella_Scheme_Setup from './Umbrella_Scheme_Setup.vue'

  export default {
      components:{
          Umbrella_Scheme_Setup
      },
      methods: {
  data() {
    return {
      state:'state',
      country:'',
      currency:'',
      p_category:'',
      p_products:'',
      selected: 'Yes',
      value:'null',
        options: [
          { text: 'Yes', value: 'Yes' },
          { text: 'No', value: 'No' },
        ]

    }
  },
  Umbrella_Scheme_Setup(){
      this.$router.push('/umbrella_scheme_setup')
  }
   }
}
</script>
<style>
</style>