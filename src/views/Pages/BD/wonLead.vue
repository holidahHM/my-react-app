<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
	  	  <b-row class="float-right pb-4">
	
		  <b-col xl="6" >
        <router-link to="/add-lead">
          <b-button variant="primary">ADD+</b-button>
          <br>
        </router-link>
		  </b-col>
	  </b-row>
	 	  <b-row>
          <b-col lg="12">
           <p class="mb-0"><b>Type something in the input field to search the table</b></p>
          </b-col>
        </b-row>
		<br>
		<b-row>
			<b-col lg="6">
			<b-form-input type="text"
              label=""
              placeholder="Search..." class="text-left"></b-form-input>
			  </b-col>
		</b-row>
		<br>

  <div style="overflow: scroll;"> 
	  <b-row>
	  <b-col xl="6">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
		<th scope="col">Check Box</th>
	      <th scope="col">Index</th>
	      <th scope="col">Lead Name</th >
			 <th scope="col">Value</th>
			 <th scope="col">% Commission</th>
             <th scope="col">Commission</th>
			 <th scope="col">Status</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
        <tr>
                <td><input type="checkbox"  name="scheme_no1" value="323"></td>
	      		<td>1</td>
	      		<td>Name</td>
	      		<td>45000</td>
	      		<td>5</td>
	      		<td>2250</td>
                <td>Claimed</td>

            <td>
              <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
                <b-dropdown-item href="#">Open</b-dropdown-item>
                <b-dropdown-item href="#">Edit</b-dropdown-item>
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
  export default {
    data() {
      return { 
      }
    }
  }
</script>