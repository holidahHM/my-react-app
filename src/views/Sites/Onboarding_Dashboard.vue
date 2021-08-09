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
        <!--<b-col xl="2" md="6">
          <stats-card title="DEPT"
                      sub-title="ICT"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">Sys-Admin</span>
              <span class="text-nowrap">Users-role</span>
            </template>
          </stats-card>
        </b-col>-->
        <b-col xl="4" md="6">
          <stats-card title="LEADS"
                      type="gradient-orange"
                      sub-title="2,356"
                      icon="ni ni-chart-pie-35"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">+12.18%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="4" md="6">
          <stats-card title="PROSPECTS"
                      type="gradient-green"
                      sub-title="1924"
                      icon="ni ni-money-coins"
                      class="mb-4">

            <template slot="footer">
              <span class="text-nowrap">Medical  : </span>
              <span class="text-success mr-2">234</span><br>
              <span class="text-nowrap">Easy Cover  : </span>
              <span class="text-info mr-2">723</span><br>
              <span class="text-nowrap">Motor  :</span>
              <span class="text-danger mr-2">1035</span>
            </template>
          </stats-card>

        </b-col>
        <b-col xl="4" md="6">
          <stats-card title="Performance"
                      type="gradient-info"
                      sub-title=""
                      icon="ni ni-chart-bar-32"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">+54.8%</span>
              <span class="text-nowrap">Since last month</span>
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
                <h5 class="h3 text-white mb-0">OVERVIEW OF ACTIVE PROSPECTS</h5>
              </b-col>
              <b-col>
                <b-nav class="nav-pills justify-content-end">
                  <b-nav-item
                       class="mr-2 mr-md-0"
                       :active="bigLineChart.activeIndex === 0"
                       link-classes="py-2 px-3"
                       @click.prevent="initBigChart(0)">
                      <span class="d-none d-md-block">Month</span>
                      <span class="d-md-none">M</span>
                  </b-nav-item>
                  <b-nav-item
                    link-classes="py-2 px-3"
                    :active="bigLineChart.activeIndex === 1"
                    @click.prevent="initBigChart(1)"
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

       <!-- <b-col xl="4" class="mb-5 mb-xl-0">
            <dept-team-table></dept-team-table>
          previous card for the performance chart
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                <h5 class="h3 mb-0">Total orders</h5>
              </b-col>
            </b-row>

            <bar-chart
              :height="350"
              ref="barChart"
              :chart-data="redBarChart.chartData"
            >
            </bar-chart>
          </card> 
        </b-col>-->
      </b-row>
      <!-- End charts-->

      <!--Tables-->
      <!--<b-row class="mt-5">
        <b-col xl="12" class="mb-5 mb-xl-0">
           <tasks-table></tasks-table>
        </b-col>-->
        <!--SOCIAL TRAFFIC TABLE
          <b-col xl="4" class="mb-5 mb-xl-0">
          <social-traffic-table></social-traffic-table>
        </b-col>-->
      <!--</b-row>-->
      <!--<End tables-->
    </b-container><br>
    <b-row>
     <b-col xl="6" md="6">
          <stats-card title="Report Quick Links"
                      sub-title=""
                      icon="ni ni-active-40"
                      class="mb-4">
                      

            <template slot="footer">
              <span class="text-white-nowrap">Onboarding Reports</span><br>
              <span class="text-info mr-2">Active Members Reports</span><br><br>
              <span class="text-nowrap">Administration Reports</span><br>
              <span class="text-info mr-2">Comprehensive Administration Reports</span><br><br>

            </template>
          </stats-card>
        </b-col>
          <b-col xl="6" md="6">
          <stats-card title="Communication"
                      sub-title="1240.00 sms units"
                      icon="ni ni-send"
                      class="mb-4">
                      

            <template slot="footer">

            </template>
          </stats-card>
        </b-col></b-row>

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
                label: 'Prospects',
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
              label: 'Prospects',
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
