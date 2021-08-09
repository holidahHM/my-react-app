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
                <option value="">Medical</option>
                <option value="">EasyCover</option>
                <option value="">Motor</option>
              </template>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
<b-col lg="4" class="my-1">
        <b-form-group
          label="Sort by"
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
                <option value="">DC Schemes</option>
				<option value="">Octagon Umbrella RBS</option>
				<option value="">OPPS</option>
				<option value="">DB Schemes</option>
				<option value="">Octagon Uganda Umbrella RBS </option>
                <option value="">Octagon Uganda Umbrella RBS </option>
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
	      <th scope="col">Dependant Name</th>
          <th scope="col">Dependant Relationship</th>
	      <th scope="col">DOB</th >
			 <th scope="col">Beneficiary Name</th>
			 <th scope="col">Beneficiary Relations</th>
			 <th scope="col">Amount</th>
             <th scope="col">Status</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
				<td><input type="checkbox"  name="scheme_no1" value="323"></td>
	      		<td>John</td>
	      		<td>Son</td>
	      		<td>18-02-2021</td>
	      		<td>Snow</td>
	      		<td>Mother</td>
	      		<td>300000</td>
                  <td>Active</td>

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