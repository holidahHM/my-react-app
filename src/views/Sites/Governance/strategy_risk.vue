<template>
    <div>
        
        <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
        <b-breadcrumb class="breadcrumb-links bg-gradient-success text-white pt--10" style="font-size:15px;">
            <b-breadcrumb-item href="#home" class="text-white">Home</b-breadcrumb-item>
            <b-breadcrumb-item href="#library" class="text-white" active>Strategy Risk</b-breadcrumb-item>
        </b-breadcrumb>
        <b-row>
            <b-col xl="8" md="3">
               <card>
                   <div align-v="center" slot="header" >
                    <b-col>
                        <h3 class="mb-0">Risk Assesment</h3>
                    </b-col>
                    </div>
                    <div style="overflow: scroll;"> 
                            <b-row>
                            <b-col >
                        <table class="table table-stripped">
                                <thead class="thead-light">
                                <tr>
                                    <th></th>
                                <th scope="col">1-Impropable</th>
                                <th scope="col">2- Unlikely</th>
                                <th scope="col">3- Possible</th >
                                <th scope="col">4- Likely</th>
                                <th scope="col">5- Almost certain</th>

                                </tr>
                                </thead>
                            <tbody id="myTable">
                                <tr>
                                    <td>5-Extreme</td>
                                    <td class="bg-warning"></td>
                                    <td class="bg-info"></td>
                                    <td class="bg-danger"></td>
                                    <td class="bg-danger"></td>
                                    <td class="bg-danger"></td>
                                </tr>
                                <tr>
                                    <td>4-Major</td>
                                    <td class="bg-warning"></td>
                                    <td class="bg-info"></td>
                                    <td class="bg-danger"></td>
                                    <td class="bg-danger"></td>
                                    <td class="bg-danger"></td>
                                </tr>
                                 <tr>
                                     <td>3-Moderate</td>
                                    <td class="bg-success"></td>
                                    <td class="bg-warning"></td>
                                    <td class="bg-info"></td>
                                    <td class="bg-danger"></td>
                                    <td class="bg-danger"></td>
                                </tr>
                                <tr>
                                    <td>2-Minor</td>
                                    <td class="bg-success"></td>
                                    <td class="bg-success"></td>
                                    <td class="bg-warning"></td>
                                    <td class="bg-info"></td>
                                    <td class="bg-info"></td>
                                </tr>
                                <tr>
                                    <td>1-Insignificant</td>
                                    <td class="bg-success"></td>
                                    <td class="bg-success"></td>
                                    <td class="bg-success"></td>
                                    <td class="bg-warning"></td>
                                    <td class="bg-warning"></td>
                                </tr>
                                
                            </tbody>
                            </table>
                            </b-col>
                            </b-row>
                        </div>
                   
                       <br><br>
                       <b-row>
                       <div> 
                            <b-row>
                            <b-col >
                            <table class="table table-stripped">
                                <tbody id="myTable">
                                    <tr>
                                        <td class="bg-success text-white">12%</td>
                                        <td>Low risk</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-warning text-white">30%</td>
                                        <td>Medium Low Risk</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-info text-white">20%</td>
                                        <td>Medium High Risk</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-danger text-white">15%</td>
                                        <td>High Risk</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            </b-col>
                            </b-row>
                        </div>
                   </b-row>
               </card> 
            </b-col>
            <b-col xl="4">
                <card>
                    <div align-v="center" slot="header" >
                    <b-col>
                        <h3 class="mb-0">Risk Distribution by Process</h3>
                    </b-col>
                    </div>
                    <div>
                       <table class="table table-stripped">
                            <tbody id="myTable">
                                <tr>
                                    <td>Financials</td>
                                    <td>2%</td>
                                </tr>
                                <tr>
                                    <td>Operations</td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <td>Governance</td>
                                    <td>83%</td>
                                </tr>
                                <tr>
                                    <td>Compliance</td>
                                    <td>2%</td>
                                </tr>
                                <tr>
                                    <td>Legal</td>
                                    <td>2%</td>
                                </tr>
                                <tr>
                                    <td>Management</td>
                                    <td>2%</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>100%</td>
                                </tr>
                               
                                
                            </tbody>
                            </table>
                    </div>
                </card>
            </b-col>
        </b-row>
        <br><br>
        <b-row>
            <card>
                <b-col>
                    <b-card>
                        <b-form @submit.prevent="updateProfile">
                            <h6 class="heading-small text-muted mb-4">Risk settings</h6>

                            <div class="pl-lg-4">
                                <b-row>
                                <b-col lg="12">
                                    <base-input
                                    label="Product group"
                                    placeholder="Choose Division"
                                    >
                                    <select  class="form-control">
                                        <option>Pension</option>
                                    </select>
                                    </base-input>
                                </b-col>
                                </b-row>
                                <b-row>
                                <b-col lg="12">
                                    <base-input
                                    label="Risk Measure"
                                    placeholder="Choose Product or Service"
                                    v-model="user.email"
                                    >
                                    <select  class="form-control">
                                        <option>1-Improbable</option>
                                        <option>2-Unlikely</option>
                                        <option>3-Possible</option>
                                        <option>4-Likely</option>
                                        <option>5- Almost Certain</option>
                                    </select>
                                    </base-input>
                                </b-col>
                                </b-row>
                                <b-row>
                                <b-col lg="12">
                                    <base-input
                                    label="Types of Risk "
                                    placeholder="Choose Product or Service"
                                    v-model="user.email"
                                    >
                                    <select  class="form-control">
                                        <option>Investment Risk</option>
                                        <option>Funding Risk</option>
                                        <option>Trustee Oversight</option>
                                        <option>Scheme Governance</option>
                                        <option>Operationals and Control</option>
                                        <option>Compliance</option>
                                    </select>
                                    </base-input>
                                </b-col>
                                </b-row>
                                <b-row>
                                <b-col lg="12">
                                    <base-input
                                    label="Current Control"
                                    placeholder="Choose Product or Service"
                                    v-model="user.email"
                                    >
                                    <select  class="form-control">
                                        <option>Ips</option>
                                        <option>Remedial plan</option>
                                        <option>Board charter</option>
                                        <option>Governance manuals</option>
                                        <option>Audit and Insurance</option>
                                        <option>Regulatory Guidance</option>
                                    </select>
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
                    </b-card>
                </b-col>
                <b-col>

                </b-col>
            </card>
            <b-col>
            <card>
                <div align-v="center" slot="header" >
                    <b-col>
                        <h3 class="mb-0">Risk Metric Analysis</h3>
                    </b-col>
                </div>
                <table class="table table-stripped">
                            <tbody id="myTable">
                                <tr>
                                    <td>Tasks</td>
                                    <td>open</td>
                                    <td>Improving</td>
                                    <td>Closed</td>
                                    <td>Mitigated</td>
                                </tr>
                               <tr>
                                   <td class="bg-danger text-white">EXTREME</td>
                                   <td class="bg-danger text-white">EXTREME</td>
                                   <td class="bg-danger text-white">EXTREME</td>
                                   <td class="bg-danger text-white">EXTREME</td>
                                   <td class="bg-danger text-white">EXTREME</td>
                               </tr>
                               <tr>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>25%</td>
                                </tr>
                                <tr>
                                   <td class="bg-info text-white">HIGH</td>
                                   <td class="bg-info text-white">HIGH</td>
                                   <td class="bg-info text-white">HIGH</td>
                                   <td class="bg-info text-white">HIGH</td>
                                   <td class="bg-info text-white">HIGH</td>
                               </tr>
                               <tr>
                                    <td>7</td>
                                    <td>7</td>
                                    <td>7</td>
                                    <td>7</td>
                                    <td>25%</td>
                                </tr>
                               <tr>
                                   <td class="bg-warning text-white">MEDIUM</td>
                                   <td class="bg-warning text-white">MEDIUM</td>
                                   <td class="bg-warning  text-white">MEDIUM</td>
                                   <td class="bg-warning  text-white">MEDIUM</td>
                                   <td class="bg-warning  text-white">MEDIUM</td>
                               </tr>
                                <tr>
                                    <td>7</td>
                                    <td>7</td>
                                    <td>7</td>
                                    <td>7</td>
                                    <td>25%</td>
                                </tr>
                                <tr>
                                   <td class="bg-success text-white">LOW</td>
                                   <td class="bg-success text-white">LOW</td>
                                   <td class="bg-success  text-white">LOW</td>
                                   <td class="bg-success  text-white">LOW</td>
                                   <td class="bg-success  text-white">LOW</td>
                               </tr>
                               <tr>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>25%</td>
                                </tr>
                                
                            </tbody>
                            </table><b-col>
                                <br><br>
                    <b-card>
                        <b-form @submit.prevent="updateProfile">
                            <h6 class="heading-small text-muted mb-4">Risk Register</h6>

                            <div class="pl-lg-4">
                                <b-row>
                                <b-col lg="6">
                                    <base-input
                                    label="Types of Risk "
                                    v-model="user.email"
                                    >
                                    <select  class="form-control">
                                        <option>Investment Risk</option>
                                        <option>Funding Risk</option>
                                        <option>Trustee Oversight</option>
                                        <option>Scheme Governance</option>
                                        <option>Operationals and Control</option>
                                        <option>Compliance</option>
                                    </select>
                                    </base-input>
                                </b-col>
                                <b-col lg="6">
                                    <base-input
                                    label="Likelihood"
                                    v-model="user.email"
                                    >
                                    <select  class="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    </base-input>
                                </b-col>
                                </b-row>
                                <b-row>
                                <b-col lg="6">
                                    <base-input
                                    label="Impact"
                                    v-model="user.email"
                                    >
                                    <select  class="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    </base-input>
                                </b-col>
                                <b-col lg="6">
                                    <base-input
                                    label="Initial Risk score "
                                    placeholder="Choose Product or Service"
                                    v-model="user.email"
                                    >
                                    <select  class="form-control">
                                        <option></option>
                                    </select>
                                    </base-input>
                                </b-col>
                                </b-row>
                                <b-row>
                                <b-col lg="6">
                                    <base-input
                                    label="Current Control"
                                    placeholder="Choose Product or Service"
                                    v-model="user.email"
                                    >
                                    <select  class="form-control">
                                        <option>Ips</option>
                                        <option>Remedial plan</option>
                                        <option>Board charter</option>
                                        <option>Governance manuals</option>
                                        <option>Audit and Insurance</option>
                                        <option>Regulatory Guidance</option>
                                    </select>
                                    </base-input>
                                </b-col>
                                <b-col lg="6">
                                    <base-input
                                    label="Target Score "
                                    v-model="user.email"
                                    >
                                    <select  class="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
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
                    </b-card>
                </b-col>
            </card>
        </b-col>
        </b-row>
        <br><br>
        <card>
        <b-col>
                        <div style="overflow: scroll;"> 
                        <b-row>
                        <b-col xl="6">
                        <h6 class="heading-small text-muted mb-4">Risk Register Inputs</h6>
                        <table class="table table-stripped">
                                <thead class="thead-light">
                                <tr>
                                <th scope="col">Index</th>
                                <th scope="col">Types of risk</th >
                                <th scope="col">Likelihood</th>
                                <th scope="col">Impact</th>
                                <th scope="col">Initial risk score</th>
                                <th scope="col">Target risk score</th>
                                <th scope="col">Current controls</th>

                                </tr>
                                </thead>
                            <tbody id="myTable">
                                <tr>
                                        <td>1</td>
                                        <td>Investment R</td>
                                        <td>2</td>
                                        <td>4</td>
                                        <td>8</td>
                                        <td>7</td>
                                        <td>IPS</td>
                                </tr>
                                <tr>
                                        <td>2</td>
                                        <td>Funding R</td>
                                        <td>3</td>
                                        <td>5</td>
                                        <td>5</td>
                                        <td>3</td>
                                        <td>Remedial Plan</td>
                                </tr>
                            </tbody>
                            </table>
                            </b-col>
                        </b-row>
                    </div>
        </b-col>
        </card>
        
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