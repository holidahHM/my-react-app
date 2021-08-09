<template>

  <card>

    <div>
  <b-tabs pills>
    <!--
    <b-tab active>
        <template v-slot:title >
            New Lead
        </template>
        <br>
        <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0 " >Register New Lead </h3>
            </b-col>
        </div>
        <br>
      
      <b-form @submit.prevent="newLead">

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Lead Name"
              placeholder="Lead Name"
              v-model="user.leadname"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              label="Choose Division"
              v-model="user.divison"
            >
            <select class="form-control">
                <option>Pension</option>
                <option>Insurance</option>
                <option>Trust</option>
                <option>Training</option>
                <option>Acturial Services</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="email"
              label="Lead Email address"
              placeholder="Lead Email Address"
              v-model="user.email"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              label="Choose Product or Service"
              v-model="user.product"
            >
            <select class="form-control">
                <option>Prefil according to division</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Lead Phone Number"
              placeholder="Lead Phone Number"
              v-model="user.leadNumber"
            >
            </base-input>
          </b-col>
         <b-col lg="6">
            <base-input
              type="text"
              label="Business Value"
              placeholder="Business Value"
              v-model="user.businessvalue"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="date"
              label="Date of Contact"
              placeholder="DAte of Contact"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <b-form-group label="Valuation Basis" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
           --> <!--  <label class="form-control-label">About Me</label> --><!--
            <b-form-textarea rows="4" value="" id="about-form-textaria" placeholder=""></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <br>
      <b-row class="d-flex justify-content-center mb-3"  >
        
            <base-button type="info">Save</base-button>
        
            <base-button type="danger">Delete</base-button>
        
        </b-row>
        <hr class="my-4">

    </b-form>
      
    </b-tab>
-->
    <b-tab>
      <template v-slot:title >
         Register Prospect as a Lead
      </template>
      <br>
        <br>
      <b-form @submit.prevent="ExistingProspect">

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              label="Prospect Name"
              placeholder="Prospect Name"
              v-model="user.Prospect"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              label="Choose Division"
              placeholder="Prefil Division"
              v-model="user.divison"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
            <b-col lg="6">
                <base-input
                type="email"
                label="Lead Name "
                placeholder="Prefil Lead Name"
                v-model="user.leadname"
                >
                </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              label=" Product or Service"
              placeholder="Prefil Product/service"
              v-model="user.product"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
            <b-col lg="6">
            <base-input
              type="email"
              label="Lead Email address"
              placeholder="Prefil Email Address"
              v-model="user.email"
            >
            </base-input>
          </b-col>
         <b-col lg="6">
            <base-input
              type="text"
              label="Business Value"
              placeholder="Business Value"
              v-model="user.businessvalue"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
            <b-col lg="6">
            <base-input
              type="text"
              label="Lead Phone Number"
              placeholder="Lead Phone Number"
              v-model="user.leadNumber"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <b-form-group label="Valuation Basis" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
            <!--  <label class="form-control-label">About Me</label> -->
            <b-form-textarea rows="4" value="" id="about-form-textaria" placeholder=""></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>

      </div>
      <br>
      <b-row class="d-flex justify-content-center mb-3"  >
        <router-link to="/application_form">
            <base-button type="info">Save</base-button>
        
            <base-button type="danger">Cancel</base-button>
        </router-link>
        </b-row>
        <hr class="my-4">

    </b-form>
      
    </b-tab>

   
  </b-tabs>
</div>
  </card>
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
    }
  }
};
</script>
<style></style>
