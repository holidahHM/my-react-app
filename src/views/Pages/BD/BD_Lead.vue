<template>
  <div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
        style="min-height: 200px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
      <b-container fluid>
        <!-- Mask -->
        <span class="mask bg-gradient-success opacity-8"></span>
        <!-- Header container -->
      </b-container>
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
  import LeadForm from './yourLead.vue';

  export default {
    components: {
      LeadForm
    }
  };
</script>
<style>
</style>
