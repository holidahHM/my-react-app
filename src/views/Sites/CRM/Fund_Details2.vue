<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
         <b-tabs pills card>
        <!--Fund Details-->
      <b-tab title="Fund Details"><b-card-text>
          <h3> Fund Details</h3>
          <div style="overflow: scroll;"> 
	  <b-row>
	  <b-col xl="6">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
		<th scope="col">Check Box</th>
	      <th scope="col">Item</th>
	      <th scope="col">Description</th >
			

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
				<td><input type="checkbox"  name="scheme_no1" value="323"></td>
	      		<td>Scheme Registration Date</td>
	      		<td>2020-06-08</td>
  
	      	</tr>
			  <tr>
				  <td><input type="checkbox"  name="scheme_no2" value="AFRI0037"></td>
	      		<td>Scheme Commencement Date</td>
	      		<td>2020-09-27</td>
	      		
				  <td>
					</td>
			  </tr>
			  <tr>
				  <td><input type="checkbox" name="scheme_no3" value="AFRI0043"></td>
	      		<td>RBA Registration No.</td>
	      		<td>RBA/SC/09477</td>
	      		
				   <td>
	
					</td> 
				  </tr>
				   <tr>
				  <td><input type="checkbox"  name="scheme_no3" value="K0037"></td>
	      		<td>Tax Exemption Certification No.</td>
	      		<td>KRA</td>
	      		
				   <td>
	
					</td> 
			  </tr>
               <tr>
				  <td><input type="checkbox"  name="scheme_no3" value="K0037"></td>
	      		<td>Scheme KRA Pin</td>
	      		<td>KRA</td>
	      		
				   <td>
	
					</td> 
			  </tr>
               <tr>
				  <td><input type="checkbox"  name="scheme_no3" value="K0037"></td>
	      		<td>Employer Funding Rate</td>
	      		<td>8.00%</td>
	      		
				   <td>
	
					</td> 
			  </tr>
               <tr>
				  <td><input type="checkbox"  name="scheme_no3" value="K0037"></td>
	      		<td>Employee Funding Rate</td>
	      		<td>8.00%</td>
	      		
				   <td>
	
					</td> 
			  </tr>
               <tr>
				  <td><input type="checkbox"  name="scheme_no3" value="K0037"></td>
	      		<td>Early Retirement Age</td>
	      		<td>50</td>
	      		
				   <td>
	
					</td> 
			  </tr>
               <tr>
				  <td><input type="checkbox"  name="scheme_no3" value="K0037"></td>
	      		<td>Normal Retirement Age</td>
	      		<td>60</td>
	      		
				   <td>
	
					</td> 
			  </tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
  </div>
         
          </b-card-text>
        
      </b-tab>
      <!--Account Managers-->
       <b-tab title="Account Managers"><b-card-text>
           <h3> Account Managers</h3>
            <b-row>
           <b-col lg="3">
            <base-input
              label="Handler's Name"
              placeholder="Name"
            >
            <select v-model="user_zone" class="form-control">
                <option>Martin</option>
                <option>Faith</option>
            </select>
            </base-input>
          </b-col>
           <b-col lg="3">
            <base-input
              label="Handler's Role"
              placeholder="Role"
            >
            <select v-model="user_zone" class="form-control">
                <option>CRM</option>
                <option>Accountant</option>
                <option>Finance</option>
                <option>Admin</option>
            </select>
            </base-input>
          </b-col>
           
           <b-col lg="3">
            <base-input
              type="date"
              label="Effective Date"
              placeholder="Date"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
          <b-col lg="3">
              <b-button variant="info">Add Account Manager</b-button>
          </b-col>
          </b-row>
          <b-row>
              <div style="overflow: scroll;"> 
	  <b-row>
	  <b-col xl="6">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
		<th scope="col">Check Box</th>
	      <th scope="col">Handler's Name</th>
	      <th scope="col">Handler's Role</th >
			 <th scope="col">Handler's Email</th>
			 <th scope="col">Assigned By</th>
			 <th scope="col">Assigned On</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
				<td><input type="checkbox"  name="scheme_no1" value="323"></td>
	      		<td>John Mwangi</td>
	      		<td>CRM</td>
	      		<td>john@octagonafrica.com</td>
	      		<td>Norman</td>
	      		<td>2020-06-18</td>
	      		

  <td>
	<b-button variant="info">Unassign</b-button>
					</td> 
	      	</tr>
			  <tr>
				  <td><input type="checkbox"  name="scheme_no2" value="AFRI0037"></td>
	      		<td>Mercy Atieno</td>
	      		<td>Finance</td>
	      		<td>mercyatieno@octagonafrica.com</td>
	      		<td>Norman</td>
	      		<td>2019-04-27</td>
				  <td>
	<b-button variant="info">Unassign</b-button>
					</td>
			  </tr>
			  <tr>
				  <td><input type="checkbox" name="scheme_no3" value="AFRI0043"></td>
	      		<td>James Wekesa</td>
	      		<td>Admin</td>
	      		<td>jameswekesa@octagonafrica.com</td>
	      		<td>Norman</td>
	      		<td>2018-07-18</td>
				   <td>
	<b-button variant="info">Unassign</b-button>
					</td> 
				  </tr>
				   <tr>
				  <td><input type="checkbox"  name="scheme_no3" value="K0037"></td>
	      		<td>Maureen Wambua</td>
	      		<td>Accountant</td>
	      		<td>maureenwambua@octagonafrica.com</td>
	      		<td>Norman</td>
	      		<td>2019-06-17</td>
				   <td>
	<b-button variant="info">Unassign</b-button>
					</td> 
			  </tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
  </div>
          </b-row>
          </b-card-text>
      </b-tab>
       <b-tab title="Service Providers"><b-card-text>
          <div class="col-md-4">
									<b-button variant="primary" v-on:click="isHidden = !isHidden">Add Service Provider Info </b-button>
								</div>
							
						
							<div v-if="isHidden" class ="row">
								<div class="col-md-3 ">
									<br>
									<label for="input-default">Select Service Provider</label>
									<select>
                                        <option>KCB Custody Services</option>

                                    </select>
								
								</div>
								<div class="col-md-3 ">
									<label for="input-default">Confirm Email Address</label>
									<b-form-input type="text" placeholder="Confirm New Email Address" ></b-form-input>
								
								</div>
								<div class="col-md-3">
									<b-button variant="primary">Add New Provider </b-button>
     							</div>
							</div>
						
           
              <div style="overflow: scroll;"> 
	  <b-row>
	  <b-col xl="6">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
		<th scope="col">Check Box</th>
	      <th scope="col">Handler's Name</th>
	      <th scope="col">Handler's Role</th >
			 <th scope="col">Handler's Email</th>
			 <th scope="col">Assigned By</th>
			 <th scope="col">Assigned On</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
				<td><input type="checkbox"  name="scheme_no1" value="323"></td>
	      		<td>John Mwangi</td>
	      		<td>CRM</td>
	      		<td>john@octagonafrica.com</td>
	      		<td>Norman</td>
	      		<td>2020-06-18</td>
	      		

  <td>
	<b-button variant="info">Unassign</b-button>
					</td> 
	      	</tr>
			  <tr>
				  <td><input type="checkbox"  name="scheme_no2" value="AFRI0037"></td>
	      		<td>Mercy Atieno</td>
	      		<td>Finance</td>
	      		<td>mercyatieno@octagonafrica.com</td>
	      		<td>Norman</td>
	      		<td>2019-04-27</td>
				  <td>
	<b-button variant="info">Unassign</b-button>
					</td>
			  </tr>
			  <tr>
				  <td><input type="checkbox" name="scheme_no3" value="AFRI0043"></td>
	      		<td>James Wekesa</td>
	      		<td>Admin</td>
	      		<td>jameswekesa@octagonafrica.com</td>
	      		<td>Norman</td>
	      		<td>2018-07-18</td>
				   <td>
	<b-button variant="info">Unassign</b-button>
					</td> 
				  </tr>
				   <tr>
				  <td><input type="checkbox"  name="scheme_no3" value="K0037"></td>
	      		<td>Maureen Wambua</td>
	      		<td>Accountant</td>
	      		<td>maureenwambua@octagonafrica.com</td>
	      		<td>Norman</td>
	      		<td>2019-06-17</td>
				   <td>
	<b-button variant="info">Unassign</b-button>
					</td> 
			  </tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
  </div>
          </b-card-text>
      </b-tab>
         </b-tabs>
    </card>
    </base-header>
</template><script>
import BaseButton from '../../../components/BaseButton.vue';
export default {
  components: { BaseButton },
  data() {
    return {
      user: {
      },
      i_f_name:'', //i stands for internal
      i_l_name:'',
      i_email:'',
      user:'',
       isHidden: false,
      user_zone:'',
      user_accessto:''
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>