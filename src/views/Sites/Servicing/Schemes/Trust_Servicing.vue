<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
      <b-row>
          <b-col class="col-md-3">
      <b-button-group>
     <b-dropdown id="dropdown-left" text="Particulars" variant="info" class="m-2">
    <b-dropdown-item><router-link to="/New_Beneficiary"> Add Beneficiaries- CSV</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/Load_Beneficiary">Load Beneficiaries</router-link></b-dropdown-item>
     <b-dropdown-item><router-link to="/Beneficiaries">Beneficiaries</router-link></b-dropdown-item>
	</b-dropdown>   
    </b-button-group>
    </b-col>
     <b-col class="col-md-3">
      <b-button-group>
     <b-dropdown id="dropdown-left" text="Deposits" variant="info" class="m-2">
    <b-dropdown-item><router-link to="/Process_Deposits"> Process Deposist</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/Processed_Deposits">Processed Deposits</router-link></b-dropdown-item>
     <b-dropdown-item><router-link to="/Checked_Deposits">Checked Deposits</router-link></b-dropdown-item>
     <b-dropdown-item><router-link to="/Approved_Deposits">Approved Deposits</router-link></b-dropdown-item>
	</b-dropdown>   
    </b-button-group>
    </b-col>
     <b-col class="col-md-3">
      <b-button-group>
	
     <b-dropdown id="dropdown-left" text="Utilities" variant="info" class="m-2">
     <b-dropdown-item><router-link to="/Download_Template">Templates</router-link></b-dropdown-item>
	</b-dropdown>   
    </b-button-group>
    </b-col>
	<b-col class="col-md-3">
	<label for="input-default">Balance:</label>
      <b-form-input id="input-default" placeholder="0.00" disabled></b-form-input>
	</b-col>
      </b-row>
      <br>
      <b-row>
          <!--Start of Column 1 -->
			<div class="col-sm-4">
				<h3>Beneficiaries</h3>
				
								<table class="table">
					<thead>
						<tr>
							<th>Name</th>
							<th style="text-align: right;">Fund Limit (%)</th>
						</tr>
					</thead>
					<tbody>
							
						<tr>
							<td>ODWORI ANDREW ALERI </td>
							<td style="text-align: right;">100.00</td>
						</tr>
											</tbody>
				</table>
			</div>
		<!--End of Column 1 -->
		
		<!--Start of Column 2 -->
			<div class="col-sm-4">
				<h3>Deposits</h3>
				
								<div class="progress" style="height:30px;">
					<div class="progress-bar" style="width:100%;height:30px">All: 1</div>
				</div>
				
				<br>
				
				<div class="progress" style="height:30px">
					<div class="progress-bar bg-success" style="width:100%;height:30px">Posted: 1</div>
				</div>
				
				<br>
				
				<div class="progress" style="height:30px">
					<div class="progress-bar bg-secondary" style="width:0%;height:30px">Unposted: 0</div>
				</div>
				
			</div>
		<!--End of Column 2 -->
		
		<!--Start of Column 3 -->
			<div class="col-sm-4">
				<h3>Withdrawals</h3>
				
								<div class="progress" style="height:30px;">
					<div class="progress-bar" style="width:100%;height:30px">All: 0</div>
				</div>
				
				<br>
				
				<div class="progress" style="height:30px">
					<div class="progress-bar bg-success" style="width:0%;height:30px">Posted: 0</div>
				</div>
				
				<br>
				
				<div class="progress" style="height:30px">
					<div class="progress-bar bg-secondary" style="width:0%;height:30px">Unposted: 0</div>
				</div>
				
			</div>
		<!--End of Column 3 -->
      </b-row>
      </card>
      </base-header> 
      </template>
	  <script>

export default {
    data() {

	},
}