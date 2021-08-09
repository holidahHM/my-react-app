<template>
            <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <div>
        <b-tabs pills card>
          <b-tab title="PENSION" active>
            <b-form @submit.prevent="updateProfile">
<div>
     <b-tabs pills card>
            <!--Pension Tab-->
             <!-- <b-tab title="WITHDRAWALS" active>
                <b-form @submit.prevent="updateProfile">

    <b-card no-body>
      <b-row>
       <b-col xl='12' md="12" sm='12'>
              <p>Type of withdrawal</p>
               <select v-model="withdrawal">
               <option disabled value='' >Select the type of withdrawal</option>
               <option  >Online Withdrawals</option>
               <option >Manual Withdrawals</option>
              </select>
              <span> Choice:{{ withdrawal }}</span>
          </b-col>
      </b-row>
      <b-tabs  v-model="tabIndex" small card>
            <b-tab v-if="withdrawal ==='Online Withdrawals'" title="Pending HR approval">
               <b-row>
            <b-col lg="12" sm="12" xl="12">
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
	      	<tr v-for="i in online" >
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
          </b-col>
          </b-row> 
          </b-tab>

          <b-tab v-if="withdrawal ==='Online Withdrawals'"  title="Pending Administration Approval">
            <b-tabs>
               <b-tab title="Pending Checking">
                   <b-row>
            <b-col lg="12" sm="12" xl="12">
            <div style="overflow: scroll;"> 
                 	  <b-row>
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">Move</th>
	      <th scope="col">Stay</th >
		  <th scope="col">Member .no</th>
		  <th scope="col">Member Name</th>
        <th scope="col">worksheet</th>
          <th scope="col">statements</th>
            <th scope="col">view documents</th>
             <th scope="col">next step</th>
	      </tr>
	    </thead>
       <tbody  id="myTable">
	      	<tr v-for="i in online" >
	      		<td>
        		<b-button variant="primary" class=" btn btn-primary btn-lg btn-block">Move</b-button>
              </td>
	      		<td>{{i.stay}}</td>
	      		<td>{{i.member_no}}</td>
            <td>{{i.member_name_new}}</td>
	      		<td>
              <b-button variant="primary" class=" btn btn-primary btn-lg btn-block">View Worksheet
					</b-button>
          </td>
	      		<td>
              <b-button variant="primary" class=" btn btn-primary btn-lg btn-block">View Worksheet
					</b-button>
          </td>
            <td>
              <b-button variant="primary" class=" btn btn-primary btn-lg btn-block">Supporting Documents
					</b-button>
          </td>
	      		<td>
              <b-button variant="primary" class=" btn btn-primary btn-lg btn-block">Check
					</b-button>
          </td>
	      	
	   		</tr>
		</tbody>
	  </table>
    </b-row>
            </div>
            </b-col>
                   </b-row>
               </b-tab>
               <b-tab title="Pending Approval">
                    <b-row>
            <b-col lg="12" sm="12" xl="12">
            <div style="overflow: scroll;"> 
                 	  <b-row>
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
		  <th scope="col">Member .no</th>
		  <th scope="col">Member Name</th>
        <th scope="col">View worksheets</th>
          <th scope="col">View Documents</th>
             <th scope="col">next step</th>
	      </tr>
	    </thead>
       <tbody  id="myTable">
	      	<tr v-for="i in online" >
	      		<td>{{i.member_no}}</td>
            <td>{{i.member_name_new}}</td>
	      		<td>
              <b-button variant="primary" class=" btn btn-primary btn-lg btn-block">View Worksheet
					</b-button>
          </td>
            <td>
              <b-button variant="primary" class=" btn btn-primary btn-lg btn-block">Supporting Documents
					</b-button>
          </td>
	      		<td>
              <b-row>
                <b-col xl="6">
              <b-button variant="primary" class=" btn btn-primary btn-lg btn-block">Check
					</b-button>
          </b-col>
            <b-col xl="6">
              <b-button variant="primary" class=" btn btn-primary btn-lg btn-block"> Un Check
					</b-button>
          </b-col>
              </b-row>
          </td>
	      	
	   		</tr>
		</tbody>
	  </table>
    </b-row>
            </div>
            </b-col>
                   </b-row>
             
               </b-tab>
            </b-tabs>
               <div class="tab-pane active" id="tab1-4">
               </div>
          </b-tab>
          <b-tab v-if="withdrawal ==='Manual Withdrawals'" title="Received Withdrawals">
               <div class="tab-pane active" id="tab1-4">
                              <b-row>
            <b-col lg="12" sm="12" xl="12">
            <!-- <div style="overflow: scroll;">  -->
	  <!-- <b-row>
      <div class="col-xl-12 alert alert-secondary">
         <h3>New Withdrawals Table</h3><p>The table below shows new withdrawals whose information has been entered into the system</p>
         </div>
<table class="table table-stripped">
	
No new withdrawal notification forms have been processed.

  <td>

    </td>
	  </table>
	                           
	  </b-row> -->
   <!-- </div>  -->
          <!-- </b-col>
          </b-row> 
</div>
          </b-tab>
         
          <b-tab v-if="withdrawal ==='Manual Withdrawals'"  title="Pending Forwarding to Trustees">
               <div class="tab-pane active" id="tab1-4">
                      <div class="tab-pane active" id="tab1-4">
                              <b-row>
            <b-col lg="12" sm="12" xl="12"> -->
            <!-- <div style="overflow: scroll;">  -->
	  <!-- <b-row>
      <div class="col-xl-12 alert alert-secondary">
         <h3>Forward Discharge To Trustees</h3>
         <p>Use checkbox to add/remove individual withdrawal requests from batch. Click the relevant"Email Batch" button to batch, preview email and send notification to trustees.</p>
         </div>
<table class="table table-stripped">
	
No pending member exit notifications for trustees.

  <td>

    </td>
	  </table>
	                           
	  </b-row> -->
   <!-- </div>  -->
          <!-- </b-col>
          </b-row> 
</div>
               </div>
          </b-tab>
           <b-tab v-if="withdrawal ==='Online Withdrawals'"  title="Pending Trustees Approval">
               <div class="tab-pane active" id="tab1-4">
                   <b-row>
            <b-col lg="12" sm="12" xl="12">
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
            <th scope="col">Trustee signatory 1</th>
             <th scope="col">Trustee signatory 2</th>
               <th scope="col">Documents Attached</th>
	      </tr>
	    </thead>
       <tbody  id="myTable">
	      	<tr v-for="i in online" >
	      		<td>
        		<b-button variant="primary" class=" btn btn-primary btn-lg btn-block">Move</b-button>
              </td>
	      		<td>{{i.stay}}</td>
	      		<td>{{i.member_no}}</td>
            <td>{{i.member_name_new}}</td>
	      		<td>{{i.date_modified}}</td>
	      		<td>{{i.reason_for_exist}}</td>
            <td>{{i.trustee_sig_1}}</td>
	      		<td>{{i.trustee_sig_1}}</td>
	      		
				<td>
					<b-button variant="primary" class=" btn btn-primary btn-lg btn-block">View Documents
					</b-button>
				</td>
	   		</tr>
		</tbody>
	  </table>
    </b-row>
            </div>
            </b-col>
                   </b-row>
             
               </div> -->
          <!-- </b-tab>
          <b-tab v-if="withdrawal ==='Manual Withdrawals'" title="Pending Discharge Signing">
               <div class="tab-pane active" id="tab1-4">
                      <div class="tab-pane active" id="tab1-4">
                              <b-row>
            <b-col lg="12" sm="12" xl="12"> -->
            <!-- <div style="overflow: scroll;">  -->
	  <!-- <b-row>
      <div class="col-xl-12 alert alert-secondary">
         <h3>Receive Signed Discharge Form</h3>
         <p>The table below shows (if any) the withdrawals which are pending reciept of signed discharge forms from trustees.</p>
         </div>
<table class="table table-stripped">
	
No discharge forms pending signing.

  <td>

    </td>
	  </table>
	                           
	  </b-row>
   </div>  -->
          <!-- </b-col>
          </b-row> 
</div>
               </div>
          </b-tab>
          <b-tab v-if="withdrawal ==='Online Withdrawals'"  title="Pending Custodian payment Instruction">
               <div class="tab-pane active" id="tab1-4">
                   <b-row>
            <b-col lg="12" sm="12" xl="12">
            <div style="overflow: scroll;"> 
                           	  <b-row>
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">Move</th>
	      <th scope="col">Stay</th >
		  <th scope="col">Member .no</th>
		  <th scope="col">Member Name</th>
        <th scope="col">Date Notified by HR</th>
          <th scope="col">Reason for Exit</th>
            <th scope="col">Trustee signatory 1</th>
             <th scope="col">Trustee signatory 2</th>
              <th scope="col">Discharge Date</th>
               <th scope="col">Documents Attached</th>
	      </tr>
	    </thead>
       <tbody  id="myTable">
	      	<tr v-for="i in online" >
	      		<td>
        		<b-button variant="primary" class=" btn btn-primary btn-lg btn-block">Move</b-button>
              </td>
	      		<td>{{i.stay}}</td>
	      		<td>{{i.member_no}}</td>
            <td>{{i.member_name_new}}</td>
	      		<td>{{i.date_modified}}</td>
	      		<td>{{i.reason_for_exit}}</td>
            <td>{{i.trustee_sig_1}}</td>
	      		<td>{{i.trustee_sig_1}}</td>
            <td>{{i.date_discharged}}</td>
				<td>
					<b-button variant="primary" class=" btn btn-primary btn-lg btn-block">View Documents
					</b-button>
				</td>
	   		</tr>
		</tbody>
	  </table>
    </b-row>
            </div>
            </b-col>
                   </b-row>
             
               </div>
          </b-tab>
           <b-tab v-if="withdrawal ==='Manual Withdrawals'"  title="Pending Payment Letter Creation">
               <div class="tab-pane active" id="tab1-4">
                      <div class="tab-pane active" id="tab1-4">
                              <b-row>
            <b-col lg="12" sm="12" xl="12"> -->
            <!-- <div style="overflow: scroll;">  -->
	  <!-- <b-row>
      <div class="col-xl-12 alert alert-secondary">
         <h3>Create Payment Requisition Letter</h3>
         <p>Use checkbox to add/remove individual withdrawal requests to/from batch. Click "Create Batch Letter" button to batch selected requests in one letter</p>
         </div>
<table class="table table-stripped">
	
No withdrawals pending creation of payment requisition letters.

  <td>

    </td>
	  </table>
	                           
	  </b-row> -->
   <!-- </div>  -->
          <!-- </b-col>
          </b-row> 
</div>
               </div>
          </b-tab>
           <b-tab v-if="withdrawal ==='Manual Withdrawals'"  title="Pending Payment Letter Signing">
               <div class="tab-pane active" id="tab1-4">
                      <div class="tab-pane active" id="tab1-4">
                              <b-row>
            <b-col lg="12" sm="12" xl="12">
            <div style="overflow: scroll;">  -->
	  <!-- <b-row>
      <div class="col-xl-12 alert alert-secondary">
         <h3>Upload and Forward Payment Requisition Letter</h3>
         <p>The list below shows payment requisition letters that are pending approval by administrator signatories and forwarding to the Custodian.</p>
         </div>
<table class="table table-stripped">
 <thead class="thead-light">
	      <tr>
	      <th scope="col">Letter Ref</th>
		  <th scope="col">Member Name</th>
        <th scope="col">Created on</th>
          <th scope="col">Created by</th>
            <th scope="col">Next Process</th>
	      </tr>
	    </thead>
       <tbody  id="myTable">
	      	<tr v-for="i in online" >
	      		<td>{{i.letter_ref}}</td>
            <td>{{i.member_name_new}}</td>
	      		<td>{{i.date_modified}}</td>
	      		<td>{{i.created_by}}</td>
				<td>
					<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
					<b-dropdown-item >Upload Letter </b-dropdown-item> opens up a modal -->
					<!-- <b-dropdown-item >Download Letter</b-dropdown-item>
          <b-dropdown-item >Reverse Letter</b-dropdown-item>
					</b-dropdown>
				</td>
	   		</tr>
		</tbody>
	  </table>
	                           
	  </b-row> -->
   <!-- </div>  -->
          <!-- </b-col>
          </b-row> 
</div>
               </div>
          </b-tab>
             <b-tab v-if="withdrawal ==='Online Withdrawals'"  title="Pending Date Paid">
               <div class="tab-pane active" id="tab1-4">
                   <b-row>
            <b-col lg="12" sm="12" xl="12">
            <div style="overflow: scroll;"> 
          
                <b-row>
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">Stay</th >
		  <th scope="col">Member .no</th>
		  <th scope="col">Member Name</th>
          <th scope="col">Requisition Letter Sent On :</th>
            <th scope="col">Letter Sent By:</th>
            <th scope="col">Enter Paid Date:</th>
	      </tr>
	    </thead>
       <tbody  id="myTable">
	      	<tr v-for="i in online" >
	      		<td>{{i.stay}}</td>
	      		<td>{{i.member_no}}</td>
            <td>{{i.member_name_new}}</td>
	      		<td>{{i.date_modified}}</td>
	      		<td>{{i.sent_by}}</td>
            <td>	<b-button variant="primary" class=" btn btn-primary btn-lg btn-block">Save Date Paid 
					</b-button>
          </td>

				<td>
					<b-button variant="primary" class=" btn btn-primary btn-lg btn-block">Edit Claim cycle dates
					</b-button>
				</td>
	   		</tr>
		</tbody>
	  </table>
    </b-row>
            </div>
            </b-col>
                   </b-row>
             
               </div>
          </b-tab>
               <b-tab v-if="withdrawal ==='Manual Withdrawals'"  title="Pending Payment">
               <div class="tab-pane active" id="tab1-4">
                      <div class="tab-pane active" id="tab1-4">
                              <b-row>
            <b-col lg="12" sm="12" xl="12">
             <div style="overflow: scroll;">  
	  <b-row>
      <div class="col-xl-12 alert alert-secondary">
         <h3>New Withdrawals Table</h3><p>The table below shows new withdrawals whose information has been entered into the system</p>
         </div>
<table class="table table-stripped">
 <thead class="thead-light">
	      <tr>
	      <th scope="col">Member No.</th>
		  <th scope="col">Member Name</th>
         <th scope="col">Scheme Name</th>
          <th scope="col">Requisition letter sent on</th>
            <th scope="col">Letter sent by</th>
             <th scope="col">Enter paid date</th>
	      </tr>
	    </thead>
       <tbody  id="myTable">
	      	<tr v-for="i in online" >
	      		<td>{{i.letter_ref}}</td> -->
            <!-- <td>{{i.member_name_new}}</td>
            <td>{{i.scheme_name}}</td>
	      		<td>{{i.date_modified}}</td>
	      		<td>{{i.created_by}}</td>
				<td>
					<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
					<b-dropdown-item >Upload Letter </b-dropdown-item> <!--opens up a modal -->
					<!-- <b-dropdown-item >Download Letter</b-dropdown-item>
          <b-dropdown-item >Reverse Letter</b-dropdown-item>
					</b-dropdown>
				</td>
	   		</tr>
		</tbody> -->
	  <!-- </table> --> 
	  <!-- </table> -->
	                           
	  <!-- </b-row>
   </div> 
          </b-col>
          </b-row> 
</div>
               </div>
          </b-tab>
         <b-tab title="Paid Withdrawals">
               <div class="tab-pane active" id="tab1-4">
                   <b-row>
            <b-col lg="12" sm="12" xl="12">
            <div style="overflow: scroll;"> 
                  	  <b-row> -->
<!-- This section will be used to fit all the filters that will be used in the below table -->
<!-- <b-col lg="4" sm='4' md='4' class="mb-4" > -->
 <!-- <button -->
   <!-- <p>Filters</p>
   <base-button  icon type="primary"  @click="sort('withdrawal_type')" >Online/Manual</base-button>
   
</b-col>                               
                               </b-row>
                           	  <b-row>                              
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
          <th scope="col" >Type</th>
	      <th scope="col" >Memb. No.</th>
	      <th scope="col" >Member Name</th >
        <th scope="col" >Date Received from Trustees</th>
          <th scope="col" >Date sent to Custodian</th>
            <th scope="col" >Date Paid</th>
             <th scope="col" >Date Notified</th>
		  <th scope="col" >Date DV sent to Trustees</th>
	      </tr>
	    </thead>
       <tbody  id="myTable">
	      	<tr v-for="i in sortedProducts" >
	      		<td>{{i.withdrawal_type}}</td>
	      		<td>{{i.member_no}}</td>
            <td>{{i.member_name_new}}</td>
            <td>{{i.date_discharged}}</td>
	      		<td>{{i.date_modified}}</td>
            <td>{{i.date_PAID}}</td>
            		<td>PENDING</td>
	      		<td>PENDING</td>
	   		</tr>
		</tbody>
	  </table>
    </b-row>
            </div>
            </b-col>
                   </b-row>
             
               </div>
          </b-tab>
      </b-tabs>
    </b-card>
   -->

    <!-- Control buttons-->
<!--     
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
</b-form>
 </b-tab> --> 
            <!-- 2ND TAB -->
                 <b-tab title="RECOMPUTE WITHDRAWALS">
                    <b-form @submit.prevent="updateProfile">
                        <h4>HR SUBMITTED AMMENDMENTS</h4>
<!--Content of  Manual Withdrawals -->
 <!-- Tabs with card integration -->
    <b-row>
            <b-col lg="12" sm="12" xl="12">
           <!-- <div style="overflow: scroll;">  -->
	  <b-row>
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">Scheme</th>
	      <th scope="col">Member Name</th >
		  <th scope="col">Withdrawal ID</th>
		  <th scope="col">View Ammendments</th>
	      </tr>
	    </thead>
       <tbody  id="myTable">
	      	<tr v-for="i in items" >
	      		<td>{{i.scheme}}</td>
	      		<td>{{i.member_name}}</td>
	      		<td>{{i.withdrawal_id}}</td>
				<td>
					<b-button variant="primary" class=" btn btn-primary btn-lg btn-block">View Ammendments and Recomputation
					</b-button>
				</td>
	   		</tr>
		</tbody>
	  </table>
	                           
	  </b-row>
  <!-- </div> -->
          </b-col>
          </b-row>
    
</b-form>
                </b-tab>
                <!-- 4TH TAB -->
               <b-tab title="C.P.O CLIENT WITHDRAWALS">
                  <b-form @submit.prevent="updateProfile">
<!--Content of  Manual Withdrawals -->
 <!-- Tabs with card integration -->
   <b-col xl="12">
      <b-button variant="primary" class=" btn btn-primary btn-lg btn-block">Add a CPO claim</b-button>
      </b-col>
      <br>
    <b-card no-body>
      <b-tabs v-model="tabIndex" small card>
          <b-tab title="Pending Administrator Notification">
                 <div class="tab-pane active" id="tab1-4">
                              <b-row>
            <b-col lg="12" sm="12" xl="12">
             <div style="overflow: scroll;"> 
	  <b-row>
      <div class="col-xl-12 alert alert-secondary">
         <h3>Withdrawals Pending Administrator Notification</h3>
         <p>This area shows the CPO client withdrawals that are pending request of computation worksheets from the administrator</p>
         </div>
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
		  <th scope="col">Member .no</th>
		  <th scope="col">Member Name</th>
          <th scope="col">Date notified</th>
            <th scope="col">Reason for Exit</th>
            <th scope="col">Notification form</th>
            <th scope="col">Action</th>
	      </tr>
	    </thead>
       <tbody  id="myTable">
         <tr>
           <td colspan="6" class="col-xl-12 alert alert-secondary">
             <h3>Standard Chartered Bank Kenya Staff Retirement Benefits Scheme 2006  &ensp;  <base-button icon type="primary" class=" mx-4  w-15">Forward to Administrator</base-button></h3>
           </td>
           </tr>
	      	<tr v-for="i in online" >
	      		<td>{{i.member_no}}</td>
            <td>{{i.member_name_new}}</td>
	      		<td>{{i.date_notified}}</td>
	      		<td>{{i.reason_for_exit}}</td>
            <td>	<b-button variant="primary" class=" btn btn-primary btn-lg btn-block">Notification form
					</b-button></td>
				<td>
					  <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
    >
     
    </b-form-checkbox>
				</td>
	   		</tr>
		</tbody>
	  </table>
	                           
	  </b-row>
    </div>  
          </b-col>
          </b-row> 
</div>
          </b-tab>
          <b-tab title="Pending Receipt of Worksheets">
               <div class="tab-pane active" id="tab1-4">
                                      <b-row>
            <b-col lg="12" sm="12" xl="12">
             <div style="overflow: scroll;"> 
	  <b-row>
      <div class="col-xl-12 alert alert-secondary">
         <h3>Withdrawals Pending Receipt of Worksheets</h3>
         <p>This area shows the CPO client withdrawals that are pending receiving of computation worksheets earlier requested from the administrator</p>
       <table class="table table-stripped">
	    <thead class="thead-light">
        <p>
There are no CPO client withdrawals pending receipt of worksheets from the scheme administrator.
</p>
      </thead>
       </table>
         </div>
    </b-row>
             </div>
            </b-col>
                                      </b-row>

               </div>
          </b-tab>
          <b-tab title="Pending Forwarding of Payment Requisitions">
                      <div class="tab-pane active" id="tab1-4">
                                      <b-row>
            <b-col lg="12" sm="12" xl="12">
             <div style="overflow: scroll;"> 
	  <b-row>
      <div class="col-xl-12 alert alert-secondary">
         <h3>Withdrawals Pending Forwarding of Requisition Letter</h3>
         <p>This area shows the CPO client withdrawals that are pending creation, signing and forwarding of payment requisition letters the administrator</p>
       <table class="table table-stripped">
	    <thead class="thead-light">
        <p>

There are no new CPO client withdrawals pending forwarding of payment requisition letter to scheme administrator.

</p>
      </thead>
       </table>
         </div>
    </b-row>
             </div>
            </b-col>
                                      </b-row>

               </div>
          </b-tab>
           <b-tab title="Pending Payment Acknowledgement">
                       <div class="tab-pane active" id="tab1-4">
                                      <b-row>
            <b-col lg="12" sm="12" xl="12">
             <div style="overflow: scroll;"> 
	  <b-row>
      <div class="col-xl-12 alert alert-secondary">
         <h3>Withdrawals Pending Payment Acknowledgement</h3>
         <p>This area shows the CPO client withdrawals that are pending payment Acknowledgement</p>
       <table class="table table-stripped">
	    <thead class="thead-light">
        <p>

There are no new CPO client withdrawals that are pending payment Acknowledgement
</p>
      </thead>
       </table>
         </div>
    </b-row>
             </div>
            </b-col>
                                      </b-row>

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
</b-form>
                </b-tab>
    </b-tabs>
</div>
            </b-form>
          </b-tab>
            <b-tab title="TRUST" >
                    <b-form @submit.prevent="updateProfile">
                  <div>
     <b-tabs pills card>
            <!--Trust withdrawal Tab-->
             <b-tab title="WITHDRAWALS" active>
                <b-form @submit.prevent="updateProfile">
                  <!-- <b-row>
                            <b-col class="col-lg-1">
                              
                            </b-col>
                  </b-row> -->
            <b-row>
              <div class="form group col-lg-6">
                            
                                  <label for="pet-name" class="control-label">Beneficiary</label>
                                  <div class="row">
                                    <div class="col-lg-2">
                                      <br>
                                        <button class="  btn btn-primary" @click="add">+</button>
                                    </div>
                                  <div class="previous" v-for="(applicant, counter) in space" v-bind:key="counter"> 
                                    <div class ="mt-4 col-lg-10">
                                          <b-row>
                                              <b-col lg="10">
                                          <input  v-model="applicant.expiration" type="text" id="pet-name" name="name" class="form-control" />
                                              </b-col>
                                              <b-col lg="2">
                                          <button class="btn btn-primary" @click="deleteV(counter)">-</button>
                                              </b-col>    
                                          </b-row>                                
                                    </div>
                                  </div>
                      </div>
              </div>

          
              <div class="form group col-lg-6">
                     <label for="pet-name" class="control-label">Date</label>
                    <input type="text" id="pet-name" name="name" class="form-control" />
               </div>
            </b-row>
               <b-row>
            <div class="form group col-lg-6">
                <label for="pet-name" class="control-label">Beneficiary Balance</label>
                <input type="text" id="pet-name" name="name" class="form-control" />
            </div>
               <div class="form group col-lg-6">
                <label for="pet-name" class="control-label">Paid to</label>
                <input type="text" id="pet-name" name="name" class="form-control" />
            </div>
             </b-row>
               <b-row>
            <div class="form group my-3 col-lg-6">
                <!-- <label for="pet-name" class="control-label">Purpose</label> -->
                  <h3>Purpose </h3>
                 <select>
                 <option disabled value="">Purpose</option>
                        <option>Administration Fees</option>
                        <option>Buiding Expenses</option>
                        <option>City County Land Rates</option>
                        <option>Farming Expenses</option>
                        <option>Insurance premiums</option>
                        <option>Land rates</option>
                        <option>Legal Fees</option>
                         <option>Medical Expenses</option>
                          <option>Monthly rent</option>
                           <option>Monthly payment</option>
                            <option>Pension contributions OPPS CHARGES</option>
                            <option>Refund</option>
                            <option>Refund for school fees</option>
                            <option>School expenses</option>
                            <option>School shopping</option>
                            <option>Service charge</option>
                            <option>Stalls security</option>
                             <option>Stock</option>
                              <option>Trust Fund wind up final dues </option>
                              <option>Upkeep</option>
                    
              </select>
            </div>
               <div class="form group col-lg-6">
                <label for="pet-name" class="control-label">Reference No:</label>
                <input type="text" id="pet-name" name="name" class="form-control" />
            </div>
             </b-row>
                <b-row>
            <div class="form group col-lg-6">
                <label for="pet-name" class="control-label">Account No:</label>
                <input type="text" id="pet-name" name="name" class="form-control" />
            </div>
               <div class="form group col-lg-6">
                <label for="pet-name" class="control-label">Account Name:</label>
                <input type="text" id="pet-name" name="name" class="form-control" />
            </div>
             </b-row>
              <b-row>
            <div class="form group col-lg-6">
                <label for="pet-name" class="control-label">Gross Amount</label>
                <input type="text" id="pet-name" name="name" class="form-control" />
            </div>
             <div class="form group col-lg-6">
                <label for="pet-name" class="control-label">Total gross Amount</label>
                <input type="text" id="pet-name" name="name" class="form-control" />
            </div>
               
             </b-row>
             <b-row>
               <div class="form group col-lg-6">
                <label for="pet-name" class="control-label">Bank Charges</label>
                <input type="text" id="pet-name" name="name" class="form-control" />
            </div>
                 <div class="form group col-lg-6">
                <label for="pet-name" class="control-label">Total Bank Charges</label>
                <input type="text" id="pet-name" name="name" class="form-control" />
            </div>
             </b-row>
              <b-row>
            <div class="form group my-3 col-lg-6 ">
                <!-- <label for="pet-name" class="control-label">Payment mode</label> -->
                 <h3>Payment mode </h3>
                 <select>
                 <option disabled value="">Payment mode</option>
                        <option>Bank Transfer</option>
                        <option>MPESA</option>
                        <option>CASH</option>
                        <option>Check off</option> 
                        <option>Cheque</option>     
                        <option>Installments</option>       
                        <option>Lumpsum</option>     
              </select>
            </div>
               <div class="form group my-3 col-lg-6">
                <!-- <label for="pet-name" class="control-label">Service Provider</label> -->
                   <h3>Service Provider </h3>
                 <select>
                 <option disabled value="">Service provider</option>
                        <option>Bank of Baroda</option>
                        <option>Barclays</option>
                        <option>CBA</option>
                        <option>CFC Stanbic Bank </option> 
                        <option>Co-operative Bank</option>     
                        <option>Consolidated bank</option>       
                        <option>DTB</option>     
                        <option>Ecobank</option>   
                        <option>Equity</option>   
                        <option>Family bank</option>
                        <option>First community bank</option>  
                        <option>GT bank</option>  
                        <option>Gulf African bank</option>  
                        <option>Housing Finance bank</option>
                        <option>I&M Bank</option>  
                        <option>KCB bank</option>  
                        <option>Kenya Women Microfinance bank</option>
                        <option>M-oriental bank</option>    
                        <option>MPESA</option>
                        <option>National Bank</option>
                        <option>NIC bank</option>
                        <option>Standard Chartered bank</option>
              </select>
            </div>
             </b-row>
           
              <b-row>
            <div class="form group col-lg-12">
                <label for="pet-name" class="control-label">Description</label>
                <textarea type="text" id="pet-bio" name="bio" class="form-control" ></textarea>
            </div>
             </b-row>
             <br>
            <b-row>
            <div class="form group col-lg-4">
            <div class ="my-4">
            <button type="submit" class="m-3 btn btn-primary">
            Submit
            </button>
            </div>
            </div>
            </b-row>
                </b-form>
             </b-tab>
               <!-- Processed withdrawal Tab--> 
              <b-tab title="Processed/Checked withdrawal" >
                <b-form @submit.prevent="updateProfile">
           <b-col class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
              <div style="overflow: scroll;"> 
                           	  <b-row>
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">Transaction ID</th>
	      <th scope="col">Date</th >
		  <th scope="col">Code</th>
		  <th scope="col">Name</th>
        <th scope="col">Purpose</th>
          <th scope="col">Paid to</th>
            <th scope="col">Amount</th>
             <th scope="col">Payment mode</th>
              <th scope="col">Service provider</th>
               <th scope="col">Account name</th>
                <th scope="col">Account No</th>
               <th scope="col">Reference No.</th>
                <th scope="col">Description</th>
               <th scope="col">Category</th>
               <th scope="col">Action</th>
	      </tr>
	    </thead>
       <tbody  id="myTable">
	      	<tr v-for="i in trust" >
	      		<td>{{i.id}}</td>
	      		<td>{{i.date}}</td>
            <td>{{i.code}}</td>
	      		<td>{{i.name}}</td>
	      		<td>{{i.purpose}}</td>
            <td>{{i.paidto}}</td>
	      		<td>{{i.amount_trust}}</td>
            <td>{{i.paymentmode_trust}}</td>
            <td>{{i.seriviceprovider_trust}}</td>
            <td>{{i.accountname_trust}}</td>
            <td>{{i.acountno_trust}}</td>
            <td>{{i.referenceno_trust}}</td>
            <td>{{i.description_trust}}</td>
            <td>{{i.category_trust}}</td>
				<td>
					<b-button variant="primary" class=" btn btn-primary btn-lg btn-block">View Documents
					</b-button>
				</td>
	   		</tr>
		</tbody>
	  </table>
    </b-row>
            </div>
           </b-col>
                </b-form>
             </b-tab>
              <!-- Approved withdrawal Tab--> 
              <b-tab title="Approved withdrawal" >
                <b-form @submit.prevent="updateProfile">
               <b-col class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
              <div style="overflow: scroll;"> 
                           	  <b-row>
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">Transaction ID</th>
	      <th scope="col">Date</th >
		  <th scope="col">Code</th>
		  <th scope="col">Name</th>
        <th scope="col">Purpose</th>
          <th scope="col">Paid to</th>
            <th scope="col">Amount</th>
             <th scope="col">Payment mode</th>
              <th scope="col">Service provider</th>
               <th scope="col">Account name</th>
                <th scope="col">Account No</th>
               <th scope="col">Reference No.</th>
                <th scope="col">Description</th>
               <th scope="col">Category</th>
               <th scope="col">Posted</th>
               <th scope="col">Action</th>
	      </tr>
	    </thead>
       <tbody  id="myTable">
	      	<tr v-for="i in trust" >
	      		<td>{{i.id}}</td>
	      		<td>{{i.date}}</td>
            <td>{{i.code}}</td>
	      		<td>{{i.name}}</td>
	      		<td>{{i.purpose}}</td>
            <td>{{i.paidto}}</td>
	      		<td>{{i.amount_trust}}</td>
            <td>{{i.paymentmode_trust}}</td>
            <td>{{i.seriviceprovider_trust}}</td>
            <td>{{i.accountname_trust}}</td>
            <td>{{i.acountno_trust}}</td>
            <td>{{i.referenceno_trust}}</td>
            <td>{{i.description_trust}}</td>
            <td>{{i.category_trust}}</td>
            <td>{{i.posted_trust}}</td>
				<td>
					<b-button variant="primary" class=" btn btn-primary btn-lg btn-block">View Documents
					</b-button>
				</td>
	   		</tr>
		</tbody>
	  </table>
    </b-row>
            </div>
           </b-col>
                </b-form>
             </b-tab>
             
     </b-tabs>
                  </div>
                  </b-form>
          </b-tab>
        </b-tabs>
      </div>
    </card>
             </base-header>
</template>

<script>
  export default {
    data() {
      return { 
      space:[
          {
          previous: '',
          expiration:''
          }
                ],
        withdrawal:'',
        sortBy: 'withdrawal_type',
        sortDirection: 'asc',
        choice: '',
        items:[
          {scheme:'Test Scheme',member_name:' Test Member 1',withdrawal_id:' 27188 '}
        ],
        online:[
          {
            withdrawal_type:"Manual",
            scheme_name:'UNAITAS SACCO LTD STAFF PROVIDENT FUND',
            letter_ref:'2229',
            created_by:"Mark Murugi",
            stay:'6',
            member_no:'15242',
            member_name_new:'Justus Wangui',
            date_modified:'13/05/2021',
            reason_for_exit:'',
            EE_porttion:'0',
            ER_porttion:'0',
            AVC_portion:'0',
             trustee_sig_2:'pending',
            trustee_sig_1:'pending',
            date_discharged:'4/8/2021',
            sent_by:'Justus Maraga',
            date_modified:'9/9/2021',
            date_PAID:'10/10/2021'
          },
          {
            withdrawal_type:"Online",
            scheme_name:'MASINDE MULIRO UNIVERSITY SRBS',
            letter_ref:'2219',
            created_by:"Matilda Murugi",
            stay:'7',
            member_no:'15222',
            member_name_new:'Mosese Maragi',
            date_modified:'12/05/2021',
            reason_for_exit:'',
            EE_porttion:'0',
            ER_porttion:'0',
            AVC_portion:'0',
            trustee_sig_2:'pending',
            trustee_sig_1:'pending',
            date_discharged:'4/8/2021',
            sent_by:'Julia Presto',
            date_modified:'9/9/2021',
            date_PAID:'11/11/2021'
          },
          {
            withdrawal_type:"Online",
            scheme_name:'MERU UNIVERSITY SRBS',
            letter_ref:'2214',
            created_by:"Moses Murugi",
            stay:'10',
            member_no:'15228',
            member_name_new:'Mosese Mutinda',
            date_modified:'13/05/2021',
            reason_for_exit:'',
            EE_porttion:'0',
            ER_porttion:'0',
            AVC_portion:'0',
            trustee_sig_2:'pending',
            trustee_sig_1:'pending',
            date_discharged:'4/8/2021',
            sent_by:'Julia Persey',
            date_modified:'9/9/2021',
            date_PAID:'11/11/2021'
          },
          {
            withdrawal_type:"Manual",
            scheme_name:'GITHUNGURI MILK SACCO STAFF PROVIDENT FUND',
            letter_ref:'2229',
            created_by:"Joseph Murugi",
            stay:'8',
            member_no:'15243',
            member_name_new:'Justus Wangui',
            date_modified:'12/05/2021',
            reason_for_exit:'',
            EE_porttion:'0',
            ER_porttion:'0',
            AVC_portion:'0',
             trustee_sig_2:'pending',
            trustee_sig_1:'pending',
            date_discharged:'4/8/2021',
            sent_by:'Julias Maraga',
            date_modified:'9/9/2021',
            date_PAID:'10/10/2021'
          }
        ],
        trust:[
          {
          id:'1',
          date:'11/02/2019',
          code:'',
          name:'Justus Noman',
          purpose:'retirement',
          paidto:'Justus Noman',
          amount_trust:'1,000,000', 
          paymentmode_trust:'MPESA',
          seriviceprovider_trust:'BANK OF BARODA',
          accountname_trust:'0010920201',
          acountno_trust:'0019121012',
          referenceno_trust:'',
          description_trust:'',
          category_trust:'',
          posted_trust:'',
          },
              {
          id:'2',
          date:'',
          code:'',
          name:'',
          purpose:'',
          paidto:'',
          amount_trust:'', 
          paymentmode_trust:'',
          seriviceprovider_trust:'',
          accountname_trust:'',
          acountno_trust:'',
          referenceno_trust:'',
          description_trust:'',
          category_trust:'',
          posted_trust:'',
          }
        ],
      }
    },
    methods:{
      sort: function(s){
                if(s === this.sortBy) {
                    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
                }
                this.sortBy = s;
            },
      add(){
        this.space.push({
        previous:'',
        expiration: ''
      })
    },
      deleteV(counter){
        this.space.splice(counter,1);
} 
      },
    computed: {
            sortedProducts: function(){
                return this.online.sort((p1,p2) => {
                    let modifier = 1;
                    if(this.sortDirection === 'desc') modifier = -1;
                    if(p1[this.sortBy] < p2[this.sortBy]) return -1 * modifier; if(p1[this.sortBy] > p2[this.sortBy]) return 1 * modifier;
                    return 0;
                });
            }
        },
      
  }
</script>