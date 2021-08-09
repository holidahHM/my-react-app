<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      	<b-row class="float-right pb-4">
		  <b-col xl="12" >
			  <router-link to="/view_members">
				<b-button variant="primary">Back</b-button>
			  </router-link>
		  </b-col>
	  </b-row>
    <div>
  <b-tabs pills>
    <!--Internal Member Nav Pill -->
    <b-tab active>
      <template v-slot:title >
      Internal Member
      </template>
      <br>
  <b-form @submit.prevent="updateProfile">
 
    </b-form>
      
    </b-tab>
    <!--External Members Pill -->
     <b-tab>
      <template v-slot:title >
        External Member
      </template>
      <br>
      <b-form @submit.prevent="updateProfile">
        </b-form>
        <h3 class="mb-0">Add /Edit External Member details</h3>
     
      </b-tab> 
  </b-tabs>
</div>
  </card>
</base-header>
</template>
<script>
export default {
  components: { BaseInput },
  data() {
    return {
    }
  }
};
</script>
<style></style>
