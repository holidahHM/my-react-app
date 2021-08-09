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
		<th scope="col">Code</th>
	      <th scope="col">Name</th>
	      <th scope="col">Gender</th >
			 <th scope="col">DoB</th>
			 <th scope="col">DoA</th>
             <th scope="col">Relationship</th>
             <th scope="col">Has Age Limit</th>
             <th scope="col">Age Limit(Years)</th>
             <th scope="col">Has Fund Limit</th>
             <th scope="col">Limit(%)</th>
			 <th scope="col">Status</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>Andrew Ireri</td>
	      		<td>Male</td>
	      		<td>2002-01-01</td>
	      		<td>2019-01-18</td>
                <td>Child</td>
                <td>No</td>
                <td>25</td>
                <td>No</td>
                <td>2%</td>
	      		<td>Active</td>
  <td>
	  <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
		  <b-dropdown-item><router-link to="/Ben_Transactions">Transactions</router-link></b-dropdown-item>
		  <b-dropdown-item><router-link to="/New_Beneficiary">Edit</router-link></b-dropdown-item>
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