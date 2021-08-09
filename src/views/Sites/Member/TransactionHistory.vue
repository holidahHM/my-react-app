<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
	  	  <b-row class="float-right pb-4">
	
	  </b-row>
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
		<br><br>
  <div style="overflow: scroll;"> 
	  <b-row>
	  <b-col xl="12">
        <table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">#</th>
	      <th scope="col">Display Date</th >
			 <th scope="col">Batch</th>
			 <th scope="col">Type</th>
			 <th scope="col">Amount</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>10-08-2020</td>
	      		<td>Withdrawals</td>
	      		<td>Normal</td>
	      		<td>Ksh 150,000</td>
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