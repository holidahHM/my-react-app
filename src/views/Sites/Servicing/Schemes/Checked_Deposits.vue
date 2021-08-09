<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
		<br>
  <div style="overflow: scroll;">
	  <b-row>
	  <b-col xl="6">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
		<th scope="col">Transaction ID</th>
	      <th scope="col">Date</th>
	      <th scope="col">Purpose</th >
			 <th scope="col">Received From</th>
			 <th scope="col">Amount</th>
             <th scope="col">Payment Mode</th>
             <th scope="col">Service Provider</th>
             <th scope="col">Account Name</th>
             <th scope="col">Account No</th>
             <th scope="col">Reference No</th>
			 <th scope="col">Description</th>
              <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	        <tr>
		<td>001</td>
	      <td>2021-02-01</td>
	      <td>Administration Fees</td >
			 <td>Paul Mwangi</td>
			 <td>1200</td>
             <td>Cheque</td>
             <td>CBA</td>
             <td>PAUL MWANGI</td>
             <td>3324565234165</td>
             <td>FRT12344ED</td>
			 <td>Administration fees</td>
        <td>
	  <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
		  <b-dropdown-item><router-link to="/Approved_Deposits">Approve</router-link></b-dropdown-item>
          <b-dropdown-item href="#">Delete</b-dropdown-item>
  </b-dropdown>
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

<script>
</script>
<style></style>