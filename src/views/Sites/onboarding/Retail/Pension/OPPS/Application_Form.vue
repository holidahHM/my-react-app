<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  
    <form-wizard>
        <tab-content title="Fill Application Form" :selected="true">
            
    <div class="lang">
  <div class="row">
    <div class="col-md-6">
       <label for="input-default">Enter Your Surname:</label>
      <b-form-input id="input-default" placeholder="Surname"></b-form-input>
    </div>
    <div class="col-md-6">
      <label for="input-default">Enter Other Names:</label>
      <b-form-input id="input-default" placeholder="Other Names"></b-form-input>
    </div>
  </div>
    </div>
    <br>
    <b-row>
        
  <div>
   
    <b-col xl="4" md="8">
             <input type="date" v-model="datepicker" placeholder="Examhhplke">
        </b-col>
    
  </div>
    <b-col xl="3" md="6">
          <stats-card title="Gender"
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
      <input type="radio" id="Male" value="Male" v-model="picked">
<label for="Male">Male</label>
<br>
<input type="radio" id="Female" value="Female" v-model="picked">
<label for="Female">Female</label>
  </div>
            </template>
          </stats-card>

        </b-col>
         <b-col xl="4" md="6">
          <stats-card title="Marital Status"
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
      <input type="radio" id="Single" value="Single" v-model="picked">
<label for="Single">Single</label>
<br>
<input type="radio" id="Married" value="Married" v-model="picked">
<label for="Married">Married</label>
  </div>
            </template>
          </stats-card>

        </b-col>
        
        
    </b-row>
    <b-row>
       <div class="col-lg-12">
          <stats-card title="Preferred Retirement age"
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                  <b-row>
                      <div class="col-lg-4">
                          <input type="radio" id="50 yrs" value="50 yrs" v-model="picked">
                          <label for="50 yrs">50 yrs</label>
                      </div>
                      <div class="col-lg-4">
                           <input type="radio" id="55 yrs" value="55 yrs" v-model="picked">
                          <label for="55 yrs">55 yrs</label>
                      </div>
                       <div class="col-lg-4">
                           <input type="radio" id="60 yrs" value="60 yrs" v-model="picked">
                          <label for="60 yrs">60 yrs</label>
                       </div>
                            
                  </b-row>
                <b-row>
                      <div class="col-lg-4">
                          <input type="radio" id="65 yrs" value="65 yrs" v-model="picked">
                          <label for="65 yrs">65 yrs</label>
                      </div>
                       <div class="col-lg-4">
                           <input type="radio" id="70 yrs" value="70 yrs" v-model="picked">
                          <label for="70 yrs">70 yrs</label>
                       </div>
                            
                  </b-row>
  </div>
            </template>
          </stats-card>

        </div>
    </b-row>
    <div class="row">
    <div class="col-md-6">
        <label for="input-default">Enter Passport Number:</label>
      <b-form-input id="input-default" placeholder="Passport Number"></b-form-input>
    </div>
    </div>
    <div class="lang">
  <div class="row">
    <div class="col-md-6">
       <label for="input-default">Enter Your Mobile Number:</label>
      <b-form-input id="input-default" placeholder="Telephone"></b-form-input>
    </div>
    <div class="col-md-6">
      <label for="input-default">Enter Your Occupation:</label>
      <b-form-input id="input-default" placeholder="Occupation"></b-form-input>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
        <label for="input-default">Enter Your Next of Kin:</label>
      <b-form-input id="input-default" placeholder="Next of Kin"></b-form-input>
    </div>
    <div class="col-md-6">
      <label for="input-default">Enter Your Employer:</label>
      <b-form-input id="input-default" placeholder="Employer"></b-form-input>
      
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
        <label for="input-default">Next of Kin Mobile Number:</label>
      <b-form-input id="input-default" placeholder="Telephone"></b-form-input>
    </div>
    <div class="col-md-6">
     <label for="input-default">Enter Office Telephone:</label>
      <b-form-input id="input-default" placeholder="Office Telephone"></b-form-input>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
        <label for="input-default">Enter KRA pin:</label>
      <b-form-input id="input-default" placeholder="KRA pin"></b-form-input>
    </div>
    <div class="col-md-6">
      <label for="input-default">Enter Postal Address:</label>
      <b-form-input id="input-default" placeholder="Postal Address"></b-form-input>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
       <label for="input-default">Enter Refference Code:</label>
      <b-form-input id="input-default" placeholder="Optional"></b-form-input>
    </div>
    <div class="col-md-6">
     <label for="input-default">Enter Your City:</label>
      <b-form-input id="input-default" placeholder="City"></b-form-input>
    </div>
  </div>
    </div>
    <br>
     <b-col xl="12" md="10">
          <stats-card title="Method of payment"
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                  <b-row>
                      <b-col xl="2" md="2">
                          <input type="radio" id="Direct debit" value="Direct debit" v-model="picked">
                          <label for="Direct debit">Direct debit</label>
                      </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="Cheque" value="Cheque" v-model="picked">
                          <label for="Cheque">Cheque</label>
                       </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="M-pesa" value="M-pesa" v-model="picked">
                          <label for="M-pesa">M-pesa</label>
                       </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="Standing order" value="Standing order" v-model="picked">
                          <label for="Standing order">Standing order</label>
                       </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="Salary deduction" value="Salary deduction" v-model="picked">
                          <label for="Salary deduction">Salary deduction</label>
                       </b-col>
                  </b-row>
  </div>
            </template>
          </stats-card>

        </b-col>
        
     <b-col xl="12" md="10">
          <stats-card title="Mode of payment"
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                  <b-row>
                      <b-col xl="2" md="2">
                          <input type="radio" id="Monthly" value="Monthly" v-model="picked">
                          <label for="Monthly">Monthly</label>
                      </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="Quarterly" value="Quarterly" v-model="picked">
                          <label for="Quarterly">Quarterly</label>
                       </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="Semi-Annually" value="Semi-Annually" v-model="picked">
                          <label for="Semi-Annually">Semi-Annually</label>
                       </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="Annually" value="Annually" v-model="picked">
                          <label for="Annually">Annually</label>
                       </b-col>
                       
                  </b-row>
  </div>
            </template>
          </stats-card>

        </b-col>
        <div>
 
</div>
        </tab-content>
        <tab-content title="Nomination of Beneficiaries"> 
           
    <b-row>
        <b-col xl="4" md="8">
            <input v-model="message" placeholder="Full names">
        </b-col>
         <b-col xl="4" md="8">
            <input v-model="message" placeholder="Email">
        </b-col>
       <b-col xl="4" md="8">
            <input v-model="message" placeholder="Telephone">
        </b-col>
    </b-row>
    <br>
    <b-row>
        <b-col xl="4" md="8">
             <input type="date" v-model="datepicker" placeholder="Examhhplke">
        </b-col>
         <b-col xl="4" md="8">
            <input v-model="message" placeholder="Relationship">
        </b-col>
         <b-col xl="4" md="8">
            <input v-model="integer" placeholder="ID. NO">
        </b-col>
    </b-row>
    <br>
    <b-row>
         <b-col xl="4" md="8">
            <input v-model="message" placeholder="Benefit percentage">
        </b-col>
    </b-row>
    <br>
    <br>


     
      <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I understand that the Trustees of the scheme have the final discretion to decide who should receive benefits under the scheme.
      This nomination cancels and supersedes any previous nomination.
    </b-form-checkbox>

    <div>State: <strong>{{ status }}</strong></div>
  </div>
  
        </tab-content>
        <tab-content title="Submit Documents">
            
    <b-row>
    <label class="Upload National ID">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload National ID</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
 <div>
  <b-dropdown id="please confirm-1" text="Please Confirm" class="m-md-2">
    <b-dropdown-item>Transfer</b-dropdown-item>
    <b-dropdown-item>Regular Contribution</b-dropdown-item>
    
  </b-dropdown>
</div>

    </b-row>
    <br>
    <b-row>
   <label class="Upload Passport">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Passport</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
  <div>
  <b-dropdown id="benefit state-1" text="Benefit State" class="m-md-2">
    <b-dropdown-item>Active</b-dropdown-item>
    <b-dropdown-item>Inactive</b-dropdown-item>
   
    
  </b-dropdown>
</div>

    </b-row>
    <br>
    <b-row>
   <label class="Upload KRA pin certificate">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload KRA Pin Certificate</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    </b-row>
    <br>
    <b-row>
   <label class="Upload Utility Bill">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Upload Utility Bill</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
    </b-row>
        </tab-content>
         <tab-content title="Payment">
           <div>
  <base-dropdown>
    <template v-slot:title>
      <base-button type="secondary" class="dropdown-toggle">
        Choose a Payment Option
      </base-button>
    </template>
    <a class="dropdown-item" href="#">M-pesa</a>
    <a class="dropdown-item" href="#">Direct Debit</a>
    <a class="dropdown-item" href="#">Cheque</a>
    <a class="dropdown-item" href="#">Standing Order</a>
    <a class="dropdown-item" href="#">Salary Deduction</a>
  </base-dropdown>
    </div>
        </tab-content>
        
    </form-wizard>
 
</base-header>
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
}

</script>