<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <b-row class="float-right pb-4">
        <b-col xl="12">
          <router-link to="/user_rights">
            <b-button variant="primary">Add a User</b-button>
          </router-link>
        </b-col>
      </b-row>
      <div>
        <b-form>
          <b-row>
            <div class="my-auto align-self-center">
              <b-col xl="12">
                <h4>VIEW EXISTING USERS</h4>
              </b-col>
            </div>
          </b-row>
          <br />
          <b-row>
            <b-col lg="6">
              <b-form-input
                type="search"
                label=""
                placeholder="Search here..."
                class="text-left"
                v-model="searchTitle"
                @keyup="
                  page = 1;
                  retrieveTutorials();
                "
              ></b-form-input>
              <div v-loading="true" id="loading" v-if="checking"></div>
            </b-col>
            <b-col lg="4">
              Users per Page:
              <select v-model="pageSize">
                <option v-for="size in pageSizes" :key="size" :value="size">
                  {{ size }}
                </option>
              </select>
            </b-col>
          </b-row>
          <br />
          <b-row>
            <b-col lg="6">
              <pagination
                v-bind:todos="todos"
                v-on:page:update="updatePage"
                v-bind:currentPage="currentPage"
                v-bind:pageSize="pageSize"
              >
              </pagination>
            </b-col>

            <b-col lg="4">
              Select Number of rows:
              <select v-model="selectedLimit" v-on:click="choosenRows()">
                <option v-for="size in limit" :key="size" :value="size">
                  {{ size }}
                </option>
              </select>
            </b-col>
          </b-row>
          <br />
          <b-col xl="12">
            <div style="overflow: scroll">
              <b-row>
                <b-col xl="6">
                  <table class="table table-stripped">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Check Box</th>
                        <th scope="col">User Id</th>
                        <th scope="col">FullNames</th>
                        <th scope="col">Username</th>
                        <th scope="col">OPeration Level</th>
                        <th scope="col">Administration Rights</th>
                        <th scope="col">System Group</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody id="myTable">
                      <tr
                        v-for="i in selectedMembers"
                        :selectedMembers="selectedMembers"
                        :currentpage="currentPage"
                        :key="i.user_id"
                      >
                        <td>
                          <label class="form-checkbox">
                            <input
                              type="checkbox"
                              :value="i.user_id"
                              v-model="selected"
                            />
                            <i class="form-icon"></i>
                          </label>
                        </td>
                        <td>{{ i.user_id }}</td>
                        <td>{{ i.user_full_names }}</td>
                        <td>{{ i.user_username }}</td>
                        <td>{{ i.user_schemes }}</td>
                        <td>{{ i.user_admin }}</td>
                        <td>{{ i.user_group }}</td>
                        <td>{{ i.status }}</td>

                        <b-td>
                          <b-dropdown
                            id="dropdown-left"
                            text="Action"
                            variant="primary"
                            class="m-2"
                          >
                            <b-dropdown-item v-b-modal.modal-1
                              >Edit Details
                            </b-dropdown-item>
                            <b-dropdown-item v-b-modal.modal-2
                              >Reset Password</b-dropdown-item
                            >
                          </b-dropdown>
                        </b-td>
                      </tr>
                    </tbody>
                  </table>
                  <div></div>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-modal
            id="modal-1"
            size="lg"
            title="Edit Existing Member details"
            hide-footer
          >
            <b-col xl="12" md="10">
              <stats-card
                title="BIO-DATA"
                type="gradient-green"
                sub-title=""
                class="mb-4"
              >
                <template slot="footer">
                  <div class="mt-3">
                    <div class="row">
                      <div class="col-md-6">
                        <label for="input-default">Index No</label>
                        <b-form-input
                          type="text"
                          placeholder="..Index no"
                          readonly
                        ></b-form-input>
                      </div>
                      <div class="col-md-6">
                        <label for="input-default">User ID</label>
                        <b-form-input
                          type="text"
                          placeholder="..User ID"
                          readonly
                        ></b-form-input>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-6">
                        <label for="input-default">User's Name</label>
                        <b-form-input
                          type="text"
                          placeholder="..Member's name"
                        ></b-form-input>
                      </div>
                      <div class="col-md-6">
                        <label for="input-default">User's Email</label>
                        <b-form-input
                          type="text"
                          placeholder="..Member's Email"
                        ></b-form-input>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-6">
                        <label for="input-default">National ID No</label>
                        <b-form-input type="text" placeholder="..ID No"></b-form-input>
                      </div>
                      <div class="col-md-6">
                        <label for="input-default">Payroll No:</label>
                        <b-form-input
                          type="text"
                          placeholder="..Payroll No"
                        ></b-form-input>
                      </div>
                    </div>
                  </div>
                </template>
              </stats-card>
              <stats-card
                title="USER-ACCESS RIGHTS"
                type="gradient-green"
                sub-title=""
                class="mb-4"
              >
                <template slot="footer">
                  <div class="mt-3">
                    <div class="row">
                      <div class="col-md-6">
                        <label for="input-default">Country</label>
                        <select class="form-control">
                          <option>Kenya</option>
                          <option>Uganda</option>
                          <option>Zambia</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <label for="input-default">Operation level</label>
                        <select class="form-control">
                          <option>Internal</option>
                          <option>External</option>
                        </select>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-6">
                        <label for="input-default">Administration Rights</label>
                        <select class="form-control">
                          <option>Admin-Sys</option>
                          <option>Admin-Department</option>
                          <option>Approver</option>
                          <option>Supervisior</option>
                          <option>Member</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <label for="input-default">Access Module</label>
                        <select class="form-control">
                          <option>Master-Setup</option>
                          <option>BD</option>
                          <option>Onboarding</option>
                          <option>Servicing</option>
                          <option>CRM</option>
                          <option>E-learning</option>
                          <option>Accounting</option>
                          <option>Governance</option>
                          <option>Insurance</option>
                          <option>Elections</option>
                          <option>Reports</option>
                          <option>Document centre</option>
                          <option>Communication</option>
                          <option>E-board</option>
                          <option>Fund Management</option>
                        </select>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-6">
                        <label for="input-default">System Group</label>
                        <select class="form-control">
                          <option>Member</option>
                          <option>Normal</option>
                          <option>HR</option>
                          <option>Trustee</option>
                          <option>Service Provideer</option>
                          <option>None</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <label for="input-default">Delagate Owner</label>
                        <select class="form-control">
                          <option>Self</option>
                          <option>Test-1</option>
                          <option>Test-2</option>
                        </select>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-xl-12 col-md-6">
                        <label for="input-default">Scheme</label>
                        <div class="row">
                          <div class="col-md-6 col-sm-6">
                            <b-form-input
                              type="text"
                              placeholder="Scheme config"
                            ></b-form-input>
                          </div>
                          <div class="col-md-6 col-sm-6">
                            <b-button v-b-modal.modal-3 variant="primary"
                              >Manage Schemes</b-button
                            >
                          </div>
                        </div>
                        <br />
                      </div>
                      <br />
                      <div class="col-md-6">
                        <label for="input-default">Status</label>
                        <select class="form-control">
                          <option>Active</option>
                          <option>Disabled</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <br />
                </template>
              </stats-card>
              <base-button
                class="mt-3"
                block
                @click="$bvModal.hide('modal-1')"
                type="success"
                >Save</base-button
              >
            </b-col>
          </b-modal>

          <b-modal id="modal-2" size="lg" title="Password Reset" hide-footer>
            <stats-card title="Email" type="gradient-green" sub-title="" class="mb-4">
              <template slot="footer">
                <div class="mt-3">
                  <div class="row">
                    <div class="col-md-12 col-sm-12">
                      <label for="input-default">User's Email Address</label>
                      <b-form-input
                        type="text"
                        placeholder="..Email Address"
                        readonly
                      ></b-form-input>
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-md-4">
                      <b-button variant="primary">Confirm Email Address</b-button>
                      <br />
                    </div>
                    <div class="col-md-4">
                      <b-button variant="primary" v-on:click="isHidden = !isHidden"
                        >Change Email Address
                      </b-button>
                    </div>
                    <br />
                  </div>
                  <div v-if="isHidden" class="row">
                    <div class="col-md-12 col-sm-12">
                      <br />
                      <label for="input-default">New Email Address</label>
                      <b-form-input
                        type="text"
                        placeholder="Enter New Email Address"
                      ></b-form-input>
                      <br />
                    </div>
                    <div class="col-md-12 col-sm-12">
                      <label for="input-default">Confirm Email Address</label>
                      <b-form-input
                        type="text"
                        placeholder="Confirm New Email Address"
                      ></b-form-input>
                      <br />
                    </div>
                    <div class="col-md-4">
                      <b-button variant="primary">Save New Email Address </b-button>
                    </div>
                  </div>
                </div>
                <base-button
                  class="mt-3"
                  block
                  @click="$bvModal.hide('modal-2')"
                  type="success"
                  >Generate Password Reset link</base-button
                >
              </template>
            </stats-card>
          </b-modal>
          <b-modal id="modal-3" size="lg" title="Manage Schemes" hide-footer> </b-modal>
        </b-form>
      </div>
    </card>
  </base-header>
</template>
<script>
import { getAllUsers, getOafslModules } from "../../../api/users.api";
import BaseInput from "../../../components/Inputs/BaseInput.vue";
import Pagination from "../../../components/Pagination.vue";
import insuranceErrors from "../../../service/insuranceErrors";

export default {
  components: { BaseInput, Pagination },
  data() {
    return {
      //usertale data variables
      todos: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
      page: 1,
      currentPage: 0,
      pageSize: 5,
      selectedMembers: [],
      limit: [50, 100, 200],
      selectedLimit: "",
      checking: false,
      pageSizes: [5, 10, 25],
      selectAll: [],
      selected: [],
      // other vars
      user: "",
      keyword: "",
      oafslModules: [],
      adminLabel: "",
      activeStatus: "",
      otherUserLabel: "",
      triggerLabel: false,
      isHidden: false,
      user_zone: "",
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
    };
  },
  computed: {
    user_Name: function () {
      return this.i_f_name + "." + this.i_l_name;
    },
  },
  methods: {
    retrieveTutorials() {
      this.checking = true;
      let params = insuranceErrors.getRequestParams(this.searchTitle, this.selectedLimit);

      getAllUsers(params)
        .then((response) => {
          //const { tutorials, totalItems } = response.data.data;
          this.todos = response.data.data;
          //this.count = response.data.total;
          //this.count = 7;
          this.updatevisibleMembers();
          console.log(response.data);
          this.checking = false;
        })
        .catch((e) => {
          this.checking = false;
          console.log(e);
        });
    },

    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updatevisibleMembers();
    },
    totalPages() {
      return Math.ceil(this.todos.length / this.pageSize);
    },
    updatevisibleMembers() {
      this.selectedMembers = this.todos.slice(
        this.currentPage * this.pageSize,
        this.currentPage * this.pageSize + this.pageSize
      );

      if (this.selectedMembers.length == 0 && this.currentPage > 0) {
        this.updatePage(currentPage - 1);
      }
    },

    select() {
      for (let i in this.todos) {
        this.selected.push(this.todos[i].user_id);
      }
    },
    choosenRows() {
      this.checking = true;
      let params = insuranceErrors.getRequestParams(this.searchTitle, this.selectedLimit);

      getAllUsers(params)
        .then((response) => {
          //const { tutorials, totalItems } = response.data.data;
          this.todos = response.data.data;
          //this.count = response.data.total;
          //this.count = 7;
          this.updatevisibleMembers();
          console.log(response.data);
          this.checking = false;
        })
        .catch((e) => {
          this.checking = false;
          console.log(e);
        });
    },
  },

  async mounted() {
    if (
      localStorage.getItem("viewUsers") != null ||
      localStorage.getItem("zones") !== null
    ) {
      this.todos = JSON.parse(localStorage.getItem("viewUsers"));
      this.oafslModules = JSON.parse(localStorage.getItem("zones"));
      this.updatevisibleMembers();
    }
    try {
      let resp = await getOafslModules();
      this.oafslModules = resp.data.data;
      console.log(resp.data.data);
      localStorage.setItem("zones", JSON.stringify(resp.data.data));
    } catch (e) {
      console.log(e);
    }
    try {
      this.checking = true;
      let response = "";
      response = await getAllUsers();
      console.log("all users fetched", response.data.data);
      this.todos = response.data.data;
      localStorage.setItem("viewUsers", JSON.stringify(response.data.data));
      this.updatevisibleMembers();
    } catch (e) {
      console.error("userError", e);
      this.checking = false;
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
    this.checking = false;
  },
};
</script>
<style></style>
