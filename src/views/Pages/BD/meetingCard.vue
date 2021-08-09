<template>
  <card>
    <div align-v="center" slot="header">
      <b-col cols="12">
        <h3 class="mb-0">Your Meetings</h3>
      </b-col>
    </div>

    <b-row class="float-right pb-4">
      <b-col>
        <router-link to="/schedule&request-funds">
          <base-button type="success">Schedule Meeting</base-button>
        </router-link>
        <br /><br />
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <div v-loading="true" id="loading" v-if="checking">
          <p>Checking Meetings data</p>
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
    <div style="overflow: scroll">
      <b-row>
        <b-col xl="6">
          <table class="table table-stripped">
            <thead class="thead-light">
              <tr>
                <th scope="col">
                  <label class="form-checkbox">
                    <input type="checkbox" v-model="selectAll" @click="select" />
                  </label>
                </th>
                <th scope="col">Meeting Id</th>
                <th scope="col">Meeting Name</th>
                <th scope="col">Meeting Date</th>
                <th scope="col">Start time</th>
                <th scope="col">End time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody
              id="myTable"
              v-for="i in selectedMembers"
              :selectedMembers="selectedMembers"
              :currentpage="currentPage"
              :key="i.meeting_id"
            >
              <tr>
                <td>
                  <input type="checkbox" :value="i.meeting_id" v-model="selected" />
                </td>
                <td>{{ i.meeting_id }}</td>
                <td>{{ i.meeting_name }}</td>
                <td>{{ i.planned_date.date }}</td>
                <td>{{ i.planned_date.date }}</td>
                <td>{{ i.planned_end.date }}</td>

                <td>
                  <b-dropdown
                    id="dropdown-left"
                    text="Action"
                    variant="primary"
                    class="m-2"
                  >
                    <b-dropdown-item href="#/schedule&request-funds"
                      >Request Funds</b-dropdown-item
                    >
                    <b-dropdown-item href="#">Delete</b-dropdown-item>
                  </b-dropdown>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </div>
    <br />
  </card>
</template>

<script>
import { getAllMeetings } from "../../../api/users.api";
import insuranceErrors from "../../../service/insuranceErrors";
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

      getAllMeetings(params)
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

      getAllMeetings(params)
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
      this.selected = [];
      for (let i in this.todos) {
        this.selected.push(this.todos[i].meeting_id);
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
      let response = "";
      response = await getAllMeetings();
      console.log("All meetings", response.data.data);
      this.todos = response.data.data;
      localStorage.setItem("allMeetings", JSON.stringify(response.data.data));
      this.updatevisibleMembers();
    } catch (e) {
      this.checking = false;
      console.error("meeting error", e);
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
