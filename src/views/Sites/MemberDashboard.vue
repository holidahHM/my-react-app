<template>

<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
<h4>Featured Products</h4>
<b-row>
                    <b-col xl="3" md="2">
                      <router-link to="/member_pension">
                        <stats-card 
                            sub-title="KSH 1,999,005"
                            class="mb-4 ">

                            <template slot="footer">
                              <b-badge variant="danger" class="badge-circle badge-md  border-white float-right">4</b-badge>
                              <span class="text-nowrap "> Pension</span>
                            </template>
                      </stats-card>
                      </router-link>
                    </b-col>
                    <b-col xl="3" md="2">
                      <router-link to="/member_product">
                        <stats-card 
                                    sub-title="KSH 84,161,567"
                                    class="mb-4 bg-gradient-info">


                            <template slot="footer">
                            <span class="text-nowrap text-white"> Insurance</span>
                            <b-badge variant="danger" class="badge-circle badge-md  border-white float-right">4</b-badge>
                            </template>
                        </stats-card>
                      </router-link>
                    </b-col>
                
                    <b-col xl="3" md="2">
                      <router-link to="/member_trust">
                          <stats-card 
                                      sub-title="KSH 1,999,005"
                                      class="mb-4 bg-gradient-orange">

                              <template slot="footer">
                                <b-badge variant="danger" class="badge-circle badge-md  border-white float-right">2</b-badge>
                              <span class="text-nowrap text-white"> Trust</span>
                              </template>
                          </stats-card>
                      </router-link>
                    </b-col>
                    
                </b-row>  
<br><br>

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

                            <div>
                                <b-row>
                        <base-input md="auto">
                        <select class="form-control">
                            <option>With no communication</option>
                            <option>With communication</option>
                            <option>With PRM</option>
                            <option>With PRM and communication</option>
                        </select>
                    </base-input>
                        </b-row>
                                <br><br>
                    <b-row>
                    <b-col xl="3" md="2">
                    <stats-card title="Income Replaement Ratio(IRR)"
                                class="mb-4 ">
                                

                        <template slot="footer">
                        <span class="text-nowrap"></span>
                        <span class="text-success mr-2">41%</span>
                        <span class="text-nowrap">Projected</span>
                        <span class="text-success mr-2">75%</span>
                        <span class="text-nowrap">Desired</span>
                        </template>
                    </stats-card>
                    </b-col>
                    <b-col xl="3" md="2">
                    <stats-card 
                                sub-title="KSH 84,161,567"
                                class="mb-4 bg-gradient-info">

                        <template slot="footer">
                        <span class="text-nowrap text-white"> Member Account At Retirement</span>
                        </template>
                    </stats-card>
                    </b-col>
                
                    <b-col xl="3" md="2">
                    <stats-card 
                                sub-title="KSH 1,999,005"
                                class="mb-4 bg-gradient-orange">

                        <template slot="footer">
                        <span class="text-nowrap text-white"> Monthly Salary At Retirement</span>
                        </template>
                    </stats-card>

                    </b-col>
                    <b-col xl="3" md="2">
                    <stats-card 
                                sub-title="KSH 815,148"
                                class="mb-4 bg-gradient-success">

                        <template slot="footer">
                        <span class="text-nowrap text-white">Annuity Income At Retirement</span>
                        </template>
                    </stats-card>
                    </b-col>
                </b-row>  

                </div>
                        <br><br>
                        <b-col>
                            <h3>Projected Annuity vs Income Drawdown Comparison </h3>
                        </b-col>
                            <br><br>
                            <line-chart
                            :height="350"
                            ref="bigChart"
                            :chart-data="bigLineChart.chartData"
                            :extra-options="bigLineChart.extraOptions"
                            >
                            
                            </line-chart>
                        </div>
                        
                        <br>
                        <b-col xl="12" md="3">
                            <card>
                                <div align-v="center" slot="header" >
                                    <b-col>
                                        <h3 class="mb-0">Benefits Summary</h3>
                                    </b-col>
                                </div>
                                <div>
                                     <b-row>
                                        <b-col xl="3" md="2">
                                        <stats-card 
                                                    type="gradient-info"
                                                    sub-title="5,178,630"
                                                    class="mb-4 bg-gradient-orange">

                                            <template slot="footer">
                                            <span class="text-nowrap text-white">EMPLOYER PORTION</span>
                                            </template>
                                        </stats-card>
                                        </b-col>
                                    
                                        <b-col xl="3" md="2">
                                        <stats-card 
                                                    sub-title="5,178,630"
                                                    class="mb-4 bg-gradient-green">

                                            <template slot="footer">
                                            <span class="text-nowrap text-white">AVC PORTION</span>
                                            </template>
                                        </stats-card>

                                        </b-col>
                                        <b-col xl="3" md="2">
                                        <stats-card 
                                                    type="gradient-info"
                                                    sub-title="15,535,890"
                                                    class="mb-4 bg-gradient-info">

                                            <template slot="footer">
                                            <span class="text-nowrap text-white">TOTAL BENEFITS</span>
                                            </template>
                                        </stats-card>
                                        </b-col>
                                    </b-row> 
                                </div>
                                <hr class="my-4">

                            <b-button variant="info" v-b-popover.hover.right="'Member Current Age 51.'">
                            Retirement Tracker
                            </b-button>
                            </card>
                        </b-col>
                    </card>
                </b-col>
                </b-tab>
                <b-tab>
                    <template v-slot:title >
                        Personal Data Used & Actuarial Assumptions
                    </template>
                    <br>
                    <b-row>
                        <b-col xl="6" md="3">
                            <card>
                                <div align-v="center" slot="header" >
                                    <b-col>
                                        <h3 class="mb-0">Personal Data Used </h3>
                                    </b-col>
                                </div>
                                    
                                    <div>
                                        <h3><b>PERSONAL DATA</b></h3>
                                        <p>Date of birth: 1970-01-01</p>
                                        <p>Gender: Male</p>
                                        <hr class="my-4">
                                        <h3><b>SCHEME RELATED INFO</b></h3>
                                        <p>Member Account At Projection Date: 15,535,890.07</p>
                                        <p>Employee Contribution Rate: 0.05</p>
                                        <p>Employer Contribution Rate: 0.10</p>
                                        <p>Additional Voluntary Contribution Rate: 0.00</p>
                                        <hr class="my-4">
                                        <h3><b>OTHER DATA</b></h3>
                                        <p>Please note that this is derived from the last contribution</p>
                                        <p>Employee contribution at projection date: 50,000.00</p>
                                        <p>Employee contribution rate: .050000</p>
                                        <p>Salary = 50,000.00 / .050000 = 1,000,000.00</p>
                                    </div>
                                

                            </card>

                        </b-col>
                        <b-col xl="6" md="3">
                            <card>
                                <div align-v="center" slot="header" >
                                    <b-col>
                                        <h3 class="mb-0">Actuarial Assumptions </h3>
                                    </b-col>
                                </div>
                                <div>
                                        <h3><b>FINANCIAL ASSUMPTIONS</b></h3>
                                        <p>Discount Rate: .10</p>
                                        <p>Salary Growth: .08</p>
                                        <hr class="my-4">
                                        <h3><b>DEMOGRAPHIC ASSUMPTIONS</b></h3>
                                        <p>Mortality After Retirement: KE 2007-2010</p>
                                        <hr class="my-4">
                                        <h3><b>OTHER FACTORS/DATA</b></h3>
                                        <p>Projection Date: 2019-10-01</p>
                                        <p>Annual Pension Payment Frequency: 12</p>
                                        <p>Pension Payment Date: At the beggining of the period</p>
                                        <p>Annuity Description: Whole life annuity with no guarantee period or increments. Further, there is no allowance for any other insurance factors save for the ones listed above.</p>
                                    </div>
                            </card>
                        </b-col>
                    </b-row>
                    
                </b-tab>
                <b-tab>
                    <template v-slot:title >
                        Guide
                    </template>
                    <br>
                    <b-col xl="12" md="3">
                        <card>
                            <p>This tool helps you to determine whether you are on track to meet your retirement savings goal.</p>

                            <p>The commonly used methodology is the income replacement ratio(IRR).</p>

                            <p>IRR is the percentage of your retirement income (annuity) to your retirement salary.</p>

                            <p>To determine this, we have projected:</p>

                               <li> your accumulated contributions with interest to retirement (projected member account at retirement).</li>
                                <li>salary at retirement.</li>
                            
                            <p>In making the projections, we have made some assumptions on the average interest rate that your contributions will earn from the projection date to date of retirement.</p>

                            <p>Further, we have also made assumptions in calculating an annuity factor to convert the projected member account to pension. This does not however reflect an actual annuity quotation. The annuity quotation at the time of retirement will be dependent on the insurance company issuing you with a quotation as well as the prevailing market conditions.</p>

                            <p>The actual future events are sure to be specific from the assumptions we have made, and this can affect the projections. The projections can therefore not be assured.</p>

                            <p> However, we will continously monitor the market conditions inorder to provide you with more reasonable assumptions at all times.
                            </p>
                        </card>
                    </b-col>
                </b-tab>
            </b-tabs>
        
    </b-tab>

    <!--<b-tab>
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
    </b-tab>-->
    <b-tab>
      <template v-slot:title >
         Actuarial Basis by Scheme
      </template>
      <br>
        <br>
        <b-row class="float-right pb-4">
	
          <b-col xl="6" >

            <base-button id="show-btn" @click="$bvModal.show('bv-modal-example')" type="info">New</base-button>

                <b-modal id="bv-modal-example" hide-footer>
                    <template #modal-title>
                    Add New Basis
                    </template>

                    <div class="">
                    <b-form>

                            <div class="pl-lg-1">
                                <b-row>
                                <b-col lg="12">
                                    <base-input
                                    label="Scheme Code"
                                    >
                                    <select class="form-control">
                                        <option>Select </option>
                                        <option>ACCE00001 </option>
                                        <option>ACCE00002 </option>
                                    </select>
                                    </base-input>
                                </b-col>
                                </b-row>
                                <b-row>
                                   <b-col lg="12">
                                    <base-input
                                    label="Mortality"
                                    >
                                    <select class="form-control">
                                        <option>Select </option>
                                        <option>Ke 2007-2010 </option>
                                    </select>
                                    </base-input>
                                </b-col>
                                </b-row>
                                <b-row>
                                    <b-col lg="8">
                                        <base-input
                                        type="text"
                                        label="Interest Rate(%)" 
                                        >
                                        </base-input>
                                </b-col>
                                </b-row>
                                <b-row>
                                    <b-col lg="8">
                                        <base-input
                                        type="text"
                                        label="Interest Rate(%)" 
                                        >
                                        </base-input>
                                </b-col>
                                </b-row>
                                <b-row>
                                <b-col lg="12">
                                    <base-input
                                    label="Frequency"
                                    >
                                    <select class="form-control">
                                        <option>Monthly</option>
                                        <option>Bi-Monthly </option>
                                        <option>Quartely</option>
                                        <option>Half Yearly</option>
                                        <option>Annually</option>
                                    </select>
                                    </base-input>
                                </b-col>
                                </b-row>
                                <b-row>
                                <b-col lg="12">
                                    <base-input
                                    label="In Arrears or Advanced?"
                                    >
                                    <select class="form-control">
                                        <option>In Arrears </option>
                                        <option>In Advanced </option>
                                    </select>
                                    </base-input>
                                </b-col>
                                </b-row>
                                
                            </div>
                            <br>
                                <hr class="my-4">
                            </b-form>
                    </div>
                    <base-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')" type="success">Add</base-button>
                </b-modal>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="12">
           <p class="mb-0"><b>Type something in the input field to search the table</b></p>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col lg="6">
          <b-form-input type="text"
                  label=""
                  placeholder="Search..." class="text-left"></b-form-input>
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
                <th scope="col">Basis ID</th>
                <th scope="col">Scheme Code</th >
                <th scope="col">Interest Rate</th>
                <th scope="col">Salary Escalation</th>
                <th scope="col">Mortality After Retirement</th>
                <th scope="col">Annual Frequency</th>
                <th scope="col">Payment Period</th>
                <th scope="col">Date Set</th>
                <th scope="col">Set by</th>
                <th scope="col">Can be Accessed By</th>
                <th scope="col">Approved BY</th>
                <th scope="col">Actions</th>
                </tr>
                </thead>
            <tbody id="myTable">
              <tr>
                  <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                  <td>1</td>
                  <td>KE005</td>
                  <td>10%</td>
                  <td>8%</td>
                  <td>KE 2007-2020</td>
                  <td>12</td>
                  <td>In Advance</td>
                  <td></td>
                  <td></td>
                  <td>All Members</td>
                  <td><b-badge variant="success">Approve</b-badge></td>

                  <td>
                      <b-badge variant="danger">Delete</b-badge>
                </td>
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
      <br>
        <br>
        <b-row>
          <b-col lg="12">
           <p class="mb-0"><b>Type something in the input field to search the table</b></p>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col lg="6">
          <b-form-input type="text"
                  label=""
                  placeholder="Search..." class="text-left"></b-form-input>
            </b-col>
        </b-row>
        <br>

        <div style="overflow: scroll;"> 
          <b-row>
          <b-col xl="6">
          <table class="table table-stripped">
            <thead class="thead-light">
                <tr>
                <th scope="col">Member Number</th>
                <th scope="col">Basis ID</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Gender</th>
                <th scope="col">EE Cont Rate(%)</th>
                <th scope="col">EE Cont Rate(%)</th>
                <th scope="col">AVC Cont Rate(%)</th>
                <th scope="col">Salary</th>
                <th scope="col">Member Account</th>
                <th scope="col">Projection Date</th>
                <th scope="col">IRR(%)</th>
                <th scope="col">Member Account</th>
                <th scope="col">Salary</th>
                <th scope="col">Annuity Income</th>
                </tr>
                </thead>
            <tbody id="myTable">
              <tr>
                  <td>TEST</td>
                  <td>107</td>
                  <td>1970-01-01</td>
                  <td>Male</td>
                  <td>5</td>
                  <td>10</td>
                  <td>0</td>
                  <td>1000000</td>
                  <td>15535890.07</td>
                  <td>2019-10-01</td>
                  <td>40.778</td>
                  <td>84,161,566.956</td>

                  <td>
                      1,999,004.627
                </td>
                <td>815,147.69</td>
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