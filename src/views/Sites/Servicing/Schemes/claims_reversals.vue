<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
    <!-- The tab pills for navigation purposes -->
	<b-row class="pb-4">
         <div class="col-xl-12 alert alert-secondary">
            <h3>New Withdrawals Table</h3>
         </div>
  </b-row>
  <b-row>
   
         <div class="col-xl-2">
               <p>Scheme</p>
               <select v-model="trust_schemes_reversals">
                 <option disabled value="">Scheme</option>
                  <option>KE001</option>
                  <option>KE002</option>
                  <option>KE003</option>
              </select>
              <span> Choice: {{ trust_schemes_reversals }}</span>
              </div>
                <div class="col-xl-5 ">
               <p>Reversal Document Type</p>
               <select v-model="trust_schemes_reversals">
                 <option disabled value="">Reversal Document Type</option>
                  <option>OPPS WITHDRAWAL ID(Current)</option>
                  <option>OPPS WITHDRAWAL ID(Legacy)</option>
                  <option>OPPS Areas Batch ID</option>
                  <option>OPPS Closing Balances Batch ID</option>
                  <option>OPPS Contriution Batch ID</option>
                  <option>OPPS Transfers in Batch ID</option>
                  <option>OPPS Interest ID [remitted]</option>
                  <option>OPPS Interest ID [unremitted]</option>
                  <option>Trustfund Deposit ID [Legacy]</option>
                  <option>Trustfund Withdrawal ID [Legacy]</option>
                  <option>Trustfund Deposit ID [Split]</option>
                  <option>Trustfund Withdrawal ID [Split]</option>
                  <option>Trustfund Payrol ID [Legacy]</option>
                  <option>Trustfund Payrol ID [Split]</option>

              </select>
              <span> Choice: {{ trust_schemes_reversals }}</span>
              </div>
                <div class="col-xl-5 ">
               <base-input 
              type="number"
              label="Transaction ID"
              placeholder="Transaction ID"
              id="example-date-input"
            >
            </base-input>
              </div>
  </b-row>
  <br>
  <b-row>
    <div class="form group col-lg-12">
                <label for="pet-name" class="control-label">Description</label>
                <textarea type="text" id="pet-bio" name="bio" class="form-control" ></textarea>
            </div>
            
  </b-row>
<br>
    <div class="row">
                <div class="col-lg-6">
          <label for="input-default">Signed Product Application Form</label>
          <input class="form-control" type="file" id="application_document" name="application_document"></div>
                
               <div class="col-lg-6 mt-3">
	<base-button class="mt-3" block @click="$bvModal.hide('modal-1')" type="success">Save Commission Claim</base-button>
               </div>
     </div>
  
  <!-- TABLE STRUCTURE  -->
 <!-- <b-col lg="12" sm="12" xl="12">
            <div style="overflow: scroll;"> 
	  <b-row>
         
          <table class="table table-stripped">
                <thead class="thead-light">

                  <tr>
                    <th scope="col">Move</th>
                    <th scope="col">Stay</th >
                     <th scope="col">Member .no</th>
                     <th scope="col">Member Name</th>
                    <th scope="col">Date Modified</th>
                     <th scope="col">Reason for Exit</th>
                     <th scope="col">EE portion</th>
                     <th scope="col">ER portion</th>
                     <th scope="col">AVC portion</th>
                     <th scope="col">Documents Attached</th>
                  </tr>
	    </thead>
       <tbody  id="myTable">
	      	<tr v-for="(applicant, counter) in space" v-bind:key="counter">
	      		<td>
        		<b-button variant="primary" class=" btn btn-primary btn-lg btn-block">Move</b-button>
              </td>
	      		<td>{{i.stay}}</td>
	      		<td>{{i.member_no}}</td>
            <td>{{i.member_name_new}}</td>
	      		<td>{{i.date_modified}}</td>
	      		<td>{{i.reason_for_exist}}</td>
            <td>{{i.EE_porttion}}</td>
	      		<td>{{i.ER_porttion}}</td>
	      		<td>{{i.AVC_portion}}</td>
				<td>
					<b-button v-b-modal.modal-1 variant="primary" class=" btn btn-primary btn-lg btn-block">Supporting Documents
					</b-button>
          <b-modal id="modal-1" size="lg" title="View Supporting Document" hide-footer>
     <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">
          <template slot="footer">
          </template>
          </stats-card>
     </b-col>
          </b-modal>
				</td>
	   		</tr>
		</tbody>
	  </table>
	                           
	  </b-row>
   </div> 
          </b-col> -->
	<!-- </b-row> -->
    
		<br>
  </card>
</base-header>
</template>

<script>
  export default {
    data() {
      return { 
      }
    }
  }
</script>