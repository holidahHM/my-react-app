<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
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
     <b-row>
    
    <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Beneficiaries()" variant="info">Save</b-button>
      
    </b-button-group>
    </b-col>
     <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Schemes()" variant="warning">Finish</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
    </card>
    </base-header>
</template>
<script>
import Schemes from '../../../../Servicing/Schemes/Schemes'
export default {
  comments:{
    Schemes
  },
  methods: {
    Schemes(){
      this.$router.push('/schemes')
    }
  },
}
</script>