<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
    <form-wizard>
        <tab-content title="Contribution Batch Details" :selected="true">
            <div class="pl-lg-4">
                <b-row>
                    <b-col lg="4">
                        <base-input
                        label="Select Period"
                        >
                        <select class="form-control" v-model="referral">
                            <option></option>
                        </select>
                        </base-input>
                    </b-col>
                    <b-col lg="4">
                        <base-input
                        label="Select Sub Period"
                        >
                        <select class="form-control" v-model="referral">
                            <option></option>
                        </select>
                        </base-input>
                    </b-col>
                    <b-col lg="4">
                        <base-input
                        label="Unique Identifier"
                        >
                        <select class="form-control" v-model="referral">
                            <option>Member Number</option>
                            <option>Staff Payroll Number</option>
                            <option>National Identifiction Number</option>
                        </select>
                        </base-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col lg="4">
                        <base-input
                        label="Batch Type"
                        >
                        <select class="form-control" v-model="referral">
                            <option>Contributions</option>
                            <option>Arrears</option>
                            <option>Transfers in</option>
                        </select>
                        </base-input>
                </b-col>
                <b-col lg="8">
                    <base-input
                    label=" Batch Description"
                    disabled
                    >
                    </base-input>
                </b-col>
                </b-row>
                <b-row>
                    <b-col lg="4">
                        <base-input
                        label="Download Contribution Upload Template"
                        >
                        <base-button variant="info">Download</base-button>
                        </base-input>
                </b-col>
                <b-col lg="8">
                    <base-input
                    type="file"
                    label="Upload Filled Contributions Template"
                    >
                    </base-input>
                </b-col>
                </b-row>
        </div>
        </tab-content>
        <tab-content title=" New Entrants Details"> 
            <div style="overflow: scroll;"> 
                <b-row>
                    <b-col xl="6">
                        <table class="table table-stripped">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Check Box</th>
                                    <th scope="col">Serial</th>
                                    <th scope="col">Member Number</th>
                                    <th scope="col">Member Name</th >
                                    <th scope="col">Gender</th>
                                    <th scope="col">Member Status</th>
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody id="myTable">
                                <tr>
                                    <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                                    <td>1805-3002</td>
                                    <td>105</td>
                                    <td>John Snow</td>
                                    <td>Male</td>
                                    <td>Pending</td>
                                    <td>
                                        <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
                                            <b-dropdown-item href="#">View New Entries</b-dropdown-item>
                                            <b-dropdown-item href="#">View Contributions Entries</b-dropdown-item>
                                        </b-dropdown>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </b-col>
                </b-row>
            </div>
        </tab-content>
        <tab-content title="Exit Details">
            <div style="overflow: scroll;"> 
                <b-row>
                    <b-col xl="6">
                        <table class="table table-stripped">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Check Box</th>
                                    <th scope="col">Member Number</th>
                                    <th scope="col">Member Name</th >
                                    <th scope="col">Reason for exit</th>
                                </tr>
                            </thead>
                            <tbody id="myTable">
                                <tr>
                                    <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                                    <td>1805-3002</td>
                                    <td>105</td>
                                    <td>John Snow</td>
                                </tr>
                            </tbody>
                        </table>
                    </b-col>
                </b-row>
            </div>
        </tab-content>
         <tab-content title="Confirm Details">
             <div>
                <table class="table table-stripped">
                    <tbody id="myTable">
                        <tr>
                            <th>Attribute</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td><b>Batch Description</b></td>
                            <td>April 1900 Contribution Schedule</td>
                        </tr>
                        <tr>
                            <td><b>Total Members in Schedule</b></td>
                            <td>12345</td>
                        </tr>
                        
                        <tr>
                            <td><b>Total Employer Contribution</b></td>
                            <td>54321</td>
                        </tr>
                        
                        <tr>
                            <td><b>Total Employee Contribution</b></td>
                            <td>20-11-2020</td>
                        </tr>
                        
                        <tr>
                            <td><b>Total Additional Voluntary Contribution</b></td>
                            <td>9.00%</td>
                        </tr>
                        <tr>
                            <td><b>Total Medical AVC</b></td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><b>Schedule Grand Total Sum</b></td>
                            <td>50</td>
                        </tr>
                        
                        
                        
                        
                    </tbody>
                </table>
            </div> 
        </tab-content>
    </form-wizard>
  </card>
</base-header>
</template>

<script>
import {FormWizard, TabContent} from 'vue-step-wizard'
import "vue-step-wizard/dist/vue-step-wizard.css";








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
}

</script>