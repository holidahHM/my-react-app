<template>

<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">

  <card>
      <div align-v="center" slot="header" >
      <b-col cols="12">
        <h3 class="mb-0">Pension Products</h3>
      </b-col>
    </div>

    <div>
        <br>
        <br>
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
                <option value="">OPPS</option>
                <option value="">IDD</option>
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
	      <th scope="col">Employer</th>
          <th scope="col">Payment Mode</th>
			 <th scope="col">Beneficiary Name</th>
			 <th scope="col">Beneficiary Relations</th>
			 <th scope="col">Benefit %</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
				<td><input type="checkbox"  name="scheme_no1" value="323"></td>
	      		<td>John</td>
	      		<td>Mpesa</td>
	      		<td>Snow</td>
	      		<td>Mother</td>
	      		<td>10%</td>

  <td>
	<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item ><router-link to="/form">Edit </router-link></b-dropdown-item>
    <b-dropdown-item >Delete</b-dropdown-item>
	</b-dropdown>
					</td> 
	      	</tr>
              </tbody>
	  </table>
	  </b-col>
	  </b-row>
  </div>
        
        
</div>
  </card>
</base-header>
</template>

<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';
  // Tables
  import DeptTeamTable from '../Dashboard/DeptTeamTable';
  import TasksTable from '../Dashboard/TasksTable';
 

  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      TasksTable,
      DeptTeamTable
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Performance',
                data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
              }
            ],
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>