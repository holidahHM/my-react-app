<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
      <div>
<div class="row">
  <b-col xl="12">
  <b-alert show variant="info"><h3>Member Balance Transactions Bulk Upload</h3><h5>This area is for bulk uploading amounts which affect members' balances.</h5></b-alert>
  </b-col>
 </div>
          <div class="row">
      <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                  <div class="row">
                    <b-col xl="12 alert alert-Secondary">
  <h3>Click the button below to download the template for transactions bulk upload, fill it with the required information and submit it (drag and drop) in the area highlighted below .</h3><b-button variant="success">Download Transactions Upload Template</b-button>
  </b-col>
                  </div>
                  <br>
                
                  <div class="row">
          <div class="col-md-12">
      <label for="input-default">Batch Description</label>
            <b-form-input type="text" placeholder="" ></b-form-input>
    </div>
                  </div>
                  <br>
         <div class="row">        
     <div class="col-sm-6">
          <label for="input-default">Upload Filled Template (ensure file is in .csv format)</label>
          <input class="form-control" type="file" id="excel_file" name=""></div>
           <div class="col-sm-6">
          <label for="input-default">Upload Filled Template</label><br>
          <b-button variant="primary">Upload CSV Template</b-button>
              </div>  
  </div>
              </div>
  
            </template>
          </stats-card>

        </b-col>
<!--end of 1st row--></div>
<br>
        
    </div>
    <br>
  </card>
</base-header>
</template>
<script>
import Insurance_Servicing from '../Schemes/Insurance_Servicing.vue'
export default {
  components:{
    Insurance_Servicing
  },
  methods: {
    Insurance_Servicing(){
      this.$router.push('/Insurance_Servicing')
    }
  },
  data() {
      return {
        tabIndex: 0
      }
    }
}
</script>