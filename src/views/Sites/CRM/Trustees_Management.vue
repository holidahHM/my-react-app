<template>
     <base-header  class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" >
	 <card>
     			       <b-row>
			<b-col lg="4">
			<b-form-input type="text"
              label=""
              placeholder="Trustee deatails..." class="text-left"></b-form-input>
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
                <option value="">Active</option>
				<option value="">Retired</option>
				<option value="">Terminated</option>
              </template>
            </b-form-select>
			<b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
	  <b-col lg="4">
		  <div v-if="isHidden">
			   <b-dropdown id="dropdown-left" text="Actions" variant="primary" class="m-2">
    <b-dropdown-item ><router-link to="/Register_Trustee">Register Trustee</router-link></b-dropdown-item>
   <!-- <b-dropdown-item ><router-link to="/Attendance_and_Certificates">Attendance $ Certificates</router-link></b-dropdown-item>
    <b-dropdown-item ><router-link to="Set_Trustee_Allowance">Set Trustee Allowance</router-link></b-dropdown-item>
	<b-dropdown-item><router-link to="/Calculate_Trustee_Allowance">Calculate Trustee</router-link></b-dropdown-item>-->
	<b-dropdown-item><router-link to="#">Unassign</router-link></b-dropdown-item>
  </b-dropdown>
		  </div>
	  </b-col>
		</b-row>
    <div id="app" style="overflow:scroll">
	<div class="text-uppercase text-bold">Select All:</div>
	<table class="table table-striped">
		<thead class="thead-light">
			<tr>
		 		<th>
					<label class="form-checkbox">
    <input type="checkbox" v-model="selectAll" @click="select" v-on:click="isHidden=!isHidden">
    <i class="form-icon"></i>
  </label>
				</th>
				<th>Trustee Name</th>
				<th>Trustee Code</th>
				<th>Date Joined</th>
                                <th>Status</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="i in items">
				<td>
					<label class="form-checkbox">
    					<input type="checkbox" :value="i.Trustee_Name" v-model="selected" v-on:click="isHidden=!isHidden">
						<i class="form-icon"></i>
  					</label>
				</td>
				<td>{{i.Trustee_Name}}</td>
				<td>{{i.Trustee_Code}}</td>
				<td>{{i.Date_Joined}}</td>
				<td>{{i.Status}}</td>
			</tr>
                        
		</tbody>
	</table>
</div>
	 </card>
     </base-header>
</template>
<script>

export default {
   
        data: () => ({
		items: [
			{
				Trustee_Name: "John Wayne",
				Trustee_Code: "KE078",
				Date_Joined: "18-07-2020",
				Status: "Active"
			},
			{
				Trustee_Name: "Cliff Omondi",
				Trustee_Code: "UG003",
				Date_Joined: "18-06-2019",
				Status:"Active"
			},{
				Trustee_Name: "Hezron Nyakeya",
				Trustee_Code: "KE057",
				Date_Joined: "27-07-2017",
				Status: "Active"
			},
         {
				Trustee_Name: "Griffin Maxwell",
				Trustee_Code: "KE078",
				Date_Joined: "18-07-2020",
				Status: "Active"
			},
         {
				Trustee_Name: "Jonathan Davids",
				Trustee_Code: "KE078",
				Date_Joined: "18-07-2020",
				Status: "Active"
			}
		],
		selected: [],
		selectAll: false
	}),
	methods: {
		select() {
			this.selected = [];
			if (!this.selectAll) {
				for (let i in this.items) {
					this.selected.push(this.items[i].Trustee_Name);
				}
			}
		},
     
	}
};

</script>