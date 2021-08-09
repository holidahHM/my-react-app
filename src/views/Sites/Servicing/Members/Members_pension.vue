<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <b-row>
   
     <b-col class="col-md-3">
      <b-button-group>
     <b-dropdown id="dropdown-left" text="Member Servicing" variant="info" class="m-2">
              <b-dropdown-item > <router-link to="/Beneficiaries_Member_Servicing">Beneficiaries </router-link></b-dropdown-item>
             <b-dropdown-item > <router-link to="/Portal_Edits">Portal Edits </router-link></b-dropdown-item>
             
	</b-dropdown>
      
    </b-button-group>
    </b-col>
     <b-col class="col-md-3">
      <b-button-group>
          
     <!-- <b-dropdown id="dropdown-left" text="Member Portal" variant="info" class="m-2">
         
    <b-dropdown-item > <router-link to="/View_Login_In_Credentials">View View_Login_In_Credentials </router-link></b-dropdown-item>
    
	</b-dropdown> -->
      
    </b-button-group>
    </b-col>
     <b-col class="col-md-3">
      <b-button-group>
     <b-dropdown id="dropdown-left" text="Member statement" variant="info" class="m-2">
    <b-dropdown-item > <router-link to="/Generate_Statement">Generate Statement </router-link></b-dropdown-item>
             
   
	</b-dropdown>
      
    </b-button-group>
    </b-col>
    <b-col class="col-md-3">
       <b-button-group>
      <b-button @click="Scheme_billing()" variant="info">Merge Member Accounts</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
  </base-header>
</template>
<script>


export default {
    components:{
        
    },
    methods: {
        
    },


}
</script>

<style>

</style>
