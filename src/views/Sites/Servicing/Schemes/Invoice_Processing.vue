<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
    <div class="row">
      <b-button v-b-modal.modal-1 variant="success"><b-icon icon="card-list" aria-hidden="true"></b-icon> Process Invoice</b-button>
      <b-modal id="modal-1" size="xl" title="Invoice Processing" hide-footer>
     <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                
                  <div class="row">
                     <div class="col-md-8">
      <label for="input-default">Scheme Name</label>
            <b-form-input type="text" placeholder="Scheme Name" readonly></b-form-input>
    </div>
    <div class="col-md-4">
       <label for="input-default">Invoice Date</label>
      <b-form-input type="date" placeholder="From Date"></b-form-input>
    </div>
     </div>
     <br>
       <div class="row">
               <div class="col-md-7">
       <label for="input-default">Service Provider/Payee</label>
      <select class="form-control">
        <option>Cooperative Custodian Services </option>
        <option>Dry Associates Limited</option>
        <option>Equity Bank Custodian Services</option>
      </select>
    </div>
        <div class="col-md-5">
       <label for="input-default">Expense/Fee Type</label>
      <select class="form-control">
        <option>Cooperative Custodian Services </option>
        <option>Dry Associates Limited</option>
        <option>Equity Bank Custodian Services</option>
      </select>
    </div>
        </div>
        <br>
        <div class="row">
         <div class="col-md-4">
       <label for="input-default">Select Bank</label>
      <select class="form-control">
        <option>Cooperative Custodian Services </option>
        <option>Dry Associates Limited</option>
        <option>Equity Bank Custodian Services</option>
      </select>
    </div>
     <div class="col-md-4">
       <label for="input-default">Bank Branch</label>
      <b-form-input type="text" placeholder=""></b-form-input>
    </div>
    <div class="col-md-4">
       <label for="input-default">Bank A/C Number</label>
      <b-form-input type="text" placeholder=""></b-form-input>
    </div>
              </div>
              <br>
              <div class="row">
              
    <div class="col-md-6">
       <label for="input-default">Expense Tittle</label>
      <b-form-input type="text" placeholder=""></b-form-input>
    </div>
    <div class="col-md-6">
        <label for="input-default" class="Upload Invoice">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      
      <span v-else>Upload Invoice</span>
     
    </div>
  
    <!-- Now, the file input that we hide. -->
    <br>
    <input type="file" @change="handleFileChange"/>
  </label>
    </div>
        </div>
        <br>
       <div class="row">
    <div class="col-md-8">
       <label for="input-default">Expense/Fee Description</label>
      <b-form-input type="text" placeholder=""></b-form-input>
    </div>
    <div class="col-md-4">
       <label for="input-default">Amount Due</label>
      <b-form-input type="text" placeholder=""></b-form-input>
    </div>
              </div>
              <br>
                        <div class="row">
       <div class="col-md-11" >
                <h4 class="mb-0">Select Applicable Taxes</h4>
        </div>
              </div>
              <div class="row">
              <div class="col-md-4">
                <b-form-checkbox
      id="checkbox-2"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Withholding Tax
    </b-form-checkbox>
              </div>
      <div class="col-md-4">
      <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      VAT
    </b-form-checkbox>
              </div>
              </div>
              <br>
             <b-row>
               <div class="col-md-4">
	<base-button class="mt-3" block @click="$bvModal.hide('modal-1')" type="success">Save Invoice Details</base-button>
               </div>
	  </b-row>
                 
  </div>
  <br>
  
  
            </template>
          </stats-card>

        </b-col>
  </b-modal>
    </div>
    <br>
    <div class="row">
  <b-tabs pills>
    <b-tab active>
        <template v-slot:title >
            Pending Billing
        </template>
        <br>
        <div class="alert alert-secondary"><h3>Billing Status</h3><p>The table below shows Schemes billing status</p></div>
        <br>
        <div> 
	  <b-row>
	  <b-col xl="12">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">#</th>
	      <th scope="col">Scheme </th >
			 <th scope="col">Billing Frequency</th>
			 <th scope="col">Billing Status</th>
	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>KIANDA SCHOOL STAFF RETIREMENT BENEFITS SCHEME</td>
	      		<td>Monthly</td>
	      		<td style="background-color: green; color: white">Billed</td>
	      	</tr>
			  <tr>
	      		<td>2</td>
	      		<td>FORD FOUNDATION STAFF PROVIDENT FUND</td>
	      		<td>Monthly</td>
	      		<td style="background-color: green; color: white">Billed</td>
			  </tr>
			  <tr>
	      		<td>3</td>
	      		<td>Nairobi Limited Staff Provident Fund</td>
	      		<td>Monthly</td>
	      		<td style="background-color: red; color: white">Not Billed</td>
				  </tr>
           <tr>
	      		<td>4</td>
	      		<td>OCTAGON UMBRELLA RETIREMENT BENEFITS SCHEME</td>
	      		<td>Monthly</td>
	      		<td style="background-color: green; color: white">Billed</td>
			  </tr>
        <tr>
	      		<td>5</td>
	      		<td>MASINDE MULIRO UNIVERSITY SRBS</td>
	      		<td>Monthly</td>
	      		<td style="background-color: red; color: white">Billed</td>
			  </tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
  </div>
    </b-tab>
     <b-tab>
      <template v-slot:title >
         Pending Invoices
      </template>
      
       <br>
      
       <div class="col-xl-12 alert alert-secondary">
         <h3>Billing Status</h3><p>The table below shows Schemes billing status</p>
         </div>
        <br>
    
	
       
  
     </b-tab>
      <b-tab>
      <template v-slot:title >
         Processed Invoices
      </template>
      <br>
       <div class="alert alert-info"><h3>Received Invoices</h3><p>The table below shows new invoices whose information has been entered into the system</p></div>
     </b-tab>
     <b-tab>
      <template v-slot:title >
         Pending Discharge Signing
      </template>
      <br>
      <div class="alert alert-info"><h3>Discharges pending signing by Trustees</h3><p>The table below shows expense discharges that have been forwarded to the trustee portal for signing by trustees</p></div>
     </b-tab>
     <b-tab>
      <template v-slot:title >
         Pending Instruction Dispatch
      </template>
      <br>
      <div class="alert alert-info"><h3>Pending Instruction Letter Dispatch</h3><p>The table below shows expenses pending creation, signing and dispatch of payment instruction letter to the custodian</p></div>
     </b-tab>
     <b-tab>
      <template v-slot:title >
         Pending Date Paid
      </template>
      <br>
      <div class="alert alert-info"><h3>Pending Date Paid</h3><p>The table below shows expenses pending confirmation of payment by the custodian</p></div>
     </b-tab>
       <b-tab>
      <template v-slot:title >
        Paid
      </template>
      <br>
      <div class="alert alert-info"><h3>Paid</h3><p>The table below shows expenses having confirmation of payment by the custodian</p></div>
     </b-tab>
  </b-tabs>
    </div>
      
  </card>
</base-header>
</template>