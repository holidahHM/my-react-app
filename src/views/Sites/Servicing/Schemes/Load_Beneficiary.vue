<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
       <b-row>
      <div class="col-sm-4">
          <label for="input-default">Choose Your File</label>
          <br>
          <input class="form-control" type="file" id="computation_work_sheet" name="">
          </div>
      </b-row>
      <br>
	   <b-row class="d-flex justify-content-center mb-3"  >
        
            <base-button  @click="Trust_Servicing()" type="primary">Submit</base-button>
        
        </b-row>
  </card>
</base-header>
</template>
<script>
import Trust_Servicing from '../Schemes/Trust_Servicing'
export default {
components:{Trust_Servicing},
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
    Trust_Servicing(){
      this.$router.push('/Trust_Servicing')
    }
  }
  
};
</script>
<style></style>

 