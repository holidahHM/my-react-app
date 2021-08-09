<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
     <div>
  <b-tabs pills>
    <b-tab active>
        <template v-slot:title >
            Initiate Commission Claim
        </template>
        <br>
        <div class="d-flex justify-content-center mb-3" >
        </div>
          <div style="overflow: scroll;"> 
	  <b-row>
	  <b-col xl="6">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">Index</th>
	      <th scope="col">Scheme</th >
			 <th scope="col">Member Name</th>
			 <th scope="col">Product</th>
			 <th scope="col">Amount</th>
			 <th scope="col">Payee</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>James Kimani</td>
	      		<td>Octagon Income Drawdown Fund - Sanlam</td>
	      		<td>Income Drawdown</td>
	      		<td>Sanlam</td>
	      		<td>10,285</td>
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
      <label for="input-default">Scheme Name</label>
            <b-form-input type="text" placeholder="Scheme Name" readonly></b-form-input>
    </div>
           <div class="col-md-3">
      <label for="input-default">Member Name</label>
            <b-form-input type="text" placeholder="Scheme Name" readonly></b-form-input>
    </div>
           <div class="col-md-3">
      <label for="input-default">Member Selection</label>
            <b-form-input type="text" placeholder="Scheme Name" readonly></b-form-input>
    </div>
     </div>
     <br>
      <div class="row">
     <div class="col-md-6">
       <label for="input-default">Member Inputed Service Provider</label>
      <b-form-input type="text" placeholder="ICEA Lion Insurance" readonly></b-form-input>
    </div>
     <div class="col-md-6">
       <label for="input-default">Transaction Amount</label>
      <b-form-input type="text" placeholder="8084587.54" readonly></b-form-input>
    </div>
      </div>
      <br>
      <div class="row">
         <div class="col-md-6">
       <label for="input-default">Select Claimant</label>
      <select class="form-control">
        <option>Select Claimant </option>
        <option>Ann Kagia- Front Office </option>
        <option>Darius Niwaha - Pension Admin </option>
        <option>Dorothy Waswa - Pension Admin</option>
      </select>
    </div>
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
               <div class="col-md-12">
       <label for="input-default">Select Product</label>
      <select class="form-control">
        <option>Octagon Income DrawDown - Sanlam </option>
        <option>CIC Jipange Personal Pension Fund</option>
        <option>Octagon Income DrawDown - Sanlam </option>
      </select>
    </div>
        </div>
        <br>
        <div class="row">
          <h3> Commission Breakdown</h3>
        </div>
       <div class="row">
   <div class="col-md-3">
       <label for="input-default">Commission to Company(%)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
    <div class="col-md-3">
       <label for="input-default">Commission to Company(Ksh)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
    <div class="col-md-3">
       <label for="input-default">Commission to Staff/Agen(%)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
    <div class="col-md-3">
       <label for="input-default">Commission to Staff/Agent(Ksh)</label>
      <b-form-input type="text" placeholder="" readonly></b-form-input>
    </div>
              </div>
              <br>
               <div class="row">
          <h3>Attach Supporting documents</h3>
        </div>
              <div class="row">
                <div class="col-sm-12">
          <label for="input-default">Signed Product Application Form</label>
          <input class="form-control" type="file" id="application_document" name="application_document"></div>
                </div>
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
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
  </div>
    </b-tab>

    <b-tab>
      <template v-slot:title >
         Commission Approvals
      </template>
      <br>
        <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0">Commission Approvals</h3>
            </b-col>
        </div>
        <div style="overflow: scroll;"> 
	  <b-row>
	  <b-col xl="6">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">Index</th>
	      <th scope="col">Commission Applicant</th >
			 <th scope="col">Product Name</th>
			 <th scope="col">Product Type</th>
			 <th scope="col">Provider Name</th>
			 <th scope="col">Commission Amount</th>
       <th scope="col">Commission Approver</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>James Kimani</td>
	      		<td>Octagon Income Drawdown Fund - Sanlam</td>
	      		<td>Income Drawdown</td>
	      		<td>Sanlam</td>
	      		<td>10,285</td>
            <td>jacob.owen</td>
	      		<td>
              <base-button type="success">Review Commission</base-button>
            </td>
	      	</tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
  </div>
    </b-tab>
  </b-tabs>
</div>

  </card>
</base-header>
</template>
<script>
import Commission_Approvals from '../Schemes/Commission_Approvals'
export default {
components:{
  Commission_Approvals
  },
  data() {
    return {
      user: {
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    },
    Commission_Approvals(){
      this.$router.push('/Commission_Approvals')
    }
  }
  
};
</script>