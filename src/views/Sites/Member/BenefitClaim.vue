<template>
  <div>
        <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center bg-gradient-success ">
            <b-col xl="12">
            <b-breadcrumb class="breadcrumb-links bg-gradient-success text-white pt-10" style="font-size:15px;">
                <b-breadcrumb-item href="#home" class="text-white">Home</b-breadcrumb-item>
                <b-breadcrumb-item href="#library" class="text-white" active>claim benefits</b-breadcrumb-item>
            </b-breadcrumb>
            </b-col>
        
        </div>
        <div class="pt-md-1 bg-gradient-success">
        
                <form-wizard>
                    <tab-content title="Section 1: REASON FOR EXIT FORM" :selected="true">
                        <b-container  class="mt-4">
                            <b-row>
                                    <b-col xl="12" >
                                        
                                            <div>
                                                <b-row class="float-right ">
                                    
                                                    <b-col >
                                                        <router-link to="">
                                                        <b-button variant="success">Download withdrawal manual</b-button>
                                                        <br>
                                                        </router-link>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col lg="12">
                                                        <p class="mb-0"><b>NOTE:</b> Before you proceed, kindly download and read carefully the withdrawal manual.</p>
                                                    </b-col>
                                                </b-row>
                                                <br>
                                            </div>
                                            <b-alert show variant="warning">
                                                Please countercheck the joining date and employment day before they move to the next stage.
                                            </b-alert>
                

                                            <b-form @submit.prevent="updateProfile">
                                            <h6 class="heading-small text-muted mb-4">Confirm Personal Details</h6>

                                            <div class="pl-lg-4">
                                                <b-row>
                                                <b-col lg="3">
                                                    <base-input
                                                    type="text"
                                                    label="Member Number"
                                                    placeholder="Prefil Member Number"
                                                    v-model="user.username"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                <b-col lg="3">
                                                    <base-input
                                                    type="text"
                                                    label="Prospect Name"
                                                    placeholder="Prefil Member Name"
                                                    v-model="user.username"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                <b-col lg="3">
                                                    <base-input
                                                    type="date"
                                                    label="Date of Birth"
                                                    placeholder="Date of Birth"
                                                    id="example-date-input"
                                                    v-model="user.lastName"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                <b-col lg="3">
                                                    <base-input
                                                    type="date"
                                                    label="Date of Employment"
                                                    placeholder="DAte of Employemnt"
                                                    id="example-date-input"
                                                    v-model="user.lastName"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                
                                                </b-row>
                                                <b-row>
                                                    <b-col lg="3">
                                                    <base-input
                                                    type="date"
                                                    label="Date of Joining Scheme"
                                                    placeholder="Date of Joining Scheme"
                                                    id="example-date-input"
                                                    v-model="user.lastName"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                <b-col lg="3">
                                                    <base-input
                                                    type="date"
                                                    label="Date of Exit from Service "
                                                    placeholder="Date of Exit from Service "
                                                    id="example-date-input"
                                                    v-model="user.lastName"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                <b-col lg="3">
                                                    <base-input
                                                    type="date"
                                                    label="Last Contribution Date"
                                                    placeholder="Last Contribution Date"
                                                    id="example-date-input"
                                                    v-model="user.lastName"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                <b-col lg="3">
                                                    <base-input
                                                    type="text"
                                                    label="National ID / Passport"
                                                    placeholder="National ID / Passport"
                                                    v-model="user.lastName"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                
                                                </b-row>

                                                <b-row>
                                                    <b-col lg="3">
                                                    <base-input
                                                    type="text"
                                                    label="KRA Pin"
                                                    placeholder="KRA Pin"
                                                    v-model="user.lastName"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                <b-col lg="3">
                                                    <base-input
                                                    type="email"
                                                    label="Email Address"
                                                    placeholder="Email Address"
                                                    v-model="user.lastName"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                <b-col lg="3">
                                                    <base-input
                                                    type="text"
                                                    label="Mobile Number"
                                                    placeholder="Mobile Number"
                                                    v-model="user.lastName"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                <b-col lg="3">
                                                    <base-input
                                                    type="text"
                                                    label="Physical Address"
                                                    placeholder="Physical Address"
                                                    v-model="user.lastName"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                
                                                </b-row>
                                                <b-row>
                                                    <b-col lg="3">
                                                    <base-input
                                                    type="text"
                                                    label="County/State/District"
                                                    placeholder="County/State/District"
                                                    v-model="user.lastName"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                <b-col lg="3">
                                                    <base-input
                                                    type="text"
                                                    label="Postal Address"
                                                    placeholder="Postal Address"
                                                    v-model="user.lastName"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                <b-col lg="3">
                                                    <base-input
                                                    type="text"
                                                    label="Next of Kin Name"
                                                    placeholder="Next of Kin Name"
                                                    v-model="user.lastName"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                <b-col lg="3">
                                                    <base-input
                                                    type="text"
                                                    label="Next of Kin Phone Number"
                                                    placeholder="Next of Kin Phone Number"
                                                    v-model="user.lastName"
                                                    >
                                                    </base-input>
                                                </b-col>
                                                
                                                </b-row>
                                            </div>
                                            <hr class="my-4">

                                            <h6 class="heading-small text-muted mb-4">Reason for Exit</h6>

                                            <div class="pl-lg-4">
                                                <b-row>
                                                <b-col lg="6">
                                                    <base-input
                                                    label="Select Reason for exit"
                                                    >
                                                    <select class="form-control">
                                                        <option>Resignition</option>
                                                        <option>Insurance</option>
                                                        <option>Trust</option>
                                                        <option>Training</option>
                                                    </select>
                                                    </base-input>
                                                </b-col>
                                                </b-row>
                                            </div>

                                            <hr class="my-4">

                                            <h6 class="heading-small text-muted mb-4">Choose Benefits Payment Options you want to access:</h6>
                                            <p>
                                                Allowed combinations are {Fund Lump sum + Transfer}, {Fund Lump sum + Annuity Purchase}, {Fund Lump sum + Income Drawdown}
                                            </p>

                                            <div class="pl-lg-4">
                                                <b-row>
                                                    <b-col lg="6">
                                                        <base-input
                                                        type="file"
                                                        label="National ID {scanned both sides} / Passport* (PDF)"
                                                        >
                                                        </base-input>
                                                    </b-col>
                                                    <b-col lg="6">
                                                        <base-input
                                                        type="file"
                                                        label="Copy of KRA PIN Certificate* (PDF)"
                                                        >
                                                        </base-input>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col lg="6">
                                                        <base-input
                                                        type="file"
                                                        label="Employer Consent Letter (PDF) - Optional"
                                                        >
                                                        </base-input>
                                                    </b-col>
                                                    <b-col lg="6">
                                                        <base-input
                                                        type="file"
                                                        label="Proof of Bank Details (ATM Card, front side only)"
                                                        >
                                                        </base-input>
                                                    </b-col>
                                                </b-row>
                                            </div>

                                            </b-form>
                                    </b-col>
                            </b-row>
                        </b-container>
                    </tab-content>
                    <!-- <tab-content title="SECTION 2: BENEFITS ALLOCATION FORM"> 
                        <b-row>
            <b-col xl="9" md="3">
               <card>
                   <div align-v="center" slot="header" >
                    <b-col>
                        <h3 class="mb-0">CASH LUMPSUM:</h3>
                    </b-col>
                    </div>
                    <div style="overflow: scroll;"> 
                            <b-row>
                            <b-col >
                        <table class="table table-stripped">
                                <thead class="thead-light">
                                <tr>
                                <th scope="col">Benefits</th>
                                <th scope="col">Provisional Amount</th>
                                <th scope="col">Select Percentage to be paid</th>
                                <th scope="col">Selected Amount</th >

                                </tr>
                                </thead>
                            <tbody id="myTable">
                                <tr>
                                    <td>5-Extreme</td>
                                    <td class="bg-warning"></td>
                                    <td class="bg-info"></td>
                                    <td class="bg-danger"></td>
                                </tr>
                                <tr>
                                    <td>Employee</td>
                                    <td><base-input placeholder="Default input"/></td>
                                    <td><base-input placeholder="Default input"/></td>
                                    <td><base-input placeholder="Default input"/></td>
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
            <b-col xl="3">
                <card>
                    <div align-v="center" slot="header" >
                    <b-col>
                        <h3 class="mb-0">Summary</h3>
                    </b-col>
                    </div>
                    <div>
                       <table class="table table-stripped">
                            <tbody id="myTable">
                                <tr>
                                    <th>TOTAL PAYABLE:</th>
                                </tr>
                                <tr>
                                    <td><base-input placeholder="Default input"/></td>
                                </tr>
                                <tr>
                                    <th>PERCENTAGE OF TOTAL FUND:</th>
                                </tr>
                                <tr>
                                    <td><base-input placeholder="Default input"/></td>
                                </tr>
                               
                                
                            </tbody>
                            </table>
                    </div>
                </card>
            </b-col>
        </b-row>
                    </tab-content> -->
                </form-wizard>
        
                
            
        </div>




    </div>
            
</template>

<script>

import {FormWizard, TabContent} from 'vue-step-wizard'
import "vue-step-wizard/dist/vue-step-wizard.css";

import { required } from 'vuelidate/lib/validators';


    import { email } from 'vuelidate/lib/validators';
    import { numeric } from 'vuelidate/lib/validators';
    
    validationRules:[
        {fullName: {required}, email: {required, email} },  //Validation Rules for step 1
        {companyName: {required}, numberOfEmployees: {required, numeric} },   //Validation for step 2
        {referral: {required}, terms: {required, numeric} }   //Validation for step 3
    ]


export default {
    name: 'BasicStepperForm',
    components: {
        FormWizard, TabContent
    },
    data(){
        return {
            email: '',
            companyName: '',
            referral: '',
        }
    },
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
}
</script>
<style></style>
