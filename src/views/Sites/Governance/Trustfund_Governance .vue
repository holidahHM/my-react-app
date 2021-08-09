<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
       <b-row>
            <div>
                <div align-v="center" slot="header" >
                    <b-col cols="6">
                        <h4 class="mb-0">TrustFund Performance</h4>
                    </b-col>
                </div>
                <br><br>
                <b-row>
                <b-col xl="6" md="2">
                <stats-card title="Withdrawals"
                            type="gradient-red"
                            sub-title="350,897"
                            icon="ni ni-active-40"
                            class="mb-4">

                    <template slot="footer">
                    <span class="text-success mr-2">3.48%</span>
                    <span class="text-nowrap">Since last month</span>
                    </template>
                </stats-card>
                </b-col>
                <b-col xl="6" md="2">
                <stats-card title="Compliance"
                            type="gradient-orange"
                            sub-title="2,356"
                            icon="ni ni-chart-pie-35"
                            class="mb-4">

                    <template slot="footer">
                    <span class="text-success mr-2">12.18%</span>
                    <span class="text-nowrap">Since last month</span>
                    </template>
                </stats-card>
                </b-col>
            </b-row>

            <b-row>
                <b-col xl="6" md="2">
                <stats-card title="Total Trust"
                            type="gradient-green"
                            sub-title="924"
                            icon="ni ni-money-coins"
                            class="mb-4">

                    <template slot="footer">
                    <span class="text-danger mr-2">5.72%</span>
                    <span class="text-nowrap">Since last month</span>
                    </template>
                </stats-card>

                </b-col>
                <b-col xl="6" md="2">
                <stats-card title="Overdrawn Trust"
                            type="gradient-info"
                            sub-title="49,65%"
                            icon="ni ni-chart-bar-32"
                            class="mb-4">

                    <template slot="footer">
                    <span class="text-success mr-2">54.8%</span>
                    <span class="text-nowrap">Since last month</span>
                    </template>
                </stats-card>
                </b-col>
            </b-row>
            <br><br><br>

            </div>
         
            <b-col xl="" md="3">
                <br><br><br>
                <card>
                    <div align-v="center" slot="header" >
                        <b-col>
                            <h3 class="mb-0">Trust Details </h3>
                        </b-col>
      
                    </div>
                     <b-row>
   <b-col xl='12' md="6">
               <p>Trust code</p>
      <b-form-input id="input-default" placeholder="Enter the Scheme code"></b-form-input>
 </b-col>
  
                    </b-row>
                    <b-row>
   <b-col xl='6' md="6">
               <p>Country</p>
      <b-form-input id="input-default" placeholder="KENYA"></b-form-input>
 </b-col>
   <b-col xl='6' md="6">
               <p>Trust name</p>
      <b-form-input id="input-default" placeholder="Trust name"></b-form-input>
 </b-col>
                    </b-row>
                     <b-row>
   <b-col xl='6' md="6">
               <p>Beneficiaries available</p>
      <b-form-input id="input-default" placeholder="Beneficiaries available"></b-form-input>
 </b-col>
   <b-col xl='6' md="6">
               <p>Amount withdrawn</p>
      <b-form-input id="input-default" placeholder="Amount withdrawn"></b-form-input>
 </b-col>
   <b-col xl='6' md="6">
               <p>Balance</p>
      <b-form-input id="input-default" placeholder="Balance"></b-form-input>
 </b-col>
                    </b-row>
  
                    
                </card>
            </b-col>
 </b-row>
 <br>
 <b-row>
   <br>
    <b-col xl='12' md="6">
   <card>
    <div>
    <b-table striped hover :items="items"></b-table>
  </div>
  </card>
    </b-col>
 </b-row>
    </base-header>
     </div>
</template>
<script>
import Card from '../../../components/Cards/Card.vue';
  export default {
  components: { Card },
  data() {
    return {
      state:'state',
      country:'',
      currency:'',
      p_category:'',
      p_products:'',
      type:'',
      benefits:'',
      structure:'',
      sector:'',
      interest:'',
      calculation:'',
      selected: 'Yes',
      value:'null',
        options: [
          { text: 'Yes', value: 'Yes' },
          { text: 'No', value: 'No' },
        ],
        items: [{ Index: '1', Activity: 'Withdraw', Amount: '1200',Date:'12/03/2019',Authorized_by:'Juma',Initiated_by:"Joan" },
          { Index: '2', Activity:'Withdraw', Amount: '30000' ,Date:'13/03/2020',Authorized_by:'Mark',Initiated_by:"Joan"},
          { Index: '3', Activity:'Withdraw', Amount: '10000',Date:'13/06/2020',Authorized_by:'Allan',Initiated_by:"Beryl" },
          { Index: '4', Activity: 'Withdraw', Amount: '15000',Date:'13/03/2021',Authorized_by:'Juma',Initiated_by:"Beryl" }],
    }
  },

  };
</script>
<style>
</style>