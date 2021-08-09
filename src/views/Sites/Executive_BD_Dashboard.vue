<template>
  <div>
      
        <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
        <b-row>
            <div>
                <div align-v="center" slot="header" >
                    <b-col cols="6">
                        <h4 class="mb-0">Overview</h4>
                    </b-col>
                </div>
                <br><br>
                <b-row>
                <b-col xl="6" md="2">
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
                <b-col xl="6" md="2">
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
            </b-row>

            <b-row>
                <b-col xl="6" md="2">
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
                <b-col xl="6" md="2">
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
            
            <b-col xl="6" md="3">
                <br><br><br>
                <card>
                    <div align-v="center" slot="header" >
                        <b-col>
                            <h3 class="mb-0">Organizational Performance </h3>
                        </b-col>
                        <!--Charts-->
                        <b-container fluid class="mt-2">
                        <b-row>
                            <b-col xl="8" class="mb-5 mb-xl-0">
                            <card type="default" header-classes="bg-transparent">
                                <line-chart
                                :height="350"
                                ref="bigChart"
                                :chart-data="bigLineChart.chartData"
                                :extra-options="bigLineChart.extraOptions"
                                >
                                </line-chart>
                            </card>
                            </b-col>
                        </b-row>
                        <!-- End charts-->

                        </b-container>
                

                
            
                    </div>
                    <b-row>
                    <b-col md="auto">
                        <base-button type="info">Change View</base-button>
                    </b-col>    
                    <base-input md="auto">
                        <select class="form-control">
                            <option>Group Level</option>
                            <option>Subsidiary Level</option>
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
            

        </b-row>
    
        </base-header>

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
