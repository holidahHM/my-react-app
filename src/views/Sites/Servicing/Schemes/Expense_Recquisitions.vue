<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
     <div>
  <b-tabs pills>
    <b-tab active>
        <template v-slot:title >
            Pending Approvals
        </template>
        <br>
        <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0">Recquisitions Pending Approval </h3>
            </b-col>
        </div>
        <div style="overflow: scroll;"> 
	  <b-row>
	  <b-col xl="6">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">Index</th>
	      <th scope="col">Scheme Name</th >
			 <th scope="col">Meeting Name</th>
			 <th scope="col">Expense Date</th>
			 <th scope="col">Request Title</th>
			 <th scope="col">Category</th>
       <th scope="col">Amount</th>
       <th scope="col">Basis</th>
       <th scope="col">Action</th>
	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>CDOK Cleanup Scheme</td>
	      		<td>Workshop</td>
	      		<td>2021-05-24</td>
	      		<td>XXXX</td>
	      		<td>Meals</td>
            <td>2,000</td>
            <td>XXXX</td>
	      		<td>
              <base-button  type="danger">Reject Recquisitions</base-button><br><br><base-button @click="Expense_Recquisitions()" type="success">Approve Recquisition</base-button>
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
         Closed Approvals
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
	      <th scope="col">Scheme Name</th >
			 <th scope="col">Meeting Name</th>
			 <th scope="col">Expense Date</th>
			 <th scope="col">Request Title</th>
			 <th scope="col">Category</th>
       <th scope="col">Amount</th>
       <th scope="col">Basis</th>
       <th scope="col">Expense Approver</th>
       <th scope="col">Action</th>
	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>CDOK Cleanup Scheme</td>
	      		<td>Workshop</td>
	      		<td>2021-05-24</td>
	      		<td>XXXX</td>
	      		<td>Meals</td>
            <td>2,000</td>
            <td>XXXX</td>
            <td>James Kimani</td>
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
import Expense_Recquisitions from '../Schemes/Expense_Recquisitions.vue'
export default {
components:{
  Expense_Recquisitions
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
    Expense_Recquisitions(){
      this.$router.push('/Expense_Recquisitions')
    }
  }
  
};
</script>