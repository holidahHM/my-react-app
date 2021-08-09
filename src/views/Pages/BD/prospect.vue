<template>
  <div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center bg-gradient-success">
      <b-col xl="12" md="6">
        <b-breadcrumb
          class="breadcrumb-links bg-gradient-info text-white pt-10"
          style="font-size: 15px"
        >
          <b-breadcrumb-item href="#home" class="text-white">Home</b-breadcrumb-item>
          <b-breadcrumb-item href="#library" class="text-white" active
            >Prospect</b-breadcrumb-item
          >
        </b-breadcrumb>
      </b-col>
    </div>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="12" class="order-xl-2">
          <card>
            <div align-v="center" slot="header">
              <b-col cols="12">
                <h3 class="mb-0">Add Prospect</h3>
              </b-col>
            </div>

            <b-form>
              <h6 class="heading-small text-muted mb-4">Prospect information</h6>

              <div class="pl-lg-4">
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Prospect Name"
                      placeholder="Prospect Name"
                      readonly
                      v-model="payload.prospect_name"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input label="Choose Division" placeholder="Choose Division">
                      <select v-model="payload.user_zone" class="form-control">
                        <option>Pension</option>
                        <option>Insurance</option>
                        <option>Trust</option>
                        <option>Training</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="email"
                      label="Email address"
                      placeholder="Prospect Email"
                      v-model="payload.prospect_email"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      label="Choose Product or Service"
                      placeholder="Choose Product or Service"
                    >
                      <select v-model="payload.user_accessto" class="form-control">
                        <option v-if="payload.user_zone === 'Pension'">OPPS</option>
                        <option v-if="payload.user_zone === 'Pension'">IDD</option>
                        <option v-if="payload.user_zone === 'Insurance'">
                          Easy Cover
                        </option>
                        <option v-if="payload.user_zone === 'Insurance'">PRMC</option>
                        <option v-if="payload.user_zone === 'Insurance'">
                          Domestic Package
                        </option>
                        <option v-if="payload.user_zone === 'Insurance'">
                          Personal Accident
                        </option>
                        <option v-if="payload.user_zone === 'Training'">
                          Soft skills
                        </option>
                        <option v-if="payload.user_zone === 'Trust'">Living</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Prospect Phone Number"
                      placeholder="Prospect Phone Number"
                      v-model="payload.prospect_phone"
                    >
                    </base-input>
                  </b-col>
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
                        v-model="payload.note"
                        id="about-form-textaria"
                        placeholder=""
                      ></b-form-textarea>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Date of Contact"
                      placeholder="DAte of Contact"
                      id="example-date-input"
                      readonly
                      v-model="payload.date_of_contact"
                    >
                    </base-input>
                  </b-col>
                </b-row>
              </div>

              <b-row class="d-flex justify-content-center mb-3">
                <base-button type="info" v-on:click="payloadData()">Save</base-button>

                <base-button type="danger">Delete</base-button>
              </b-row>

              <b-row>
                <b-col lg="12">
                  <div v-loading="true" id="loading" v-if="checking">
                    <p>Adding prospect please wait...</p>
                  </div>
                </b-col>
              </b-row>
              <hr class="my-4" />
            </b-form>
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { saveProspect } from "../../../api/users.api";
export default {
  data() {
    return {
      checking: false,
      payload: {
        user_zone: "",
        user_accessto: "",
        note: "",
        prospect_id: "",
        prospect_name: "",
        prospect_email: "",
        prospect_phone: "",
        date_of_contact: "",
      },
    };
  },
  created() {
    this.payload.prospect_name = this.$route.params.data.prospect_name;
    this.payload.date_of_contact = this.$route.params.data.lead_date_found;
    this.payload.prospect_id = this.$route.params.data.prospectID;
  },
  methods: {
    async payloadData() {
      var stringjson = JSON.stringify(this.payload);
      // console.log("json easy cover object", JSON.parse(stringjson));

      console.log("payload data prospect", stringjson);
      // let response = "";
      // this.checking = true;
      // try {
      //   response = await httpClient.post("/users", stringjson);
      //   console.log("easy cover", response);
      //   console.log("payload data", this.payload);
      //   this.checking = false;
      // } catch (e) {
      //   this.checking = false;
      //   console.log("Easy cover error", e);
      // }

      // this.checking = false;
      // if (response.status === 200) {
      //   //alert('data saved successfully');
      //   if (this.user_accessto === "Easy Cover") {
      //     this.$router.push({
      //       name: "Fill Proposal form",
      //       params: {
      //         data: {
      //           leadName: this.payloadprospect_name,
      //           leadEmail: this.payloadprospect_email,
      //           leadPhone: this.payloadprospect_phone,
      //         },
      //       },
      //     });
      //   }
      //   this.$toast.success("Successfully added a prospect", {
      //     position: "top-right",
      //     timeout: 5000,
      //     closeOnClick: false,
      //     pauseOnFocusLoss: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     draggablePercent: 0.6,
      //     showCloseButtonOnHover: true,
      //     hideProgressBar: false,
      //     closeButton: "button",
      //     icon: true,
      //     rtl: false,
      //   });
      // }
    },
  },
};
</script>
<style></style>
