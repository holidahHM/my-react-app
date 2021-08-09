<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <stats-card title="" type="gradient-green" sub-title="" class="mb-4">
      <template slot="footer">
        <div class="mt-3">
          <div class="row">
            <div class="col-md-6">
              <label for="input-default"><Strong>Member Name:</Strong></label
              ><br />
              {{ $route.params.clientId.m_name }}
            </div>
            <div class="col-md-6">
              <label for="input-default"><Strong>Date of Birth:</Strong></label
              ><br />
              {{ "null" }}
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label for="input-default"><Strong>Member Number:</Strong></label
              ><br />
              {{ $route.params.clientId.codes }}
            </div>
            <div class="col-md-6">
              <label for="input-default"><Strong>Member Id Number:</Strong></label
              ><br />
              {{ $route.params.clientId.m_IDNO }}
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label for="input-default"><Strong>Member Email:</Strong></label
              ><br />
              {{ $route.params.clientId.m_email }}
            </div>
            <div class="col-md-6">
              <label for="input-default"><Strong>Member phonenumber:</Strong></label
              ><br />
              {{ $route.params.clientId.m_mobile }}
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label for="input-default"><Strong>Member Occupation:</Strong></label
              ><br />
              {{ $route.params.clientId.m_occupation }}
            </div>
            <div class="col-md-6">
              <label for="input-default"><Strong>Member Address:</Strong></label
              ><br />
              {{ $route.params.clientId.m_address }}
            </div>
          </div>
          <br /></div
      ></template>
    </stats-card>
    <card>
      <div>
        <b-card no-body>
          <b-tabs pills card>
            <!--Profile-->
            <b-tab title="Profile"
              ><b-card-text>
                <b-row>
                  <b-col lg="4">
                    <base-input
                      type="text"
                      label="Member Name"
                      placeholder="Member Name"
                      id="example-date-input"
                      v-model="i_f_name"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="4">
                    <base-input
                      type="text"
                      label="Date of Birth"
                      placeholder="Date of Birth"
                      id="example-date-input"
                      v-model="dob"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="4">
                    <base-input
                      readonly
                      type="text"
                      label="Member Number"
                      placeholder="Member Number"
                      id="example-date-input"
                      v-model="clientID"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <!-- <b-col lg="4">
            <base-input
              type="date"
              label="Date of Employment"
              placeholder="Date of Employment"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
		  <b-col lg="4">
            <base-input
              type="date"
              label="Date of Joining Scheme"
              placeholder="Date of Joining Scheme"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col> -->
                  <!-- <b-col lg="4">
            <base-input
              label="Gender"
              placeholder="Gender"
            >
            <select v-model="user_zone" class="form-control">
                <option>Male</option>
                <option>Female</option>
            </select>
            </base-input>
          </b-col>
           -->
                </b-row>
                <b-row>
                  <b-col lg="4">
                    <base-input
                      type="text"
                      label="ID Number"
                      placeholder="ID Number"
                      id="example-date-input"
                      v-model="idnumber"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="4">
                    <base-input
                      type="text"
                      label="Pin"
                      placeholder="Pin"
                      id="example-date-input"
                      v-model="krapinn"
                    >
                    </base-input>
                  </b-col>
                  <!-- <b-col lg="4">
            <base-input
              label="Marital Status"
              placeholder="Marital Status"
            >
            <select v-model="user_zone" class="form-control">
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
            </select>
            </base-input>
          </b-col> -->
                  <b-col lg="4">
                    <base-input
                      type="email"
                      label="Email"
                      placeholder="Email"
                      id="example-date-input"
                      v-model="userEmail"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="4">
                    <base-input
                      type="text"
                      label="Phone Number"
                      placeholder="Phone Number"
                      id="example-date-input"
                      v-model="phonenumber"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="4">
                    <base-input
                      type="text"
                      label="Occupation"
                      placeholder="Occupation"
                      id="example-date-input"
                      v-model="userstatus"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="4">
                    <base-input
                      type="text"
                      label="Postal Address"
                      placeholder="Postal Address"
                      id="example-date-input"
                      v-model="postaddress"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <!-- <b-col lg="4">
            <base-input
              type="text"
              label="Department"
              placeholder="Department"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col> -->
                  <!-- <b-col lg="4">
            <base-input
              label="Nationality"
              placeholder="Nationality"
            >
            <select v-model="user_zone" class="form-control">
                <option>Kenya</option>
                <option>Uganda</option>
                <option>Zambia</option>
            </select>
            </base-input>
          </b-col> -->
                </b-row>

                <b-row>
                  <!-- <b-col lg="4">
            <base-input
              type="text"
              label="Preferred Retirement Age"
              placeholder="Preferred Retirement Age"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col> -->
                  <b-col lg="4">
                    <base-input
                      type="text"
                      label="Physical Address"
                      placeholder="Physical Address"
                      id="example-date-input"
                      v-model="physicaladdress"
                    >
                    </base-input>
                  </b-col>
                  <!-- <b-col lg="4">
            <base-input
              label="Status"
              placeholder="Status"
            >
            <select v-model="user_zone" class="form-control">
                <option>Active</option>
                <option>Deffered</option>
                <option>Unvested</option>
                <option>Pending Exit</option>
                <option>Exited</option>
            </select>
            </base-input>
          </b-col>
                </b-row>
                <br />
                 <h3>Mode of Payment</h3>  

                <b-row>
                  <b-col lg="4">
            <base-input
              type="text"
              label="Contribution % of Salary"
              placeholder=".00"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input> -->
                  <!-- </b-col>
		   <b-col lg="4">
            <base-input
              label="Contribution Payment Mode"
              placeholder="Payment Mode"
            >
            <select v-model="user_zone" class="form-control">
                <option>Salary Deduction</option>
                <option>Standing Order</option>
                <option>Direct debit</option>
                <option>Cheque</option>
                <option>M-pesa</option>
            </select>
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              label="Contribution Payment Frequency"
              placeholder="Payment Frequency"
            >
            <select v-model="user_zone" class="form-control">
                <option>Once</option>
                <option>Daily</option>
                <option>Fortnightly</option>
                <option>Quarterly</option>
                <option>Half-Annually</option>
                <option>Annually</option>
            </select>
            </base-input>
          </b-col> 
                </b-row>
                <b-row>
                   <b-col lg="12">
            <base-input
              type="text"
              label="Contribution:(Fixed Amount)"
              placeholder="Amount"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
                </b-row>
                <b-row>
                  <b-col lg="4">
            <base-input
              type="text"
              label="Contribution:(Transfer from Scheme)"
              placeholder="Transfers-In"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col> -->
                  <!-- <b-col lg="8">
            <base-input
              type="text"
              label="Retirement Scheme Name"
              placeholder="Scheme Name"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col> 
                </b-row>
                <br />
                <h3>% of Salary Contributions</h3>
           <b-row>
          <b-col lg="4">
            <base-input
              type="text"
              label="EE Proposed Contribution (%)"
              placeholder="%"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
		  <b-col lg="4">
            <base-input
              type="text"
              label="AVC Proposed Contribution (%)"
              placeholder="%"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input 
              type="text"
              label="ER Proposed Contribution (%)"
              placeholder="%"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
        </b-row> 
                <br />
                 <h3>Amounts Transferred in Breakdown</h3> 
                <b-row>
                  <b-col lg="4">
            <base-input
              type="text"
              label="EE Received Amount"
              placeholder="Amount"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col> 
                   <b-col lg="4">
            <base-input
              type="text"
              label="AVC Received Amount"
              placeholder="Amount"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input 
              type="text"
              label="ER Received Amount"
              placeholder="Amount"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col> 
                </b-row>
                <br />
                <h3>Next of Kin Details</h3> 
                <b-row>
                  <b-col lg="4">
            <base-input
              type="text"
              label="Next of Kin Name"
              placeholder="Name"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col> 
                  <b-col lg="4">
            <base-input
              type="date"
              label="Next of Kin ID Number"
              placeholder="ID Number"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col> 
                  <b-col lg="4">
            <base-input 
              type="text"
              label="Next of Kin Tel. No."
              placeholder="Telephone Number"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col> 
                </b-row>
                <b-row>
                   <b-col lg="4">
            <base-input 
              type="text"
              label="Next of Kin Address"
              placeholder="Address"
              id="example-date-input"
              v-model="user.lastName"
            >
            </base-input>
          </b-col> -->
                </b-row>
                <b-row>
                  <b-col class="col-md-3">
                    <b-button-group>
                      <b-button variant="info" @click.prevent="updateUser()"
                        >Save</b-button
                      >
                    </b-button-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="12">
                    <div v-loading="true" id="loading" v-if="updatingUser">
                      <p>Updating user....</p>
                    </div>
                  </b-col>
                </b-row>
              </b-card-text></b-tab
            >
            <br />
            <!--<h3>Mode of Payment</h3>

            <b-row>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="Contribution % of Salary"
                  placeholder=".00"
                  id="example-date-input"
                  v-model="user.lastName"
                >
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input label="Contribution Payment Mode" placeholder="Payment Mode">
                  <select v-model="user_zone" class="form-control">
                    <option>Salary Deduction</option>
                    <option>Standing Order</option>
                    <option>Direct debit</option>
                    <option>Cheque</option>
                    <option>M-pesa</option>
                  </select>
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input
                  label="Contribution Payment Frequency"
                  placeholder="Payment Frequency"
                >
                  <select v-model="user_zone" class="form-control">
                    <option>Once</option>
                    <option>Daily</option>
                    <option>Fortnightly</option>
                    <option>Quarterly</option>
                    <option>Half-Annually</option>
                    <option>Annually</option>
                  </select>
                </base-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="12">
                <base-input
                  type="text"
                  label="Contribution:(Fixed Amount)"
                  placeholder="Amount"
                  id="example-date-input"
                  v-model="user.lastName"
                >
                </base-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="Contribution:(Transfer from Scheme)"
                  placeholder="Transfers-In"
                  id="example-date-input"
                  v-model="user.lastName"
                >
                </base-input>
              </b-col>
              <b-col lg="8">
                <base-input
                  type="text"
                  label="Retirement Scheme Name"
                  placeholder="Scheme Name"
                  id="example-date-input"
                  v-model="user.lastName"
                >
                </base-input>
              </b-col>
            </b-row>
            <br />
            <h3>% of Salary Contributions</h3>
            <b-row>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="EE Proposed Contribution (%)"
                  placeholder="%"
                  id="example-date-input"
                  v-model="user.lastName"
                >
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="AVC Proposed Contribution (%)"
                  placeholder="%"
                  id="example-date-input"
                  v-model="user.lastName"
                >
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="ER Proposed Contribution (%)"
                  placeholder="%"
                  id="example-date-input"
                  v-model="user.lastName"
                >
                </base-input>
              </b-col>
            </b-row>
            <br />
            <h3>Amounts Transferred in Breakdown</h3>
            <b-row>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="EE Received Amount"
                  placeholder="Amount"
                  id="example-date-input"
                  v-model="user.lastName"
                >
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="AVC Received Amount"
                  placeholder="Amount"
                  id="example-date-input"
                  v-model="user.lastName"
                >
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="ER Received Amount"
                  placeholder="Amount"
                  id="example-date-input"
                  v-model="user.lastName"
                >
                </base-input>
              </b-col>
            </b-row>
            <br />
            <h3>Next of Kin Details</h3>
            <b-row>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="Next of Kin Name"
                  placeholder="Name"
                  id="example-date-input"
                  v-model="user.lastName"
                >
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input
                  type="date"
                  label="Next of Kin ID Number"
                  placeholder="ID Number"
                  id="example-date-input"
                  v-model="user.lastName"
                >
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="Next of Kin Tel. No."
                  placeholder="Telephone Number"
                  id="example-date-input"
                  v-model="user.lastName"
                >
                </base-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="Next of Kin Address"
                  placeholder="Address"
                  id="example-date-input"
                  v-model="user.lastName"
                >
                </base-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-md-3">
                <b-button-group>
                  <b-button variant="info">Save</b-button>
                </b-button-group>
              </b-col>
            </b-row>-->

            <!--Beneficiaries-->
          </b-tabs></b-card
        >
      </div>
    </card>
  </base-header>
</template>

<script>
import { updateSingleMember } from "../../../../api/users.api";
import Card from "../../../../components/Cards/Card.vue";
export default {
  components: { Card },
  name: "Test",
  props: {
    msg: String,
  },
  name: "Test",
  data() {
    return {
      user: {},
      applicants: [
        {
          previous: "",
          expiration: "",
        },
      ],
      updatingUser: false,
      checking: false,
      i_f_name: "", //i stands for internal
      i_l_name: "",
      i_email: "",
      user_zone: "",
      user_accessto: "",
      clientID: "",
      fullName: "",
      memberDet: [],
      dob: "",
      idnumber: "",
      userEmail: "",
      phonenumber: "",
      postaddress: "",
      krapinn: "",
      physicaladdress: "",
      userstatus: "",
    };
  },
  created() {
    this.clientID = this.$route.params.clientId.codes;
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    Members() {
      this.$router.push("/members");
    },
    add() {
      this.applicants.push({
        previous: "",
        expiration: "",
      });
    },
    deleteV(counter) {
      this.applicants.splice(counter, 1);
    },
    async updateUser() {
      let response = "";
      try {
        this.updatingUser = true;
        response = await updateSingleMember(
          this.clientID,
          this.i_f_name,
          this.postaddress,
          this.krapinn,
          this.userEmail,
          this.phonenumber,
          this.dob,
          this.idnumber,
          this.userstatus,
          this.physicaladdress
        );
        console.info("updatemember", response);
      } catch (e) {
        this.updatingUser = false;
        console.error("error", e);
        this.$toast.error("Failed! Try again", {
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
      this.updatingUser = false;
      if (response.status === 200) {
        this.$toast.success("User updated", {
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

        this.$router.push("/Members2");
      }
    },
  },
};
</script>
<style></style>
