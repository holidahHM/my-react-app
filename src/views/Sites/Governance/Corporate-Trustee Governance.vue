<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
       <b-row>
            <div>
                <div align-v="center" slot="header" >
                    <b-col cols="6">
                        <h4 class="mb-0">Corporate Trustee's Performance</h4>
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
                <stats-card title="Doc_Submission"
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
                <stats-card title="Trustee Activities"
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
                <stats-card title="Tenure_Expiry"
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
                            <h3 class="mb-0">Corporate Trustee Details </h3>
                        </b-col>
      
                    </div>
                     <b-row>
   <b-col xl='12' md="6">
               <p>Scheme code</p>
      <b-form-input id="input-default" placeholder="Enter the Scheme code"></b-form-input>
 </b-col>
  
                    </b-row>
                    <b-row>
   <b-col xl='6' md="6">
               <p>Country</p>
      <b-form-input id="input-default" placeholder="KENYA"></b-form-input>
 </b-col>
   <b-col xl='6' md="6">
               <p>Trustee's name</p>
      <b-form-input id="input-default" placeholder="TRUSTEE'S NAME"></b-form-input>
 </b-col>
                    </b-row>
                     <b-row>
   <b-col xl='6' md="6">
               <p>Scheme's Structure</p>
      <b-form-input id="input-default" placeholder="SCHEME'S STRUCTURE"></b-form-input>
 </b-col>
   <b-col xl='6' md="6">
               <p>Members Available</p>
      <b-form-input id="input-default" placeholder="Available members"></b-form-input>
 </b-col>
                    </b-row>
  
                    
                </card>
            </b-col>
 </b-row>
 <b-row>
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
        items: [{ Document_name: 'RBA', Submission_date: '11/03/2020', submtted_by: 'Macdonald',expiry_date:'12/03/2023',Serverity:'LOW' },
          { Document_name: 'Code of Conduct', Submission_date: '13/3/2021', submtted_by: 'Shaw' ,expiry_date:'13/03/2024',Serverity:'LOW'},
          { Document_name: 'IPS', Submission_date: '13/3/2021', submtted_by: 'Wilson',expiry_date:'13/03/2024',Serverity:'LOW' },
          { Document_name: 'Trust deed and rules', Submission_date: '13/03/2021', submtted_by: 'Carney',expiry_date:'13/03/2024',Serverity:'LOW' }],
    }
  },

  };
</script>
<style>
</style>