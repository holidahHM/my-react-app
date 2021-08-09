<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success"
    ><card>
      <b-row>
        <b-col lg="6">
          <b-dropdown
            id="dropdown-left"
            text="Choose Member Status"
            variant="primary"
            class="m-2"
          >
            <b-dropdown-item>HR Uploaded</b-dropdown-item>
            <b-dropdown-item>Accessed</b-dropdown-item>
            <b-dropdown-item>Disabled</b-dropdown-item>
            <b-dropdown-item>Blocked</b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12">
          <b-form-input
            type="text"
            label=""
            placeholder="Search..."
            class="text-left"
          ></b-form-input>
        </b-col>
      </b-row>
      <br />

      <div v-if="isHidden" class="row">
        <div class="col-md-12 col-sm-12">
          <br />
          <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
            <b-dropdown-item
              ><router-link to="#">Online Access Form</router-link></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link to="#">National ID Card</router-link></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link to="#"
                >Accept and Generate Password</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link to="#"
                >Reject and Send Reject Message</router-link
              ></b-dropdown-item
            >
          </b-dropdown>
        </div>
      </div>
      <div id="app" style="overflow: scroll">
        <table class="table table-striped">
          <thead class="thead-light">
            <tr>
              <th>
                <label class="form-checkbox">
                  <input
                    type="checkbox"
                    v-model="selectAll"
                    @click="select"
                    v-on:click="isHidden = !isHidden"
                  />
                  <i class="form-icon"></i>
                </label>
              </th>
              <th>Serial</th>
              <th>Member Number</th>
              <th>Member Name</th>
              <th>Scheme Name</th>
              <th>Scheme Code</th>
              <th>Employer</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Payroll Number</th>
              <th>KRA pin</th>
              <th>Email</th>
              <th>ID Number</th>
              <th>Mobile Number</th>
              <th>Physical Address</th>
              <th>Status</th>
              <th>Action Taken</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in items">
              <td>
                <label class="form-checkbox">
                  <input type="checkbox" :value="i.Member_Name" v-model="selected" />
                  <i class="form-icon"></i>
                </label>
              </td>
              <td>{{ i.Serial }}</td>
              <td>{{ i.Member_Name }}</td>
              <td>{{ i.Member_Number }}</td>
              <td>{{ i.Scheme_Code }}</td>
              <td>{{ i.Scheme_Name }}</td>
              <td>{{ i.Employer }}</td>
              <td>{{ i.Gender }}</td>
              <td>{{ i.Date_of_Birth }}</td>
              <td>{{ i.Payroll_Number }}</td>
              <td>{{ i.KRA_Pin }}</td>
              <td>{{ i.Email }}</td>
              <td>{{ i.ID_Number }}</td>
              <td>{{ i.Mobile_Number }}</td>
              <td>{{ i.Physical_Address }}</td>
              <td>{{ i.Status }}</td>
              <td>{{ i.Action_Taken }}</td>
              <td>
                <b-dropdown
                  id="dropdown-left"
                  text="Action"
                  variant="primary"
                  class="m-2"
                >
                  <b-dropdown-item
                    ><router-link to="/">Online Access Form</router-link></b-dropdown-item
                  >
                  <b-dropdown-item
                    ><router-link to="/">National ID Card</router-link></b-dropdown-item
                  >
                  <b-dropdown-item
                    ><router-link to="/"
                      >Accept and Generate Password</router-link
                    ></b-dropdown-item
                  >
                  <b-dropdown-item
                    ><router-link to="/"
                      >Reject and Send Reject Message</router-link
                    ></b-dropdown-item
                  >
                </b-dropdown>
              </td>
            </tr>
          </tbody>
        </table>
      </div></card
    >
  </base-header>
</template>
<script>
import HR_UploadedVue from "./HR_Uploaded.vue";

export default {
  data: () => ({
    items: [
      {
        Serial: "1",
        Scheme_Name: "Octagon staff retirements Benefit Scheme",
        Member_Name: "Mark Oloo",
        Member_Number: "FJ",
        Scheme_Code: "KE078",
        Employer: "Octagon",
        Gender: "Male",
        Date_of_Birth: "2020-06-18",
        Payroll_Number: "GH/09/47466",
        KRA_Pin: "A01N9848499K",
        Email: "johnotieno@gmail.com",
        ID_Number: "28657908",
        Mobile_Number: "0728750978",
        Physical_Address: "Parklands, Nairobi",
        Status: "Accessed",
        Action_Taken: "Accepted",
      },
      {
        Serial: "2",
        Scheme_Name: "Octagon staff retirements Benefit Scheme",
        Member_Name: "Maxwell Nyongesa",
        Member_Number: "FJ",
        Scheme_Code: "KE078",
        Employer: "Octagon",
        Gender: "Male",
        Date_of_Birth: "2020-06-18",
        Payroll_Number: "GH/09/47466",
        KRA_Pin: "A01N9848499K",
        Email: "johnotieno@gmail.com",
        ID_Number: "28657908",
        Mobile_Number: "0728750978",
        Physical_Address: "Parklands, Nairobi",
        Status: "Blocked",
        Action_Taken: "Pending",
      },
      {
        Serial: "3",
        Scheme_Name: "Octagon staff retirements Benefit Scheme",
        Member_Name: "Ann Mwangi",
        Member_Number: "FJ",
        Scheme_Code: "KE078",
        Employer: "Octagon",
        Gender: "Male",
        Date_of_Birth: "2020-06-18",
        Payroll_Number: "GH/09/47466",
        KRA_Pin: "A01N9848499K",
        Email: "johnotieno@gmail.com",
        ID_Number: "28657908",
        Mobile_Number: "0728750978",
        Physical_Address: "Parklands, Nairobi",
        Status: "Disabled",
        Action_Taken: "Pending",
      },
      {
        Serial: "4",
        Scheme_Name: "Octagon staff retirements Benefit Scheme",
        Member_Name: "Fred Wekesa",
        Member_Number: "FJ",
        Scheme_Code: "KE078",
        Employer: "Octagon",
        Gender: "Male",
        Date_of_Birth: "2020-06-18",
        Payroll_Number: "GH/09/47466",
        KRA_Pin: "A01N9848499K",
        Email: "johnotieno@gmail.com",
        ID_Number: "28657908",
        Mobile_Number: "0728750978",
        Physical_Address: "Parklands, Nairobi",
        Status: "HR_Uploaded",
        Action_Taken: "Pending",
      },
    ],
    selected: [],
    selectAll: false,
  }),
  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.items) {
          this.selected.push(this.items[i].Member_Name);
        }
      }
    },
  },
};
</script>
