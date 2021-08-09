<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
       <b-row>
            <div>
                <div align-v="center" slot="header" >
                    <b-col cols="6">
                        <h4 class="mb-0">Insurance Product Performance</h4>
                    </b-col>
                </div>
                <br><br>
                <b-row>
                <b-col xl="6" md="2">
                <stats-card title="Compliance"
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
                <stats-card title="KYC_Submission"
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
                <stats-card title="Claims"
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
                <stats-card title="Tenure Expiry"
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
                            <h3 class="mb-0">Insurance Product Details </h3>
                        </b-col>
      
                    </div>
                     <b-row>
   <b-col xl='12' md="6">
               <p>Product code</p>
      <b-form-input id="input-default" placeholder="Enter the Product's code"></b-form-input>
 </b-col>
  
                    </b-row>
                    <b-row>
   <b-col xl='6' md="6">
               <p>Country</p>
      <b-form-input id="input-default" placeholder="KENYA"></b-form-input>
 </b-col>
   <b-col xl='6' md="6">
               <p>Product name</p>
      <b-form-input id="input-default" placeholder="Product's NAME"></b-form-input>
 </b-col>
                    </b-row>
                     <b-row>
   <b-col xl='6' md="6">
               <p>Commission rate</p>
      <b-form-input id="input-default" placeholder="Commission rate"></b-form-input>
 </b-col>
   <b-col xl='6' md="6">
               <p>Service Provider</p>
      <b-form-input id="input-default" placeholder="Service provider"></b-form-input>
 </b-col>
                    </b-row>
  
                    
                </card>
            </b-col>
 </b-row>
 <b-row>
    <b-col xl='12' md="12" sm="12">
      <div style="overflow:scroll">
   <card xl='12' md="12" sm="12"> 
    <b-table striped hover :items="items" ></b-table>
  </card>
      </div>
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
      options:[
          { text: 'Yes', value: 'Yes' },
          { text: 'No', value: 'No' },
        ],
      items:[{ Document_name: 'Moto-vehicle license', Submission_date: '11/03/2020', submtted_by: 'Macdonald',submitted_to:'Josephat',expiry_date:'11/03/2021',Serverity:'HIGH' },
          { Document_name: 'PRMS', Submission_date: '13/3/2021', submtted_by: 'Shaw' ,submitted_to:'Grace',expiry_date:'13/03/2024',Serverity:'LOW'},
          ],
    }
  },

  };
</script>
<style>
</style>