<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
      <b-form @submit.prevent="updateProfile">
      <div class="pl-lg-4">
        <b-row>
          <b-col lg="12">
           <h3 class="mb-0"><b>Import Benefits Payment Portions</b></h3>
          </b-col>
        </b-row>
        <br>
        <b-row>
           <b-col lg="3">
           <h4 class="mb-0">Import From </h4>
          </b-col> 
          <b-col lg="9">
            <base-input
              label=""
              v-model="user.selectscheme"
            >
            <select class="form-control">
                <option>Select Scheme</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
         <b-row class="d-flex justify-content-center mb-3"  >
        
            <base-button type="primary">Submit</base-button>
        
        </b-row>
        </div>
      <br>
      
        <hr class="my-4">

    </b-form>
  </card>
</base-header>
</template>
<script>
export default {
  data() {
    return {
      user: {
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    },
    }
};
</script>
<style></style>
