<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <!--one card removed based on bootstrap row size 
        <b-col xl="2" md="6">
          <stats-card title="Compliance"
                      type="gradient-red"
                      sub-title="350,897"
                      icon="ni ni-active-40"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col> -->
        <b-col xl="3" md="2">
          <router-link to="/member_pension">
            <stats-card 
                sub-title="National ID"
                class="mb-4 ">
                National ID
                <b-badge variant="danger" class="badge-circle badge-md  border-white float-right">1000</b-badge>
                <template slot="footer">
                  
                  
                </template>
          </stats-card>
          </router-link>
        </b-col>
        <b-col xl="3" md="2">
          <router-link to="/member_pension">
            <stats-card 
                sub-title="National ID"
                class="mb-4 ">
                Claim Forms
                <b-badge variant="info" class="badge-circle badge-md  border-white float-right">400</b-badge>
                <template slot="footer">
                  
                  
                </template>
          </stats-card>
          </router-link>
        </b-col>
        <b-col xl="3" md="2">
          <router-link to="/member_pension">
            <stats-card 
                sub-title="National ID"
                class="mb-4 ">
                Policy Certificate
                <b-badge variant="primary" class="badge-circle badge-md  border-white float-right">54</b-badge>
                <template slot="footer">
                  
                  
                </template>
          </stats-card>
          </router-link>
        </b-col>
        <b-col xl="3" md="2">
          <router-link to="/member_pension">
            <stats-card 
                sub-title="National ID"
                class="mb-4 ">
                Birth certificate
                <b-badge variant="success" class="badge-circle badge-md  border-white float-right">14</b-badge>
                <template slot="footer">
                  
                  
                </template>
          </stats-card>
          </router-link>
        </b-col>
      </b-row>
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <card>
        <b-row class="float-right pb-4">
                    
        <b-col lg="1" >
        
        </b-col>
        </b-row>
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
            <b-col lg="5" class="my-1">
              <b-form-group
                label="Document Type"
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
                      <option value="">National ID</option>
                      <option value="">Policy Certificate</option>
                      <option value="">Birth Certificate</option>
                      <option value="">Signed Joining Form</option>
                      <option value="">Claim Forms</option>
                      <option value="">Policy Document</option>
                      <option value="">Endoresment</option>
                      <option value="">Claim Rejection Doc</option>
                      <option value="">Claim Approval</option>
                      <option value="">Bank Details</option>
                      <option value="">Burial Permit</option>
                      <option value="">Deceased ID</option>
                    </template>
                  </b-form-select>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col lg="2">
              <router-link to="/benefit_claim">
                <b-button variant="success">Upload</b-button>
              </router-link>
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
              <th scope="col">Member ID</th>
              <th scope="col">Member Name</th>
            <th scope="col">Document Name</th>
            <th scope="col">Uploaded on</th>
            <th scope="col">Uploaded by</th>
            <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody id="myTable">
                <tr>
                  <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                  <td>1</td>
                  <td>323</td>
                  <td>Snow</td>
                  <td>Nationl ID</td>
                  <td>15-02-2021</td>
                  <td>John </td>

                  <td>
                  <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
                    <b-dropdown-item > <router-link to="">View </router-link></b-dropdown-item>
                    <b-dropdown-item ><router-link to="">Send </router-link></b-dropdown-item>
                    <b-dropdown-item >Delete</b-dropdown-item>
                  </b-dropdown>
                  </td> 
                </tr>
                <tr>
                  <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                  <td>2</td>
                  <td>323</td>
                  <td>Snow</td>
                  <td>Nationl ID</td>
                  <td>15-02-2021</td>
                  <td>John </td>

                  <td>
                  <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
                    <b-dropdown-item > <router-link to="">View </router-link></b-dropdown-item>
                    <b-dropdown-item ><router-link to="">Send </router-link></b-dropdown-item>
                    <b-dropdown-item >Delete</b-dropdown-item>
                  </b-dropdown>
                  </td> 
                </tr>
                <tr>
                  <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                  <td>3</td>
                  <td>323</td>
                  <td>Snow</td>
                  <td>Nationl ID</td>
                  <td>15-02-2021</td>
                  <td>John </td>

                  <td>
                  <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
                    <b-dropdown-item > <router-link to="">View </router-link></b-dropdown-item>
                    <b-dropdown-item ><router-link to="">Send </router-link></b-dropdown-item>
                    <b-dropdown-item >Delete</b-dropdown-item>
                  </b-dropdown>
                  </td> 
                </tr>
            </tbody>
             <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
          </table>
          </b-col>
          </b-row>
        </div>
        </card>
    </b-container>

  </div>
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
