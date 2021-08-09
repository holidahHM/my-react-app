<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
<b-row>
  <b-col lg="3">
    
  <div>
  <b-button v-b-modal.modal-1 variant="primary">Add Billing Formula</b-button>

  <b-modal id="modal-1" size="lg" title="Add Scheme Billing Formula" hide-footer>
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
      <label for="input-default">Service</label>
            <select class="form-control">
                <option>Administration</option>
                <option>Accouting and Trustee Support Services</option>
                <option>Accouting and Trustee Support Services</option>
                <option>Scheme Corporate Trustee Service</option>
                <option>Scheme Conversion</option>
                <option>Scheme Corporate Principal Officer Services</option>
                <option>Accounting Services</option>
                <option>Secretarial Services</option>
                <option>Trustee Support Services</option>
                <option>Scheme Administration and Accouting Services</option>      
                <option>Administartion Accouting and Trustee Secretarial Services</option>
                <option>Administartion,Accouting and Trustee Support</option>
                <option>Accouting and Secretarial Fees</option>
                <option>Property Management Services</option>
                <option>Pensioners Relationship Management</option>
                <option>Member Education</option>
                <option>Accouting Services</option>
                <option>Strategic Plan Formulation</option>
                <option>Accouting Services</option>
                <option>Scheme Policies Development</option>
                <option>Accouting Services</option>
                <option>Board Charter Development</option>
                <option>Accouting Services</option>
                <option>Property Conference</option>
                <option>Scheme Consultancy</option>
                <option>Pre-Retirement Training</option>
                <option>Project Billing</option>
                <option>Fund Management Fees</option>
                <option>Custody Fees</option>
                <option>Data Reconstruction and Reconcilliation</option>
                <option>Preparation for Investment Policy Statement</option>
                <option>Mortage Policy Creation</option>
            </select>  
    </div>
     </div>
     <br>
      <div class="row">
     <div class="col-md-12">
       <label for="input-default">Billing Formula</label>
      <b-form-input type="text" placeholder=""></b-form-input>
    </div>
              </div>
              <br>
              <div class="row">
               <div class="col-md-6">
       <label for="input-default">Billing Basis</label>
      <select class="form-control">
        <option>Percentage of Fund Value(%Value) </option>
        <option>Value Per Member(KES Value) </option>
        <option>Fixed Amount (KES Value) </option>
        <option>Percentage of Net Asset Valuation(%Value) </option>
        <option>Percentage of Contributions(%Value) </option>
      </select>
    </div>
    <div class="col-md-6">
       <label for="input-default">Basis Value</label>
      <b-form-input type="text" placeholder=""></b-form-input>
    </div>
        </div>
        <br>
       <div class="row">
    <div class="col-md-6">
       <label for="input-default">Period</label>
      <select class="form-control">
        <option>Annually</option>
        <option>Quarterly</option>
        <option>Monthly</option>
      </select>
    </div>
    <div class="col-md-6">
       <label for="input-default">Minimum Amount(currency)</label>
      <b-form-input type="text" placeholder=""></b-form-input>
    </div>
              </div>
              <br>
              <div class="row">
           <div class="col-md-4">
      <label for="input-default">Billing Frequency</label>
            <select class="form-control">
                <option>Annually</option>
                <option>Quarterly</option>
                <option>Monthly</option>
            </select>  
    </div>
    <div class="col-md-4">
      <label for="input-default">Payment Due</label>
            <select class="form-control">
               <option>Annually</option>
                <option>Quarterly</option>
                <option>Monthly</option>
            </select>  
    </div>
     <div class="col-md-4">
      <label for="input-default">VAT</label>
            <select class="form-control">
                <option>VAT Exempt</option>
                <option>16% VAT</option>
                <option>18% VAT</option>
            </select>  
    </div>
     </div>
              <br>
             <b-row>
               <div class="col-md-4">
	<base-button class="mt-3" block @click="$bvModal.hide('modal-1')" type="success">Save Billing Formula</base-button>
               </div>
	  </b-row>
                 
  </div>
  
            </template>
          </stats-card>

        </b-col>
  </b-modal>
</div>
  </b-col>
  <b-col lg="3">
<div>
  <b-button v-b-modal.modal-2 variant="primary">Create Billing Worksheet</b-button>
  <b-modal id="modal-2" size="xl" title="Create Scheme Billing Worksheet" hide-footer>
    <!-- Tabs with card integration -->
    <b-card no-body>
      <b-tabs v-model="tabIndex" small card>
          <b-tab title="Step1: Enter Billing Information">
               <div class="tab-pane active" id="tab1-4">
                                <div class="row">
                                <div class="col-md-6">
       <label for="input-default">Scheme</label>
      <b-form-input type="text" placeholder="Scheme Name" readonly ></b-form-input>
    </div>
    <div class="col-md-3">
       <label for="input-default">From</label>
      <b-form-input type="date" placeholder="From Date"></b-form-input>
    </div>
     <div class="col-md-3">
       <label for="input-default">To</label>
      <b-form-input type="date" placeholder="To Date"></b-form-input>
    </div>
                                </div>
                                <br>
                                   <div class="row">
  <div class="col-md-12">
       <label for="input-default">Billing Tittle</label>
      <b-form-input type="text" placeholder=""  ></b-form-input>
    </div></div>
    <br>
                                <div class="row">
  <div class="col-md-12">
       <label for="input-default">Select Service to be billed</label>
      <b-form-input type="text" placeholder=""  ></b-form-input>
    </div></div>
    <br>
 </div><!-- tab-pane -->

          </b-tab>
        <b-tab title="Step 2: Enter Calculation  Values">
              <div class="tab-pane active" id="tab1-4">
                                <div class="alert alert-info">Please enter all the base values required and click next to preview the billing computation worksheet.</div>
                                <div class="row">
                                <table class="table table-bordered ">
                                  <thead>
                                    <tr><th colspan="6"> Service Description: Administration Accounting and Secretarial Services (3% of total monthly contributions per month)</th></tr>
                                    <tr><th>Period</th><th>Billing Basis</th>
                                    <th>Base Value</th></tr></thead>
                                    <tbody>
                                      <tr>
                                        <td><input type="hidden" style="border: 0px;" class="form-control" required="" name="formula[]" value="%7B%22formula_basis_id%22%3A55%2C%22basis_type_id%22%3A5%2C%22basis_value%22%3A3%2C%22billing_formula_id%22%3A52%2C%22basis_period%22%3A12%2C%22minimum_value%22%3A%22.00%22%2C%22formula_id%22%3A52%2C%22scheme_code%22%3A%22KE013%22%2C%22formula_service_id%22%3A14%2C%22vat%22%3A16%2C%22formula_description%22%3A%223%25%20of%20total%20monthly%20contributions%20per%20month%22%2C%22billing_frequency%22%3A12%2C%22payment_due_frequency%22%3A4%2C%22formula_added_by%22%3A6%2C%22formula_added_on%22%3A%7B%22date%22%3A%222019-01-18%2009%3A47%3A43.660000%22%2C%22timezone_type%22%3A3%2C%22timezone%22%3A%22Africa%2FNairobi%22%7D%2C%22service_provider_id%22%3Anull%2C%22service_id%22%3A14%2C%22service_name%22%3A%22Administration%20Accounting%20and%20Secretarial%20Services%22%2C%22service_description%22%3Anull%2C%22active%22%3A1%2C%22billing_basis_id%22%3A5%2C%22basis_name%22%3A%22Percentage%20of%20Contributions%22%2C%22basis_unit%22%3A%22Total%20Contributions%22%2C%22factor_unit%22%3A%22Percent%22%2C%22factor_unit_symbol%22%3A%22%25%22%7D"><input type="text" style="border: 0px;" required="" name="period[]" id="period_55" value="2021-05"></td> <td style="width: 150px; padding: 10px;">Percentage of Contributions</td><td><input style="border: 0px;" type="text" reqired="" name="base_value[]" id="base_val_55_8377" placeholder="Enter Total Contributions" class="form-control"></td></tr></tbody> </table>
                                </div>

                            </div> 
        </b-tab>
        <b-tab title="Step3: Preview and Send Worksheet">
               <div class="tab-pane active" id="tab1-4">
        <div class="alert alert-info">Ensure all the values are in order and click the green button to save and forward the worksheet to the finance department.</div>
         <table class="table" border="0">
           <thead><tr>
           <th colspan=6> Service Description: Administration Accounting and Secretarial Services (3% of total monthly contributions per month)</th></tr>
           <tr><th>Period</th>
            <th>Billing Basis</th>
             <th>Base Value</th> 
             <th>Base Factor</th>
             <th>Minimum Value</th>
              <th>Fee Payable</th> 
              </tr>
              </thead><tbody>
                </tbody> </table>
               </div>
        </b-tab>
       
        
      </b-tabs>
    </b-card>
  

    <!-- Control buttons-->
    
    <br>
    <div class="row">
        <div class="col-md-4">
      <b-button-group>
        <b-button variant="secondary" @click="tabIndex=-1">Previous</b-button>
      </b-button-group>
        </div>
        <div class="col-md-4">
      <b-button-group>
        <b-button variant="success" @click="tabIndex=+1">Next</b-button>
      </b-button-group>
        </div>

      
    </div>
  </b-modal>
  </div>
  </b-col>
  <b-col lg="3">
<div>
  <b-button v-b-modal.modal-3 variant="primary">One-off Client Billing</b-button>

  <b-modal id="modal-3" size="lg" title="One-Off Client Billing" hide-footer>
    <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                
                  <div class="row">
    <div class="col-md-12">
      <label for="input-default">Client</label>
            <select class="form-control">
                <option>External Client</option>
                <option>Scheme Name</option>
            </select>  
    </div>
     </div>
    <br>
    <div class="row">
       <div class="col-md-6">
       <label for="input-default">Client Name</label>
      <b-form-input type="text" placeholder=""></b-form-input>
    </div>
    <div class="col-md-6">
       <label for="input-default">Service</label>
      <select class="form-control">
        <option>Select Service</option>
       <option>Administration</option>
                <option>Accouting and Trustee Support Services</option>
                <option>Accouting and Trustee Support Services</option>
                <option>Scheme Corporate Trustee Service</option>
                <option>Scheme Conversion</option>
                <option>Scheme Corporate Principal Officer Services</option>
                <option>Accounting Services</option>
                <option>Secretarial Services</option>
                <option>Trustee Support Services</option>
                <option>Scheme Administration and Accouting Services</option>      
                <option>Administartion Accouting and Trustee Secretarial Services</option>
                <option>Administartion,Accouting and Trustee Support</option>
                <option>Accouting and Secretarial Fees</option>
                <option>Property Management Services</option>
                <option>Pensioners Relationship Management</option>
                <option>Member Education</option>
                <option>Accouting Services</option>
                <option>Strategic Plan Formulation</option>
                <option>Accouting Services</option>
                <option>Scheme Policies Development</option>
                <option>Accouting Services</option>
                <option>Board Charter Development</option>
                <option>Accouting Services</option>
                <option>Property Conference</option>
                <option>Scheme Consultancy</option>
                <option>Pre-Retirement Training</option>
                <option>Project Billing</option>
                <option>Fund Management Fees</option>
                <option>Custody Fees</option>
                <option>Data Reconstruction and Reconcilliation</option>
                <option>Preparation for Investment Policy Statement</option>
                <option>Mortage Policy Creation</option>
      </select>
    </div>
    </div>
    <br>
    <div class="row">
       <div class="col-md-11" >
                <h4 class="mb-0">Total Fees Payable</h4>

        </div>
        <div class="h2 mb-0 col-md-1">
    <b-icon-Plus-square></b-icon-plus-square>
  </div>
    </div>
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
  <div class="col-md-8">
       <label for="input-default">Expense/Fee Description</label>
      <b-form-input type="text" placeholder=""></b-form-input>
    </div>
    <div class="col-md-3">
       <label for="input-default">Amount Due</label>
      <b-form-input type="text" placeholder=""></b-form-input>
    </div>
      <div class="h2 mb-0 col-md-1">
    <b-icon-trash></b-icon-trash>
  </div>
    </div>
              <br>
              <div class="row">
       <div class="col-md-11" >
                <h4 class="mb-0">Select Applicable Taxes</h4>
        </div>
              </div>
              <div class="row">
              <div class="col-md-6">
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
      <div class="col-md-6">
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
	<base-button block @click="$bvModal.hide('modal-3')" type="success">Create Worksheet</base-button>
               </div>
	  </b-row>
                 
  </div>
  
            </template>
          </stats-card>

        </b-col>
  </b-modal>
</div>
  </b-col>
  <b-col lg="3">
<div>
  <b-button v-b-modal.modal-4 variant="primary">Add Billing Service</b-button>

  <b-modal id="modal-4" size="lg" title="Add Billing Service" hide-footer>
    <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
    <div class="row">
       <div class="col-md-12">
       <label for="input-default">Billing Service Name</label>
      <b-form-input type="text" placeholder=""></b-form-input>
    </div>
    </div>
    <br>
      <b-row>
               <div class="col-md-4">
	<base-button block @click="$bvModal.hide('modal-4')" type="success" align="right">Save Billing Service</base-button>
               </div>
	  </b-row>
                 
  </div>
  
            </template>
          </stats-card>
    </b-col>
  </b-modal>
</div>
  </b-col>
</b-row>
<br>
   <b-row>
      <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                
                  <div class="row">
                       <div class="col-md-3">
      <label for="input-default">Scheme Name</label>
            <b-form-input type="text" placeholder="Scheme Name" readonly></b-form-input>
    </div>
    <div class="col-md-3">
      <label for="input-default">Select View</label>
            <select class="form-control">
                <option>Billing Formula</option>
                <option>Billing Worksheets</option>
            </select>  
    </div>
   
     <div class="col-md-3">
       <label for="input-default">From</label>
      <b-form-input type="date" placeholder="From Date"></b-form-input>
    </div>
     <div class="col-md-3">
       <label for="input-default">To</label>
      <b-form-input type="date" placeholder="To Date"></b-form-input>
    </div>
              </div>
              <br>
             <b-row class="float-right pb-4">
	
		  <base-button type="success">Generate View</base-button>
	  </b-row>
                 
  </div>
  
            </template>
          </stats-card>

        </b-col>
<!--end of 1st row--></b-row>
  </card>
</base-header>
</template>
<script>
 
</script>
