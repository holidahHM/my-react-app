<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
   <b-row>
      <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                
                  <div class="row">
           <div class="col-md-6">
      <label for="input-default">Scheme Name</label>
            <b-form-input type="text" placeholder="Scheme Name" readonly></b-form-input>
    </div>
    <div class="col-md-6">
      <label for="input-default">Processing Stage</label>
            <select class="form-control">
                <option>Received Trustee Allowances</option>
                <option>Pending Receipt of Signed Discharge Form</option>
                <option>Pending Sending of Instructions Letter</option>
            </select>  
    </div>
              </div>
              <br>
               <b-row class="float-right pb-4">
	
		  <base-button type="success">Generate View</base-button>
	  </b-row>
              <br>
                 
  </div>
  
            </template>
          </stats-card>

        </b-col>
<!--end of 1st row--></b-row>
   
  </card>
</base-header>
</template>
