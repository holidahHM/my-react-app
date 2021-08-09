<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">

<b-row>
  <!--
    <b-col xl="3" md="6">
          <stats-card title="Insurance"
                      type="gradient-green"
                      sub-title=""
                      icon="ni ni-money-coins"
                      class="mb-4">

            <template slot="footer">
              
              <div class="mt-3">
    <b-button-group>
         <b-button @click="Life_Proposal_Form" variant="success">Life</b-button>
      <b-button @click="General_Proposal_Form" variant="info">General</b-button>
     
      
    </b-button-group>
  </div>
            </template>
          </stats-card>

        </b-col>
        -->
       
          <b-col xl="5" md="6">
          <stats-card title="Pension"
                      type="gradient-green"
                      sub-title=""
                      icon="ni ni-money-coins"
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
    <b-button-group>
      <b-button @click="Umbrella_Application()" variant="success">Umbrella</b-button>
      <b-button @click="Corporate_Scheme_Registration()" variant="info">Occupational</b-button> 
     
      
    </b-button-group>
  </div>
            </template>
          </stats-card>

        </b-col>
        <!--
          <b-col xl="6" md="6">
          <stats-card title="Training"
                      type="gradient-green"
                      sub-title=""
                      icon="ni ni-money-coins"
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
    <b-button-group>
      <b-button variant="success">Trustee & Trustee Mgt</b-button>
      <b-button variant ="warning">Soft skills</b-button>
      
      
    </b-button-group>
  </div>
            </template>
          </stats-card>

        </b-col>
  -->
</b-row>
<b-row>
   <b-col xl="4" md="6">
          <stats-card title="Trust"
                      type="gradient-info"
                      sub-title=""
                      icon="ni ni-chart-bar-32"
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
    <b-button-group>
      <b-button @click="Hakikisha_Trust_Setup()" variant="info">Hakikisha</b-button>
      
    </b-button-group>
  </div>
              
            </template>
          </stats-card>
        </b-col>
        <!--
         <b-col xl="5" md="6">
          <stats-card title="Actuarial"
                      type="gradient-info"
                      sub-title=""
                      icon="ni ni-chart-bar-32"
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
    <b-button-group>
      <b-button variant="info">Actuary Valuation</b-button>
      <b-button variant="success">Asset consulting</b-button>
      
    </b-button-group>
  </div>
              
            </template>
          </stats-card>
        </b-col>
        -->

</b-row>
</base-header>
</template>

<script>
import Umbrella_Application from '../onboarding/Corporate/Pension/Umbrella/Umbrella_Application.vue'
import Corporate_Scheme_Registration from '../onboarding/Corporate/Pension/Occupational/Corporate/Corporate_Scheme_Registration.vue'
import Hakikisha_Trust_Setup from '../onboarding/Corporate/Trust/Hakikisha_Trust_Setup.vue'
import General_Proposal_Form from '../onboarding/Corporate/Insurance/General/General_Proposal_Form'
import Life_Proposal_Form from '../onboarding/Corporate/Insurance/Life/Life_Proposal_Form'
export default {
    components: {
        Umbrella_Application,
        Corporate_Scheme_Registration,
        Hakikisha_Trust_Setup,
        General_Proposal_Form,
        Life_Proposal_Form
      
        
    },
    methods: {
      Umbrella_Application(){
        this.$router.push('/umbrella_application')
      },
       Corporate_Scheme_Registration(){
        this.$router.push('/corporate_scheme_registration')
      },
      Hakikisha_Trust_Setup(){
        this.$router.push('/hakikisha_trust_setup')
      },  
      General_Proposal_Form(){
        this.$router.push('/general_proposal_form')
      },
      Life_Proposal_Form(){
          this.$router.push('/life_proposal_form')
        }
          
      }
    }

</script>