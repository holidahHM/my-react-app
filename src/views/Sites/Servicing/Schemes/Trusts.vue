<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
      <b-row class="float-right pb-4">
	
		  <b-col xl="6" >
	   <b-button @click="New_Trust()" variant="primary">New Trust+</b-button>
	   <br>
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
                <option value="">Hakika</option>
				<option value="">Living</option>
              </template>
            </b-form-select>
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
	      <th scope="col">Serial</th>
	      <th scope="col">Trust Code</th >
			 <th scope="col">Alias Code</th>
			 <th scope="col">Trust Name</th>
             <th scope="col">Category</th>
			 <th scope="col">Status</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
				<td><input type="checkbox"  name="trust_no1" value="323"></td>
	      		<td>1</td>
	      		<td>001</td>
	      		<td>MMUST/001/19</td>
	      		<td>Clement Otanga</td>
	      		<td>Hakika</td>
	      		<td>Active</td>
  <td>
	  <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
		  <b-dropdown-item><router-link to="/Trust_Servicing">Open</router-link></b-dropdown-item>
		  <b-dropdown-item><router-link to="/Edit_Trust">Edit</router-link></b-dropdown-item>
          <b-dropdown-item href="#">Delete</b-dropdown-item>
  </b-dropdown>
	</td>
	      	</tr>
			  	<tr>
				<td><input type="checkbox"  name="trust_no1" value="323"></td>
	      		<td>2</td>
	      		<td>002</td>
	      		<td>SCB/19</td>
	      		<td>Florence Rotich</td>
	      		<td>Living</td>
	      		<td>Active</td>
 <td>
	  <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
		  <b-dropdown-item href="#">Open</b-dropdown-item>
		  <b-dropdown-item href="#">Edit</b-dropdown-item>
          <b-dropdown-item href="#">Delete</b-dropdown-item>
  </b-dropdown>
					</td>
	      	</tr>
			 	<tr>
				<td><input type="checkbox"  name="trust_no1" value="323"></td>
	      		<td>3</td>
	      		<td>003</td>
	      		<td>MSC/030</td>
	      		<td>William Omore/td>
	      		<td>Hakika</td>
	      		<td>Active</td>
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
import New_Trust from '../Schemes/New_Trust'
export default {
components:{New_Trust},
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
    New_Trust(){
      this.$router.push('/New_Trust')
    }
  }
  
};
</script>
<style></style>