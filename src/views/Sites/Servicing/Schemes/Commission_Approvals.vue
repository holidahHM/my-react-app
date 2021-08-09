<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
     <div>
  <b-tabs pills>
    <b-tab active>
        <template v-slot:title >
            Pending Commission Approvals
        </template>
        <br>
        <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0">Commissions Pending Approval </h3>
            </b-col>
        </div>
          <div style="overflow: scroll;"> 
	  <b-row>
	  <b-col xl="6">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">Index</th>
	      <th scope="col">Applicant Name</th >
			 <th scope="col">Product</th>
			 <th scope="col">Product Type</th>
			 <th scope="col">Provider</th>
			 <th scope="col">Amount</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>James Kimani</td>
	      		<td>Octagon Income Drawdown Fund - Sanlam</td>
	      		<td>Income Drawdown</td>
	      		<td>Sanlam</td>
	      		<td>10,285</td>
	      		<td>
              <base-button  type="danger">Reject Commission</base-button><br><br><base-button @click="Commission_Approvals()" type="success">Approve Commission</base-button>
            </td>
	      	</tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
  </div>
    </b-tab>

    <b-tab>
      <template v-slot:title >
         Closed Commission Approvals
      </template>
      <br>
        <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0">Closed Approvals </h3>
            </b-col>
        </div>
        <div style="overflow: scroll;"> 
	  <b-row>
	  <b-col xl="6">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">Index</th>
	      <th scope="col">Commission Applicant</th >
			 <th scope="col">Product Name</th>
			 <th scope="col">Product Type</th>
			 <th scope="col">Provider Name</th>
			 <th scope="col">Commission Amount</th>
       <th scope="col">Commission Approver</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>James Kimani</td>
	      		<td>Octagon Income Drawdown Fund - Sanlam</td>
	      		<td>Income Drawdown</td>
	      		<td>Sanlam</td>
	      		<td>10,285</td>
            <td>jacob.owen</td>
	      		<td>
              <base-button type="success">Review Commission</base-button>
            </td>
	      	</tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
  </div>
    </b-tab>
  </b-tabs>
</div>

  </card>
</base-header>
</template>
<script>
import Commission_Approvals from '../Schemes/Commission_Approvals'
export default {
components:{
  Commission_Approvals
  },
  data() {
    return {
      user: {
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    },
    Commission_Approvals(){
      this.$router.push('/Commission_Approvals')
    }
  }
  
};
</script>