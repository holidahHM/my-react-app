<template>

<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">

  <card>
      <div align-v="center" slot="header" >
      <b-col cols="12">
        <h3 class="mb-0">Retirement projections </h3>
      </b-col>
    </div>

    <div>
  <b-tabs pills>

    <b-tab active>
        <template v-slot:title >
            Projections
        </template>
        <br>
        <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0 " >Projections </h3>
            </b-col>
        </div>
        <br>
            <b-tabs pills>
                <b-tab active>
                    <template v-slot:title >
                        Projections at Retirement
                    </template>
                    <br>
                    <b-col xl="12" md="3">
                    
                    <card>
                        <div align-v="center" slot="header" >

                            <b-col>
                                <h3 class="mb-0">Organizational Performance </h3>
                            </b-col>
                            <div>
                                <br><br>
                    <b-row>
                    <b-col xl="3" md="2">
                    <stats-card title="Total traffic"
                                type="gradient-red"
                                sub-title="350,897"
                                icon="ni ni-active-40"
                                class="mb-4">

                        <template slot="footer">
                        <span class="text-success mr-2">3.48%</span>
                        <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                    </b-col>
                    <b-col xl="3" md="2">
                    <stats-card title="Total traffic"
                                type="gradient-orange"
                                sub-title="2,356"
                                icon="ni ni-chart-pie-35"
                                class="mb-4">

                        <template slot="footer">
                        <span class="text-success mr-2">12.18%</span>
                        <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                    </b-col>
                
                    <b-col xl="3" md="2">
                    <stats-card title="Sales"
                                type="gradient-green"
                                sub-title="924"
                                icon="ni ni-money-coins"
                                class="mb-4">

                        <template slot="footer">
                        <span class="text-danger mr-2">5.72%</span>
                        <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>

                    </b-col>
                    <b-col xl="3" md="2">
                    <stats-card title="Stats"
                                type="gradient-info"
                                sub-title="49,65%"
                                icon="ni ni-chart-bar-32"
                                class="mb-4">

                        <template slot="footer">
                        <span class="text-success mr-2">54.8%</span>
                        <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                    </b-col>
                </b-row>  

                </div>
                            <line-chart
                            :height="350"
                            ref="bigChart">
                            </line-chart>
                        </div>
                        <b-row>
                        <b-col md="auto">
                            <base-button type="info">Change View</base-button>
                        </b-col>    
                        <base-input md="auto">
                            <select class="form-control">
                                <option>Departmental</option>
                                <option>Sub Departmental</option>
                                <option>Individual</option>
                            </select>
                        </base-input>
                        <base-input>
                            <select class="form-control">
                                <option>Pension</option>
                                <option>Trust</option>
                                <option>Acturial Service</option>
                                <option>Insurance</option>
                            </select>
                        </base-input>
                        </b-row>
                    </card>
                </b-col>
                </b-tab>
                <b-tab>
                    <template v-slot:title >
                        Personal Data Used & Actuarial Assumptions
                    </template>
                    <card>
                        <div align-v="center" slot="header" >

                            <b-col>
                                <h3 class="mb-0">Organizational Performance </h3>
                            </b-col>
                            <div>
                    <b-row>
                    <b-col xl="12" md="2">
                    <stats-card title="Total traffic"
                                type="gradient-red"
                                sub-title="350,897"
                                icon="ni ni-active-40"
                                class="mb-4">

                        <template slot="footer">
                        <span class="text-success mr-2">3.48%</span>
                        <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                    </b-col>
                    <b-col xl="12" md="2">
                    <stats-card title="Total traffic"
                                type="gradient-orange"
                                sub-title="2,356"
                                icon="ni ni-chart-pie-35"
                                class="mb-4">

                        <template slot="footer">
                        <span class="text-success mr-2">12.18%</span>
                        <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                    </b-col>
                
                    <b-col xl="12" md="2">
                    <stats-card title="Sales"
                                type="gradient-green"
                                sub-title="924"
                                icon="ni ni-money-coins"
                                class="mb-4">

                        <template slot="footer">
                        <span class="text-danger mr-2">5.72%</span>
                        <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>

                    </b-col>
                    <b-col xl="12" md="2">
                    <stats-card title="Stats"
                                type="gradient-info"
                                sub-title="49,65%"
                                icon="ni ni-chart-bar-32"
                                class="mb-4">

                        <template slot="footer">
                        <span class="text-success mr-2">54.8%</span>
                        <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                    </b-col>
                </b-row>  

                </div>
                            <br>
                        <line-chart
                        :height="350"
                        ref="bigChart"
                        :chart-data="bigLineChart.chartData"
                        :extra-options="bigLineChart.extraOptions"
                        >
                        </line-chart>
                    </div>
                    <b-row>
                    <b-col md="auto">
                        <base-button type="info">Change View</base-button>
                    </b-col>    
                    <base-input md="auto">
                        <select class="form-control">
                            <option>Departmental</option>
                            <option>Sub Departmental</option>
                            <option>Individual</option>
                        </select>
                    </base-input>
                     <base-input>
                        <select class="form-control">
                            <option>Pension</option>
                            <option>Trust</option>
                            <option>Acturial Service</option>
                            <option>Insurance</option>
                        </select>
                    </base-input>
                    </b-row>
                    </card>
                </b-tab>
                <b-tab>
                    <template v-slot:title >
                        Guide
                    </template>
                </b-tab>
            </b-tabs>
        
    </b-tab>

    <b-tab>
      <template v-slot:title >
         Custom Projections
      </template>
      <br>
        <br>
        <table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
		<th scope="col">Check Box</th>
	      <th scope="col">Trustee Name</th>
	      <th scope="col">Designation</th >
			 <th scope="col">Date elected</th>
			 <th scope="col">Term End Date</th>
			 <th scope="col">Trustee Certification Status</th>
             <th scope="col">Email</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
				<td><input type="checkbox"  name="scheme_no1" value="323"></td>
	      		<td>Levy Wasike</td>
	      		<td>Member Elected</td>
	      		<td>10-08-2020</td>
	      		<td>10-08-2020</td>
	      		<td>Certified</td>
                <td>lwasike100@hotmail.com</td>
	      	</tr>
			  
      </tbody>
	  </table>
    </b-tab>
    <b-tab>
      <template v-slot:title >
         Actuarial Basis by Scheme
      </template>
      <div style="overflow: scroll;"> 
        <b-row>
        <b-col xl="12">
            <br><br>
            <table class="table table-stripped">
                <thead class="thead-light">
                <tr>
                <th scope="col">Check Box</th>
                <th scope="col">Provider Name</th>
                <th scope="col">Provider Location</th >
                    <th scope="col">Provider Role</th>
                    <th scope="col">Effective Date</th>
                </tr>
                </thead>
            <tbody id="myTable">
                            <tr>
                        <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                        <td>Standard Chartered Bank Kenya Limited Custody Services</td>
                        <td>50 Westlands Road, Standard Chartered @ Chiromo, Nairobi</td>
                        <td>Custodian</td>
                        <td>10-08-2020</td>
                    </tr>
                    
            </tbody>
            </table>
        </b-col>
        </b-row>
        </div>
    </b-tab>
    <b-tab>
      <template v-slot:title >
         Past Projections
      </template>
      <div style="overflow: scroll;"> 
        <b-row>
        <b-col xl="12">
            <br><br>
            <table class="table table-stripped">
                <thead class="thead-light">
                <tr>
                <th scope="col">Check Box</th>
                <th scope="col">Provider Name</th>
                <th scope="col">Provider Location</th >
                    <th scope="col">Provider Role</th>
                    <th scope="col">Effective Date</th>
                </tr>
                </thead>
            <tbody id="myTable">
                            <tr>
                        <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                        <td>Standard Chartered Bank Kenya Limited Custody Services</td>
                        <td>50 Westlands Road, Standard Chartered @ Chiromo, Nairobi</td>
                        <td>Custodian</td>
                        <td>10-08-2020</td>
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
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

 

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