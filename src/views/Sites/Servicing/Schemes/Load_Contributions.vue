<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
      <div>
                  <div class="row">
                      <h3>Add Batch</h3>
                  </div>
                  <br>
                  <div class="row">
                      <div class="col-md-4">
                          <b-button variant="primary">Download Closing Balances Template</b-button>
                      </div>
                      <div class="col-md-4">
                          <b-button variant="primary">Download Tranfers In Template</b-button>
                      </div>
                      <div class="col-md-4">
                          <b-button variant="primary">Download Deductions Template</b-button>
                      </div>
                  </div>
                  <br>
                   <div class="row">
                      <div class="col-md-4">
                          <b-button variant="primary">Download Interest Template</b-button>
                      </div>
                      <div class="col-md-4">
                          <b-button variant="primary">Download Contributions Template[UG/ZAM]</b-button>
                      </div>
                      <div class="col-md-4">
                          <b-button variant="primary">Download Arrears Template[UG/ZAM]</b-button>
                      </div>
                  </div>
                <br>
                  <div class="row">
                       <div class="col-md-4">
      <label for="input-default">Scheme Name</label>
            <b-form-input type="text" placeholder="Scheme Name" readonly></b-form-input>
    </div>
    <div class="col-md-2">
      <label for="input-default">Document</label>
            <select class="form-control">
                <option>Transfers In</option>
                <option>Deductions</option>
                <option>Closing Balances</option>
                <option>Interest</option>
            </select>  
    </div>
   
          <div class="col-md-2">
       <label for="input-default">Date</label>
      <b-form-input type="date" placeholder="2019-12-31"></b-form-input>
    </div>
     <div class="col-sm-4">
          <label for="input-default">Choose Excel File</label>
          <input class="form-control" type="file" id="excel_file" name=""></div>
              </div>
               
              <br>

             <div class="row-float-left pb-4">
	
		  <base-button type="success">Add</base-button>
	  </div>
    </div>
    <br>
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
			 <th scope="col">Type</th>
			 <th scope="col">Batch ID</th>
			 <th scope="col">Posting Date</th>
       <th scope="col">View Entries</th>
       <th scope="col">Initiated by</th>
       <th scope="col">Initiated on</th>
       <th scope="col">Approved by</th>
       <th scope="col">Approved on</th>
       <th scope="col">Status</th>
	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>KO27</td>
	      		<td>Closing Balances</td>
	      		<td>Normal</td>
	      		<td>65879</td>
	      		<td>2019-12-31</td>
	      		<td>
              <base-button type="success">View Entries and Approve</base-button>
            </td>
            <td>tony.owen</td>
            <td>2021-05-27</td>
	      	</tr>
               	<tr>
	      		<td>2</td>
	      		<td>KO87</td>
	      		<td>Transfer In</td>
	      		<td>Normal</td>
	      		<td>54872</td>
	      		<td>2019-12-31</td>
	      		<td>
              <base-button type="success">View Entries and Approve</base-button>
            </td>
            <td>holidah.mwangi</td>
            <td>2021-05-27</td>
            <td>michael.komen</td>
            <td>2021-05-22</td>
            <td>Approved</td>
            
	      	</tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
    </div>
    </div>
    </div>
  </card>
</base-header>
</template>