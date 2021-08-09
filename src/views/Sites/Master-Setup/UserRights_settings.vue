<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <b-row class="float-right pb-4">
        <b-col xl="12">
          <router-link to="/view_members">
            <b-button variant="primary">Back</b-button>
          </router-link>
        </b-col>
      </b-row>
      <div>
        <b-tabs pills>
          <!--Internal Member Nav Pill -->
          <b-tab active>
            <template v-slot:title> Internal User </template>
            <br />
            <b-form @submit.prevent="updateProfile">
              <h3 class="mb-4">Add / Edit Internal User details</h3>
              <!--Div for the whole internal member section -->
              <div class="pl-lg-4">
                <!--1st row -->
                <b-row>
                  <br />
                  <b-col lg="6" sm="12">
                    <base-input
                      type="text"
                      label="First Name"
                      placeholder="Enter your First Name"
                      v-model="i_f_name"
                    >
                    </base-input>
                    <span>Choice: {{ i_f_name }}</span>
                  </b-col>
                  <b-col lg="6" sm="12">
                    <base-input
                      type="text"
                      label="Last Name"
                      placeholder="Enter your Last Name"
                      v-model="i_l_name"
                    >
                    </base-input>
                    <span>Choice: {{ i_l_name }}</span>
                  </b-col>
                  <span>Choice: {{ user_fullNames }}</span>
                </b-row>
                <!--2nd row -->
                <b-row>
                  <b-col lg="6" sm="12">
                    <base-input
                      type="email"
                      label="User Email"
                      placeholder="Enter your Email Address"
                      v-model="i_email"
                    >
                    </base-input>
                    <span>Choice: {{ i_email }}</span>
                  </b-col>
                  <b-col lg="6" sm="12">
                    <base-input
                      type="text"
                      label="User Name"
                      placeholder="Your User Name will appear here"
                      v-model="user_Name"
                    >
                    </base-input>
                    <span>Choice: {{ user_Name }}</span>
                  </b-col>
                </b-row>
                <!--3rd row -->
                <b-row>
                  <b-col lg="6" sm="12" xl="6">
                    <h4>Select Business Division(s)</h4>
                    <b-row>
                      <b-col lg="3" sm="3">
                        <label class="form-checkbox" for="pension">
                          <input
                            type="checkbox"
                            id="pension"
                            v-model="pensionChecked"
                            true-value="1"
                            false-value="0"
                          />
                          Pension
                        </label>
                      </b-col>
                      <b-col lg="3" sm="3">
                        <label class="form-checkbox" for="insurance">
                          <input
                            type="checkbox"
                            id="insurance"
                            v-model="insuranceChecked"
                            true-value="1"
                            false-value="0"
                          />
                          Insurance
                        </label>
                      </b-col>
                      <b-col lg="3" sm="3">
                        <label class="form-checkbox" for="trust">
                          <input
                            type="checkbox"
                            id="trust"
                            v-model="trustChecked"
                            true-value="1"
                            false-value="0"
                          />
                          Trust
                        </label>
                      </b-col>
                      <b-col lg="3" sm="3">
                        <label class="form-checkbox" for="acturial">
                          <input
                            type="checkbox"
                            id="acturial"
                            v-model="acturialChecked"
                            true-value="1"
                            false-value="0"
                          />
                          Acturial
                        </label>
                      </b-col>
                      <b-col lg="3" sm="3">
                        <label class="form-checkbox" for="training">
                          <input
                            type="checkbox"
                            id="training"
                            v-model="trainingChecked"
                            true-value="1"
                            false-value="0"
                          />
                          Training
                        </label>
                      </b-col>
                      <b-col lg="3" sm="3">
                        <label class="form-checkbox" for="training">
                          <input
                            type="checkbox"
                            id="active"
                            v-model="user_activeChecked"
                            true-value="1"
                            false-value="0"
                          />
                          User Active
                        </label>
                      </b-col>
                    </b-row>
                  </b-col>
                  <!--The Roles should be linked to Selected Business Development Division(s)selected-->
                  <b-col lg="6" sm="12">
                    <base-input label="Role">
                      <select class="form-control" v-model="user_roles">
                        <option>Business Development Officer</option>
                        <option>Business Development Executive Officer</option>
                        <option>Pension Administrator</option>
                        <option>Accountant</option>
                        <option>Fund Accountant</option>
                        <option>CRM</option>
                        <option>Senior Administrator</option>
                        <option>Head of Scheme & Administration</option>
                        <option>HR</option>
                        <option>Senior Pension Administrator</option>
                        <option>E-learning Administrator</option>
                        <option>Content Creator</option>
                        <option>Sys Admin</option>
                      </select>
                      <span>Choice: {{ user_roles }}</span>
                    </base-input>
                  </b-col>
                  <br />
                </b-row>
                <b-row>
                  <b-col lg="6" sm="12" xl="6">
                    <h4>Select Role Right(s)</h4>
                    <b-row>
                      <b-col lg="3" sm="3">
                        <label class="form-checkbox" for="admin">
                          <input
                            type="checkbox"
                            id="admin"
                            v-model="adminPicked"
                            true-value="1"
                            false-value="0"
                          />
                          Admin
                        </label>
                      </b-col>
                      <b-col lg="4" sm="3">
                        <label class="form-checkbox" for="approver">
                          <input
                            type="checkbox"
                            id="approver"
                            v-model="approverPicked"
                            true-value="1"
                            false-value="0"
                          />
                          Approver
                        </label>
                      </b-col>
                      <b-col lg="4" sm="3">
                        <label class="form-checkbox" for="supervisor">
                          <input
                            type="checkbox"
                            id="supervisor"
                            v-model="supervisorPicked"
                            true-value="1"
                            false-value="0"
                          />
                          Supervisor
                        </label>
                      </b-col>
                      <b-col lg="3" sm="3">
                        <label class="form-checkbox" for="member">
                          <input
                            type="checkbox"
                            id="member"
                            v-model="memberPicked"
                            true-value="1"
                            false-value="0"
                          />
                          Member
                        </label>
                      </b-col>
                    </b-row>
                  </b-col>
                  <!--Access Zones -->
                  <b-col lg="6" xl="6" sm="12">
                    <base-input label="Zone">
                      <p>Select your Zones</p>
                      <!-- <select v-model="selected">
                          <option disabled value="">Zone</option>
                          <option
                            :value="count.module_code"
                            v-for="count in oafslModules"
                            v-bind:key="count.module_code"
                          >
                            {{ count.name }}
                          </option>
                        </select> -->
                      <select
                        multiple="true"
                        v-bind:class="{ 'fix-height': multiple === 'true' }"
                        v-model="multipleSelections"
                      >
                        <option
                          :value="count.module_code"
                          v-for="count in oafslModules"
                          v-bind:key="count.module_code"
                        >
                          {{ count.name }}
                        </option>
                      </select>
                      <!--{{ multipleSelections }}-->
                      <!-- <select v-model="user_zone" class="form-control">
              
                <option>Master Setup</option>
                <option>BD</option>
                <option>Onboarding</option>
                <option>CRM</option>
                <option>Servicing</option>
                 
                <option>Accounting</option>
                <option>Governance</option>
                <option>Insurance</option>
                <option>Election</option>
                <option>Reports</option>
                <option>Document centre</option>
                <option>E-learning</option>
                <option>Communication</option>
                <option>E-board</option>
                <option>Fund management</option>
            </select> -->
                      <!-- <span>Choice: {{ multipleSelections }}</span> -->
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input label="Access to">
                      <select v-model="user_accessto" class="form-control">
                        <option v-if="multipleSelections === 'MSTP01'">
                          Master-setup - Product Setting
                        </option>
                        <option v-if="multipleSelections === 'MSTP01'">
                          Master-setup - Module setting
                        </option>
                        <option v-if="multipleSelections === 'MSTP01'">
                          Master-setup - User rights
                        </option>
                        <option v-if="multipleSelections === 'MSTP01'">
                          Master-setup - (All Access)
                        </option>
                        <option v-if="multipleSelections === 'BD'">
                          BD - Targets and Incentives
                        </option>
                        <option v-if="multipleSelections === 'BD'">BD - Prospects</option>
                        <option v-if="multipleSelections === 'BD'">
                          BD - Business Lead
                        </option>
                        <option v-if="multipleSelections === 'BD'">BD - Meetings</option>
                        <option v-if="multipleSelections === 'BD'">
                          BD - Expense Approvals
                        </option>
                        <option v-if="multipleSelections === 'BD'">
                          BD - Onboarding
                        </option>
                        <option v-if="multipleSelections === 'BD'">
                          BD - Executive Dashboard
                        </option>
                        <option v-if="multipleSelections === 'BD'">
                          BD - Executive Targets and Incentives
                        </option>
                        <option v-if="multipleSelections === 'BD'">
                          BD - Executive Reports
                        </option>
                        <option v-if="multipleSelections === 'BD'">
                          BD - Supervisor Dashboard
                        </option>
                        <option v-if="multipleSelections === 'BD'">
                          BD - Supervisor Expense Approval
                        </option>
                        <option v-if="multipleSelections === 'BD'">
                          BD - Supervisor Reports
                        </option>
                        <option v-if="multipleSelections === 'BD'">
                          BD - (All Access)
                        </option>
                        <option v-if="multipleSelections === 'Onboarding'">
                          Onboarding - Retail
                        </option>
                        <option v-if="multipleSelections === 'Onboarding'">
                          Onboarding - Corporate
                        </option>
                        <option v-if="multipleSelections === 'Onboarding'">
                          Onboarding - (All Access)
                        </option>
                        <option v-if="multipleSelections === 'Servicing'">
                          Servicing - Schemes
                        </option>
                        <option v-if="multipleSelections === 'Servicing'">
                          Servicing - Member Servicing
                        </option>
                        <option v-if="multipleSelections === 'Servicing'">
                          Servicing - Contributions
                        </option>
                        <option v-if="multipleSelections === 'Servicing'">
                          Servicing - Claims
                        </option>
                        <option v-if="multipleSelections === 'Servicing'">
                          Servicing - Benefits
                        </option>
                        <option v-if="multipleSelections === 'Servicing'">
                          Servicing - (All Access)
                        </option>
                      </select>
                      <span>Choice: {{ user_accessto }}</span>
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input label="User Type">
                      <select class="form-control" v-model="user_type">
                        <option>Internal</option>
                      </select>
                      <span>Choice: {{ user_type }}</span>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="12" sm="12" xl="12">
                    <h4>Select Scheme</h4>
                    <div style="overflow: scroll">
                      <b-row>
                        <b-col xl="12" lg="12" sm="12">
                          <span>Choice: {{ selected }}</span>
                          <table class="table table-stripped">
                            <thead class="thead-light">
                              <tr>
                                <th scope="col">
                                  <label class="form-checkbox">
                                    <input
                                      type="checkbox"
                                      v-model="selectAll"
                                      @click="select"
                                    />
                                  </label>
                                </th>
                                <th scope="col">Scheme Id</th>
                                <th scope="col">Scheme Code</th>
                                <th scope="col">Scheme Name</th>
                                <th scope="col">Country</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody id="myTable">
                              <tr v-for="i in items">
                                <td>
                                  <label class="form-checkbox" for="schemes">
                                    <input
                                      type="checkbox"
                                      id="schemes"
                                      :value="i.scheme_code"
                                      v-model="selected"
                                    />
                                    <i class="form-icon"></i>
                                  </label>
                                </td>
                                <td>{{ i.scheme_id }}</td>
                                <td>{{ i.scheme_code }}</td>
                                <td>{{ i.scheme_name }}</td>
                                <td>{{ i.scheme_country }}</td>

                                <td>
                                  <b-dropdown
                                    id="dropdown-left"
                                    text="Action"
                                    variant="primary"
                                    class="m-2"
                                  >
                                    <b-dropdown-item href="#">Open</b-dropdown-item>
                                    <b-dropdown-item href="#">Edit</b-dropdown-item>
                                    <b-dropdown-item href="#">Delete</b-dropdown-item>
                                  </b-dropdown>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </b-col>
                      </b-row>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <br />
              <br />
              <b-row class="d-flex justify-content-center mb-3">
                <base-button type="info" @click.prevent="addinternalUser"
                  >Save</base-button
                >

                <base-button type="danger">Delete</base-button>
              </b-row>
              <hr class="my-4" />

              <div class="alert alert-danger" v-if="error">
                {{ error }}
              </div>
              <div class="alert alert-success" v-if="successData">
                {{ successData }}
              </div>
            </b-form>
          </b-tab>
          <!--External Members Pill -->
          <b-tab>
            <template v-slot:title> External User </template>
            <br />
            <b-form @submit.prevent="updateProfile"> </b-form>
            <h3 class="mb-0">Add /Edit External User details</h3>
            <br />
            <div class="pl-lg-4">
              <b-row>
                <b-col lg="6">
                  <base-input
                    type="text"
                    label="First name"
                    placeholder="Enter your First Name"
                    v-model="user_f_name"
                  >
                  </base-input>
                </b-col>
                <b-col lg="6">
                  <base-input
                    type="text"
                    label="Last name"
                    placeholder="Enter your Last Name"
                    v-model="user_l_name"
                  >
                  </base-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="6">
                  <base-input label="Choose Division">
                    <select class="form-control" v-model="user_division">
                      <option>Pension</option>
                      <option>Insurance</option>
                      <option>Trust</option>
                      <option>Training</option>
                      <option>Acturial Services</option>
                    </select>
                    <span>Choice: {{ user_division }}</span>
                  </base-input>
                </b-col>
                <b-col lg="6">
                  <base-input
                    type="email"
                    label="User Email"
                    placeholder="Enter your Email Address"
                    v-model="user_email"
                  >
                  </base-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="6">
                  <base-input label="Role">
                    <select class="form-control" v-model="user_division_role">
                      <option
                        :value="role.role_id"
                        v-for="role in e_roles"
                        v-bind:key="role.role_id"
                      >
                        {{ role.role_name }}
                      </option>
                    </select>
                  </base-input>
                </b-col>
                <b-col lg="6">
                  <base-input label="Sub Role">
                    <select class="form-control" v-model="user_division_rights">
                      <option>Admin</option>
                      <option>Approver</option>
                      <option>Supervisor</option>
                      <option>Sys Admin</option>
                    </select>
                  </base-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="6">
                  <base-input label="Zone"
                    ><select
                      multiple="true"
                      v-bind:class="{ 'fix-height': multiple === 'true' }"
                      v-model="multipleSelections"
                    >
                      <option
                        :value="count.module_code"
                        v-for="count in oafslModules"
                        v-bind:key="count.module_code"
                      >
                        {{ count.name }}
                      </option>
                    </select>
                    {{ multipleSelections }}
                    <!-- <select class="form-control" v-model="user_division_zone">
                <option>Onboarding </option>
                <option>Accounting</option>
                <option>Servicing</option>
                <option>Governance</option>
                <option>Insurance</option>
                 <option>Election</option>
                  <option>BD</option>
                   <option>Governance</option>
                    <option>E-learning</option>
                     <option>Fund Management</option>
            </select> -->
                  </base-input>
                </b-col>
                <b-col lg="6">
                  <base-input label="Access to">
                    <select class="form-control" v-model="user_division_accessto">
                      <option>Onboarding</option>
                      <option>CRM</option>
                      <option>BD</option>
                      <option>Accounting</option>
                      <option>Servicing</option>
                      <option>Governance</option>
                      <option>Insurance</option>
                      <option>Election</option>
                      <option>BD</option>
                      <option>Onboarding</option>
                      <option>E-learning</option>
                    </select>
                  </base-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="6">
                  <base-input label="User Type">
                    <select class="form-control" v-model="user_type_div">
                      <option>External</option>
                    </select>
                    <span>Choice: {{ user_type_div }}</span>
                  </base-input>
                </b-col>
              </b-row>
            </div>
            <br />
            <br />
            <b-row class="d-flex justify-content-center mb-3">
              <base-button type="info" @click.prevent="addExternalUser">Save</base-button>

              <base-button type="danger">Delete</base-button>
            </b-row>
            <hr class="my-4" />
            <div class="alert alert-danger" v-if="errorExternal">
              {{ errorExternal }}
            </div>
            <div class="alert alert-success" v-if="successDataExternal">
              {{ successDataExternal }}
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </card>
  </base-header>
</template>
<script>
import {
  getAllSchemes,
  getExternalRoles,
  saveExternalUser,
  saveInternalUser,
  getOafslModules,
} from "../../../api/users.api";
import BaseInput from "../../../components/Inputs/BaseInput.vue";
import insuranceErrors from "../../../service/insuranceErrors";
import Multiselect from "vue-multiselect";
export default {
  components: { BaseInput, Multiselect },
  data() {
    return {
      i_f_name: "", //i stands for internal
      i_l_name: "",
      i_email: "",
      user: "",
      user_f_name: "",
      user_l_name: "",
      value: [],
      oafslModules:[],
      user_email: '',
      adminPicked: '',
      approverPicked: '',
      supervisorPicked: '',
      memberPicked: '',
      pensionChecked: '',
      insuranceChecked: '',
      trustChecked: '',
      multipleSelections:[],
      oafslModules: [],
      user_email: "",
      adminPicked: "",
      approverPicked: "",
      supervisorPicked: "",
      memberPicked: "",
      pensionChecked: "",
      insuranceChecked: "",
      trustChecked: "",
      multipleSelections: [],
      data: null,
      multiple: "true",
      error: "",
      errorExternal: "",
      successDataExternal: "",
      user_type: "",
      successData: "",
      acturialChecked: "",
      trainingChecked: "",
      user_activeChecked: "",
      user_zone: "",
      user_roles: "",
      user_accessto: "",
      b_division: ["Default"], // Array reference
      lists: [
        { value: "Default", text: "You haven't choosen any value", disabled: true },
        { value: "Pension", text: "Pension" },
        { value: "Insurance", text: "Insurance" },
        { value: "Trust", text: "Trust" },
        { value: "Acturial", text: "Acturial" },
        { value: "Training", text: "Training" },
      ],
      items: [],
      selected: [],
      selectAll: false,
      e_roles: [],
    };
  },
  computed: {
    user_Name: function () {
      return this.i_f_name + "." + this.i_l_name;
    },
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.items) {
          this.selected.push(this.items[i].scheme_code);
        }
      }
    },
    updateSelected(newSelected) {
      this.selected = newSelected;
    },
    async addinternalUser() {
      let response = "";
      this.error = "";
      this.successData = "";
      try {
        this.$loading.show({ delay: 0 });
        response = await saveInternalUser(
          this.user_Name,
          this.i_email,
          this.i_f_name,
          this.i_l_name,
          this.user_roles,
          this.user_type,
          this.multipleSelections,
          this.selected,
          this.pensionChecked,
          this.insuranceChecked,
          this.trustChecked,
          this.acturialChecked,
          this.trainingChecked,
          this.adminPicked,
          this.approverPicked,
          this.supervisorPicked,
          this.memberPicked,
          this.user_activeChecked
        );
        console.log(response);
      } catch (e) {
        this.$loading.hide();
        let resp = "";
        resp = insuranceErrors.getErrorInternalUser(e.response.status);
        this.error = resp;
        throw resp;
      }
      this.$loading.hide();
      if (response.status === 200) {
        //alert('data saved successfully');
        this.successData = "user saved successfully";
      }
    },
    async addExternalUser() {
      this.errorExternal = "";
      this.successDataExternal = "";
      let response = "";
      try {
        this.$loading.show({ delay: 0 });
        response = await saveExternalUser();
        console.log(response);
      } catch (e) {
        this.$loading.hide();
        let resp = "";
        resp = insuranceErrors.getErrorExternalUser(e.response.status);
        this.errorExternal = resp;
        throw resp;
      }
      this.$loading.hide();
      if (response.status === 200) {
        //alert('data saved successfully');
        this.successDataExternal = "user saved successfully";
      }
    },
  },
  async mounted() {
    if (
      localStorage.getItem("allSchemes") ||
      localStorage.getItem("externalRoles") ||
      localStorage.getItem("zones") !== null
    ) {
      this.items = JSON.parse(localStorage.getItem("allSchemes"));
      this.e_roles = JSON.parse(localStorage.getItem("externalRoles"));
      this.oafslModules = JSON.parse(localStorage.getItem("zones"));
    }
    try {
      let response = await getAllSchemes();
      this.items = response.data.data;
      console.log(response.data);
      localStorage.setItem("allSchemes", JSON.stringify(response.data.data));
    } catch (e) {}
    try {
      let resp = await getOafslModules();
      this.oafslModules = resp.data.data;
      console.log(resp.data.data);
      localStorage.setItem("zones", JSON.stringify(resp.data.data));
    } catch (e) {
      console.log(e);
    }
    try {
      let response = await getExternalRoles();
      this.e_roles = response.data.data;
      console.log(response.data);
      localStorage.setItem("externalRoles", JSON.stringify(response.data.data));
    } catch (e) {}
  },
  created() {
    console.log("selections: ", this.multipleSelections);
  },
};
</script>
<style></style>
