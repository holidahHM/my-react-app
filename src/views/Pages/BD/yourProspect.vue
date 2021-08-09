<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <b-col xl="12">
      <b-breadcrumb
        class="breadcrumb-links bg-gradient-success text-white pt-10"
        style="font-size: 15px"
      >
        <b-breadcrumb-item href="#home" class="text-white">Home</b-breadcrumb-item>
        <b-breadcrumb-item href="#library" class="text-white" active
          >Leads</b-breadcrumb-item
        >
      </b-breadcrumb>
    </b-col>
    <card>
      <b-row class="float-right pb-4">
        <b-col xl="6">
          <router-link to="/insurance_BD_form">
            <b-button variant="primary">ADD+</b-button>
            <br />
          </router-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12">
          <div v-loading="true" id="loading" v-if="checking">
            <p>Checking Leads data</p>
          </div>
        </b-col>
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
      <div style="overflow: scroll">
        <b-row>
          <b-col xl="6">
            <table class="table table-stripped">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Check Box</th>
                  <th scope="col">Index</th>
                  <th scope="col">Lead Name</th>
                  <!--<th scope="col">Lead Email</th>
                  <th scope="col">Lead Phone Number</th>-->
                  <th scope="col">Date of Contact</th>
                  <th scope="col">Your Note</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="myTable">
                <tr
                  v-for="i in selectedMembers"
                  :selectedMembers="selectedMembers"
                  :currentpage="currentPage"
                  :key="i.prospect_id"
                >
                  <td>
                    <label class="form-checkbox">
                      <input type="checkbox" :value="i.prospect_id" v-model="selected" />
                      <i class="form-icon"></i>
                    </label>
                  </td>
                  <td>{{ i.prospect_id }}</td>
                  <td>{{ i.prospect_name }}</td>
                  <!--<td>{{ i.email }}</td>
                  <td>{{ i.phone_number }}</td>-->
                  <td>{{ i.date_found.date }}</td>
                  <td>{{ i.note }}</td>

                  <td>
                    <b-dropdown
                      id="dropdown-left"
                      text="Action"
                      variant="primary"
                      class="m-2"
                    >
                      <!--<b-dropdown-item href="#">Edit</b-dropdown-item>-->
                      <b-dropdown-item href="#/add-prospect"
                        ><router-link
                          :to="{
                            name: 'Add Prospect',
                            params: {
                              data: {
                                prospectID: i.prospect_id,
                                prospect_name: i.prospect_name,
                                lead_date_found: i.date_found.date,
                              },
                            },
                          }"
                          >Add as a prospect</router-link
                        ></b-dropdown-item
                      >
                      <b-dropdown-item href="#">Delete</b-dropdown-item>
                    </b-dropdown>
                  </td>
                </tr>
              </tbody>
              <div></div>
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
          </b-col>
        </b-row>
      </div>
    </card>
  </base-header>
</template>

<script>
import { getAllLeads } from "../../../api/users.api";
import Pagination from "../../../components/Pagination.vue";
import insuranceErrors from "../../../service/insuranceErrors";
//import BaseInput from '../../../components/Inputs/BaseInput.vue';
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

      getAllLeads(params)
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

      getAllLeads(params)
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
    if (localStorage.getItem("viewProspects") != null) {
      this.todos = JSON.parse(localStorage.getItem("viewProspects"));
      this.updatevisibleMembers();
    }
    try {
      this.checking = true;
      let response = "";
      response = await getAllLeads();
      console.log(response.data);
      this.todos = response.data.data;
      localStorage.setItem("viewProspects", JSON.stringify(response.data.data));
      this.updatevisibleMembers();
    } catch (e) {
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
