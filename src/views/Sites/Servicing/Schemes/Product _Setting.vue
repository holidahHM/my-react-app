<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
    <div class="row">
      <b-button v-b-modal.modal-1 variant="success"><b-icon icon="card-list" aria-hidden="true"></b-icon> Add Commission Product</b-button>
      <b-modal id="modal-1" size="xl" title="Invoice Processing" hide-footer>
     <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                
                  <div class="row">
                       <div class="col-md-12">
       <label for="input-default">Product/Service Provider</label>
      <select class="form-control">
        <option>Select Service Provider</option>
        <option>ICEA Lion Insurance</option>
        <option>Jubilee Insuranvce</option>
      </select>
    </div>
     </div>
     <br>
       <div class="row">
              <div class="col-md-7">
       <label for="input-default">Product Name</label>
      <b-form-input type="text" placeholder=""></b-form-input>
    </div>
        <div class="col-md-5">
       <label for="input-default">Product Type</label>
      <select class="form-control">
        <option>Annuity</option>
        <option>Income Drawdown</option>
        <option>Personal Pension</option>
      </select>
    </div>
        </div>
        <br>
        <div class="row">
          <h3> Commission Details</h3>
        </div>
        <div class="row">
     <div class="col-md-4">
       <label for="input-default">Commission to Company(%)</label>
      <b-form-input type="text" placeholder=""></b-form-input>
    </div>
    <div class="col-md-4">
       <label for="input-default">Commission to Staff/Agent(%)</label>
      <b-form-input type="text" placeholder=""></b-form-input>
    </div>
              </div>
              <br>
              
        <div class="row">
          <h3> Product Bank Details</h3>
        </div>
              <div class="row">
                   <div class="col-md-5">
       <label for="input-default">Select Bank</label>
      <select class="form-control">
        <option>Cooperative</option>
        <option>Credit Bank Limited</option>
        <option>Family Bank Limited</option>
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
       <div class="col-md-11" >
                <h3 class="mb-0">Product Commission Claim Supporting Documents</h3>
        </div>
              </div>
              <div class="row">
            <div class="col-md-12">
       <label for="input-default">Required Supporting Document for Claims ( seperate with comma)</label>
      <b-form-input type="text" placeholder="product application form,"></b-form-input>
    </div>
      
              </div>
              <br>
             <b-row>
               <div class="col-md-4">
	<base-button class="mt-3" block @click="$bvModal.hide('modal-1')" type="success">Save</base-button>
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
    <div style="overflow: scroll;"> 
	  <b-row>
	  <b-col xl="6">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">Index</th>
			 <th scope="col">Product Name</th>
			 <th scope="col">Product Type</th>
			 <th scope="col">Provider Name</th>
			 <th scope="col">Commission to Company(%)</th>
              <th scope="col">Commission to Agent(%)</th>
       <th scope="col">Active</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>Octagon Income Drawdown Fund - Sanlam</td>
	      		<td>Income Drawdown</td>
	      		<td>Sanlam</td>
	      		<td>10</td>
                 <td>10</td> 
            <td>Yes</td>
	      		<td>
              <base-button type="info">Edit</base-button>
            </td>
	      	</tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
  </div>    
  </card>
</base-header>
</template>