<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <form-wizard @onComplete="addPropects">
        <tab-content title="Register Lead" :selected="true">
          <h6 class="heading-small text-muted mb-4">Lead information</h6>

          <div class="pl-lg-4">
            <b-row>
              <b-col lg="6">
                <base-input
                  type="text"
                  label="Lead Name"
                  placeholder="Lead Name"
                  v-model="lead_username"
                >
                </base-input>
              </b-col>
              <b-col lg="6">
                <base-input
                  type="email"
                  label="Email address"
                  placeholder="Prospect Email"
                  v-model="lead_email"
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
                  v-model="lead_number"
                >
                </base-input>
              </b-col>
              <b-col lg="6">
                <base-input
                  type="address"
                  label="Physical Address"
                  placeholder="Physical Address"
                  v-model="lead_address"
                >
                </base-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="6">
                <b-form-group
                  label="Add Note"
                  label-class="form-control-label"
                  class="mb-0"
                  label-for="about-form-textaria"
                >
                  <!--  <label class="form-control-label">About Me</label> -->
                  <b-form-textarea
                    rows="4"
                    v-model="lead_note"
                    id="about-form-textaria"
                    placeholder=""
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
              <b-col lg="6">
                <base-input
                  type="date"
                  label="Date of Contact"
                  placeholder="DAte of Contact"
                  id="example-date-input"
                  v-model="lead_date"
                >
                </base-input>
              </b-col>
            </b-row>
          </div>
          <hr class="my-4" />
          <button
            style="margin-bottom: 10%; float: right"
            class="btn btn-success"
            @click.prevent="saveLead"
          >
            Save lead
          </button>
          <br />
          <br />
          <div class="alert alert-success" v-if="successData">
            {{ successData }}
          </div>
          <div class="alert alert-danger" v-if="errordata">
            {{ errordata }}
          </div>
        </tab-content>
        <tab-content title="Add as Prospect">
          <div class="pl-lg-4">
            <b-row>
              <b-col lg="6">
                <base-input label="Type" placeholder="Type">
                  <select v-model="user_type" class="form-control">
                    <option>Retail</option>
                    <option>Corporate</option>
                  </select>
                </base-input>
              </b-col>
              <b-col lg="6">
                <base-input
                  type="text"
                  label="Lead Name"
                  value="lead_username"
                  v-model="lead_username"
                >
                  {{ lead_username }}
                </base-input>
              </b-col>
            </b-row>
            <div v-if="user_type === 'Retail'">
              <b-row>
                <b-col lg="6">
                  <base-input label="Choose Business" placeholder="Choose Business">
                    <select v-model="user_zone" class="form-control">
                      <option>Pension</option>
                      <option>Insurance</option>
                      <option>Trust</option>
                      <option>Training</option>
                    </select>
                  </base-input>
                </b-col>
                <b-col lg="6">
                  <base-input
                    label="Choose Product or Service"
                    placeholder="Choose Product or Service"
                  >
                    <select v-model="user_accessto" class="form-control">
                      <option v-if="user_zone === 'Pension'">OPPS</option>
                      <option v-if="user_zone === 'Pension'">IDD</option>
                      <option v-if="user_zone === 'Insurance'">Easy Cover</option>
                      <option v-if="user_zone === 'Insurance'">PRMC</option>
                      <option v-if="user_zone === 'Insurance'">Domestic Package</option>
                      <option v-if="user_zone === 'Insurance'">Personal Accident</option>
                      <option v-if="user_zone === 'Training'">Soft skills</option>
                      <option v-if="user_zone === 'Trust'">Living</option>
                    </select>
                  </base-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="6">
                  <base-input
                    type="text"
                    label="Business Value"
                    placeholder="Business Value"
                    v-model="prospect_businessvalue"
                  >
                  </base-input>
                </b-col>
                <b-col lg="6">
                  <b-form-group
                    label="Valuation Basis"
                    label-class="form-control-label"
                    class="mb-0"
                    label-for="about-form-textaria"
                  >
                    <!--  <label class="form-control-label">About Me</label> -->
                    <b-form-textarea
                      rows="4"
                      value=""
                      id="about-form-textaria"
                      placeholder=""
                    ></b-form-textarea>
                  </b-form-group>
                </b-col>
              </b-row>
              <hr class="my-4" />
              <!-- <b-row class="d-flex  mb-3"  >
                        <base-button type="info" @click.prevent="saveType">Add</base-button>
        
                    </b-row> -->
            </div>
            <div v-if="user_type === 'Corporate'">
              <b-row>
                <b-col lg="6">
                  <base-input label="Choose Business" placeholder="Choose Business">
                    <select v-model="user_zone" class="form-control">
                      <option>Pension</option>
                      <option>Insurance</option>
                      <option>Trust</option>
                      <option>Training</option>
                    </select>
                  </base-input>
                </b-col>
                <b-col lg="6">
                  <base-input
                    label="Choose Product or Service"
                    placeholder="Choose Product or Service"
                  >
                    <select v-model="user_accessto" class="form-control">
                      <option v-if="user_zone === 'Pension'">Umbrella</option>
                      <option v-if="user_zone === 'Pension'">Occupational</option>
                      <option v-if="user_zone === 'Insurance'">Easy Cover</option>
                      <option v-if="user_zone === 'Insurance'">PRMC</option>
                      <option v-if="user_zone === 'Insurance'">Domestic Package</option>
                      <option v-if="user_zone === 'Insurance'">Personal Accident</option>
                      <option v-if="user_zone === 'Training'">Soft skills</option>
                      <option v-if="user_zone === 'Trust'">Living</option>
                    </select>
                  </base-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="6">
                  <base-input
                    type="text"
                    label="Business Value"
                    placeholder="Business Value"
                    v-model="prospect_businessvalue"
                  >
                  </base-input>
                </b-col>
                <b-col lg="6">
                  <b-form-group
                    label="Valuation Basis"
                    label-class="form-control-label"
                    class="mb-0"
                    label-for="about-form-textaria"
                  >
                    <!--  <label class="form-control-label">About Me</label> -->
                    <b-form-textarea
                      rows="4"
                      id="about-form-textaria"
                      v-model="valuationBasis"
                      placeholder=""
                    ></b-form-textarea>
                  </b-form-group>
                </b-col>
              </b-row>
              <hr class="my-4" />
              <!-- <b-row class="d-flex  mb-3"  >
                        <base-button type="info" @click.prevent="saveType">Add </base-button>
        
                    </b-row> -->
            </div>

            <div class="alert alert-danger" v-if="errorMsg">{{ errorMsg }}</div>
          </div>
        </tab-content>
      </form-wizard>
    </card>
  </base-header>
</template>

<script>
import { FormWizard, TabContent } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
import { getSingleLead, saveNewLead, saveProspects } from "../../api/users.api";
import insuranceErrors from "../../service/insuranceErrors";
export default {
  name: "BasicStepperForm",
  components: {
    FormWizard,
    TabContent,
  },
  data() {
    return {
      user: "",
      user_zone: "",
      user_accessto: "",
      user_type: "",
      businessvalue: "",
      myStr: "",
      lead_username: "",
      lead_Name: "",
      lead_email: "",
      lead_number: "",
      lead_date: "",
      lead_note: "",
      errorMsg: "",
      prospect_businessvalue: "",
      lead_address: "",
      lead_added_by: "",
      valuationBasis: "",
      created_by: [],
      created_by_id: "",
      errordata: "",
      successData: "",
      prospect_details: [],
      lead_database_id: "",
    };
  },
  created() {
    if (localStorage.getItem("userData") != null) {
      this.created_by = JSON.parse(localStorage.getItem("userData"));
      this.created_by_id = this.created_by.userid;
    }
  },
  methods: {
    saveType() {
      this.myStr = JSON.stringify(this.user);
      console.log(myStr);
    },
    async saveLead() {
      let response = "";
      this.errordata = "";
      this.successData = "";
      try {
        this.$loading.show({ delay: 0 });
        response = await saveNewLead(
          this.lead_username,
          this.lead_address,
          this.lead_date,
          this.created_by_id,
          this.lead_date,
          this.lead_number,
          this.lead_email,
          this.lead_note
        );
        console.info(response);
      } catch (e) {
        this.$loading.hide();
        let resp = "";
        resp = insuranceErrors.getErrorsLeads(e.response.status);
        //this.errordata = resp;
        this.$toast.error(resp, {
          position: "top-right",
          timeout: 5000,
          closeOnClick: false,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: true,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
        throw resp;
      }
      this.$loading.hide();
      if (response.status === 200) {
        let msg = "Lead added successfully. Kindly click next to continue";
        //alert('data saved successfully');
        //this.$router.push("/proposal_form");
        this.$toast.success(msg, {
          position: "top-right",
          timeout: 5000,
          closeOnClick: false,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: true,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
    },
    async addPropects() {
      let response = "";
      this.errorMsg = "";
      try {
        this.$loading.show({ delay: 0 });
        response = await saveProspects(
          this.user_type,
          this.user_zone,
          this.user_accessto,
          this.prospect_businessvalue,
          this.valuationBasis,
          this.lead_username
        );
        //this.$router.push("/proposal_form");
        console.log(response);
      } catch (e) {
        this.$loading.hide();
        let resp = "";
        resp = insuranceErrors.getErrorsProspects(e.response.status);
        //this.errorMsg = resp;
        this.$toast.error(resp, {
          position: "top-right",
          timeout: 5000,
          closeOnClick: false,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: true,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
        throw resp;
      }
      this.$loading.hide();
      if (response.status === 200) {
        //alert('data saved successfully');
        if (this.user_accessto === "Easy Cover") {
          this.$router.push({
            name: "Fill Proposal form",
            params: {
              data: {
                leadName: this.lead_username,
                leadEmail: this.lead_email,
                leadPhone: this.lead_number,
              },
            },
          });
        }
        this.$toast.success("Successfully added a prospect", {
          position: "top-right",
          timeout: 5000,
          closeOnClick: false,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: true,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
    },
  },
  async mounted() {
    let response = "";
    this.prospect_details = [];
    try {
      response = await getSingleLead();
      console.info(response);
      this.prospect_details = response.data.data;
    } catch (e) {}
    if (response.status === 200) {
      for (let i in this.prospect_details) {
        this.lead_Name = i.prospect_name;
        this.lead_database_id = i.prospect_id;
      }
    }
  },
};
</script>
