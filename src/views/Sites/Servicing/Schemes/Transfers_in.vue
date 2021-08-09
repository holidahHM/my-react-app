<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
          <div class="row">
                      <h3>Initiate Transfer In</h3>
                  </div>
    <br>
<b-row>
      <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                
                  <div class="row">
                       <div class="col-md-4">
      <label for="input-default">Scheme Name</label>
            <b-form-input type="text" placeholder="Scheme Name" readonly></b-form-input>
    </div>
        <div class="col-md-4">
      <label for="input-default">Member Code</label>
            <b-form-input type="text" placeholder=""></b-form-input>
    </div>
     <div class="col-md-4">
      <label for="input-default">Tranfer From Scheme Name</label>
            <b-form-input type="text" placeholder=""></b-form-input>
    </div>
    </div>
    <br>
                  <div class="row">
                      <div class="col-md-4">
       <label for="input-default">Date Transfer In Recieved</label>
      <b-form-input type="date" placeholder="YY-MMN-DD"></b-form-input>
    </div>
    <div class="col-md-4">
      <label for="input-default">Deferred Tax Relief</label>
            <b-form-input type="text" placeholder="0"></b-form-input>
    </div>
      <div class="col-sm-4">
          <label for="input-default">Attatch Computation Worksheet (PDF)</label>
          <input class="form-control" type="file" id="computation_work_sheet" name=""></div>
              </div>
              <br>
              <div class="row">
                  <div class="col-md-4">
      <label for="input-default">EE Tax Exempt</label>
            <b-form-input type="text" placeholder="0"></b-form-input>
    </div>
    <div class="col-md-4">
      <label for="input-default">EE Non-Tax Exempt</label>
            <b-form-input type="text" placeholder="0"></b-form-input>
    </div>
    <div class="col-md-4">
      <label for="input-default">ER Tax Exempt</label>
            <b-form-input type="text" placeholder="0"></b-form-input>
    </div>
              </div>
              <br>
          <div class="row">
                  <div class="col-md-4">
      <label for="input-default">ER Non-Tax Exempt</label>
            <b-form-input type="text" placeholder="0"></b-form-input>
    </div>
    <div class="col-md-4">
      <label for="input-default">AVC Tax Exemp</label>
            <b-form-input type="text" placeholder="0"></b-form-input>
    </div>
    <div class="col-md-4">
      <label for="input-default">AVC Non Tax Exempt</label>
            <b-form-input type="text" placeholder="0"></b-form-input>
    </div>
              </div>              <br>
             <div class="row-float-Left pb-4">
	
		  <base-button @click="scheme_servicing2()" type="success">Submit Transfer In</base-button>
	  </div>
                 
  </div>
  
            </template>
          </stats-card>

        </b-col>
<!--end of 1st row--></b-row>
  </card>
</base-header>
</template>
<script>
import scheme_servicing2 from '../Schemes/scheme_servicing2.vue'
export default {
components:{
  scheme_servicing2
  },
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
    scheme_servicing2(){
      this.$router.push('/scheme_servicing2')
    }
  }
  
};
</script>