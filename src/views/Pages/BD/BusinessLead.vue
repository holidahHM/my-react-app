<template>
  <div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center bg-gradient-success ">
        <b-col xl="12">
        <b-breadcrumb class="breadcrumb-links bg-gradient-success text-white pt-10" style="font-size:15px;">
            <b-breadcrumb-item href="/" class="text-white">Home</b-breadcrumb-item>
            <b-breadcrumb-item href="#/BD/BD_Prospects" class="text-white" >Prospect</b-breadcrumb-item>
            <b-breadcrumb-item href="#" class="text-white" active>Lead</b-breadcrumb-item>
        </b-breadcrumb>
        </b-col>
      
    </div>
    

    <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="12" class="order-xl-2">
          <lead-form></lead-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import LeadForm from './addLeadCard.vue';

  export default {
    components: {
      LeadForm
    }
  };
</script>
<style>
</style>
