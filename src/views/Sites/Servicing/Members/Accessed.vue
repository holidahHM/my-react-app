<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
<card>
	<b-col lg="6">
	<b-dropdown id="dropdown-left" text="Choose Member Status" variant="primary" class="m-2">
    <b-dropdown-item > <router-link to="/HR_Uploaded">HR Uploaded</router-link></b-dropdown-item>
    <b-dropdown-item ><router-link to="/Accessed">Accessed </router-link></b-dropdown-item>
    <b-dropdown-item ><router-link to="/Disabled">Disabled</router-link></b-dropdown-item>
	<b-dropdown-item ><router-link to="/Blocked">Blocked</router-link></b-dropdown-item>
	</b-dropdown>
          </b-col>
 
     <div>
  <b-row class="float-right pb-4">
	  </b-row>
	 	  <b-row>
          <b-col lg="12">
           <p class="mb-0"><b>Search</b></p>
          </b-col>
        </b-row>
		<br>
		<b-row>
			<b-col lg="6">
			<b-form-input type="text"
              label=""
              placeholder="Scheme Details..." class="text-left"></b-form-input>
			  </b-col>
      <b-col lg="4" class="my-1">
        <b-form-group
          label="Filter by"
          label-for="sort-by-select"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
          v-slot="{ ariaDescribedby }"
        >
          <b-input-group size="sm">
            <b-form-select
              id="sort-by-select"
              v-model="sortBy"
              :options="sortOptions"
              :aria-describedby="ariaDescribedby"
              class="w-75"
            >
              <template #first>
                <option value="">Insurance</option>
				<option value="">Pension</option>
				<option value="">Trust</option>
              </template>
            </b-form-select>
			<b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
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
	      <th scope="col">Member No.</th >
			 <th scope="col">Member Name</th>
			 <th scope="col">Employer</th>
			 <th scope="col">Telephone</th>
			 <th scope="col">Email</th>
			 <th scope="col">Status</th>
			 <th scope="col">Country</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
				<td><input type="checkbox"  name="scheme_no1" value="323"></td>
	      		<td>1</td>
	      		<td>323</td>
	      		<td>John</td>
	      		<td>Octagon</td>
	      		<td>0715267987</td>
	      		<td>John@gmail.com</td>
	      		<td>Dormant</td>
	      		<td>Kenya</td>

  <td>
	<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item > <router-link to="/Members">Open </router-link></b-dropdown-item>
    <b-dropdown-item ><router-link to="/Members">Edit </router-link></b-dropdown-item>
    <b-dropdown-item >Delete</b-dropdown-item>
	</b-dropdown>
					</td> 
	      	</tr>
			  <tr>
				  
	      		<td><input type="checkbox"  name="scheme_no1" value="323"></td>
	      		<td>1</td>
	      		<td>323</td>
	      		<td>John</td>
	      		<td>Octagon</td>
	      		<td>0715267987</td>
	      		<td>John@gmail.com</td>
	      		<td>Dormant</td>
	      		<td>Kenya</td>
				   <td>
	<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item href="">Open</b-dropdown-item>
    <b-dropdown-item href="">Edit</b-dropdown-item>
    <b-dropdown-item href="#">Delete</b-dropdown-item>
	</b-dropdown>
					</td> 
			  </tr>
			  <tr>
				  <td><input type="checkbox" name="scheme_no3" value="AFRI0043"></td>
	      		<td>3</td>
	      		<td>AFRI0043</td>
	      		<td>The Health Box Limited</td>
	      		<td>Occupational</td>
	      		<td>Provident</td>
	      			      		<td>JAN-DEC 2021</td>
	      		<td>Active</td>
	      		<td>Kenya</td>
				   <td>
	<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item href="">Open</b-dropdown-item>
    <b-dropdown-item href="">Edit</b-dropdown-item>
    <b-dropdown-item href="#">Delete</b-dropdown-item>
	</b-dropdown>
					</td> 
				  </tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
  </div>
  <b-row class="float-right pb-4">
	
		  <b-col xl="6" >
	   
	   <br>
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
      user: {
      },
      i_f_name:'', //i stands for internal
      i_l_name:'',
      i_email:'',
      user:'',
      user_zone:'',
      user_accessto:''
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
  }
</script>