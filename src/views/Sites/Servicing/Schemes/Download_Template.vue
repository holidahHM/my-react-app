<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
       <b-row>
      <b-col lg="6">
              <base-input
              label="Template"
              v-model="user.Template"
            >
            <select class="form-control">
                <option>Trust</option>
                <option>Beneficiaries</option>
            </select>
            </base-input>
          </b-col>
      </b-row>
      <br>
	   <b-row class="d-flex justify-content-center mb-3"  >
        
            <base-button type="primary">Download</base-button>
        
        </b-row>
  </card>
</base-header>
</template>
<script>
export default {
components:{},
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

 