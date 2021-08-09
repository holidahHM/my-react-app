<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
      <div>
                 <b-card no-body>
                  <b-tabs pills card>
                   <b-tab title="Load Batch">
                  <br>
                  <div class="row">
                      <div class="col-md-6">
                          <b-button variant="primary">Download Beneficiaries Template</b-button>
                      </div>
                  </div>
                
                  <div class="row">
                       <div class="col-md-4">
      <label for="input-default">Scheme Name</label>
            <b-form-input type="text" placeholder="Scheme Name" readonly></b-form-input>
    </div>
   
          <div class="col-md-4">
      <label for="input-default">Batch Description</label>
            <b-form-input type="text" placeholder="" ></b-form-input>
    </div>
     <div class="col-sm-4">
          <label for="input-default">Choose Excel File</label>
          <input class="form-control" type="file" id="excel_file" name=""></div>
              </div>
              <br>

             <div class="row-float-left pb-4">
	
		  <base-button @click="Members" type="success">Submit</base-button>
	  </div>
                   </b-tab>
                   
            <b-tab title="Add Beneficiaries+">
                <div id="visa">
                  <h2>Add Beneficiaries</h2>
                  <form>
                    <br /><br />
                    <div class="col-sm-3">
                      <a id="add_row" class="btn btn-info pull-right" @click="add"
                        ><i class="fa fa-plus"></i></a
                      >
                    </div>
                    <!--
                    <b-row>
                        
                        <b-col class="col-sm-3">
                      <button @click="add">+</button>
                        </b-col>
                        <b-col class="col-sm-3">
                              <button @click="deleteV(counter)">-</button>
                        </b-col>
                        
                    </b-row>
                    -->
                    <br />
                    <div
                      class="previous"
                      v-for="(applicant, counter) in applicants"
                      v-bind:key="counter"
                    >
                      <b-row>
                        <b-col lg="2">
                          <base-input
                            type="text"
                            label="name"
                            placeholder="Name"
                            id="example-date-input"
                            v-model="applicant.name"
                          >
                          </base-input>
                        </b-col>
                         <b-col lg="2">
              <base-input
              label="Relationship to Member"
              placeholder="Relationship"
              id="example-date-input"
              v-model="applicant.relationship"
            >
            <select class="form-control">
                <option>Son</option>
                <option>Daughter</option>
                <option>Spouse</option>
            </select>
            </base-input>
          </b-col>
                        <b-col lg="2">
                          <base-input
                            type="text"
                            label="Address"
                            placeholder="Address"
                            id="example-date-input"
                            v-model="applicant.address"
                          >
                          </base-input>
                        </b-col>
                        <b-col lg="2">
                          <base-input
                            type="text"
                            label="Telephone"
                            placeholder="Telephone"
                            id="example-date-input"
                            v-model="applicant.telephone"
                          >
                          </base-input>
                        </b-col>
                        <b-col lg="2">
                          <base-input
                            type="date"
                            label="Date of Birth"
                            placeholder="Date of Birth"
                            id="example-date-input"
                            v-model="applicant.dob"
                          >
                          </base-input>
                        </b-col>
                        <b-col lg="2">
                          <base-input
                            type="date"
                            label="Date of Appointment"
                            placeholder="Date of Appointment"
                            id="example-date-input"
                            v-model="applicant.doa"
                          >
                          </base-input>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col lg="2">
                          <base-input
                            type="text"
                            label="ID No."
                            placeholder="ID"
                            id="example-date-input"
                            v-model="applicant.id"
                          >
                          </base-input>
                        </b-col>
                        <b-col lg="2">
                          <base-input
                            type="text"
                            label="Share %"
                            placeholder=".00"
                            id="example-date-input"
                            v-model="applicant.share"
                          >
                          </base-input>
                        </b-col>
                      <b-col lg="2">
                        <a
                        id="delete_row"
                        class="pull-right btn btn-danger mr20 mb10"
                        @click="applicants.splice(counter, 1)"
                        ><i class="fa fa-minus"></i
                      ></a></b-col>
                      </b-row>
                    </div>
                  </form>
                </div>

              <div class="row-float-left pb-4">
	
		  <base-button @click="Members" type="success">Submit</base-button>
	  </div>
            </b-tab> 
                   </b-tabs></b-card>
    </div>
    <br>
  </card>
</base-header>
</template>
<script>
import Insurance_Servicing from '../Schemes/Insurance_Servicing.vue'
import Members from '../Members/Members.vue'
export default {
  components:{
    Insurance_Servicing,
    Members
  },
  
  methods: {
    Insurance_Servicing(){
      this.$router.push('/Insurance_Servicing')
    },
    Members(){
      this.$router.push('/Members/:member_id')
    },
     add() {
      this.applicants.push({
        previous: "",
        expiration: "",
         share: "",
          id: "",
          doa: "",
          dob: "",
          telephone: "",
          address: "",
          name: "",
      });
    },
    deleteV(index) {
      this.applicants.splice(index, 1);
    },
  },
  data() {
      return {
        tabIndex: 0,
          applicants: [
        {
          previous: "",
          expiration: "",
          share: "",
          id: "",
          doa: "",
          dob: "",
          telephone: "",
          address: "",
          name: "",
        },
      ],
      }
    }
}
</script>