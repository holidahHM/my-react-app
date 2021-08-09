<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <div style="overflow: scroll">
        <b-row>
          <b-col xl="6">
            <table class="table table-stripped">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Check Box</th>
                  <th scope="col">Name</th>
                  <th scope="col">Code</th>
                  <th scope="col">Descriptions</th>
                  <th scope="col">Items</th>
                  <th scope="col">Telephone</th>
                  <th scope="col">Occupation</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="myTable">
                <tr v-for="i in items">
                  <td>
                    <label class="form-checkbox">
                      <input type="checkbox" :value="i.ClientID" v-model="selected" />
                      <i class="form-icon"></i>
                    </label>
                  </td>
                  <td>{{ i.Name }}</td>
                  <td>{{ i.code }}</td>
                  <td>{{ i.Description }}</td>
                  <td>{{ i.Items }}</td>
                  <td>{{ i.Tel }}</td>
                  <td>{{ i.Occupation }}</td>

                  <td>
                    <b-dropdown
                      id="dropdown-left"
                      text="Action"
                      variant="primary"
                      class="m-2"
                    >
                      <b-dropdown-item href="#Member_Edits">Edit</b-dropdown-item>
                      <b-dropdown-item href="#/Members">Open</b-dropdown-item>
                      <b-dropdown-item href="#">Delete</b-dropdown-item>
                    </b-dropdown>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                first-number
              ></b-pagination>
            </div>
          </b-col>
        </b-row>
      </div>
    </card>
  </base-header>
</template>

<script>
import { getAllInsuredItems } from "../../../../api/users.api";

export default {
  components: {},
  data() {
    return {
      rows: 100,
      perPage: 1,
      currentPage: 1,
      items: [],
      selectAll: [],
    };
  },
  //   computed:{
  //     user_Name:function(){
  //       return this.i_f_name +('.')+ this.i_l_name;
  //     }
  //   },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.prospect));
    },
    select() {
      for (let i in this.items) {
        this.selected.push(this.items[i].member_id);
      }
    },
  },

  async mounted() {
    if (localStorage.getItem("viewInsuredItems") != null) {
      this.items = JSON.parse(localStorage.getItem("viewInsuredItems"));
    }
    try {
      let response = "";
      response = await getAllInsuredItems();
      console.log(response.data);
      this.items = response.data.data;
      localStorage.setItem("viewInsuredItems", JSON.stringify(response.data.data));
    } catch (e) {}
  },
};
</script>
