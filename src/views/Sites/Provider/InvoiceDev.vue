<template>

<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">

  <card>

    <div>
  <b-tabs pills>

    <b-tab active>
        <template v-slot:title >
            Processed Invoices
        </template>
        <br>
        <b-row>
            <b-col xl="12" >
                <card>
                    <!-- <b-row class="float-right pb-4">
                    
                        <b-col xl="1" >
                        <router-link to="/benefit_claim">
                        <b-button variant="success">Claim benefits</b-button>
                        <br>
                        </router-link>
                        </b-col>
                    </b-row> -->
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
                                <th scope="col">Payer</th>
                                <th scope="col">Payee</th >
                                <th scope="col">Expense Type</th>
                                <th scope="col">Gross amount</th>
                                <th scope="col">Invoice Date</th>
                                <th scope="col">Action</th>

                                </tr>
                                </thead>
                            <tbody id="myTable">
                                <tr>
                                        <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                                        <td>AAR HOLDINGS LIMITED STAFF PENSION SCHEME</td>
                                        <td>Standard Chartered Bank Kenya Limited Custody Services</td>
                                        <td>Custody Fees</td>
                                        <td>116,283.39</td>
                                        <td>18-05-2020</td>

                                    <td>
                                    <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
                                        <b-dropdown-item href="#">Download Generated Discharge Form</b-dropdown-item>
                                        <b-dropdown-item href="#">Download Invoice</b-dropdown-item>
                                    </b-dropdown>
                                            </td>
                                </tr>
                            </tbody>
                            </table>
                            </b-col>
                            </b-row>
                        </div>
                    </card>
                </b-col>
            </b-row>
    </b-tab>

    <b-tab>
      <template v-slot:title >
         Pending invoices <b-badge variant="primary" class="badge-circle badge-md  border-white float-right">54</b-badge>
      </template>
      <br>
        <br>
        <b-row>
            <b-col xl="12" >
                <card>
                    <!-- <b-row class="float-right pb-4">
                    
                        <b-col xl="1" >
                        <router-link to="/benefit_claim">
                        <b-button variant="success">Claim benefits</b-button>
                        <br>
                        </router-link>
                        </b-col>
                    </b-row> -->
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
                                <th scope="col">Service Provider</th>
                                <th scope="col">Billing Title</th >
                                <th scope="col">Bill Period Start</th>
                                <th scope="col">Bill Period End</th>
                                <th scope="col">Gross Amount</th>
                                <th scope="col">Tax Amount</th>
                                <th scope="col">Action</th>

                                </tr>
                                </thead>
                            <tbody id="myTable">
                                <tr>
                                        <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                                        <td>Octagon Financial Services Ltd.</td>
                                        <td>VAN REES FEES FOR JANUARY -DECEMBER 2020</td>
                                        <td>2020-01-01</td>
                                        <td>2020-12-31</td>
                                        <td>58,000.00</td>
                                        <td>8,000.00</td>

                                    <td>
                                    <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
                                        <b-dropdown-item href="#">View worksheet</b-dropdown-item>
                                        <b-dropdown-item href="#">Upload Invoice</b-dropdown-item>
                                    </b-dropdown>
                                            </td>
                                </tr>
                            </tbody>
                            </table>
                            </b-col>
                            </b-row>
                        </div>
                    </card>
                </b-col>
            </b-row>
    </b-tab>
    <b-tab>
      <template v-slot:title >
         Pending Discharge signing <b-badge variant="primary" class="badge-circle badge-md  border-white float-right">54</b-badge>
      </template>
      <br>
        <b-row>
            <b-col xl="12" >
                <card>
                    <!-- <b-row class="float-right pb-4">
                    
                        <b-col xl="1" >
                        <router-link to="/benefit_claim">
                        <b-button variant="success">Claim benefits</b-button>
                        <br>
                        </router-link>
                        </b-col>
                    </b-row> -->
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
                                        <th scope="col">Payer</th>
                                        <th scope="col">Payee</th >
                                        <th scope="col">Expense Title</th>
                                        <th scope="col">Gross Amount</th>
                                        <th scope="col">Invoice Date</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody id="myTable">
                                    <tr>
                                        <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                                        <td>TEST SCHEME</td>
                                        <td>Octagon Uganda Limited</td>
                                        <td>Test invoice processing with signing 10</td>
                                        <td>18,874,680,039.64</td>
                                        <td>14-12-2020</td>
                                        <td><base-button variant="primary">View </base-button></td>
                                    </tr>
                            </tbody>
                            </table>
                            </b-col>
                            </b-row>
                        </div>
                    </card>
                </b-col>
            </b-row>
        
    </b-tab>

    <b-tab>
      <template v-slot:title >
         Pending Instruction Dispatch <b-badge variant="primary" class="badge-circle badge-md  border-white float-right">54</b-badge>
      </template>
      <br>
        <b-row>
            <b-col xl="12" >
                <card>
                    <!-- <b-row class="float-right pb-4">
                    
                        <b-col xl="1" >
                        <router-link to="/benefit_claim">
                        <b-button variant="success">Claim benefits</b-button>
                        <br>
                        </router-link>
                        </b-col>
                    </b-row> -->
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
                                        <th scope="col">Payer</th>
                                        <th scope="col">Payee</th >
                                        <th scope="col">Expense Title</th>
                                        <th scope="col">Gross Amount</th>
                                        <th scope="col">Invoice Date</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody id="myTable">
                                    <tr>
                                        <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                                        <td>TEST SCHEME</td>
                                        <td>Octagon Uganda Limited</td>
                                        <td>Test invoice processing with signing 10</td>
                                        <td>18,874,680,039.64</td>
                                        <td>14-12-2020</td>
                                        <td><base-button variant="primary">View </base-button></td>
                                    </tr>
                            </tbody>
                            </table>
                            </b-col>
                            </b-row>
                        </div>
                    </card>
                </b-col>
            </b-row>
        
    </b-tab>
<!-- 
    <b-tab>
      <template v-slot:title >
         Pending Date Paid <b-badge variant="primary" class="badge-circle badge-md  border-white float-right">54</b-badge>
      </template>
        <b-row>
            <b-col xl="12" >
                <card>
                     <b-row class="float-right pb-4">
                    
                        <b-col xl="1" >
                        <router-link to="/benefit_claim">
                        <b-button variant="success">Claim benefits</b-button>
                        <br>
                        </router-link>
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
                                        <th scope="col">Payer</th>
                                        <th scope="col">Payee</th >
                                        <th scope="col">Expense Title</th>
                                        <th scope="col">Gross Amount</th>
                                        <th scope="col">Invoice Date</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody id="myTable">
                                    <tr>
                                        <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                                        <td>TEST SCHEME</td>
                                        <td>Octagon Uganda Limited</td>
                                        <td>Test invoice processing with signing 10</td>
                                        <td>18,874,680,039.64</td>
                                        <td>14-12-2020</td>
                                        <td><base-button variant="primary">View </base-button></td>
                                    </tr>
                            </tbody>
                            </table>
                            </b-col>
                            </b-row>
                        </div>
                    </card>
                </b-col>
            </b-row>
        
    </b-tab> -->

    <!-- <b-tab>
      <template v-slot:title >
         Paid <b-badge variant="primary" class="badge-circle badge-md  border-white float-right">54</b-badge>
      </template>
        <b-row>
            <b-col xl="12" >
                <card>
                     <b-row class="float-right pb-4">
                    
                        <b-col xl="1" >
                        <router-link to="/benefit_claim">
                        <b-button variant="success">Claim benefits</b-button>
                        <br>
                        </router-link>
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
                                        <th scope="col">Payer</th>
                                        <th scope="col">Payee</th >
                                        <th scope="col">Expense Title</th>
                                        <th scope="col">Gross Amount</th>
                                        <th scope="col">Invoice Date</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody id="myTable">
                                    <tr>
                                        <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                                        <td>TEST SCHEME</td>
                                        <td>Octagon Uganda Limited</td>
                                        <td>Test invoice processing with signing 10</td>
                                        <td>18,874,680,039.64</td>
                                        <td>14-12-2020</td>
                                        <td><base-button variant="primary">View </base-button></td>
                                    </tr>
                            </tbody>
                            </table>
                            </b-col>
                            </b-row>
                        </div>
                    </card>
                </b-col>
            </b-row>
        
    </b-tab> -->


   
  </b-tabs>
</div>
  </card>
</base-header>
</template>
<script>
export default {
  data() {
    return {
      user: {
      }
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
