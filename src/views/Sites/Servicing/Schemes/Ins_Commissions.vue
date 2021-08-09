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
                     <div class="col-md-3">
       <label for="input-default">Start Date</label>
      <b-form-input type="date" placeholder="Start Date"></b-form-input>
    </div>
     <div class="col-md-3">
       <label for="input-default">End Date</label>
      <b-form-input type="date" placeholder="End Date"></b-form-input>
    </div>
    <div class="col-md-3">
      <label for="input-default">Agent Name</label>
            <select class="form-control">
                <option>Davis Ongiro</option>
                <option>Moses Koyo</option>
            </select>  
    </div>
    <div class="col-md-3">
    <b-button variant="success">Download Commissions Upload Template</b-button></div>
              </div>
              <br>
    <div class="row">
      <div class="col-sm-6">
          <label for="input-default">Upload Filled Template</label>
          <input class="form-control" type="file" id="excel_file" name=""></div>
           <div class="col-md-6">
             <label for="input-default"></label><br>
    <b-button variant="primary">Upload Commissions Template</b-button></div>
              </div>
    </div>
            </template>
          </stats-card>

        </b-col>
</b-row>
<br>
<br>
   <b-row>
      <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                <div style="overflow: scroll;">
                  <b-row>
	  <b-col xl="12">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">#</th>
			 <th scope="col">Date Received</th>
			 <th scope="col">Client</th>
			 <th scope="col">Payment Mode</th>
			 <th scope="col">Transaction Code</th>
			 <th scope="col">Premium Paid</th>
       <th scope="col">Commission to Agent</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>0</td>
	      		<td>2021-05-13</td>
	      		<td>Ron Naj</td>
	      		<td>M-PESA</td>
	      		<td>OIE6J7SCVE</td>
	      		<td>5500.00</td>
            <td>550.00</td>


  <td>
              <base-button v-b-modal.modal-1 type="info">Initiate Commission Claim</base-button>
                <b-modal id="modal-1" size="lg" title="Initiate Commission Claim" hide-footer>
     <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                
                  <div class="row">
                     <div class="col-md-6">
      <label for="input-default">Client/Member  Name</label>
            <b-form-input type="text" placeholder="Member Name" readonly></b-form-input>
    </div>
           <div class="col-md-6">
      <label for="input-default">Agent Name</label>
            <b-form-input type="text" placeholder="Agent Name" ></b-form-input>
    </div>
     </div>
     <br>
      <div class="row">
     <div class="col-md-6">
       <label for="input-default">Underwriter Gross</label>
      <b-form-input type="text" placeholder="Ksh" ></b-form-input>
    </div>
     <div class="col-md-6">
       <label for="input-default">Underwriter Net</label>
      <b-form-input type="text" placeholder="Ksh" ></b-form-input>
    </div>
      </div>
      <br>
        <div class="row">
     <div class="col-md-6">
       <label for="input-default">Admin Fee</label>
      <b-form-input type="text" placeholder="Ksh" ></b-form-input>
    </div>
     <div class="col-md-6">
       <label for="input-default">Tax(%)</label>
      <b-form-input type="text" placeholder="" ></b-form-input>
    </div>
      </div>
      <br>
      <div class="row">
         <div class="col-md-6">
       <label for="input-default">Approver</label>
      <select class="form-control">
        <option>Select Approver</option>
        <option>Godwin Simba</option>
        <option>Caroline Kisilu</option>
      </select>
    </div>
              </div>
        <br>
        <div class="row">
          <h3> Commission Breakdown</h3>
        </div>
       <div class="row">
   <div class="col-md-3">
       <label for="input-default">Commission to Agent(%)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
    <div class="col-md-3">
       <label for="input-default">Commission to Agent(Ksh)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
    <div class="col-md-3">
       <label for="input-default">Commission to Octagon(%)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
    <div class="col-md-3">
       <label for="input-default">Commission to Octagon(Ksh)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
              </div>
              <br>
             <b-row>
               <div class="col-md-4">
	<base-button class="mt-3" block @click="$bvModal.hide('modal-1')" type="success">Save Commission Claim</base-button>
               </div>
	  </b-row>
                 
  </div>
  
            </template>
          </stats-card>

        </b-col>
  </b-modal>
            </td>
	      	</tr>
		 	<tr>
	      		<td>1</td>
	      		<td>2021-05-13</td>
	      		<td>NYABUTO EVANS MANYANGE</td>
	      		<td>M-PESA</td>
            <td>PZE6J7SCVE</td>
	      		<td>5500.00</td>
	      		<td>550.00</td>

  	<td>
              <base-button v-b-modal.modal-2 type="info">Initiate Commission Claim</base-button>
                <b-modal id="modal-2" size="lg" title="Initiate Commission Claim" hide-footer>
     <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                
                  <div class="row">
                     <div class="col-md-6">
      <label for="input-default">Client/Member  Name</label>
            <b-form-input type="text" placeholder="Member Name" readonly></b-form-input>
    </div>
           <div class="col-md-6">
      <label for="input-default">Agent Name</label>
            <b-form-input type="text" placeholder="Agent Name" ></b-form-input>
    </div>
     </div>
     <br>
      <div class="row">
     <div class="col-md-6">
       <label for="input-default">Underwriter Gross</label>
      <b-form-input type="text" placeholder="Ksh" ></b-form-input>
    </div>
     <div class="col-md-6">
       <label for="input-default">Underwriter Net</label>
      <b-form-input type="text" placeholder="Ksh" ></b-form-input>
    </div>
      </div>
      <br>
        <div class="row">
     <div class="col-md-6">
       <label for="input-default">Admin Fee</label>
      <b-form-input type="text" placeholder="Ksh" ></b-form-input>
    </div>
     <div class="col-md-6">
       <label for="input-default">Tax(%)</label>
      <b-form-input type="text" placeholder="" ></b-form-input>
    </div>
      </div>
      <br>
      <div class="row">
         <div class="col-md-6">
       <label for="input-default">Approver</label>
      <select class="form-control">
        <option>Select Approver</option>
        <option>Godwin Simba</option>
        <option>Caroline Kisilu</option>
      </select>
    </div>
              </div>
        <br>
        <div class="row">
          <h3> Commission Breakdown</h3>
        </div>
       <div class="row">
   <div class="col-md-3">
       <label for="input-default">Commission to Agent(%)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
    <div class="col-md-3">
       <label for="input-default">Commission to Agent(Ksh)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
    <div class="col-md-3">
       <label for="input-default">Commission to Octagon(%)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
    <div class="col-md-3">
       <label for="input-default">Commission to Octagon(Ksh)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
              </div>
              <br>
             <b-row>
               <div class="col-md-4">
	<base-button class="mt-3" block @click="$bvModal.hide('modal-2')" type="success">Save Commission Claim</base-button>
               </div>
	  </b-row>
                 
  </div>
  
            </template>
          </stats-card>

        </b-col>
  </b-modal>
            </td>
	      	</tr>
		 	<tr>
	      		<td>2</td>
	      		<td>2021-05-17</td>
	      		<td>JOYCE ATIENO OOMA</td>
	      		<td>M-PESA</td>
	      		<td>PEC8UTJSFW</td>
	      		<td>5500.00</td>
            <td>550.00</td>

 	<td>
              <base-button v-b-modal.modal-3 type="info">Initiate Commission Claim</base-button>
                <b-modal id="modal-3" size="lg" title="Initiate Commission Claim" hide-footer>
     <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                
                  <div class="row">
                     <div class="col-md-6">
      <label for="input-default">Client/Member  Name</label>
            <b-form-input type="text" placeholder="Member Name" readonly></b-form-input>
    </div>
           <div class="col-md-6">
      <label for="input-default">Agent Name</label>
            <b-form-input type="text" placeholder="Agent Name" ></b-form-input>
    </div>
     </div>
     <br>
      <div class="row">
     <div class="col-md-6">
       <label for="input-default">Underwriter Gross</label>
      <b-form-input type="text" placeholder="Ksh" ></b-form-input>
    </div>
     <div class="col-md-6">
       <label for="input-default">Underwriter Net</label>
      <b-form-input type="text" placeholder="Ksh" ></b-form-input>
    </div>
      </div>
      <br>
        <div class="row">
     <div class="col-md-6">
       <label for="input-default">Admin Fee</label>
      <b-form-input type="text" placeholder="Ksh" ></b-form-input>
    </div>
     <div class="col-md-6">
       <label for="input-default">Tax(%)</label>
      <b-form-input type="text" placeholder="" ></b-form-input>
    </div>
      </div>
      <br>
      <div class="row">
         <div class="col-md-6">
       <label for="input-default">Approver</label>
      <select class="form-control">
        <option>Select Approver</option>
        <option>Godwin Simba</option>
        <option>Caroline Kisilu</option>
      </select>
    </div>
              </div>
        <br>
        <div class="row">
          <h3> Commission Breakdown</h3>
        </div>
       <div class="row">
   <div class="col-md-3">
       <label for="input-default">Commission to Agent(%)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
    <div class="col-md-3">
       <label for="input-default">Commission to Agent(Ksh)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
    <div class="col-md-3">
       <label for="input-default">Commission to Octagon(%)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
    <div class="col-md-3">
       <label for="input-default">Commission to Octagon(Ksh)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
              </div>
              <br>
             <b-row>
               <div class="col-md-4">
	<base-button class="mt-3" block @click="$bvModal.hide('modal-3')" type="success">Save Commission Claim</base-button>
               </div>
	  </b-row>
                 
  </div>
  
            </template>
          </stats-card>

        </b-col>
  </b-modal>
            </td>
	      	</tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
                </div>
              
                 
  </div>
  
            </template>
          </stats-card>

        </b-col>
<!--end of 1st row--></b-row>
  </card>
</base-header>
</template>
<script></script>