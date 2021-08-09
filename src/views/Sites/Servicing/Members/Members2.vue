<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <b-row>
        <b-col lg="6">
          <b-dropdown id="dropdown-left" text="Member Portal" variant="info" class="m-2">
            <b-dropdown-item>
              <router-link to="/View_Login_In_Credentials"
                >View View_Login_In_Credentials
              </router-link></b-dropdown-item
            >
          </b-dropdown>
        </b-col>
      </b-row>
      <div>
        <b-row class="float-right pb-4"> </b-row>
        <b-row>
          <b-col lg="12">
            <div v-loading="true" id="loading" v-if="checking">
              <p>Checking Members data</p>
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
          </b-col>
          <b-button
            pill
            variant="outline-secondary"
            v-on:click="
              page = 1;
              retrieveTutorials();
            "
            >Search</b-button
          >
        </b-row>
        <br />
        <b-row>
          <b-col lg="4">
            Items per Page:
            <select class="w-75" v-model="pageSize">
              <option v-for="size in pageSizes" :key="size" :value="size">
                {{ size }}
              </option>
            </select>
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
            <select class="w-75" v-model="selectedLimit" v-on:click="choosenRows()">
              <option v-for="size in limit" :key="size" :value="size">
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
                      <th scope="col">Member Id</th>
                      <th scope="col">Member Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Telephone</th>
                      <th scope="col">Physical Address</th>
                      <th scope="col">Address</th>
                      <th scope="col">Town</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody id="myTable">
                    <tr
                      v-for="i in selectedMembers"
                      :selectedMembers="selectedMembers"
                      :currentpage="currentPage"
                      :key="i.ClientID"
                    >
                      <td>
                        <label class="form-checkbox">
                          <input type="checkbox" :value="i.clientID" v-model="selected" />
                          <i class="form-icon"></i>
                        </label>
                      </td>
                      <td>{{ i.clientID }}</td>
                      <td>{{ i.Name }}</td>
                      <td>{{ i.Email }}</td>
                      <td>{{ i.Mobile }}</td>
                      <td>{{ i.PhysicalAddress }}</td>
                      <td>{{ i.Address }}</td>
                      <td>{{ i.Town }}</td>

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
                                name: 'Edit Member Details',
                                params: {
                                  clientId: {
                                    codes: i.clientID,
                                    m_name: i.Name,
                                    m_email: i.Email,
                                    m_IDNO: i.IDNO,
                                    m_address: i.Address,
                                    m_occupation: i.Occupation,
                                    m_mobile: i.Mobile,
                                  },
                                },
                              }"
                              >Edit</router-link
                            ></b-dropdown-item
                          >
                          <b-dropdown-item>
                            <router-link :to="`/Members/${i.clientID}`"
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
      <!-- <div style="overflow: scroll;"> 
	  <b-row>
	  <b-col xl="6">
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
		<th scope="col">Check Box</th>
	      <th scope="col">Index</th>
	      <th scope="col">Member No.</th >
			 <th scope="col">Member Name</th>
			 <th scope="col">Employer</th>
			 <th scope="col">Telephone</th>
			 <th scope="col">Email</th>
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
	      		<td>John</td>
	      		<td>Octagon</td>
	      		<td>0715267987</td>
	      		<td>John@gmail.com</td>
	      		<td>Dormant</td>
	      		<td>Kenya</td>

  <td>
	<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item > <router-link to="/Members">Open </router-link></b-dropdown-item>
    <b-dropdown-item ><router-link to="/Member_Edits">Edit </router-link></b-dropdown-item>
    <b-dropdown-item >Delete</b-dropdown-item>
	</b-dropdown>
					</td> 
	      	</tr>
			  <tr>
				  
	      		<td><input type="checkbox"  name="scheme_no1" value="323"></td>
	      		<td>1</td>
	      		<td>323</td>
	      		<td>John</td>
	      		<td>Octagon</td>
	      		<td>0715267987</td>
	      		<td>John@gmail.com</td>
	      		<td>Dormant</td>
	      		<td>Kenya</td>
				   <td>
	<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item href="">Open</b-dropdown-item>
    <b-dropdown-item href="">Edit</b-dropdown-item>
    <b-dropdown-item href="#">Delete</b-dropdown-item>
	</b-dropdown>
					</td> 
			  </tr>
			  <tr>
				  <td><input type="checkbox" name="scheme_no3" value="AFRI0043"></td>
	      		<td>3</td>
	      		<td>AFRI0043</td>
	      		<td>The Health Box Limited</td>
	      		<td>Occupational</td>
	      		<td>Provident</td>
	      			      		<td>JAN-DEC 2021</td>
	      		<td>Active</td>
	      		<td>Kenya</td>
				   <td>
	<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item href="">Open</b-dropdown-item>
    <b-dropdown-item href="">Edit</b-dropdown-item>
    <b-dropdown-item href="#">Delete</b-dropdown-item>
	</b-dropdown>
					</td> 
				  </tr>
      </tbody>
	  </table>
	  </b-col>
	  </b-row>
  </div>
  <b-row class="float-right pb-4">
	
		  <b-col xl="6" >
	   
	   <br>
		  </b-col>
	  </b-row>
	 	 
  
    
</div> -->
    </card>
  </base-header>
</template>
<script>
import { getAllins } from "../../../../api/users.api";
import Pagination from "../../../../components/Pagination.vue";
import insuranceErrors from "../../../../service/insuranceErrors";
export default {
  components: { Pagination },
  data() {
    return {
      //pagination
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
    };
  },
  //   computed:{
  //     user_Name:function(){
  //       return this.i_f_name +('.')+ this.i_l_name;
  //     }
  //   },
  methods: {
    retrieveTutorials() {
      this.checking = true;
      //let params = globalConstants.getRequestParams(this.searchTitle, this.selectedLimit);
      let params = insuranceErrors.getRequestParams(this.searchTitle, this.selectedLimit);

      getAllins(params)
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
        this.selected.push(this.todos[i].clientID);
      }
    },
    choosenRows() {
      this.checking = true;
      let params = insuranceErrors.getRequestParams(this.searchTitle, this.selectedLimit);

      getAllins(params)
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
    if (localStorage.getItem("membersItems") !== null) {
      this.todos = JSON.parse(localStorage.getItem("membersItems"));
      this.updatevisibleMembers();
    }
    try {
      this.checking = true;
      let response = await getAllins();
      console.info("ins members", response.data);
      localStorage.setItem("membersItems", JSON.stringify(response.data.data));
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
