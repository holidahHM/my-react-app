<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
     <b-row>
    <b-col xl="4" md="6">
      <b-button-group>
      <b-button @click="Application_Form()" variant="info">Previous</b-button>
      
    </b-button-group>
    </b-col>
    <b-col xl="4" md="1">
      <b-button-group>
      <b-button  variant="success">View Other Products</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
    </card>
    </base-header>
</template>
<script>
import Beneficiaries_Insurance from '../Easy Cover/Beneficiaries_Insurance'
export default {
    comments:{
        Beneficiaries_Insurance
    },
    methods: {
        Beneficiaries_Insurance(){
            this.$router.push('/beneficiaries_insurance')
        }
    },
}
</script>