<template>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
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
        
         <b-col xl="2" md="5">
          <stats-card title="Preferred Retirement age"
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                  <b-row>
                      <b-col xl="2" md="5">
                          <input type="radio" id="50 yrs" value="50 yrs" v-model="picked">
                          <label for="50 yrs">50 yrs</label>
                      </b-col>
                       <b-col xl="3" md="5">
                           <input type="radio" id="55 yrs" value="55 yrs" v-model="picked">
                          <label for="55 yrs">55 yrs</label>
                       </b-col>
                       <b-col xl="4" md="5">
                           <input type="radio" id="60 yrs" value="60 yrs" v-model="picked">
                          <label for="60 yrs">60 yrs</label>
                       </b-col>
                            
                  </b-row>
                <b-row>
                      <b-col xl="2" md="5">
                          <input type="radio" id="65 yrs" value="65 yrs" v-model="picked">
                          <label for="65 yrs">65 yrs</label>
                      </b-col>
                       <b-col xl="3" md="5">
                           <input type="radio" id="70 yrs" value="70 yrs" v-model="picked">
                          <label for="70 yrs">70 yrs</label>
                       </b-col>
                            
                  </b-row>
  </div>
            </template>
          </stats-card>

        </b-col>
    </b-row>
    <div class="col-md-6">
        <label for="input-default">Enter Passport Number:</label>
      <b-form-input id="input-default" placeholder="Passport Number"></b-form-input>
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
  <b-row>
    <b-col xl="4" md="6">
      <b-button-group>
      <b-button @click="Application_Form()" variant="info">Save</b-button>
      
    </b-button-group>
    </b-col>
    <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Beneficiaries_IDD()" variant="success">Next</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
</div>
        
</card>
    </base-header>

</template>
<script>
import Beneficiaries_IDD from '../IDD/Beneficiaries_IDD'
export default {
    components: {
        Beneficiaries_IDD
        
    },
    
    methods: {
      Beneficiaries_IDD() {
        this.$router.push('/beneficiaries_idd')
        },
         data() {
    return {
      selected: 'Yes',
      value:'null',
        options: [
          { text: 'Yes', value: 'Yes' },
          { text: 'No', value: 'No' },
        ]

    }
  }
      }
    }

</script>
