<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col xl="4" md="6">
          <stats-card title="COMPLIANCE OVERVIEW"
                      type="gradient-info"
                      sub-title="66%"
                      icon="ni ni-chart-bar-32"
                      class="mb-4">

            <template slot="footer">
              <span class="text-nowrap">Member Edits : </span>
              <span class="text-success mr-2">98%</span><br>
              <span class="text-nowrap">Withdrawals : </span>
              <span class="text-success mr-2">76%</span><br>
              <span class="text-nowrap">Policies : </span>
              <span class="text-info mr-2">66% </span><br>
              <span class="text-nowrap">Claims : </span>
              <span class="text-danger mr-2">37% </span><br>
              <span class="text-nowrap">Active Member Data : </span>
              <span class="text-warning mr-2">47% </span><br>



            </template>
          </stats-card>
        </b-col>
        <b-col xl="4" md="6">
          <stats-card title="Membership Overview"
                      type="gradient-green"
                      sub-title="2,356"
                      icon="ni ni-chart-pie-35"
                      class="mb-4">

            <template slot="footer">
              <span class="text-nowrap">Active Policies : </span>
              <span class="text-success mr-2">1324</span><br>
              <span class="text-nowrap">Waiting Period(90days) : </span>
              <span class="text-info mr-2">343</span><br>
              <span class="text-nowrap">Lapsed Policies : </span>
              <span class="text-warning mr-2">443</span><br>
              <span class="text-nowrap">Rejected Policies : </span>
              <span class="text-danger mr-2">246</span><br>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="4" md="6">
          <stats-card title="Report Quick LInks"
                      type="gradient-green"
                      sub-title=""
                      icon="ni ni-active-40"
                      class="mb-4">

            <template slot="footer">
              <span class="text-nowrap">Withdrawal Reports</span><br>
              <span class="text-info mr-2">Claim Cycle Reports,Overdue Withdrawal Reports etc</span><br><br>
              <span class="text-nowrap">Administration Reports</span><br>
              <span class="text-info mr-2">Comprehensive Administration Reports</span><br><br>
              <span class="text-nowrap">Administration Reports</span><br>
              <span class="text-info mr-2">Comprehensive Administration Reports</span><br><br>

            </template>
          </stats-card>
        </b-col></b-row>
        <b-row>
         <b-col xl="6" md="6">
          <stats-card title="Actions Required"
                      type="gradient-orange"
                      icon="ni ni-chart-pie-35"
                      class="mb-4">

            <template slot="footer">
              <span class="text-nowrap">Member Edits : </span><br>
              <span class="text-warning mr-2">12 unposted Member Edits</span><br>
              <span class="text-nowrap">Waiting Period : </span><br>
              <span class="text-warning mr-2">67 Active Policies lapsing in 90 days</span><br>
              <span class="text-nowrap">Claims: </span><br>
              <span class="text-warning mr-2">45 Claims pending Approval</span><br>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="6" md="6">
          <stats-card title="Immediate Risk"
                      type="gradient-red"
                      icon="ni ni-chart-pie-35"
                      class="mb-4">

            <template slot="footer">
              <span class="text-nowrap">Claims</span><br>
              <span class="text-danger mr-2">36 Claims Pending Approval over 30days</span><br><br>
              <span class="text-nowrap">Waiting Period</span><br>
              <span class="text-danger mr-2">6   Active POlicies lapsing in 5 days</span><br><br>

            </template>
          </stats-card>
        </b-col>
      </b-row>
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="12" class="mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-light text-uppercase ls-1 mb-1">Overview of Scheme Compliance</h6>
                <h5 class="h3 text-white mb-0">Compliance Overview</h5>
              </b-col>
              <b-col>
                <b-nav class="nav-pills justify-content-end">
                  <b-nav-item
                       class="mr-2 mr-md-0"
                       :active="bigLineChart.activeIndex === 0"
                       link-classes="py-2 px-3"
                       @click.prevent="initBigChart(0)">
                      <span class="d-none d-md-block">Monthly</span>
                      <span class="d-md-none">M</span>
                  </b-nav-item>
                  <b-nav-item
                    link-classes="py-2 px-3"
                    :active="bigLineChart.activeIndex === 1"
                    @click.prevent="initBigChart(1)"
                  >
                    <span class="d-none d-md-block">Quarterly</span>
                    <span class="d-md-none">Q</span>
                  </b-nav-item>
                  <b-nav-item
                    link-classes="py-2 px-3"
                    :active="bigLineChart.activeIndex === 2"
                    @click.prevent="initBigChart(2)"
                  >
                    <span class="d-none d-md-block">Annually</span>
                    <span class="d-md-none">A</span>
                  </b-nav-item>
                </b-nav>
              </b-col>
            </b-row>
            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </card>
        </b-col>
        <!--<b-col xl="4" class="mb-5 mb-xl-0">
           <tasks-table></tasks-table>
        </b-col>
        SOCIAL TRAFFIC TABLE
          <b-col xl="4" class="mb-5 mb-xl-0">
          <social-traffic-table></social-traffic-table>
        </b-col>-->
      </b-row><br><b-row>
        <b-col xl="12" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">MEMBER SERVICING</h6>
                <h5 class="h3 mb-0">CLAIMS / WITHDRAWALS</h5>
              </b-col>
            </b-row>

            <bar-chart
              :height="350"
              ref="barChart"
              :chart-data="redBarChart.chartData"
            >
            </bar-chart>
          </card>
        </b-col></b-row>
      <!-- End charts

      Tables-->
     
      <!--End tables-->
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
            [0, 20, 5, 25, 10, 30, 15, 40, 40],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: ['Compliance','label',],
                data: 
                [0, 20, 10, 30, 15, 40, 20, 60, 60]
              }
            ],
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Member Withdrawals',
              data: [8, 45, 17, 54, 39, 8, 25, 20, 30, 22, 17, 29]
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
              label: 'Compliance',
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
