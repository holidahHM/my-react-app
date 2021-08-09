<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
    
    <!-- The tab pills for navigation purposes -->
	<b-row class="pb-4">
		  <b-col xl="6" sm="6" class="my-3 float centre">
        <router-link to="claims_withdrawals">
        <b-button variant="primary"  class=" btn btn-primary btn-lg btn-block">WITHDRAWALS</b-button>
        </router-link>
        <br>
		  </b-col>
       <!-- <b-col xl="4" sm="4" >
         <<router-link to="claims_benefits">
        <b-button variant="primary" class=" btn btn-primary btn-lg btn-block">BENEFITS</b-button>
        <br>
        </router-link>
		  </b-col> -->
       <!-- <b-col xl="6" sm="6" class="my-3 float centre">
         <router-link to="claims_reversals">
        <b-button variant="primary" class=" btn btn-primary btn-lg btn-block">REVERSALS</b-button>
        <br>
        </router-link>
		  </b-col> -->
	</b-row>
    
		<br>
  </card>
</base-header>
</template>

<script>
  export default {
    data() {
      return { 
      }
    }
  }
</script>