<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
    <b-row>
    <b-col xl="6" md="6">
          <stats-card title="Fund Transfer details"
                      type="gradient-green"
                      sub-title=""
                      icon=""
                      class="mb-4">

            <template slot="footer" >
              <div class="mt-3">
                  <b-row>
                      <b-col xl="4" md="8">
            <input v-model="message" placeholder="Total Initial Transfer Amount">
        </b-col>
        
        <b-col xl="9" md="6">
             <input type="radio" id="Annually" value="Annually" v-model="picked">
                          <label for="Annually">Registered Funds (KSHs)</label>
        </b-col>
         <b-col xl="5" md="6">
             <input type="radio" id="Annually" value="Annually" v-model="picked">
                          <label for="Annually">Unregistered Funds (KSHs)</label>
        </b-col>
                  </b-row>
      </div>
      <b-col xl="12" md="10">
          <stats-card title="Mode of Transfer"
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                  <b-row>
                      <b-col xl="2" md="2">
                          <input type="radio" id="Direct debit" value="Direct debit" v-model="picked">
                          <label for="Direct debit">Cash</label>
                      </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="Cheque" value="Cheque" v-model="picked">
                          <label for="Cheque">Cheque</label>
                       </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="M-pesa" value="M-pesa" v-model="picked">
                          <label for="M-pesa">Funds Transfer:Bank A/c No</label>
                       </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="Standing order" value="Standing order" v-model="picked">
                          <label for="Standing order">Branch</label>
                       </b-col>
                      
                  </b-row>
  </div>
            </template>
          </stats-card>

        </b-col>
      <b-col xl="14" md="15">
          <stats-card title="Source(s) of funds"
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                  <b-row>
                      <b-col xl="2" md="2">
                          <input type="radio" id="Direct debit" value="Direct debit" v-model="picked">
                          <label for="Direct debit">Retirement Benefits</label>
                      </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="Cheque" value="Cheque" v-model="picked">
                          <label for="Cheque">Sales of Investment</label>
                       </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="M-pesa" value="M-pesa" v-model="picked">
                          <label for="M-pesa">Gift/Prize</label>
                       </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="Standing order" value="Standing order" v-model="picked">
                          <label for="Standing order">other Sources</label>
                       </b-col>
                      
                  </b-row>
                              <b-row>
        <b-col xl="4" md="8">
            <input v-model="message" placeholder="Details of source">
        </b-col>
                  </b-row>
  </div>
            </template>
          </stats-card>

        </b-col>
            </template>
          </stats-card>
          
        </b-col>
        
         <b-col xl="6" md="6">
          <stats-card title="Bank Account Record of the App"
                      type="gradient-green"
                      sub-title=""
                      icon=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                  <p>
                      I hereby authorize the Trustees of Octagon Income Drawdown Fund to pay until further notice all sums payable under the drawdown fund as and when they become due to the following Bank a/c details:
                  </p>
                  <br>
                  <b-row>
        <b-col xl="4" md="8">
            <input v-model="message" placeholder="Bank name">
        </b-col>
                  </b-row>
                  <br>
                        <b-row>
        <b-col xl="4" md="8">
            <input v-model="message" placeholder="Branch">
        </b-col>
                  </b-row>
                  <br>
                        <b-row>
        <b-col xl="4" md="8">
            <input v-model="message" placeholder="Account name">
        </b-col>
                  </b-row>
                  <br>
                        <b-row>
        <b-col xl="4" md="8">
            <input v-model="message" placeholder="Account number">
        </b-col>
                  </b-row>
    
  </div>
   <br>
    <br>
     <br>
      <br>
       <br>
        <br>
         <br>
         <br>
         <br>
         
            </template>
          </stats-card>

        </b-col>
    </b-row>
     <b-row>
    <b-col xl="6" md="6">
          <stats-card title="Drawdown Information"
                      type="gradient-green"
                      sub-title=""
                      icon=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                  <b-col xl="12" md="10">
          <stats-card title="Drawdown Setting"
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                  <b-row>
                      <b-col xl="2" md="2">
                          <input type="radio" id="Direct debit" value="Direct debit" v-model="picked">
                          <label for="Direct debit">Octagon Recommendation</label>
                      </b-col>
                       <b-col xl="6" md="4">
                           <input type="radio" id="Cheque" value="Cheque" v-model="picked">
                          <label for="Cheque">Client Option</label>
                       </b-col>
                       
                      
                  </b-row>
  </div>
            </template>
          </stats-card>

        </b-col>
        <b-col xl="12" md="10">
          <stats-card title="Drawdown Amounts"
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                  <b-row>
                      
            <input v-model="message" placeholder="Monthly Gross (KSHs)">
        
       
                  </b-row>
                   <br>
                  <b-row>
            <input v-model="message" placeholder="Annual gross (KSHs)">
        
                       
                      
                  </b-row>
  </div>
            </template>
          </stats-card>

        </b-col>
        <b-col xl="12" md="10">
          <stats-card title="Drawdown Frequency"
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                  <b-row>
                      <b-col xl="2" md="2">
                          <input type="radio" id="Direct debit" value="Direct debit" v-model="picked">
                          <label for="Direct debit">Monthly</label>
                      </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="Cheque" value="Cheque" v-model="picked">
                          <label for="Cheque">Quarterly</label>
                       </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="M-pesa" value="M-pesa" v-model="picked">
                          <label for="M-pesa">Semi-Annually</label>
                       </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="Standing order" value="Standing order" v-model="picked">
                          <label for="Standing order">Annually</label>
                       </b-col>
                      
                  </b-row>
  </div>
            </template>
          </stats-card>

        </b-col>
    
  </div>
            </template>
          </stats-card>

        </b-col>
         <b-col xl="6" md="6">
          <stats-card title="Intermediary Details"
                      type="gradient-green"
                      sub-title=""
                      icon=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                     <b-row>
                      
            <input v-model="message" placeholder="Account Introduced By">
                  </b-row>
                   <br>
                  <b-row>
            <input v-model="message" placeholder="Account Opened By">
                  </b-row>    
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
            </template>
          </stats-card>

        </b-col>

    </b-row>
    <b-row>
    
    <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Beneficiaries()" variant="info">Save</b-button>
      
    </b-button-group>
    </b-col>
     <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Payments_IDD()" variant="warning">Next</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
    </card>
    </base-header>
</template><script>
import Payments_IDD from '../IDD/Payments_IDD'
export default {
    components: {
        Payments_IDD
        
    },
    methods: {
      Payments_IDD() {
        this.$router.push('/payments_idd')
        }
      }
    }

</script>