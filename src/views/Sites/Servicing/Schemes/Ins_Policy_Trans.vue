<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
      <b-row> <b-col class="col-md-12">
          <stats-card title="Policy Standard Details"
                      type="gradient-green"
                      sub-title=""
                      class="mb-12">

            <template slot="footer">
              <div class="mt-3">
      <b-form @submit.prevent="updatepolicytransactions">

      <div class="pl-lg-12">
        <b-row>
          <b-col lg="4">
            <base-input
              type="text"
              label="Proposal No"
              placeholder="" 
              v-model="user.proposalno"
            >
            </base-input>
          </b-col>
           <b-col lg="8">
            <base-input 
            type="textarea" rows="4"
            label="List of Insurance Companies where policy is co-insured"
             placeholder=""
             v-model="user.co_ins"
             ></base-input>
          </b-col>
        </b-row>
      </div></b-form>
</div>
  
            </template>
          </stats-card>
</b-col>
      </b-row><br>
      <b-row>
      <b-col class="col-md-12">
          <stats-card title="Transaction Type"
                      type="gradient-green"
                      sub-title=""
                      class="mb-12">

            <template slot="footer">
              <div class="mt-3">
      <b-form @submit.prevent="updatepolicytransactions">

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="4">
              <base-input
              label="Transaction Type"
              v-model="user.transasctiontype"
            >
            <select class="form-control">
                <option>Renewal</option>
                <option>New Business</option>
                <option>Endorsement</option>
            </select>
            </base-input>
          </b-col>
          <b-col lg="4">
              <base-input
              label="Endorsement Type"
              v-model="user.endorsementtype"
            >
            <select class="form-control">
                <option>Renewal</option>
                <option>New Business</option>
                <option>Endorsement</option>
            </select>
            </base-input>
          </b-col>
           <b-col lg="4">
              <base-input
              type="date"
              label=" Transaction Date"
              placeholder=""
              id="example-date-input"
              v-model="user.transaction_date"
            >
            </base-input>
          </b-col></b-row>
      </div></b-form>
</div>
  
            </template>
          </stats-card>
      </b-col>
      </b-row><br>

         <b-row><b-col class="col-md-12">
          <stats-card title="Payable Amount"
                      type="gradient-green"
                      sub-title=""
                      class="mb-12">

            <template slot="footer">
              <div class="mt-3">
      <b-form @submit.prevent="updatepolicyregister">

      <div class="pl-lg-3">
        <b-row><b-col lg="3">
            <base-input
              type="number"
              label="By Client"
              placeholder=""  
              v-model="user.byclient"
            >
            </base-input>
          </b-col>
          <b-col lg="3">
            <base-input
              type="number"
              label="To Insurer"
              placeholder=""  
              v-model="user.Toinsurer"
            >
            </base-input>
          </b-col>
          <b-col lg="3">
            <base-input
              type="number"
              label="Admin Fee Rate%"
              placeholder=""  
              v-model="user.adminrate"
            >
            </base-input>
          </b-col>
          <b-col lg="3">
            <base-input
              type="number"
              label="Admin Amount"
              placeholder=""  
              v-model="user.adminamount"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
    </b-form> </div>
  
            </template>
          </stats-card>
</b-col>
        </b-row><br>
         <b-row><b-col class="col-md-12">
          <stats-card title="Renewal Dates"
                      type="gradient-green"
                      sub-title="" 
                      class="mb-12">

            <template slot="footer">
              <div class="mt-3">
      <b-form @submit.prevent="updatepolicyregister">

      <div class="pl-lg-12">
        <b-row>
           <b-col lg="3">
              <base-input
              type="date"
              label=" Date From(Inception)"
              placeholder=""
              id="example-date-input"
              v-model="user.date_from"
            >
            </base-input>
          </b-col>

           <b-col lg="3">
              <base-input
              type="date"
              label=" Date To(Expiry)"
              placeholder=""
              id="example-date-input"
              v-model="user.date_to"
            >
            </base-input>
          </b-col>
          <b-col lg="3">
            <base-input
              type="text"
              label="Days on Cover"
              placeholder="" 
              v-model="user.daysoncover"
            >
            </base-input>
          </b-col>
           <b-col lg="3">
              <base-input
              type="date"
              label=" Renewal Date"
              placeholder=""
              id="example-date-input"
              v-model="user.renewal_date"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
    </b-form>          
  </div>
            </template>
          </stats-card>
</b-col>
        </b-row><br>

<b-row>
 <b-col class="col-md-12">
          <stats-card title="Financials"
                      type="gradient-green"
                      sub-title=""
                      class="mb-12">

            <template slot="footer">
              <div class="mt-3">
      <b-form @submit.prevent="updatepolicyregister">

      <div class="pl-lg-12">
        <b-row>
          <b-col lg="4">
            <base-input
              type="number"
              label="Exchange Rate(Local Currency)"
              placeholder="0.00" 
              v-model="user.exchange_rate"
            
            >
            </base-input>
          </b-col>
          <b-col lg="2">
              <base-input
              label="Rate"
              v-model="user.rate"
            >
            <select class="form-control">
                <option>Percent</option>
                <option>Per Mile</option>
                <option>No Rate</option>
            </select>
            </base-input>
          </b-col>
            <b-col lg="3">
            <base-input
              type="number"
              label="Sum Insured"
              placeholder="0.00" 
              v-model="user.s_insured"
            
            >
            </base-input>
          </b-col>
          <b-col lg="3">
            <base-input
              type="number"
              label="Renewal Premium"
              placeholder="0.00" 
              v-model="user.r_premium"
            
            >
            </base-input>
          </b-col>
        </b-row>

      </div></b-form>
</div>
  
            </template>
          </stats-card>
 </b-col>
      </b-row><br>
      <div class="mb-3">
      <b-button v-b-toggle.my-collapse>More Details</b-button>
    </div>
      <b-collapse id="my-collapse">
<div>
         <b-row>
 <b-col class="col-md-12">
          <stats-card title="Commissions"
                      type="gradient-green"
                      sub-title="" 
                      class="mb-12">

            <template slot="footer">
              <div class="mt-3">
      <b-form @submit.prevent="updatepolicyregister">

      <div class="pl-lg-12">
        <b-row>
          <b-col lg="3">
            <base-input
              type="number"
              label="Commission Rate %"
              placeholder="" 
              v-model="user.commissionrate"
            >
            </base-input>
          </b-col>
          <b-col lg="3">
            <base-input
              type="number"
              label="Commission"
              placeholder="" 
              v-model="user.commission"
            >
            </base-input>
          </b-col>
          <b-col lg="3">
            <base-input
              type="number"
              label="W/Tax Rate %"
              placeholder="" 
              v-model="user.wtaxrate"
            >
            </base-input>
          </b-col>
          <b-col lg="3">
            <base-input
              type="number"
              label="W/Tax Amount"
              placeholder="" 
              v-model="user.wtaxamount"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
        <b-col lg="4">
            <base-input
              type="number"
              label="Net Commission"
              placeholder="" 
              v-model="user.netcommission"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="number"
              label="Agent Commisssion%"
              placeholder="" 
              v-model="user.agentcommisssion"
            
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="number"
              label="Agent Comm. Amount"
              placeholder="" 
              v-model="user.agentamount"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
    </b-form>         
  </div>
            </template>
          </stats-card>
</b-col>
        </b-row><br>
                <b-row><b-col class="col-md-12">
          <stats-card title="Statutory Charges"
                      type="gradient-green"
                      sub-title=""
                      class="mb-12">

            <template slot="footer">
              <div class="mt-3">
      <b-form @submit.prevent="updatepolicyregister">

      <div class="pl-lg-12">
        <b-row>
          <b-col lg="4">
            <base-input
              type="number"
              label="Stamp Duty"
              placeholder="" 
              v-model="user.stampduty"
            
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="number"
              label="Training Levy"
              placeholder="" 
              v-model="user.traininglevy"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="number"
              label="Policy H.C.F"
              placeholder="" 
              v-model="user.policyhcf"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
      <br>

    </b-form></div></template></stats-card></b-col></b-row><br>
         <b-row><b-col class="col-md-12">
          <stats-card title="Additional Charges/ Discount"
                      type="gradient-green"
                      sub-title=""
                      class="mb-12">

            <template slot="footer">
              <div class="mt-3">
      <b-form @submit.prevent="updatepolicyregister">

      <div class="pl-lg-4">
        <b-row><b-col lg="4">
            <base-input
              type="text"
              label="Other Charges"
              placeholder=""  
              v-model="user.othercharges"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="number"
              label="Policy Charges"
              placeholder=""  
              v-model="user.policycharges"
            >
            </base-input>
          </b-col><b-col lg="4">
            <base-input
              type="text"
              label="Broker Discount"
              placeholder=""  
              v-model="user.brokerdiscount"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
      <br>

    </b-form> 
          </div>
            </template>
          </stats-card>
    </b-col>
        </b-row><br></div> </b-collapse><br>
        <b-row class="d-flex justify-content-center mb-3"  >
             <base-button  type="success"><router-link to='/Ins_scheme_servicing'>Save</router-link></base-button>
             </b-row>
  <b-row><b-col class="col-md-12">
          <div class="col-xl-12 alert alert-info">
           <div>
     <b-row><b-col lg="3">
      <base-button  @click="Ins_Policy_register()" type="primary">Go to Policy Register</base-button></b-col>
 <!--<b-col lg="3">
    <router-link to="/insured_items">
            <b-button variant="primary">Insured Items</b-button>
          </router-link>
  <b-modal id="modal-1" size="lg" title="Add Scheme Billing Formula" hide-footer>
     <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
  
            </template>
          </stats-card>

        </b-col>
  </b-modal></b-col>-->
  <b-col lg="3">
  <b-button v-b-modal.modal-1 variant="success">D.M.S</b-button>

  <b-modal id="modal-1" size="lg" title="Documents" hide-footer>
     <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
            </template>
          </stats-card>

        </b-col>
  </b-modal></b-col>
  <b-col lg="3">
  <b-button v-b-modal.modal-2 variant="success">Policy Terms</b-button>
  <b-modal id="modal-2" size="lg" title="POlicy Terms" hide-footer>
     <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
  
            </template>
          </stats-card>

        </b-col>
  </b-modal></b-col>
  <b-col lg="3">
  <b-button v-b-modal.modal-3 variant="success">Invoice Details</b-button>

  <b-modal id="modal-3" size="lg" title="Invoice Details" hide-footer>
     <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
  
            </template>
          </stats-card>

        </b-col>
  </b-modal></b-col></b-row>
</div>
          </div>
        </b-col></b-row
      >
<br>
<!--end of 1st row-->
 
  </card>
</base-header>
</template>
<script>
import Ins_Policy_register from '../Schemes/Ins_Policy_register.vue'
export default {
components:{Ins_Policy_register},
  data() {
    return {
      user: {
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    },
    Ins_Policy_register(){
      this.$router.push('/Ins_Policy_register')
    },
  }
  
};
</script>
<style></style>
