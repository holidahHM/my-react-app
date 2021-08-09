<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
	 	  <b-row>
          <b-col lg="12">
           <p class="mb-0"><b>Type something in the input field to search the table</b></p>
          </b-col>
        </b-row>
		<br>
		<b-row>
			<b-col lg="4">
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
	      <th scope="col">Trust code</th>
          <th scope="col">Trust Name</th>
	      <th scope="col">Registration Date</th >
			 <th scope="col">Commencement Date</th>
			 <th scope="col">Status</th>
			 <th scope="col">Frequency Deposit</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
				<td><input type="checkbox"  name="scheme_no1" value="323"></td>
	      		<td>0578</td>
	      		<td>Living</td>
	      		<td>18-02-2021</td>
	      		<td>18-02-2021</td>
	      		<td>Active</td>
	      		<td>Quartely</td>

  <td>
	<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item ><router-link to="/">Edit </router-link></b-dropdown-item>
    <b-dropdown-item >Delete</b-dropdown-item>
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