<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <!-- <b-row>
      <b-col class="col-md-6">
        <b-button-group>
          <b-dropdown
            id="dropdown-left"
            text="Member Servicing"
            variant="info"
            class="m-2"
          >
            <b-dropdown-item>
              <router-link to="/Beneficiaries_Member_Servicing"
                >Beneficiaries
              </router-link></b-dropdown-item
            >
            <b-dropdown-item>
              <router-link to="/Portal_Edits">Portal Edits </router-link></b-dropdown-item
            >
          </b-dropdown>
        </b-button-group>
      </b-col>
      <b-col class="col-md-6">
        <b-button-group>
          <b-dropdown
            id="dropdown-left"
            text="Member statement"
            variant="info"
            class="m-2"
          >
            <b-dropdown-item>
              <router-link to="/Generate_Statement"
                >Generate Statement
              </router-link></b-dropdown-item
            >
          </b-dropdown>
        </b-button-group>
      </b-col>
    </b-row> -->
    <b-row
      ><b-col xl="12" md="12">
        <stats-card title="" type="gradient-green" sub-title="" class="mb-4">
          <h3>Bio Details</h3>
          <template slot="footer">
            <div class="mt-3">
              <div class="row">
                <div class="col-md-6">
                  <label for="input-default"><Strong>Name:</Strong></label
                  ><br />
                  {{ i_f_name }}
                </div>
                <!--<div class="col-md-3">
                                    <label for="input-default">Provider Type</label>
                                    <select class="form-control">
                                      <option>Custodian</option>
                                      <option>Fund Manager</option>
                                    </select>
                                  </div>-->
                <div class="col-md-6">
                  <label for="input-default"><Strong>Gender:</Strong></label
                  ><br />
                  null
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label for="input-default"><Strong>Email:</Strong></label
                  ><br />
                  {{ email }}
                </div>
                <!--<div class="col-md-3">
                                    <label for="input-default">Provider Type</label>
                                    <select class="form-control">
                                      <option>Custodian</option>
                                      <option>Fund Manager</option>
                                    </select>
                                  </div>-->
                <div class="col-md-6">
                  <label for="input-default"><Strong>Date of Birth:</Strong></label
                  ><br />
                  {{ dob }}
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label for="input-default"><Strong>Phone No:</Strong></label
                  ><br />
                  {{ phone }}
                </div>
                <!--<div class="col-md-3">
                                    <label for="input-default">Provider Type</label>
                                    <select class="form-control">
                                      <option>Custodian</option>
                                      <option>Fund Manager</option>
                                    </select>
                                  </div>-->
                <div class="col-md-6">
                  <label for="input-default"><Strong>Status:</Strong></label
                  ><br />
                  {{ user_status }}
                </div>
              </div>
            </div></template
          ></stats-card
        >
      </b-col></b-row
    >
    <b-row>
      <b-col xl="12" md="12">
        <card>
          <h4>Policies for {{ i_f_name }}</h4>
          <button type="button" class="btn btn-outline-secondary">Refresh</button>
          <b-tabs card vertical>
            <b-tab
              xl="3"
              :title="count.Products"
              active
              v-for="count in memberDet"
              v-bind:key="count.ProposalNo"
            >
              <b-row>
                <b-col class="col-md-12">
                  <div class="table-responsive">
                    <table class="table table-bordered mb30">
                      <thead></thead>

                      <tbody>
                        <tr>
                          <td><strong>Member Name </strong></td>
                          <td>{{ i_f_name }}</td>
                        </tr>
                        <tr>
                          <td><strong>Product Name</strong></td>
                          <td>{{ count.Products }}</td>
                        </tr>
                        <tr>
                          <td><strong>Policy Number </strong></td>
                          <td>
                            {{ count.Policyno }}
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Insurance Company</strong></td>
                          <td>
                            {{ count.Company }}
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Amount Insured</strong></td>
                          <td>
                            {{ count.SumInsured }}
                          </td>
                        </tr>
                        <!-- <tr>
                          <td><strong>Option Category</strong></td>
                          <td>{{ count.Option_Category }}</td>
                        </tr> -->
                        <!-- <tr>
                          <td>
                            <strong>Policy Certificate (password protected)</strong>
                          </td>
                          <td>
                            <a class="btn btn-primary" target="_blank" href="">View </a>
                          </td>
                        </tr> -->

                        <tr>
                          <td><strong>Policy Status</strong></td>

                          <td>
                            <span class="badge badge-primary">{{ count.Status }}</span>
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Policy Start</strong></td>
                          <td>
                            <time>{{ count.From.date }}</time>
                            <!--{{ count.From.date }}-->
                          </td>
                        </tr>

                        <tr>
                          <td><strong>Policy End</strong></td>
                          <td>
                            {{ count.To.date }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                  </div>
                </b-col>
              </b-row>

              <b-row class="d-flex justify-content-center mb-3">
                <b-button-group>
                  <b-dropdown
                    id="dropdown-left"
                    text="Bulk Upload"
                    variant="primary"
                    class="m-2"
                  >
                    <b-dropdown-item
                      ><router-link to="/Ins_bulkmembers"
                        >Add Beneficiaries</router-link
                      ></b-dropdown-item
                    >
                  </b-dropdown>
                </b-button-group>
              </b-row> </b-tab
            ><br />
          </b-tabs>
        </card>
      </b-col>
    </b-row>
  </base-header>
</template>
<script>
import { getBefefiaries, getSingleMemberPolicy } from "../../../../api/users.api";
import Card from "../../../../components/Cards/Card.vue";
export default {
  components: { Card },
  data() {
    return {
      memberDet: [],
      member_ID: "",
      i_f_name: "",
      prod_num: "",
      ben_items: [],
      dob: "",
      phone: "",
      user_status: "",
      email: "",
    };
  },
  created() {
    this.member_ID = this.$route.params.member_id;
  },
  async mounted() {
    let response = "";
    try {
      this.$loading.show({ delay: 0 });
      response = await getSingleMemberPolicy(this.member_ID);
      console.info("member", response.data.data);
      this.memberDet = response.data.data;
      this.$toast.success("Member retrieved", {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
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
      for (let item in this.memberDet) {
        this.i_f_name = this.memberDet[item].Insured;
        this.phone = this.memberDet[item].Mobile;
        this.user_status = this.memberDet[item].user_status;
        this.dob = this.memberDet[item].DOB.date;
        this.email = this.memberDet[item].Email;
      }
    } catch (e) {
      this.$loading.hide();
      console.error("error", e);
      this.$toast.error("Failed! Refresh the page", {
        position: "top-right",
        timeout: 5000,
        closeOnClick: true,
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
    this.$loading.hide();
    //this.i_f_name = this.memberDet.Name;
  },

  methods: {},
};
</script>

<style scoped></style>
