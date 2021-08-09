<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <div>
        <b-form>
          <b-row>
            <div class="my-auto align-self-center">
              <b-col xl="12">
                <h4>SERVICE PROVIDERS</h4>
              </b-col>
            </div>
          </b-row>
          <br />
          <b-row>
            <div class="alert alert-danger" v-if="errorSearch">
              {{ errorSearch }}
            </div>
            <div></div>
            <div class="mx-auto">
              <b-col xl="12" sm="12">
                <p class="mb-0">
                  <b>Type something in the input field to search the table</b>
                </p>
                <b-form-input
                  type="text"
                  label=""
                  placeholder="Search...."
                  v-model="keyword"
                  @keyup.enter="searchLogic"
                >
                  <br />
                </b-form-input>
              </b-col>
            </div>
          </b-row>
          <br />
          <b-row>
            <b-col lg="12" sm="12" xl="12">
              <div style="overflow: scroll">
                <b-row>
                  <table class="table table-stripped">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">
                          <label class="form-checkbox">
                            <input type="checkbox" v-model="selectAll" @click="select" />
                          </label>
                        </th>
                        <th scope="col">UserId</th>
                        <th scope="col">Provider Name</th>
                        <th scope="col">Provider Type</th>
                        <th scope="col">Provider Country</th>
                        <th scope="col">Provider Adrress</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody id="myTable">
                      <tr v-for="i in items">
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                        <td>
                        <b-button v-b-modal.modal-1 variant="primary">Edit</b-button>
  <b-modal id="modal-1" title="Edit Service Provider Details" size="lg" hide-footer>
    <b-col xl="12" md="10">
          <stats-card title=""
                      type="gradient-green"
                      sub-title=""
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
                
                  <div class="row">
                    <div class="col-md-6">
       <label for="input-default">Service Provider Name</label>
      <b-form-input type="text" placeholder=""  ></b-form-input>
    </div> 
     <div class="col-md-3">
       <label for="input-default">Provider Type</label>
      <select class="form-control">
        <option>Custodian </option>
        <option>Fund Manager</option>
      </select>
    </div> 
     <div class="col-md-3">
       <label for="input-default">Provider Status</label>
      <select class="form-control">
        <option>Active</option>
        <option>Inactive </option>
      </select>
    </div>
   </div>
   <div class="row">
        <div class="col-md-3">
       <label for="input-default">Building</label>
      <b-form-input type="text" placeholder=""  ></b-form-input>
    </div>
      <div class="col-md-3">
       <label for="input-default">Street</label>
      <b-form-input type="text" placeholder=""  ></b-form-input>
    </div>
     <div class="col-md-3">
       <label for="input-default">City</label>
      <b-form-input type="text" placeholder=""  ></b-form-input>
    </div>
     <div class="col-md-3">
       <label for="input-default">Country</label>
      <b-form-input type="text" placeholder=""  ></b-form-input>
    </div>
  
                  </div></div></template></stats-card>
             <b-row>
               <div class="col-md-4">
	<base-button class="mt-3" block @click="$bvModal.hide('modal-1')" type="success">Save</base-button>
               </div>
	  </b-row></b-col>
  </b-modal>
                        </td>
                      </tr>
                    </tbody>
      <div>
   <b-pagination
     v-model="currentPage"
     :total-rows="rows"
     :per-page="perPage"
     first-number
   ></b-pagination>
 </div>
                  </table>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-form>
      </div>
    </card>
  </base-header>
</template>
<script>
import { getAllUsers, searchUser } from "../../../api/users.api";
import BaseInput from "../../../components/Inputs/BaseInput.vue";
import { debounce } from "lodash";
export default {
  components: { BaseInput },
  data() {
    return {
       rows: 100,
         perPage: 1,
         currentPage: 1,
      i_f_name: "", //i stands for internal
      i_l_name: "",
      i_email: "",
      searchUsername: "",
      user: "",
      keyword: "",
      adminLabel: "",
      activeStatus: "",
      otherUserLabel: "",
      triggerLabel: false,
      isHidden: false,
      errorSearch: "",
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
      items: [],
      selected: [],
      selectAll: false,
    };
    
  },
  created() {
    this.debounceName = debounce(this.searchLogic, 1000);
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
    async searchLogic() {
      let response = "";
      this.errorSearch = "";
      try {
        response = await searchUser(this.keyword);
        this.items = response.data.data;
      } catch (e) {
        this.errorSearch = e.response.message;
      }
    },
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.items) {
          this.selected.push(this.items[i].user_id);
        }
      }
    },
  },

  /*async mounted() {
    if (localStorage.getItem("viewUsers") != null) {
      this.items = JSON.parse(localStorage.getItem("viewUsers"));
    }
    try {
      let response = "";
      response = await getAllUsers();
      console.log(response.data);
      this.items = response.data.data;
      localStorage.setItem("viewUsers", JSON.stringify(response.data.data));
    } catch (e) {}
    for (let l in this.items) {
      if (l.user_admin != 0) {
        this.adminLabel = "Other User";
      } else {
        this.adminLabel = "Admin";
      }
    }
    for (let l in this.items) {
      if (l.user_active != 1) {
        this.activeStatus = "Inactive";
      } else {
        this.activeStatus = "Active";
      }
    }
  },*/
  watch: {
    keyword() {
      if (!this.keyword) return;
      this.debounceName;
    },
  },
};
</script>
<style></style>
