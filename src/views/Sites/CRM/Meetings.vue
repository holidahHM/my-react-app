<template>
     <base-header  class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" >
	 <b-row>
		 <b-col lg="6">
	<b-dropdown id="dropdown-left" text="Choose Meeting Status" variant="primary" class="m-2">
    <b-dropdown-item > <router-link to="#">Attended Meetings</router-link></b-dropdown-item>
    <b-dropdown-item ><router-link to="#">Postponed </router-link></b-dropdown-item>
    <b-dropdown-item ><router-link to="#">Cancelled</router-link></b-dropdown-item>
	<b-dropdown-item ><router-link to="#">Booked</router-link></b-dropdown-item>
	</b-dropdown>
          </b-col>
	 </b-row>
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
    <div id="app" style="overflow:scroll">
	<div class="text-uppercase text-bold">Select All:</div>
	<table class="table table-striped">
		<thead class="thead-light">
			<tr>
		 		<th>
					<label class="form-checkbox">
    <input type="checkbox" v-model="selectAll" @click="select">
    <i class="form-icon"></i>
  </label>
				</th>
				<th>Meeting Name</th>
				<th>Meeting Type</th>
				<th>Date</th>
				<th>Action Item</th>
                                <th>Action</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="i in items">
				<td>
					<label class="form-checkbox">
    					<input type="checkbox" :value="i.Meeting_Name" v-model="selected">
						<i class="form-icon"></i>
  					</label>
				</td>
				<td>{{i.Meeting_Name}}</td>
				<td>{{i.Meeting_Type}}</td>
				<td>{{i.Date}}</td>
				<td>{{i.Action_Item}}</td>
                                <td>
	  <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item ><router-link to="/Meetings2">Open</router-link></b-dropdown-item>
    <b-dropdown-item href="http://localhost:8080/#/Meetings2">Edit</b-dropdown-item>
    <b-dropdown-item href="#/Meetings2">Delete</b-dropdown-item>
  </b-dropdown>
					</td>
			</tr>
                        
		</tbody>
	</table>
</div>
     </base-header>
</template>
<script>

export default {
   
        data: () => ({
		items: [
			{
				Meeting_Name: "Octagon staff retirements Benefit Scheme Meeting",
				Date: "18-07-2020",
				Meeting_Type: "AGM",
				Action_Item: "Financial Wellness"
			},
			{
				Meeting_Name: "OMO staff retirements Benefit Scheme Meeting",
				Date: "18-07-2020",
				Meeting_Type: "AGM",
				Action_Item: "Financial Wellness"
			},{
				Meeting_Name: "Airtel staff retirements Benefit Scheme Meeting",
				Date: "18-07-2020",
				Meeting_Type: "AGM",
				Action_Item: "Financial Wellness"
			},
         {
				Meeting_Name: "Safaricom staff retirements Benefit Scheme Meeting",
				Date: "18-07-2020",
				Meeting_Type: "AGM",
				Action_Item: "Financial Wellness"
			},
         {
				Meeting_Name: "Kiwi staff retirements Benefit Scheme Meeting",
				Date: "18-07-2020",
				Meeting_Type: "AGM",
				Action_Item: "Financial Wellness"
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
					this.selected.push(this.items[i].Meeting_Name);
				}
			}
		},
     
	}
};

</script>