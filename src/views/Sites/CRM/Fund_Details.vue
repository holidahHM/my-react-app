<template>
     <base-header  class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" >
    <div id="app" style="overflow:scroll">
	<div class="text-uppercase text-bold">Select All: {{selected}}</div>
	<table class="table table-striped">
		<thead class="thead-light">
			<tr>
		 		<th>
					<label class="form-checkbox">
    <input type="checkbox" v-model="selectAll" @click="select">
    <i class="form-icon"></i>
  </label>
				</th>
				<th>Scheme Name</th>
				<th>Scheme Code</th>
				<th>Date Created</th>
                                <th>Action</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="i in items">
				<td>
					<label class="form-checkbox">
    					<input type="checkbox" :value="i.id" v-model="selected">
						<i class="form-icon"></i>
  					</label>
				</td>
				<td>{{i.Scheme_Name}}</td>
				<td>{{i.Scheme_Code}}</td>
				<td>{{i.Date_Created}}</td>
                                <td>
	  <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item href="http://localhost:8080/#/Fund_Details2">Open</b-dropdown-item>
    <b-dropdown-item href="#">Edit</b-dropdown-item>
    <b-dropdown-item href="#">Delete</b-dropdown-item>
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
				Scheme_Name: "Octagon staff retirements Benefit Scheme",
				Scheme_Code: "KE078",
				Date_Created: "18-07-2020"
			},
			{
				Scheme_Name: "Octagon staff retirements Benefit Scheme",
				Scheme_Code: "KE078",
				Date_Created: "18-07-2020"
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
					this.selected.push(this.items[i].id);
				}
			}
		}
	}
};

</script>