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
                       
   <label class="Pending Claim Details">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Pending Claim Details</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    
    </b-row>
    <br>
    <b-row>
   <label class="Trust Fund Details">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Trust Fund Details</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
 
    </b-row>
    <br>
    <b-row>
   <label class="Title documents and Valuation Reports ">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Title documents and Valuation Reports </span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
 
    </b-row>
    
    <br>
    <b-row>
   <label class="Scheme Actuarial Valuation Reports">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Scheme Actuarial Valuation Reports</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    </b-row>
    
    <br>
    <b-row>
   <label class="Upload Remedial Plan">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Remedial Plan</span>
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
      <b-button @click="Beneficiaries()" variant="info">Save</b-button>
      
    </b-button-group>
    </b-col>
     <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Payments()" variant="warning">Finish</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
    </base-header>

</template>