<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <b-tabs pills>
        <b-tab active>
          <template v-slot:title> Active Policies </template>
          <br />
          <div class="d-flex justify-content-center mb-3"></div>
          <b-row>
            <b-col lg="12">
              <p class="mb-0">
                <b>Type something in the input field to search the table</b>
              </p>
            </b-col>
          </b-row>
          <br />
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
          <b-row>
            <b-col xl="12" md="10">
              <stats-card title="" type="gradient-green" sub-title="" class="mb-4">
                <template slot="footer">
                  <div class="mt-3">
                    <b-row>
                      <b-col xl="12">
                        <div style="overflow: scroll">
                          <b-row>
                            <b-col xl="6">
                              <table class="table table-stripped">
                                <thead class="thead-light">
                                  <tr>
                                    <th scope="col">Check Box</th>
                                    <th scope="col">Member Id</th>
                                    <th scope="col">Member Code</th>
                                    <th scope="col">Member Name</th>
                                    <th scope="col">KRA Pin</th>
                                    <th scope="col">Telephone</th>
                                    <th scope="col">ID Number</th>
                                    <th scope="col">Policy Class/Product</th>
                                    <th scope="col">Policy Start</th>
                                    <th scope="col">Policy End</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody id="myTable">
                                  <tr v-for="i in items">
                                    <td>
                                      <label class="form-checkbox">
                                        <input
                                          type="checkbox"
                                          :value="i.ClientID"
                                          v-model="selected"
                                        />
                                        <i class="form-icon"></i>
                                      </label>
                                    </td>
                                    <td>{{ i.ClientID }}</td>
                                    <td>{{ i.member_code }}</td>
                                    <td>{{ i.member_name }}</td>
                                    <td>{{ i.m_kra_pin }}</td>
                                    <td>{{ i.m_telephone_numberr }}</td>
                                    <td>{{ i.m_national_id_num }}</td>
                                    <td>{{ i.m_policy_id }}</td>
                                    <td>{{ i.m_date_of_first_policy.date }}</td>
                                    <td>{{ i.m_waiting_period_end.date }}</td>

                                    <td>
                                      <b-dropdown
                                        id="dropdown-left"
                                        text="Action"
                                        variant="primary"
                                        class="m-2"
                                      >
                                        <b-dropdown-item
                                          ><router-link to="/Ins_Policy_Trans"
                                            >View Details
                                          </router-link></b-dropdown-item
                                        >
                                        <b-dropdown-item>Delete</b-dropdown-item>
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
                            </b-col>
                          </b-row>
                        </div>
                        <!-- <table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	        <th scope="col">#</th>
			 <th scope="col">Member Code</th>
			 <th scope="col">Member Name</th>
			 <th scope="col">Insurance Company</th>
			 <th scope="col">Product Name</th>
			 <th scope="col">Policy Number</th>
			 <th scope="col">Policy Start</th>
			 <th scope="col">Policy End</th>
       <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>0</td>
				<td>OIBL/7391/21</td>
				<td>Davis Ongiro</td>
			   <td>Insurance Company</td>
			 <td>Product Name</td>
				<td>4101_20210616_2</td>
	      		<td>2020-07-05</td>
	      		<td>2021-07-05</td>

  <td>
	<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item><router-link to='/Ins_Policy_Trans'>View Details </router-link></b-dropdown-item>
    <b-dropdown-item>Delete</b-dropdown-item>
	</b-dropdown>
					</td> 
	      	</tr>
		 	<tr>
	      		<td>1</td>
				<td>OIBL/7391/21</td>
				<td>Test Member</td>
			    <td>Insurance Company</td>
			    <td>Product Name</td>
				<td>4101_20210616_2</td>
	      		<td>2020-07-05</td>
	      		<td>2021-07-05</td>

  <td>
	<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item><router-link to='/Ins_Policy_Trans'>View Details </router-link></b-dropdown-item>
    <b-dropdown-item>Delete</b-dropdown-item>
	</b-dropdown>
					</td> 
	      	</tr>
		 	<tr>
	      		<td>2</td>
				<td>OIBL/7391/21</td>
				<td>Davis Ongiro</td>
			   <td>Insurance Company</td>
                <td>Product Name</td>
				<td>4101_20210616_2</td>
	      		<td>2020-07-05</td>
	      		<td>2021-07-05</td>

  <td>
	<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item><router-link to='/Ins_Policy_Trans'>View Details </router-link></b-dropdown-item>
    <b-dropdown-item>Delete</b-dropdown-item>
	</b-dropdown>
					</td> 
	      	</tr>
      </tbody>
	  </table> -->
                      </b-col>
                    </b-row>
                  </div>
                </template>
              </stats-card>
            </b-col>
            <!--end of 1st row--></b-row
          >
        </b-tab>

        <b-tab>
          <template v-slot:title> Waiting Period </template>
          <br />
          <div class="d-flex justify-content-center mb-3"></div>
          <b-row
            ><b-col class="col-md-12">
              <div class="col-xl-12 alert alert-success">
                <h5>Active Members' Policies lapsing in 90 days</h5>
              </div>
            </b-col></b-row
          >
          <b-row>
            <b-col lg="12">
              <p class="mb-0">
                <b>Type something in the input field to search the table</b>
              </p>
            </b-col>
          </b-row>
          <br />
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
          <b-row>
            <b-col xl="12" md="10">
              <stats-card title="" type="gradient-green" sub-title="" class="mb-4">
                <template slot="footer">
                  <div class="mt-3">
                    <div style="overflow: scroll">
                      <b-row>
                        <b-col xl="12">
                          <table class="table table-stripped">
                            <thead class="thead-light">
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Member Code</th>
                                <th scope="col">Member Name</th>
                                <th scope="col">KRA Pin</th>
                                <th scope="col">Telephone</th>
                                <th scope="col">ID Number</th>
                                <th scope="col">Policy Class/Product</th>
                                <th scope="col">Policy Start</th>
                                <th scope="col">Policy End</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody id="myTable">
                              <tr>
                                <td>0</td>
                                <td>OIBL/7391/21</td>
                                <td>Davis Ongiro</td>
                                <td>A00546767S</td>
                                <td>+254790303782</td>
                                <td>25149863</td>
                                <td>Motor Commercial Comprehensive</td>
                                <td>2020-07-05</td>
                                <td>2021-07-05</td>

                                <td>
                                  <b-dropdown
                                    id="dropdown-left"
                                    text="Action"
                                    variant="primary"
                                    class="m-2"
                                  >
                                    <b-dropdown-item
                                      ><router-link to="/Ins_Policydetails"
                                        >View Details
                                      </router-link></b-dropdown-item
                                    >
                                    <b-dropdown-item>Reject</b-dropdown-item>
                                  </b-dropdown>
                                </td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>OIBL/7391/21</td>
                                <td>Test Member</td>
                                <td>A00546767S</td>
                                <td>+254790303782</td>
                                <td>25149863</td>
                                <td>Easy Cover</td>
                                <td>2020-07-05</td>
                                <td>2021-07-05</td>

                                <td>
                                  <b-dropdown
                                    id="dropdown-left"
                                    text="Action"
                                    variant="primary"
                                    class="m-2"
                                  >
                                    <b-dropdown-item
                                      ><router-link to="/Ins_Policydetails"
                                        >View Details
                                      </router-link></b-dropdown-item
                                    >
                                    <b-dropdown-item>Reject</b-dropdown-item>
                                    <b-dropdown-item>Delete</b-dropdown-item>
                                  </b-dropdown>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>OIBL/7391/21</td>
                                <td>Davis Ongiro</td>
                                <td>A00546767S</td>
                                <td>+254790303782</td>
                                <td>25149863</td>
                                <td>Domestic Package</td>
                                <td>2020-07-05</td>
                                <td>2021-07-05</td>

                                <td>
                                  <b-dropdown
                                    id="dropdown-left"
                                    text="Action"
                                    variant="primary"
                                    class="m-2"
                                  >
                                    <b-dropdown-item
                                      ><router-link to="/Ins_Policydetails"
                                        >View Details
                                      </router-link></b-dropdown-item
                                    >
                                    <b-dropdown-item>Reject</b-dropdown-item>
                                    <b-dropdown-item>Delete</b-dropdown-item>
                                  </b-dropdown>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </template>
              </stats-card>
            </b-col>
            <!--end of 1st row--></b-row
          ></b-tab
        >
        <b-tab>
          <template v-slot:title> Lapsed/Pending Renewal </template>
          <br />
          <div class="d-flex justify-content-center mb-3"></div>
          <b-row>
            <b-col lg="12">
              <p class="mb-0">
                <b>Type something in the input field to search the table</b>
              </p>
            </b-col>
          </b-row>
          <br />
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
          <b-row>
            <b-col xl="12" md="10">
              <stats-card title="" type="gradient-green" sub-title="" class="mb-4">
                <template slot="footer">
                  <div class="mt-3">
                    <div style="overflow: scroll">
                      <b-row>
                        <b-col xl="12">
                          <table class="table table-stripped">
                            <thead class="thead-light">
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Member Code</th>
                                <th scope="col">Member Name</th>
                                <th scope="col">Insurance Company</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Policy Number</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody id="myTable">
                              <tr>
                                <td>0</td>
                                <td>OIBL/7391/21</td>
                                <td>Davis Ongiro</td>
                                <td>Insurance Company</td>
                                <td>Product Name</td>
                                <td>4101_20210616_2</td>
                                <td>Lapsed</td>

                                <td>
                                  <b-dropdown
                                    id="dropdown-left"
                                    text="Action"
                                    variant="primary"
                                    class="m-2"
                                  >
                                    <b-dropdown-item
                                      ><router-link to="/"
                                        >Renew
                                      </router-link></b-dropdown-item
                                    >
                                    <b-dropdown-item>Suspend</b-dropdown-item>
                                  </b-dropdown>
                                </td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>OIBL/7391/21</td>
                                <td>Test Member</td>
                                <td>Insurance Company</td>
                                <td>Product Name</td>
                                <td>4101_20210616_2</td>
                                <td>Lapsed</td>

                                <td>
                                  <b-dropdown
                                    id="dropdown-left"
                                    text="Action"
                                    variant="primary"
                                    class="m-2"
                                  >
                                    <b-dropdown-item
                                      ><router-link to="/"
                                        >Renew
                                      </router-link></b-dropdown-item
                                    >
                                    <b-dropdown-item>Suspend</b-dropdown-item>
                                  </b-dropdown>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>OIBL/7391/21</td>
                                <td>Davis Ongiro</td>
                                <td>Insurance Company</td>
                                <td>Product Name</td>
                                <td>4101_20210616_2</td>
                                <td>Lapsed</td>

                                <td>
                                  <b-dropdown
                                    id="dropdown-left"
                                    text="Action"
                                    variant="primary"
                                    class="m-2"
                                  >
                                    <b-dropdown-item
                                      ><router-link to="/"
                                        >Renew
                                      </router-link></b-dropdown-item
                                    >
                                    <b-dropdown-item>Suspend</b-dropdown-item>
                                  </b-dropdown>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </template>
              </stats-card>
            </b-col>
            <!--end of 1st row--></b-row
          >
        </b-tab>
        <b-tab>
          <template v-slot:title> Rejected Policies </template>
          <br />
          <div class="d-flex justify-content-center mb-3"></div>
          <b-row>
            <b-col lg="12">
              <p class="mb-0">
                <b>Type something in the input field to search the table</b>
              </p>
            </b-col>
          </b-row>
          <br />
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
          <b-row>
            <b-col xl="12" md="10">
              <stats-card title="" type="gradient-green" sub-title="" class="mb-4">
                <template slot="footer">
                  <div class="mt-3">
                    <div style="overflow: scroll">
                      <b-row>
                        <b-col xl="12">
                          <table class="table table-stripped">
                            <thead class="thead-light">
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Member Code</th>
                                <th scope="col">Member Name</th>
                                <th scope="col">KRA Pin</th>
                                <th scope="col">Telephone</th>
                                <th scope="col">ID Number</th>
                                <th scope="col">Policy Class/Product</th>
                                <th scope="col">Policy Start</th>
                                <th scope="col">Policy End</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody id="myTable">
                              <tr>
                                <td>0</td>
                                <td>OIBL/7391/21</td>
                                <td>Davis Ongiro</td>
                                <td>A00546767S</td>
                                <td>+254790303782</td>
                                <td>25149863</td>
                                <td>Motor Commercial Comprehensive</td>
                                <td>2020-07-05</td>
                                <td>2021-07-05</td>

                                <td>
                                  <b-dropdown
                                    id="dropdown-left"
                                    text="Action"
                                    variant="primary"
                                    class="m-2"
                                  >
                                    <b-dropdown-item>Review</b-dropdown-item>
                                    <b-dropdown-item>Delete</b-dropdown-item>
                                  </b-dropdown>
                                </td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>OIBL/7391/21</td>
                                <td>Test Member</td>
                                <td>A00546767S</td>
                                <td>+254790303782</td>
                                <td>25149863</td>
                                <td>Easy Cover</td>
                                <td>2020-07-05</td>
                                <td>2021-07-05</td>

                                <td>
                                  <b-dropdown
                                    id="dropdown-left"
                                    text="Action"
                                    variant="primary"
                                    class="m-2"
                                  >
                                    <b-dropdown-item>Delete</b-dropdown-item>
                                  </b-dropdown>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>OIBL/7391/21</td>
                                <td>Davis Ongiro</td>
                                <td>A00546767S</td>
                                <td>+254790303782</td>
                                <td>25149863</td>
                                <td>Domestic Package</td>
                                <td>2020-07-05</td>
                                <td>2021-07-05</td>

                                <td>
                                  <b-dropdown
                                    id="dropdown-left"
                                    text="Action"
                                    variant="primary"
                                    class="m-2"
                                  >
                                    <b-dropdown-item>Delete</b-dropdown-item>
                                  </b-dropdown>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </template>
              </stats-card>
            </b-col>
            <!--end of 1st row--></b-row
          ></b-tab
        >
      </b-tabs>
    </card>
  </base-header>
</template>
<script>
import { getAllInsuranceMembers } from "../../../../api/users.api";

export default {
  components: {},
  data() {
    return {
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
        this.selected.push(this.items[i].ClientID);
      }
    },
  },

  async mounted() {
    if (localStorage.getItem("viewInsuranceMembers") != null) {
      this.items = JSON.parse(localStorage.getItem("viewInsuranceMembers"));
    }
    try {
      let response = "";
      response = await getAllInsuranceMembers();
      console.log(response.data);
      this.items = response.data.data;
      localStorage.setItem("viewInsuranceMembers", JSON.stringify(response.data.data));
    } catch (e) {}
  },
};
</script>
