<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
      <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0">Commission Approvals</h3>
            </b-col>
        </div>
        <div> 
	  <b-row>
	  <b-col xl="12">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">Index</th>
	      <th scope="col">Commission Applicant</th >
			 <th scope="col">Admin Name</th>
			 <th scope="col">Commission Amount</th>
       <th scope="col">Commission Approver</th>
       <th scope="col">Status</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>Davis Ongiro</td>
	      		<td>CIC</td>
	      		<td>500</td>
	      		<td>Davis Ongiro</td>
	      		<td>Approved</td>
	      	</tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
  </div>
  </card>
  </base-header>
  </template>