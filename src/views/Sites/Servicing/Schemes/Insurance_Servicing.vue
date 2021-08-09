<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
<b-row>
	<b-col class="col-md-4">
	<b-button-group>
	  <b-button @click="Ins_Policies()" variant="primary">Policies</b-button>
    </b-button-group></b-col>
  <b-col class="col-md-4">
      <b-button-group>
     <b-dropdown id="dropdown-left" text="Bulk Upload" variant="primary" class="m-2">
    <b-dropdown-item><router-link to="/Ins_bulkmembers">Add Bulk Members</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/Transactions_Upload">Transaction Uploads</router-link></b-dropdown-item>
	</b-dropdown>   
    </b-button-group>
    </b-col>
   <b-col class="col-md-4">
      <b-button-group>
     <b-dropdown id="dropdown-left" text="Commissions" variant="primary" class="m-2">
    <b-dropdown-item><router-link to="/Ins_Commissions"> Load Commissions</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/Ins_pendingcommissions">Pending Commissions</router-link></b-dropdown-item>
	</b-dropdown>   
    </b-button-group>
    </b-col>
</b-row>
<br>
  </card>
</base-header>
</template>
<script>
import Ins_Policies from '../Schemes/Ins_Policies.vue'

export default {
    components:{
        Ins_Policies,
    },
    methods: {
  
        Ins_Policies(){
            this.$router.push('/Ins_Policies')
        },
       
        
    },


}
</script>

<style>

</style>


