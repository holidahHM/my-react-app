<template>
  <div>
      
        <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
        <b-row>
            <b-col xl="4" md="3">
                <br><br><br>
                <card>
                    <div align-v="center" slot="header" >
                        <b-col>
                            <h3 class="mb-0">Targets </h3>
                        </b-col>
                    </div>
                    <b-row> 
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
                    <b-col class="d-flex justify-content-center mb-3">
                        <base-button type="info">View Performance Report</base-button>
                    </b-col> 
                </card>
            </b-col>
            <b-col xl="4" md="3">
                <br><br><br>
                <card>
                    <div align-v="center" slot="header" >
                        <b-col>
                            <h3 class="mb-0">Assigned Targets </h3>
                        </b-col>
                        <br>
                        <line-chart
                        :height="350"
                        ref="bigChart"
                        :chart-data="bigLineChart.chartData"
                        :extra-options="bigLineChart.extraOptions"
                        >
                        </line-chart>
                    </div>
                </card>
            </b-col>
            <b-col xl="4" md="3">
                <br><br><br>
                <card>
                    <div align-v="center" slot="header" >
                        <b-col>
                            <h3 class="mb-0">Actual Performance </h3>
                        </b-col>
                        <br>
                        <line-chart
                        :height="350"
                        ref="bigChart"
                        :chart-data="bigLineChart.chartData"
                        :extra-options="bigLineChart.extraOptions"
                        >
                        </line-chart>
                    </div>
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