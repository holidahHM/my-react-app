<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <div>
        <b-tabs pills>
          <b-tab active>
            <template v-slot:title> Prospect </template>
            <br />
            <br />
            <b-row class="float-right pb-4">
              <b-col xl="6">
                <router-link to="/add-prospect">
                  <b-button variant="primary">ADD+</b-button>
                  <br />
                </router-link>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="12">
                <div v-loading="true" id="loading" v-if="checking">
                  <p>Checking Prospects data</p>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="6">
                <b-form-input
                  type="search"
                  label=""
                  placeholder="Search here..."
                  class="text-left"
                  v-model="searchTitle"
                ></b-form-input>
                <br />
                <b-button
                  pill
                  variant="outline-secondary"
                  v-on:click="
                    page = 1;
                    retrieveTutorials();
                  "
                  >Search</b-button
                >
              </b-col>
              <b-col lg="4">
                Items per Page:
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

            <div style="overflow: scroll">
              <b-row>
                <b-col xl="6">
                  <table class="table table-stripped">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Check Box</th>
                        <th scope="col">Index</th>
                        <th scope="col">Type</th>
                        <th scope="col">Prospect Name</th>
                        <th scope="col">Contact Email</th>
                        <th scope="col">Contact Name</th>
                        <th scope="col">Contact Phone Number</th>
                        <th scope="col">Date of Contact</th>
                        <th scope="col">Business</th>
                        <th scope="col">Product/service</th>
                        <th scope="col">Your Note</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody
                      id="myTable"
                      v-for="i in selectedMembers"
                      :selectedMembers="selectedMembers"
                      :currentpage="currentPage"
                      :key="i.prospect_id"
                    >
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            :value="i.prospect_id"
                            v-model="selected"
                          />
                        </td>
                        <td>1</td>
                        <td>Retail</td>
                        <td>John</td>
                        <td>John@email.com</td>
                        <td>{{ i.lead_name }}</td>
                        <td>0712345678</td>
                        <td>18-05-2020</td>
                        <td>Insurance</td>
                        <td>Motor</td>
                        <td>Note</td>

                        <td>
                          <b-dropdown
                            id="dropdown-left"
                            text="Action"
                            variant="primary"
                            class="m-2"
                          >
                            <b-dropdown-item
                              ><router-link to="/Ins_Policy_register/:code"
                                >Open</router-link
                              ></b-dropdown-item
                            >
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
          </b-tab>
          <b-tab>
            <template v-slot:title> Won Prospects </template>
            <br /><br />
            <b-row class="float-right pb-4"> </b-row>
            <b-row>
              <b-col lg="12">
                <p class="mb-0">
                  <b>Type something in the input field to search the table</b>
                </p>
              </b-col>
            </b-row>
            <br />
            <b-row>
              <b-col lg="6">
                <b-form-input
                  type="text"
                  label=""
                  placeholder="Search..."
                  class="text-left"
                ></b-form-input>
              </b-col>
            </b-row>
            <br />

            <div style="overflow: scroll">
              <b-row>
                <b-col xl="6">
                  <table class="table table-stripped">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Check Box</th>
                        <th scope="col">Index</th>
                        <th scope="col">Prospect Name</th>
                        <th scope="col">Value</th>
                        <th scope="col">% Commission</th>
                        <th scope="col">Commission</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody id="myTable">
                      <tr>
                        <td><input type="checkbox" name="scheme_no1" value="323" /></td>
                        <td>1</td>
                        <td>John Snow</td>
                        <td>45000</td>
                        <td>5</td>
                        <td>2250</td>
                        <td>Claimed</td>

                  <td>
                    <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
                      <b-dropdown-item><router-link to='/Prospect_Edits'>Edit</router-link></b-dropdown-item>
                      <b-dropdown-item><router-link to='/Ins_Policy_register/:code'>Open</router-link></b-dropdown-item>
                      <b-dropdown-item href="#">Delete</b-dropdown-item>
                    </b-dropdown>
                </td>
              </tr>
              <tr>
                  <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                  <td>2</td>
                  <td>Corporate</td>
                  <td>LiquidTelkom</td>
                  <td>telkom@email.com</td>
                  <td>Kevin Mulama</td>
                  <td>0712345678</td>
                  <td>18-05-2020</td>
                  <td>Pension</td>
                  <td>OPPS</td>
                  <td>Note</td>

                        <td>
                          <b-button variant="primary">Claim Commission</b-button>
                        </td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" name="scheme_no1" value="323" /></td>
                        <td>3</td>
                        <td>John Snow</td>
                        <td>45000</td>
                        <td>5</td>
                        <td>2250</td>
                        <td>Unclaimed</td>

                        <td>
                          <b-button variant="primary">Claim Commission</b-button>
                        </td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" name="scheme_no1" value="323" /></td>
                        <td>4</td>
                        <td>John Snow</td>
                        <td>45000</td>
                        <td>5</td>
                        <td>2250</td>
                        <td>Rejected</td>

                        <td>
                          <b-button variant="primary">Claim Commission</b-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </b-col>
              </b-row>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </card>
  </base-header>
</template>

<script>
import { getALLProspects } from "../../../api/users.api";
import Pagination from "../../../components/Pagination.vue";
export default {
  components: { Pagination },
  data() {
    return {
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

      //other data types
      selectAll: [],
      selected: [],
      selectedData: [],
    };
  },
  methods: {
    retrieveTutorials() {
      this.checking = true;
      let params = insuranceErrors.getRequestParams(this.searchTitle, this.selectedLimit);

      getALLProspects(params)
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
    choosenRows() {
      this.checking = true;
      let params = insuranceErrors.getRequestParams(this.searchTitle, this.selectedLimit);

      getALLProspects(params)
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

    select() {
      for (let i in this.todos) {
        this.selected.push(this.todos[i].prospect_id);
      }
    },
  },
  async mounted() {
    if (localStorage.getItem("prospects") !== null) {
      this.todos = JSON.parse(localStorage.getItem("prospects"));
      this.updatevisibleMembers();
    }
    try {
      this.checking = true;
      let response = await getALLProspects();
      console.info("prospects", response.data);
      localStorage.setItem("prospects", JSON.stringify(response.data.data));
      this.todos = response.data.data;
      //this.count = response.data.total;
      //this.count = 7;
      this.updatevisibleMembers();
    } catch (e) {
      this.checking = false;
      console.error("prospects error", e);
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
