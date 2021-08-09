<template>
    <div>

        <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
       <b-breadcrumb class="breadcrumb-links bg-gradient-success text-white pt--10" style="font-size:15px;">
            <b-breadcrumb-item href="#home" class="text-white">Home</b-breadcrumb-item>
            <b-breadcrumb-item href="#library" class="text-white" active>Strategy Scorecard</b-breadcrumb-item>
        </b-breadcrumb>
            <b-col xl="12" md="3">
               <card>
                   <div align-v="center" slot="header" >
                    <b-col>
                        <h3 class="mb-0">STRATEGY DASHBOARD</h3>
                    </b-col>
                    </div>
                    <b-row>
                        <b-col xl="6" md="3"> 
                            <b-row class="pt-5">
                            <b-col style="overflow: scroll;" >
                        <table class="table table-stripped">
                            <tbody id="myTable">
                                <tr>
                                    <td class="bg-success text-white">Project summary</td>
                                    <td>IT System</td>
                                </tr>
                                <tr>
                                    <td class="bg-warning text-white">Start Date</td>
                                    <td>10-07-2021</td>
                                </tr>
                                <tr>
                                    <td class="bg-info text-white">End Date</td>
                                    <td>25-12-2021</td>
                                </tr>
                                <tr>
                                    <td class="bg-danger text-white">Review Frequency</td>
                                    <td>Weekly</td>
                                </tr>
                                
                            </tbody>
                            </table>
                            </b-col>
                            </b-row>
                        </b-col>
                        <b-col xl="6" md="8"> 
                            <b-row class="pt-5">
                            <b-col style="overflow: scroll;" >
                        <table class="table table-stripped ">
                            <tbody id="myTable">
                                <tr>
                                    <td class="bg-success text-white">Review Parameter</td>
                                    <td>Current Status</td>
                                </tr>
                                <tr>
                                    <td class="bg-warning text-white">Implementation Period</td>
                                    <td>6 months</td>
                                </tr>
                                <tr>
                                    <td class="bg-info text-white">Overall Progress</td>
                                    <td>29%</td>
                                </tr>
                                <tr>
                                    <td class="bg-danger text-white">Total Budget</td>
                                    <td>1000000</td>
                                </tr>
                                <tr>
                                    <td class="bg-danger text-white">Utilised Budget</td>
                                    <td>10000</td>
                                </tr>
                                <tr>
                                    <td class="bg-danger text-white">Remaining Budget</td>
                                    <td>990000</td>
                                </tr>
                                
                            </tbody>
                            </table>
                            </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                    <br><br>
                    <div> 
                        <b-row style="overflow: scroll;">
                        <b-col xl="6">
                    <table class="table table-stripped">
                            <thead class="thead-light">
                                <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">BSC</th >
                                <th scope="col">PERFOMANCE</th>
                                

                            </tr>
                            <tr>
                            <th scope="col">Parameter</th>
                            <th scope="col">Total Initiative</th>
                            <th scope="col">Implemeted</th >
                                <th scope="col">outstanding</th>

                            </tr>
                            </thead>
                        <tbody id="myTable">
                            <tr>
                                        <td>Financial</td>
                                    <td>10</td>
                                    <td>60%</td>
                                    <td>23%</td>
                            </tr>
                            <tr>
                                        <td>Customer</td>
                                    <td>12</td>
                                    <td>70%</td>
                                    <td>26%</td>
                            </tr>
                            <tr>
                                        <td>Internal Process</td>
                                    <td>9</td>
                                    <td>40%</td>
                                    <td>16%</td>
                            </tr>
                            <tr>
                                        <td>Enablers</td>
                                    <td>11</td>
                                    <td>30%</td>
                                    <td>11%</td>
                            </tr>
                        </tbody>
                        </table>
                        </b-col>
                        </b-row>
                    </div>
                    <br><br>
                    <div style="overflow: scroll;"> 
                        
                        <b-col xl="6">
                    <table class="table table-stripped">
                       
                            <thead class="thead-light">
                                 
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">TASKS</th >
                                <th scope="col">SCHEDULE</th>
                                <th scope="col"></th>
                                <th scope="col"></th>

                            </tr>
                            <tr>
                                    <th>Outline</th>
                                    <th>No of Task</th>
                                    <th>Timelines</th>
                                    <th>%task</th>
                                    <th>Log</th>
                            </tr>
                            </thead>
                        <tbody id="myTable">
                            <tr>
                                    <td>Overdue Task</td>
                                    <td>10</td>
                                    <td>22/5/2021</td>
                                    <td>23%</td>
                                    <td></td>
                            </tr>
                            <tr>
                                    <td>Upcoming Deadlines</td>
                                    <td>10</td>
                                    <td>22/5/2021</td>
                                    <td>26%</td>
                                    <td></td>
                            </tr>
                            <tr>
                                    <td>Inprogress</td>
                                    <td>10</td>
                                    <td>22/5/2021</td>
                                    <td>16%</td>
                                    <td></td>
                            </tr>
                            <tr>
                                    <td>Completed Task</td>
                                    <td>10</td>
                                    <td>22/5/2021</td>
                                    <td>11%</td>
                                    <td></td>
                            </tr>
                        </tbody>
                        </table>
                        </b-col>
                    </div>

               </card> 
            </b-col>
            <br><br>
            <b-col>
                <card>
                    <b-form @submit.prevent="updateProfile">
                            <h6 class="heading-small text-muted mb-4">Scorecard Register</h6>

                            <div class="pl-lg-4">
                                <b-row>
                                <b-col lg="6">
                                    <base-input
                                    label="Product group"
                                    placeholder="Choose Product or Service"
                                    v-model="user.email"
                                    >
                                    <select  class="form-control">
                                        <option>Pension</option>
                                    </select>
                                    </base-input>
                                </b-col>
                                
                                </b-row>
                                <b-row>
                                <b-col lg="4">
                                    <base-input 
                                    label="Category" 
                                    type="number" 
                                    id="example-number-input"
                                    v-model="user.email"
                                    >
                                    
                                    </base-input>
                                </b-col>
                                <b-col lg="4">
                                    <base-input
                                    label="Timeline"
                                    type="date"
                                    id="example-date-input"
                                    v-model="user.email"
                                    >
                                    </base-input>
                                </b-col>
                                <b-col lg="4">
                                    <base-input
                                    label="Target"
                                     type="number" 
                                    id="example-number-input"
                                    v-model="user.email"
                                    >
                                    </base-input>
                                </b-col>
                                </b-row>
                                <b-row>
                                <b-col lg="4">
                                    <base-input
                                    label="Strategy"
                                     type="number" 
                                    id="example-number-input"
                                    v-model="user.email"
                                    >
                                    </base-input>
                                </b-col>
                                <b-col lg="4">
                                    <base-input
                                    label="KPI"
                                    type="number" 
                                    id="example-number-input"
                                    v-model="user.email"
                                    >
                                    </base-input>
                                </b-col>
                                <b-col lg="4">
                                    <base-input
                                    label="budget"
                                     type="number" 
                                    id="example-number-input"
                                    v-model="user.email"
                                    >
                                    </base-input>
                                </b-col>
                                </b-row>
                                <b-row>
                                <b-col lg="4">
                                    <base-input
                                    label="Initiative"
                                     type="number" 
                                    id="example-number-input"
                                    v-model="user.email"
                                    >
                                    </base-input>
                                </b-col>
                                <b-col lg="4">
                                    <base-input
                                    label="Baseline"
                                     type="number" 
                                    id="example-number-input"
                                    v-model="user.email"
                                    >
                                    </base-input>
                                </b-col>
                                <b-col lg="4">
                                    <base-input
                                    label="Responsibility"
                                     type="number" 
                                    id="example-number-input"
                                    v-model="user.email"
                                    >
                                    </base-input>
                                </b-col>
                                </b-row>

                            </div>

                            <b-row class="d-flex justify-content-center mb-3"  >
                                <router-link to="">
                                    <base-button type="info">Save</base-button>
                                </router-link>
                                    <base-button type="danger">Delete</base-button>
                                
                                </b-row>
                                <hr class="my-4">

                            </b-form>
                </card>
            </b-col>
            <br>
            <b-col>
                <card>
                    <div style="overflow: scroll;"> 
	  <b-row>
	  <b-col xl="6">
          <h6 class="heading-small text-muted mb-4">Scorecard Register inputs</h6>
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
		<th scope="col"></th>
	      <th scope="col">Category</th>
	      <th scope="col">Initiative</th >
			 <th scope="col">Timeline</th>
			 <th scope="col">KPI</th>
			 <th scope="col">Baseline</th>
			 <th scope="col">Target</th>
			 <th scope="col">Budget</th>
			 <th scope="col">Resposibility</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
        <tr>
				    <td>1</td>
	      		<td>Member Satisfaction</td>
	      		<td>Reduce turn around time</td>
	      		<td>3 months</td>
	      		<td>% of queries and complaints</td>
	      		<td>-</td>
	      		<td>100%</td>
	      		<td>1000</td>
	      		<td>Admin & communication committee</td>

        </tr>
        <tr>
				    <td></td>
	      		<td></td>
	      		<td>Annual satisfaction survey</td>
	      		<td>12 months</td>
	      		<td>satisfaction index</td>
	      		<td>-</td>
	      		<td>80%</td>
	      		<td>1000</td>
	      		<td>Admin & communication committee</td>

        </tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
  </div>
                </card>
            </b-col>
        
      
        
        </base-header>
    </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
      },
      i_f_name:'', //i stands for internal
      i_l_name:'',
      i_email:'',
      user:'',
      user_zone:'',
      user_accessto:''
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style></style>