<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
      <div>
                  <div class="row">
                      <h3>Add Batch</h3>
                  </div>
                  <br>
                  <div class="row">
                      <div class="col-md-6">
                          <b-button variant="primary">Download Member's Template</b-button>
                      </div>
                      <div class="col-md-6">
                          <b-button variant="primary">Download Beneficiaries Template</b-button>
                      </div>
                  </div>
                
                  <div class="row">
                       <div class="col-md-6">
      <label for="input-default">Scheme Name</label>
            <b-form-input type="text" placeholder="Scheme Name" readonly></b-form-input>
    </div>
    <div class="col-md-6">
      <label for="input-default">Document</label>
            <select class="form-control">
                <option>Member</option>
                <option>Beneficiary</option>
            </select>  
    </div>
                  </div>
                  <div class="row">
          <div class="col-md-6">
      <label for="input-default">Batch Description</label>
            <b-form-input type="text" placeholder="" ></b-form-input>
    </div>
     <div class="col-sm-6">
          <label for="input-default">Choose Excel File</label>
          <input class="form-control" type="file" id="excel_file" name=""></div>
              </div>
              <br>

             <div class="row-float-left pb-4 ">
	
		  <base-button type="success">Add</base-button>
	  </div>
    </div>
  <div style="overflow: scroll;"> 
    <div class="row">
        <div class="col-md-12"> 
	  <b-row>
	  <b-col xl="12">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">#</th>
	      <th scope="col">Scheme Code</th >
			 <th scope="col">Document</th>
			 <th scope="col">Description</th>
			 <th scope="col">Batch ID</th>
			 <th scope="col">Posting Date</th>
       <th scope="col">Action</th>
       <th scope="col">Batched by</th>
	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>KO27</td>
	      		<td>Member</td>
	      		<td>Transfer In</td>
	      		<td>65879</td>
	      		<td>10,285</td>
	      		<td>
              <base-button type="success">View Entries</base-button>
            </td>
            <td>jacob.owen</td>
	      	</tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
    </div>
    </div></div>
  </card>
</base-header>
</template>