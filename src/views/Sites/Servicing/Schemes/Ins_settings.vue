<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <div>
        <b-tabs pills>
          <b-tab active>
            <template v-slot:title> Basic Scheme Settings </template>
            <br />
            <div class="d-flex justify-content-center mb-3"></div>
            <b-form @submit.prevent="updateProfile">
              <div class="pl-lg-4">
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Scheme Code"
                      placeholder="Scheme Code"
                      disabled
                      aria-readonly=""
                      v-model="$route.params.code"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Scheme Name"
                      placeholder="Scheme Name"
                      disabled
                      v-model="$route.params.s_name"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Scheme Group Name"
                      placeholder=""
                      v-model="user.schemegroupname"
                    >
                    </base-input>
                  </b-col>

                  <b-col lg="6">
                    <base-input
                      type="date"
                      label="Date Opened"
                      placeholder="Date Opened"
                      id="example-date-input"
                      v-model="user.Dateopened"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="File Number"
                      placeholder="File Number"
                      aria-readonly=""
                      v-model="user.filenumber"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="number"
                      label="Balance"
                      placeholder="Balance"
                      v-model="user.Balance"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="KRA Tax PIN"
                      placeholder=""
                      v-model="user.KRAtaxpin"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Occupation"
                      placeholder=""
                      v-model="user.occupation"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Incorporation No"
                      placeholder=""
                      v-model="user.RBAregNo"
                    >
                    </base-input> </b-col
                ></b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Postal Address"
                      placeholder=""
                      v-model="user.postaladdress"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Town"
                      placeholder=""
                      v-model="user.town"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Mobile No"
                      placeholder=""
                      v-model="user.mobileno"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Telephone"
                      placeholder=""
                      v-model="user.telephone"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Email"
                      placeholder=""
                      v-model="user.email"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Introduced by"
                      placeholder=""
                      v-model="user.intro_by"
                    >
                    </base-input> </b-col
                ></b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Contact Person"
                      placeholder=""
                      v-model="user.Contact_Person"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Alternative Address"
                      placeholder=""
                      v-model="user.alternative_add"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input label="Group/Agent" v-model="user.agent_group">
                      <select class="form-control">
                        <option>Test Agent 1</option>
                        <option>Nelly Kemunto</option>
                      </select>
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input label="Division/Category" v-model="user.cat_div">
                      <select class="form-control">
                        <option>Corporate Lines</option>
                        <option>Personal Lines</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input label="Branch" v-model="user.Branch">
                      <select class="form-control">
                        <option>Head Office</option>
                        <option>Kakamega</option>
                      </select>
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input label="Currency" v-model="user.currency">
                      <select class="form-control">
                        <option>Euro</option>
                        <option>Kenya Shillings</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input label="Staff Incharge" v-model="user.Branch">
                      <select class="form-control">
                        <option>Staff 1</option>
                        <option>Staff 2</option>
                      </select>
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input label="Status" v-model="user.status">
                      <select class="form-control">
                        <option>Dormant</option>
                        <option>Active</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
              </div>
              <br />
              <b-row class="d-flex justify-content-center mb-3">
                <base-button type="success"
                  ><router-link to="/Schemes">Submit</router-link></base-button
                >
              </b-row>
              <hr class="my-4" />
            </b-form>
          </b-tab>
        </b-tabs>
      </div>
    </card>
  </base-header>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      user: [],
      schemeID: "",
      schemeName_fr_schemes: "",
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
  },
};
</script>
<style></style>
