<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <b-row>
        <b-col lg="12">
          <div v-loading="true" id="loading" v-if="checking">
            <p>Checking Schemes data</p>
          </div>
        </b-col>
      </b-row>
      <br />
      <div>
        <b-row class="float-right pb-4"> </b-row>
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

          <!--<b-col lg="4" class="my-1">
            <b-form-group
              label="Filter by"
              label-for="sort-by-select"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
              class="mb-0"
            >
              <b-input-group size="sm">
                <b-form-select id="sort-by-select" class="w-75">
                  <template #first>
                    <option value="">Insurance</option>
                    <option value="">Pension</option>
                    <option value="">Trust</option>
                  </template>
                </b-form-select>
                <b-input-group-append>
                  <b-button @click="filter = ''">Clear</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>-->
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
                      <th scope="col">Scheme Code</th>
                      <th scope="col">Scheme Name</th>
                      <th scope="col">Policy Name</th>
                      <th scope="col">Policy NUmber</th>
                      <th scope="col">Propasal Number</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody id="myTable">
                    <tr
                      v-for="i in selectedMembers"
                      :selectedMembers="selectedMembers"
                      :currentpage="currentPage"
                      :key="i.ProposalNo"
                    >
                      <td>
                        <label class="form-checkbox">
                          <input
                            type="checkbox"
                            :value="i.ProposalNo"
                            v-model="selected"
                          />
                          <i class="form-icon"></i>
                        </label>
                      </td>
                      <td>{{ i.ClientID }}</td>
                      <td>{{ i.Name }}</td>
                      <td>{{ i.Products }}</td>
                      <td>{{ i.Policyno }}</td>
                      <td>{{ i.ProposalNo }}</td>
                      <td>{{ i.Status }}</td>

                      <td>
                        <b-dropdown
                          id="dropdown-left"
                          text="Action"
                          variant="primary"
                          class="m-2"
                        >
                          <b-dropdown-item
                            ><router-link
                              :to="{
                                name: 'Scheme Settings insurance',
                                params: { code: i.ClientID, s_name: i.Name },
                              }"
                              >Edit</router-link
                            ></b-dropdown-item
                          >
                          <b-dropdown-item>
                            <router-link
                              :to="{
                                name: 'Scheme Servicing insurance',
                                params: {
                                  code: {
                                    codes: i.ClientID,
                                    s_name: i.Name,
                                    propasal_number: i.ProposalNo,
                                    policy_number: i.Policyno,
                                    s_status: i.Status,
                                    d_from: i.DATE_FROM.date,
                                    d_to: i.DATE_TO.date,
                                    insured_name: i.Insured,
                                    insured_item: i.Items,
                                    item_no: i.ItemNo,
                                    product_class: i.Policy_class,
                                    product_code: i.Product_code,
                                    i_pin: i.PINNO,
                                    occupation: i.Occupation,
                                    insurance_company: i.Insurance_Company,
                                    company_code: i.company_code,
                                    suminsured: i.SumInsured,
                                    basicP: i.BasicPremium,
                                    duePremium: i.DuePremium,
                                    commRate: i.Commission_rate,
                                    wTaxRate: i.WTaxRate,
                                  },
                                },
                              }"
                              >Open</router-link
                            ></b-dropdown-item
                          >
                          <b-dropdown-item href="#">Delete</b-dropdown-item>
                        </b-dropdown>
                      </td>
                    </tr>
                  </tbody>

                  <!-- <tbody id="myTable">
        <tr>
				<td><input type="checkbox"  name="scheme_no1" value="323"></td>
	      		<td>1</td>
	      		<td>John Snow</td>
	      		<td>Johnsnow@gmail.com</td>
	      		<td>+254712345678</td>
	      		<td>18-05-2020</td>
	      		<td>Pension</td>
	      		<td>OPPS</td>
	      		<td>Note</td>

            <td>
              <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
                <b-dropdown-item href="#">Edit</b-dropdown-item>
				<b-dropdown-item href="#/add-lead">Add as a lead</b-dropdown-item>
                <b-dropdown-item href="#">Delete</b-dropdown-item>
              </b-dropdown>
					</td>
        </tr>
      </tbody> -->
                </table>
                <div></div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </div>

      <br />
      <!-- 
  <div style="overflow: scroll;"> 
	  <b-row>
	  <b-col xl="6">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
		<th scope="col">Check Box</th>
	      <th scope="col">Index</th>
	      <th scope="col">Scheme Code</th >
			 <th scope="col">Scheme Name</th>
			 <th scope="col">Administration</th>
			 <th scope="col">Category</th>
			 <th scope="col">Latest Period</th>
			 <th scope="col">Status</th>
			 <th scope="col">Country</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
				<td><input type="checkbox"  name="scheme_no1" value="323"></td>
	      		<td>1</td>
	      		<td>323</td>
	      		<td>MENTOR SACCO STAFF PROVIDENT FUND CLEANUP</td>
	      		<td>Occupational</td>
	      		<td>Pension</td>
	      		<td>DEC 2020</td>
	      		<td>Dormant</td>
	      		<td>Kenya</td>

  <td>
	<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item > <router-link to="/scheme_servicing2">Open </router-link></b-dropdown-item>
    <b-dropdown-item ><router-link to="/Scheme_settings">Edit </router-link></b-dropdown-item>
    <b-dropdown-item >Delete</b-dropdown-item>
	</b-dropdown>
					</td> 
	      	</tr>
			  <tr>
				  <td><input type="checkbox"  name="scheme_no2" value="AFRI0037"></td>
	      		<td>2</td>
	      		<td>AFRI0037</td>
	      		<td>Faqeer Farms Limited</td>
	      		<td>Occupational</td>
	      		<td>Provident</td>
	      		<td>jan2021test</td>
	      		<td>Active</td>
	      		<td>Kenya</td>
				  <td>
	<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item > <router-link to="/scheme_servicing2">Open </router-link></b-dropdown-item>
    <b-dropdown-item ><router-link to="/Scheme_settings">Edit </router-link></b-dropdown-item>
    <b-dropdown-item >Delete</b-dropdown-item>
	</b-dropdown>
					</td>
			  </tr>
			  <tr>
				  <td><input type="checkbox" name="scheme_no3" value="AFRI0043"></td>
	      		<td>3</td>
	      		<td>AFRI0043</td>
	      		<td>The Health Box Limited</td>
	      		<td>Occupational</td>
	      		<td>Insurance</td>
	      		<td>JAN-DEC 2021</td>
	      		<td>Active</td>
	      		<td>Kenya</td>
				   <td>
	<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item><router-link to="/Ins_settings">Edit</router-link></b-dropdown-item>
	<b-dropdown-item><router-link to="/Insurance_Servicing">Open</router-link></b-dropdown-item>
    <b-dropdown-item href="#">Delete</b-dropdown-item>
	</b-dropdown>
					</td> 
				  </tr>
				   <tr>
				  <td><input type="checkbox"  name="scheme_no3" value="K0037"></td>
	      		<td>4</td>
	      		<td>K0037</td>
	      		<td>MT KENYA UNIVERSITY STAFF PROVIDENT FUND</td>
	      		<td>Umbrella</td>
	      		<td>Trust</td>
	      		<td>Jan-Dec 2021</td>
	      		<td>Active</td>
	      		<td>Kenya</td>
				   <td>
	<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item><router-link to="/Trusts">Open</router-link></b-dropdown-item>
    <b-dropdown-item ><router-link to="/Trust_Setup">Edit</router-link></b-dropdown-item>
    <b-dropdown-item>Delete</b-dropdown-item>
	</b-dropdown>
					</td> 
			  </tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
  </div> -->
    </card>
  </base-header>
</template>

<script>
import { getAllInsurancePolicies } from "../../../../api/users.api";
import Pagination from "../../../../components/Pagination.vue";
import insuranceErrors from "../../../../service/insuranceErrors";
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

      getAllInsurancePolicies(params)
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

      getAllInsurancePolicies(params)
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
        this.selected.push(this.todos[i].ProposalNo);
      }
    },
  },
  async mounted() {
    if (localStorage.getItem("insuranceItems") !== null) {
      this.todos = JSON.parse(localStorage.getItem("insuranceItems"));
      this.updatevisibleMembers();
    }
    try {
      this.checking = true;
      let response = await getAllInsurancePolicies();
      console.info("ins schemes", response.data);
      localStorage.setItem("insuranceItems", JSON.stringify(response.data.data));
      this.todos = response.data.data;
      //this.count = response.data.total;
      //this.count = 7;
      this.updatevisibleMembers();
    } catch (e) {
      this.checking = false;
      console.error("ins error", e);
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
