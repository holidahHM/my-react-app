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
                       
   <label class="Member Balances As at Handover">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Member Balances As at Handover</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
  
    
    </b-row>
    <br>
   
    <br>
   
    
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
      <b-button @click="Corporate_Trustee_Documents()" variant="warning">Next</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
    </base-header>

</template>
<script>
import Corporate_Trustee_Documents from '../Corporate/Corporate_Trustee_Documents.vue'
export default {
    components: {
        Corporate_Trustee_Documents
      
        
    },
    methods: {
      Corporate_Trustee_Documents(){
        this.$router.push('/corporate_trustee_documents')
      },      
      }
    }

</script>